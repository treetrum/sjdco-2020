import * as React from "react";
import { useLocation } from "react-router-dom";

let scrollDistance = 0;

const LockBodyScroll: React.FC = () => {
    const location = useLocation();
    React.useEffect(() => {
        const { body } = document;
        if (location.pathname.includes("/project/")) {
            scrollDistance = window.scrollY;
            requestAnimationFrame(() => {
                body.classList.add("noscroll");
                body.style.top = `-${scrollDistance}px`;
            });
        } else {
            requestAnimationFrame(() => {
                body.classList.remove("noscroll");
                body.style.top = null;
                if (scrollDistance) {
                    window.scroll(null, scrollDistance);
                    scrollDistance = 0;
                }
            });
        }
    }, [location.pathname]);
    return null;
};

export default LockBodyScroll;
