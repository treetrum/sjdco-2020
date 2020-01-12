import { get } from "./index";
import Config from "../constants/Config";

const basicAuth = (user, pass) => {
    return `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`;
};

export const getFormData = formId => {
    return get(`${Config.formDataAPI}/${formId}`, {
        headers: {
            Authorization: basicAuth(
                Config.gravityAuth.user,
                Config.gravityAuth.pass
            ),
        },
    });
};
