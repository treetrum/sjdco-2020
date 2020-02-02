import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LockBodyScroll = () => {
    const location = useLocation();
    useEffect(() => {
        const { body } = document;
        if (location.pathname.includes("/project/")) {
            window.sjdco_scroll_distance = window.scrollY;
            requestAnimationFrame(() => {
                body.classList.add("noscroll");
                body.style.top = `-${window.sjdco_scroll_distance}px`;
            });
        } else {
            requestAnimationFrame(() => {
                body.classList.remove("noscroll");
                body.style.top = null;
                if (window.sjdco_scroll_distance) {
                    window.scroll(null, window.sjdco_scroll_distance);
                    window.sjdco_scroll_distance = 0;
                }
            });
        }
    }, [location.pathname]);
    return null;
};

export default LockBodyScroll;
