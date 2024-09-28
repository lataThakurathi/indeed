const JobCard = (props) => {
    const { job } = props;

    return (
        <div className="p-4 flex border border-gray-300 rounded-md cursor-pointer hover:border-primary-300 hover:shadow-lg hover:shadow-black/30 items-center justify-between group">
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

export default JobCard;
