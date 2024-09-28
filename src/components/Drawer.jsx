import clsx from "clsx";
import { useRef } from "react";

const Drawer = (props) => {
    const { className, isOpen, open, close, children } = props;
    const drawerRef = useRef();

    const drawerWrapperClicked = (e) => {
        if (drawerRef && drawerRef.current === e.target) {
            close();
        }
    };

    return (
        <div
            ref={drawerRef}
            className={clsx(
                isOpen ? "visible opacity-100" : "invisible opacity-0",
                "fixed h-screen w-screen duration-300 top-0 left-0 bg-black/25 transition-all overflow-hidden z-10",
                className
            )}
            onClick={(e) => {
                drawerWrapperClicked(e);
            }}>
            <div
                className={clsx(
                    "h-full transition-all duration-300 w-80 bg-white right-0 absolute",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}>
                <DrawerHead close={close} />
                <DrawerMain>{children}</DrawerMain>
                <DrawerFoot />
            </div>
        </div>
    );
};

const DrawerHead = (props) => {
    const { close } = props;

    return (
        <div className="h-navHeight flex items-end px-8 justify-center flex-col w-full flex-end">
            <button
                className="w-12 h-12 rounded-md flex items-center justify-center hover:bg-primary-50 active:scale-95"
                onClick={close}>
                <img src="/cross.svg" className="h-6 w-6" alt="" />
            </button>
        </div>
    );
};

const DrawerMain = (props) => {
    const { children } = props;

    return <div className="grow">{children}</div>;
};

const DrawerFoot = () => {
    return <></>;
};

export default Drawer;
