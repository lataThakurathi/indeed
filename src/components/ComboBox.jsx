import clsx from "clsx";

const ComboBox = (props) => {
    const { items, onItemClick, activeItemId } = props;

    return (
        <>
            {items.map((item) => (
                <div
                    className={clsx(
                        "h-11 flex items-center cursor-pointer px-3",
                        activeItemId === item.id
                            ? "bg-gray-200"
                            : "hover:bg-primary-50"
                    )}
                    key={item.id}
                    onClick={() => {
                        onItemClick(item);
                    }}>
                    {item.name}
                </div>
            ))}
        </>
    );
};

export default ComboBox;
