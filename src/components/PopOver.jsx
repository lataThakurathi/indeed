import clsx from "clsx";
import { useEffect, useRef } from "react";

const PopOver = (props) => {
    const { isOpen, close, children, className, openButtonRef } = props;
    const popOverRef = useRef();

    // Function to handle clicks outside the popover
    const handleClickedOutside = (e) => {
        if (
            popOverRef.current &&
            openButtonRef.current &&
            !(
                e.target === popOverRef.current ||
                e.target === openButtonRef.current
            )
        ) {
            close();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickedOutside);

        return () => {
            document.removeEventListener("click", handleClickedOutside);
        };
    }, []);

    return (
        <div
            ref={popOverRef}
            className={clsx(
                "absolute",
                isOpen ? "block" : "hidden",
                className
            )}>
            {children}
        </div>
    );
};

export default PopOver;
