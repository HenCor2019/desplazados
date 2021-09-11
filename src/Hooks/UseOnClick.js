import { useEffect } from "react";

const useOnClick = (handler) => {
    useEffect(() => {
        const listener = (event) => {
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [handler]);
};

export default useOnClick;