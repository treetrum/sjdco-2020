import * as React from "react";
// import { ReCaptcha } from "react-recaptcha-google";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { getFormData, addFormEntry, sendNotification } from "../../api/forms";

const useFormData = (formId: string): any => {
    const [formData, setFormData] = React.useState(null);
    React.useEffect(() => {
        getFormData(formId).then(setFormData);
    }, [formId]);
    return formData;
};

interface PropsType {
    formId: string;
}

const GravityForm: React.FC<PropsType> = ({ formId }) => {
    const [submitted, setSubmitted] = React.useState(false);
    const formData = useFormData(formId);
    if (!formData) return null;

    let formValues;
    let formActions;

    const handleValidate = values => {
        const errors = {};
        const valueKeys = Object.keys(values);
        valueKeys.forEach(fieldId => {
            const value = values[fieldId];
            const field = formData.fields.find(
                f => String(f.id) === String(fieldId)
            );
            if (field.isRequired && !value) {
                errors[fieldId] = "Required";
            } else if (field.type === "email" && !emailRegex.test(value)) {
                errors[fieldId] = "Invalid email address";
            }
        });
        return errors;
    };

    const handleSubmit = (v, a) => {
        formValues = v;
        formActions = a;
        window.grecaptcha.execute();
    };

    const handleRecaptchaVerify = async () => {
        try {
            const data = await addFormEntry(formId, formValues);
            sendNotification(data.id);
            setSubmitted(true);
            formActions.setSubmitting(false);
        } catch (error) {
            console.error(error);
            formActions.setSubmitting(false);
        }
    };

    if (submitted) {
        const confirmationMessage =
            formData.confirmations[Object.keys(formData.confirmations)[0]]
                .message;
        return <p>{confirmationMessage}</p>;
    }

    return (
        <Formik
            initialValues={formData.fields.reduce(
                (total, field) => ({ ...total, [field.id]: "" }),
                {}
            )}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form style={{ opacity: isSubmitting ? 0.5 : null }}>
                    {formData.fields.map(field => (
                        <div className="sfield" key={field.id}>
                            <label className="sfield__label" htmlFor={field.id}>
                                {field.label}
                            </label>
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
                    <ReCAPTCHA
                        sitekey="6LcpmM4UAAAAAHLuBZmjd8WHQSzvkNib9muo3iFS"
                        size="invisible"
                        // render="explicit"
                        onChange={handleRecaptchaVerify}
                    />
                    <button
                        className="button-green"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    "i"
);

export default GravityForm;
