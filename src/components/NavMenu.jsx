import clsx from "clsx";

const NavMenu = (props) => {
    const {
        direction = "horizontal",
        navItems,
        className,
        withDivider = false,
        withChevron = true,
    } = props;

    const directionsClassMap = {
        horizontal: "gap-4",
        vertical: "flex-col w-full",
    };

    return (
        <ul
            className={clsx(
                "flex items-center",
                className,
                directionsClassMap[direction]
            )}>
            {navItems.map((navItem, index) => (
                <NavItem
                    key={navItem.path}
                    navItem={navItem}
                    direction={direction}
                    withChevron={withChevron}
                    withDivider={
                        index === navItems.length - 1 ? false : withDivider
                    }
                />
            ))}
        </ul>
    );
};
const NavItem = (props) => {
    const { navItem, withDivider = false, withChevron, direction } = props;

    const directionsClassMap = {
        horizontal: "border-b-2",
        vertical: "w-full px-8 font-bold text-base border-b border-b-gray-300",
    };

    return (
        <>
            <li className={clsx(direction === "horizontal" ? "" : "w-full")}>
                <a
                    href={navItem.path}
                    className={clsx(
                        "flex text-gray-700 hover:border-b-primary items-center text-sm justify-between h-16",
                        navItem?.active
                            ? "border-b-primary"
                            : " border-b-transparent",
                        navItem?.className,
                        directionsClassMap[direction]
                    )}>
                    {navItem.label}
                    {withChevron ? (
                        <img
                            src="/chevron-right.svg"
                            alt=""
                            className="h-5 w-5"
                        />
                    ) : null}
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
