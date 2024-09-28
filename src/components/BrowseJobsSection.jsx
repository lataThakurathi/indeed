import Container from "./Container";
import PopOver from "./PopOver";
import useToggle from "../hooks/useToggle";
import { useRef, useState } from "react";
import clsx from "clsx";

const industries = [
    { id: 0, name: "All Industries" },
    { id: 1, name: "Advertising & Marketing" },
    { id: 2, name: "Agriculture" },
    { id: 3, name: "Automotive" },
    { id: 4, name: "Banking" },
    { id: 5, name: "Beauty" },
    { id: 6, name: "Chemical" },
    { id: 7, name: "Construction" },
    { id: 8, name: "Consulting" },
    { id: 9, name: "Consumer Goods" },
    { id: 10, name: "Education" },
    { id: 11, name: "Electronics" },
    { id: 12, name: "Energy & Utilities" },
    { id: 13, name: "Entertainment" },
    { id: 14, name: "Fashion" },
    { id: 15, name: "Financial Services" },
    { id: 16, name: "Food & Beverage" },
    { id: 17, name: "Healthcare" },
    { id: 18, name: "Hospitality" },
    { id: 19, name: "Insurance" },
    { id: 20, name: "IT & Technology" },
    { id: 21, name: "Legal Services" },
    { id: 22, name: "Logistics & Transportation" },
    { id: 23, name: "Manufacturing" },
    { id: 24, name: "Media & Publishing" },
    { id: 25, name: "Mining" },
    { id: 26, name: "Nonprofit & NGOs" },
    { id: 27, name: "Pharmaceuticals" },
    { id: 28, name: "Public Relations" },
    { id: 29, name: "Real Estate" },
    { id: 30, name: "Retail" },
    { id: 31, name: "Telecommunications" },
    { id: 32, name: "Travel & Tourism" },
    { id: 33, name: "Waste Management" },
    { id: 34, name: "Wholesale" },
];
const jobs = [
    { id: 1, name: "Marketing Manager", salary: "$78,950", industryId: 1 },
    {
        id: 2,
        name: "Digital Marketing Specialist",
        salary: "$65,230",
        industryId: 1,
    },
    { id: 3, name: "SEO Specialist", salary: "$55,000", industryId: 1 },
    { id: 4, name: "Content Strategist", salary: "$60,000", industryId: 1 },
    { id: 5, name: "Social Media Manager", salary: "$52,500", industryId: 1 },
    { id: 6, name: "Brand Strategist", salary: "$70,000", industryId: 1 },
    {
        id: 7,
        name: "Email Marketing Specialist",
        salary: "$58,000",
        industryId: 1,
    },
    { id: 8, name: "Marketing Analyst", salary: "$68,000", industryId: 1 },
    {
        id: 9,
        name: "Product Marketing Manager",
        salary: "$90,000",
        industryId: 1,
    },
    {
        id: 10,
        name: "Public Relations Specialist",
        salary: "$65,000",
        industryId: 1,
    },

    { id: 11, name: "Farm Manager", salary: "$58,220", industryId: 2 },
    { id: 12, name: "Agricultural Engineer", salary: "$71,730", industryId: 2 },
    { id: 13, name: "Crop Consultant", salary: "$62,000", industryId: 2 },
    { id: 14, name: "Soil Scientist", salary: "$65,000", industryId: 2 },
    {
        id: 15,
        name: "Agricultural Technician",
        salary: "$48,000",
        industryId: 2,
    },
    {
        id: 16,
        name: "Farm Equipment Operator",
        salary: "$42,000",
        industryId: 2,
    },
    { id: 17, name: "Animal Scientist", salary: "$75,000", industryId: 2 },
    {
        id: 18,
        name: "Agronomy Sales Representative",
        salary: "$55,500",
        industryId: 2,
    },
    { id: 19, name: "Horticulturist", salary: "$50,000", industryId: 2 },
    { id: 20, name: "Farm Worker", salary: "$35,000", industryId: 2 },

    { id: 21, name: "Automotive Technician", salary: "$46,630", industryId: 3 },
    {
        id: 22,
        name: "Automotive Sales Manager",
        salary: "$72,500",
        industryId: 3,
    },
    { id: 23, name: "Service Manager", salary: "$65,000", industryId: 3 },
    {
        id: 24,
        name: "Auto Body Repair Technician",
        salary: "$50,000",
        industryId: 3,
    },
    { id: 25, name: "Parts Specialist", salary: "$42,500", industryId: 3 },
    { id: 26, name: "Tire Technician", salary: "$35,000", industryId: 3 },
    {
        id: 27,
        name: "Transmission Specialist",
        salary: "$55,000",
        industryId: 3,
    },
    { id: 28, name: "Automotive Detailer", salary: "$30,000", industryId: 3 },
    { id: 29, name: "Fleet Manager", salary: "$70,000", industryId: 3 },
    { id: 30, name: "Service Advisor", salary: "$45,000", industryId: 3 },

    { id: 31, name: "Bank Teller", salary: "$34,750", industryId: 4 },
    { id: 32, name: "Financial Analyst", salary: "$66,750", industryId: 4 },
    { id: 33, name: "Loan Officer", salary: "$59,000", industryId: 4 },
    { id: 34, name: "Branch Manager", salary: "$80,000", industryId: 4 },
    { id: 35, name: "Investment Advisor", salary: "$90,000", industryId: 4 },
    { id: 36, name: "Mortgage Consultant", salary: "$72,000", industryId: 4 },
    { id: 37, name: "Insurance Underwriter", salary: "$65,000", industryId: 4 },
    { id: 38, name: "Financial Consultant", salary: "$78,000", industryId: 4 },
    { id: 39, name: "Wealth Manager", salary: "$110,000", industryId: 4 },
    { id: 40, name: "Risk Manager", salary: "$95,000", industryId: 4 },

    { id: 41, name: "Cosmetologist", salary: "$42,310", industryId: 5 },
    { id: 42, name: "Beauty Consultant", salary: "$48,900", industryId: 5 },

    { id: 43, name: "Chemical Engineer", salary: "$108,770", industryId: 6 },
    { id: 44, name: "Chemist", salary: "$62,750", industryId: 6 },

    { id: 45, name: "Civil Engineer", salary: "$87,060", industryId: 7 },
    {
        id: 46,
        name: "Construction Project Manager",
        salary: "$99,230",
        industryId: 7,
    },

    { id: 47, name: "Management Consultant", salary: "$88,030", industryId: 8 },
    { id: 48, name: "Strategy Consultant", salary: "$110,420", industryId: 8 },

    { id: 49, name: "Product Manager", salary: "$97,770", industryId: 9 },
    { id: 50, name: "Brand Manager", salary: "$89,550", industryId: 9 },

    { id: 51, name: "Teacher", salary: "$57,950", industryId: 10 },
    { id: 52, name: "School Principal", salary: "$102,750", industryId: 10 },

    { id: 53, name: "Electrical Engineer", salary: "$99,070", industryId: 11 },

    { id: 54, name: "Energy Analyst", salary: "$73,660", industryId: 12 },

    { id: 55, name: "Film Director", salary: "$82,910", industryId: 13 },

    { id: 56, name: "Fashion Designer", salary: "$75,810", industryId: 14 },

    { id: 57, name: "Financial Advisor", salary: "$90,530", industryId: 15 },

    { id: 58, name: "Restaurant Manager", salary: "$54,670", industryId: 16 },

    { id: 59, name: "Nurse Practitioner", salary: "$112,030", industryId: 17 },

    { id: 60, name: "Hotel Manager", salary: "$60,210", industryId: 18 },

    { id: 61, name: "Insurance Agent", salary: "$52,190", industryId: 19 },

    { id: 62, name: "Software Engineer", salary: "$105,590", industryId: 20 },

    { id: 63, name: "Lawyer", salary: "$122,960", industryId: 21 },

    {
        id: 64,
        name: "Logistics Coordinator",
        salary: "$52,820",
        industryId: 22,
    },

    {
        id: 65,
        name: "Manufacturing Engineer",
        salary: "$83,960",
        industryId: 23,
    },

    { id: 66, name: "Journalist", salary: "$48,870", industryId: 24 },

    { id: 67, name: "Mining Engineer", salary: "$93,720", industryId: 25 },
];

