import Home from "./containers/Home";
import Page from "./containers/Page";
import { RouteConfig } from "react-router-config";

const routes: any = [
    {
        exact: true,
        path: "/wp-admin",
        component: () => {
            window.location.href = "https://wp.sjd.co/wp-admin";
            return null;
        },
    },
    {
        exact: true,
        path: "/:path",
        component: Page,
    },
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/project/:projectSlug",
                component: Home,
            },
        ],
    },
];

export default routes;
