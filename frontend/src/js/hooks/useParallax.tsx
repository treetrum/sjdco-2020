import * as React from "react";

// Doesn't play nicely with TS - just importing with require for now
// TODO - Work out a better way of doing this
const Parallax = require("parallax-js");

export const useParallax = <T extends HTMLElement>(
    ref: React.MutableRefObject<T>
) => {
    React.useEffect(() => {
        if (ref.current) {
            const instance = new Parallax(ref.current);
            return () => {
                if (instance.destroy) {
                    instance.destroy();
                }
            };
        }
        return null;
    }, [ref]);
};

export default useParallax;
