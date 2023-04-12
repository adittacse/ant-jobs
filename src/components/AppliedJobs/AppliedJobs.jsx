import DisplayAppliedJob from "../DisplayAppliedJob/DisplayAppliedJob.jsx";
import "./AppliedJobs.css";

const AppliedJobs = () => {
    const getAppliedJobs = () => {
        const storedJobs = localStorage.getItem('applied-jobs');
        if (storedJobs) {
            const jobs = JSON.parse(storedJobs);
            const jobIds = Object.values(jobs);
            return jobIds;
        }
        return {};
    };

    const appliedJobs = getAppliedJobs();

    return (
        <div>
            <h1 className="page-title">Applied Jobs</h1>
            <div className="page-area">
                {
                    appliedJobs.map(value => <DisplayAppliedJob key={value} jobId={value}></DisplayAppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
