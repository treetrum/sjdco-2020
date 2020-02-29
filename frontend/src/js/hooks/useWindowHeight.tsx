import { useState, useEffect } from "react";

/*
 * Returns the up to date window.innerHeight. If on a touch device - window.innerHeight
 * is only calculated one, on desktop this is calculated on window.resize
 */
export default () => {
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleWindowResize = () => {
            setHeight(window.innerHeight);
        };
        if (!window.Modernizr.touch) {
            window.addEventListener("resize", handleWindowResize);
        }
        return () => {
            if (!window.Modernizr.touch) {
                window.removeEventListener("resize", handleWindowResize);
            }
        };
    }, []);
    return height;
};
