import clsx from "clsx";

const NavMenu = (props) => {
    const {
        direction = "horizontal",
        navItems,
        className,
        withDivider = false,
    } = props;

    const directionsClassMap = {
        horizontal: "",
        vertical: "",
    };

    return (
        <ul
            className={clsx(
                "flex gap-4 items-center",
                className,
                directionsClassMap[direction]
            )}>
            {navItems.map((navItem, index) => (
                <NavItem
                    key={navItem.path}
                    navItem={navItem}
                    withDivider={
                        index === navItems.length - 1 ? false : withDivider
                    }
                />
            ))}
        </ul>
    );
};
const NavItem = (props) => {
    const { navItem, withDivider = false } = props;

    return (
        <>
            <li>
                <a
                    href={navItem.path}
                    className={clsx(
                        "flex hover:border-b-primary items-center text-sm justify-center h-16 border-b-2",
                        navItem?.active
                            ? "border-b-primary"
                            : "border-b-transparent",
                        navItem?.className
                    )}>
                    {navItem.label}
                </a>
            </li>
            {withDivider ? <NavDivider /> : null}
        </>
    );
};

const NavDivider = () => {
    return <div className="h-8 w-px bg-gray-300"></div>;
};

export default NavMenu;