const BrowseJobsSection = () => {
    const [selectedIndustryId, setSelectedIndustryId] = useState(1);

    return (
        <section className="pt-16 md:pt-24">
            <Container className="max-w-5xl relative">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-4">
                    Browse top paying jobs by industry
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-4">
                    <div className="w-full">
                        <h3 className="font-bold text-gray-700 mb-1">
                            Choose an industry
                        </h3>
                        <ChooseIndustryComboBox
                            selectedIndustryId={selectedIndustryId}
                            setSelectedIndustryId={setSelectedIndustryId}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobs
                        .filter(
                            (job) =>
                                selectedIndustryId === 0 ||
                                job.industryId === selectedIndustryId
                        )
                        .map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                </div>
            </Container>
        </section>
    );
};

const JobCard = (props) => {
    const { job } = props;

    return (
        <div className="p-4 flex border border-gray-500 rounded-md cursor-pointer hover:border-primary-300 hover:shadow-lg hover:shadow-black/30 items-center justify-between group">
            <div>
                <h4 className="font-bold text-gray-700 mb-1">{job.name}</h4>
                <p className="font-bold text-primary-300 mb-4">
                    Average Salary <span>{job.salary}</span>
                </p>
                <a href="#" className="text-gray-600 underline">
                    Job Openings
                </a>
            </div>
            <button className="h-7 w-7 flex items-center justify-center rounded-full bg-transparent group-hover:bg-primary-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    role="img"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 group-hover:text-white">
                    <path d="M8.818 7.7574c-.3905-.3905-.3905-1.0237 0-1.4142.3906-.3905 1.0237-.3905 1.4143 0l4.942 4.9421.0077.0076a.9966.9966 0 01.2929.7071.9966.9966 0 01-.2929.7071l-.0077.0076-4.942 4.9421c-.3906.3905-1.0237.3905-1.4143 0-.3905-.3905-.3905-1.0237 0-1.4142L13.0606 12 8.818 7.7574z"></path>
                </svg>
            </button>
        </div>
    );
};

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

export default BrowseJobsSection;
