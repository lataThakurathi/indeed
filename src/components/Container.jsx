import clsx from "clsx";

const Container = (props) => {
    const { children, className } = props;

    return <div className={clsx("px-8 mx-auto", className)}>{children}</div>;
};

export default Container;
