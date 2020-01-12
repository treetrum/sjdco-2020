import React, { useState, useEffect } from "react";
import _ from "lodash";
import { ReCaptcha } from "react-recaptcha-google";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { getFormData } from "../../api/forms";

const useFormData = formId => {
    const [formData, setFormData] = useState({});
    useEffect(() => {
        getFormData(formId).then(setFormData);
    }, [formId]);
    return formData;
};

const GravityForm = ({ formId }) => {
    const formData = useFormData(formId);
    if (_.isEmpty(formData)) return null;

    const handleSubmit = event => {
        event.preventDefault();
    };
    return (
        <Formik
            initialValues={formData.fields.reduce(
                (total, field) => ({ ...total, [field.id]: "" }),
                {}
            )}
            validate={values => {
                const errors = {};
                const valueKeys = Object.keys(values);
                valueKeys.forEach(fieldId => {
                    const value = values[fieldId];
                    const field = formData.fields.find(f => f.id == fieldId);
                    console.log(field);
                    if (field.isRequired && !value) {
                        errors[fieldId] = "Required";
                    } else if (
                        field.type == "email" &&
                        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(
                            value
                        )
                    ) {
                        errors[fieldId] = "Invalid email address";
                    }
                });
                console.log({ errors });
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    {formData.fields.map(field => (
                        <div className="sfield" key={field.id}>
                            <label htmlFor={field.id}>{field.label}</label>
                            <Field
                                className="sfield__input"
                                type={field.type}
                                name={field.id}
                                id={field.id}
                                placeholder={field.placeholder}
                                component={
                                    field.type === "textarea"
                                        ? "textarea"
                                        : null
                                }
                            />
                            <ErrorMessage
                                className="sfield__error"
                                name={field.id}
                                component="div"
                            />
                        </div>
                    ))}
                    {/* <ReCaptcha
						sitekey="6LcpmM4UAAAAAHLuBZmjd8WHQSzvkNib9muo3iFS"
						size="invisible"
						render="explicit"
					/> */}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default GravityForm;
