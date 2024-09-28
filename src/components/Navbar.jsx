import useToggle from "../hooks/useToggle";
import Container from "./Container";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";

const mainLinks = [
    { label: "Home", path: "/" },
    { label: "Company Reviews", path: "/company-reviews" },
    { label: "Find Salaries", path: "/find-salaries", active: true },
];
const secondaryLinks = [
    {
        label: "Sign In",
        path: "/sign-in",
        className: "font-bold text-primary-300",
    },
    { label: "Employers/Post Job", path: "/post-job" },
];
const tertiaryLinks = [
    {
        label: "Create Your Resume",
        path: "/create-your-resume",
    },
    { label: "Change Country", path: "/change-country" },
    { label: "Help Center", path: "Help Center" },
];

const Navbar = () => {
    const {
        isOpen: isDrawerOpen,
        open: openDrawer,
        close: closeDrawer,
    } = useToggle(false);

    return (
        <nav className="h-navHeight bg-white border-b border-b-white">
            <Container className="flex h-full gap-6 items-end">
                <img
                    src="/indeed.svg"
                    alt="indeed"
                    className="w-28 self-center"
                />
                <div className="hidden lg:flex justify-between w-full">
                    <NavMenu
                        direction="horizontal"
                        withChevron={false}
                        navItems={mainLinks}
                    />
                    <NavMenu
                        direction="horizontal"
                        navItems={secondaryLinks}
                        withDivider
                        withChevron={false}
                    />
                </div>
                <a
                    href="/sign-in"
                    className="lg:hidden ml-auto h-10 rounded-md w bg-primary-300 hover:bg-primary-400 transition self-center px-3 text-white text-nowrap font-bold flex items-center gap-2 shrink-0">
                    <img src="/user.svg" alt="" className="h-7 w-7" />
                    Sign In
                </a>
                <button
                    className="lg:hidden min-w-12 min-h-12 rounded-md flex items-center justify-center hover:bg-primary-50 active:scale-95 self-center"
                    onClick={openDrawer}>
                    <img src="/hamburger.svg" className="h-6 w-6" alt="" />
                </button>
                <Drawer
                    isOpen={isDrawerOpen}
                    open={openDrawer}
                    close={closeDrawer}
                    className="md:hidden md:block">
                    <NavMenu navItems={mainLinks} direction="vertical" />
                    <NavMenu
                        navItems={tertiaryLinks}
                        direction="vertical"
                        className="border-t-[6px] border-t-gray-200"
                    />
                </Drawer>
            </Container>
        </nav>
    );
};

export default Navbar;
