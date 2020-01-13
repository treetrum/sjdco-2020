import moment from "moment";
import { get } from "./index";
import Config from "../constants/Config";

const basicAuth = (user, pass) => {
    return `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`;
};

const gravityRequest = (url, data = {}) => {
    return get(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: basicAuth(
                Config.gravityAuth.user,
                Config.gravityAuth.pass
            ),
        },
        ...data,
    });
};

export const getFormData = formId => {
    return gravityRequest(`${Config.formDataAPI}/${formId}`);
};

export const addFormEntry = (formId, formData) => {
    return gravityRequest(`${Config.formEntriesAPI}`, {
        method: "POST",
        body: JSON.stringify({
            form_id: formId,
            date_created: moment().format("YYYY-MM-DD HH:mm:ss"),
            source_url: window.location.href,
            ...formData,
        }),
    });
};

export const sendNotification = entryId => {
    return gravityRequest(`${Config.formEntriesAPI}/${entryId}/notifications`, {
        method: "POST",
    });
};

export default {
    getFormData,
    addFormEntry,
};
