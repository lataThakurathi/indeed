import clsx from "clsx";
import Container from "./Container";
import useToggle from "../hooks/useToggle";
import Drawer from "./Drawer";
import { createPortal } from "react-dom";

const SearchArea = () => {
    const {
        isOpen: isSearchDrawerOpen,
        open: openSearchDrawer,
        close: closeSearchDrawer,
    } = useToggle();

    return (
        <div className="absolute w-full -translate-y-[3.75rem]">
            <Container className="max-w-5xl  relative">
                <img
                    src="/suitcase.svg"
                    alt=""
                    className="w-[86px] md:w-40 absolute right-16 bottom-full md:translate-y-[8px] translate-y-[5px]"
                />
                <div className="bg-white shadow-lg shadow-black/30 rounded-lg rounded-tr-[2rem]  p-6 w-full">
                    <SearchForm
                        openSearchDrawer={openSearchDrawer}
                        className="mr-[2rem] hidden md:flex items-end"
                    />
                    <div
                        className="h-11 w-full flex border border-gray-500 rounded-lg px-3 cursor-text  items-center justify-between md:hidden"
                        onClick={openSearchDrawer}>
                        <p className="font-bold text-gray-700">
                            Start your search here
                        </p>
                        <img src="/search.svg" alt="" />
                    </div>
                    {createPortal(
                        <Drawer
                            isOpen={isSearchDrawerOpen}
                            open={openSearchDrawer}
                            close={closeSearchDrawer}
                            className="md:hidden">
                            <div className="px-8">
                                <SearchForm
                                    className="flex flex-col"
                                    openSearchDrawer={openSearchDrawer}
                                />
                            </div>
                        </Drawer>,
                        document.body
                    )}
                </div>
            </Container>
        </div>
    );
};

const InputControl = (props) => {
    const { children, className } = props;

    return (
        <div className={clsx("input-control flex-col grow", className)}>
            {children}
        </div>
    );
};

const Label = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <label className="font-bold text-gray-700 mb-1" {...otherProps}>
            {children}
        </label>
    );
};

const Input = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <input
            className="placeholder:text-gray-500 h-11 border border-gray-500 rounded-lg px-3 focus:outline-none focus:border-b-4 focus:border-b-primary transition-all"
            {...otherProps}
        />
    );
};

const SearchForm = (props) => {
    const { openSearchDrawer, className } = props;

    return (
        <form action="" className={clsx("gap-2 w-full", className)}>
            <InputControl className="flex">
                <Label htmlFor="what-job">What</Label>
                <Input placeholder="Job Title" id="what-job" type="text" />
            </InputControl>
            <InputControl className="flex">
                <Label htmlFor="location">Where</Label>
                <Input placeholder="Location" id="location" type="text" />
            </InputControl>
            <button className="font-bold h-11 rounded-lg px-4 bg-primary-300 text-white block">
                Search
            </button>
        </form>
    );
};

export default SearchArea;
