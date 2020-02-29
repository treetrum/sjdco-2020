import * as Moment from "moment";
import { get } from "./index";
import Config from "../constants/Config";

const basicAuth = (user: string, pass: string) => {
    return `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`;
};

const gravityRequest = (url: RequestInfo, data: RequestInit = {}) => {
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

export const getFormData = (formId: string | number) => {
    return gravityRequest(`${Config.formDataAPI}/${formId}`);
};

export const addFormEntry = (formId: string | number, formData: any) => {
    return gravityRequest(`${Config.formEntriesAPI}`, {
        method: "POST",
        body: JSON.stringify({
            form_id: formId,
            date_created: Moment().format("YYYY-MM-DD HH:mm:ss"),
            source_url: window.location.href,
            ...formData,
        }),
    });
};

export const sendNotification = (entryId: string | number) => {
    return gravityRequest(`${Config.formEntriesAPI}/${entryId}/notifications`, {
        method: "POST",
    });
};

export default {
    getFormData,
    addFormEntry,
};
