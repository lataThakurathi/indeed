import clsx from "clsx";

const Drawer = (props) => {
    const { isOpen, open, close, children } = props;
    return (
        <div
            className={clsx(
                isOpen ? "visible" : "hidden",
                "absolute h-screen w-screen top-0 left-0 bg-black/25"
            )}>
            <div className={clsx()}>
                <DrawerHead />
                <DrawerMain>{children}</DrawerMain>
                <DrawerFoot />
            </div>
        </div>
    );
};

const DrawerHead = () => {
    return (
        <div className="h-14 flex items-end px-4 justify-center flex-col w-full flex-end">
            <img src="/cross.svg" className="h-6 w-6" alt="" />
        </div>
    );
};

const DrawerMain = () => {
    return <div className="grow">DrawerMain</div>;
};

const DrawerFoot = () => {
    return <></>;
};

export default Drawer;
