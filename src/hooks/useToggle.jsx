import { useState } from "react";

const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const toggle = () => {
        setIsOpen((oldOpen) => !oldOpen);
    };
    console.log(isOpen);

    return { isOpen, open, close, toggle };
};

export default useToggle;
