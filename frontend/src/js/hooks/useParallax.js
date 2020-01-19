import { useEffect } from "react";
import Parallax from "parallax-js";

const useParallax = ref => {
    useEffect(() => {
        let instance;
        if (ref.current) {
            instance = new Parallax(ref.current);
        }
        return () => {
            if (instance && instance.destroy) {
                instance.destroy();
            }
        };
    }, [ref]);
};

export default useParallax;
