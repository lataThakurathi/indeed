import { useState } from "react";
import jobs from "../data/jobs";
import ChooseIndustryComboBox from "./ChooseIndustryComboBox";
import Container from "./Container";
import JobCard from "./JobCard";

const BrowseJobsSection = () => {
    const [selectedIndustryId, setSelectedIndustryId] = useState(1);

    return (
        <section className="pt-16 md:pt-24 mb-12">
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

export default BrowseJobsSection;
