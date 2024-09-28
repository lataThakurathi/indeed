import { useRef } from "react";
import useToggle from "../hooks/useToggle";
import industries from "../data/industries";
import clsx from "clsx";
import PopOver from "./PopOver";
import ComboBox from "./ComboBox";

const ChooseIndustryComboBox = (props) => {
    const { selectedIndustryId, setSelectedIndustryId } = props;

    const openButtonRef = useRef();
    const {
        isOpen: isPopOverOpen,
        open: openPopOver,
        close: closePopOver,
        toggle: togglePopOver,
    } = useToggle(false);

    return (
        <div className="relative">
            <button
                className="h-11 w-full border border-gray-500 focus:outline-none focus:border-b-4 focus:border-b-primary rounded-lg px-3 transition-all flex items-center justify-between"
                onClick={togglePopOver}
                ref={openButtonRef}>
                {industries.find(
                    (industry) => industry.id === selectedIndustryId
                )?.name || "Select an industry"}
                <img
                    src="/chevron-right.svg"
                    className={clsx(
                        "h-6 w-6 transition-all",
                        isPopOverOpen ? "-rotate-90" : "rotate-90"
                    )}
                    alt=""
                />
            </button>
            <PopOver
                isOpen={isPopOverOpen}
                open={openPopOver}
                close={closePopOver}
                openButtonRef={openButtonRef}
                className="w-full top-14">
                <div className="w-full border rounded-lg h-[300px] border-gray-500 overflow-y-scroll bg-white">
                    <ComboBox
                        items={industries}
                        activeItemId={selectedIndustryId}
                        onItemClick={(item) => {
                            setSelectedIndustryId(item.id);
                        }}
                    />
                </div>
            </PopOver>
        </div>
    );
};

export default ChooseIndustryComboBox;
