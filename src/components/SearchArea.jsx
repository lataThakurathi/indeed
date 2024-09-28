import Container from "./Container";

const SearchArea = () => {
    return (
        <div className="absolute w-full -translate-y-[3.75rem]">
            <Container className="max-w-5xl  relative">
                <img
                    src="/public/suitcase.svg"
                    alt=""
                    className="absolute right-16 bottom-full translate-y-[7px]"
                />
                <div className="bg-white shadow-lg shadow-black/30 rounded-lg rounded-tr-[2rem]  p-6 w-full">
                    <form
                        action=""
                        className="flex mr-[2rem] gap-2 w-full items-end">
                        <InputControl>
                            <Label htmlFor="what-job">What</Label>
                            <Input
                                placeholder="Job Title"
                                id="what-job"
                                type="text"
                            />
                        </InputControl>
                        <InputControl>
                            <Label htmlFor="location">What</Label>
                            <Input
                                placeholder="Location"
                                id="location"
                                type="text"
                            />
                        </InputControl>
                        <button className="font-bold h-11 rounded-lg px-4 bg-primary-300 text-white">
                            Search
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

const InputControl = (props) => {
    const { children } = props;

    return <div className="input-control flex flex-col grow">{children}</div>;
};

const Label = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <label className="font-bold text-gray-800 mb-1" {...otherProps}>
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

export default SearchArea;
