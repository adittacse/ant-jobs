import DisplayAppliedJob from "../DisplayAppliedJob/DisplayAppliedJob.jsx";
import "./AppliedJobs.css";
import React, { useEffect, useState } from "react";
import jobsData from "../../../public/jobCircular.json";

const AppliedJobs = () => {
    const getAppliedJobs = () => {
        const storedJobs = localStorage.getItem("applied-jobs");
        if (storedJobs) {
            const jobs = JSON.parse(storedJobs);
            const jobIds = Object.values(jobs);
            return jobIds;
        }
        return {};
    };

    const appliedJobs = getAppliedJobs();
    // console.log(job)

    const [displayedJobs, setDisplayedJobs] = useState(getAppliedJobs());

    const filterJobs = (filter) => {
        const filteredJobs = appliedJobs.filter((job) => job.remote_or_onsite == filter);
        setDisplayedJobs(filteredJobs);
    };

    return (
        <div>
            <h1 className="page-title">Applied Jobs</h1>
            <div className="page-area">
                <div className="job-status-filter">
                    <button className="btn-remote"
                        onClick={() => filterJobs("Remote")}>Remote</button>
                    <button className="btn-full-time"
                        onClick={() => filterJobs("Onsite")}>Onsite</button>
                </div>
                <div className="jobs">
                    {
                        displayedJobs.map((value) => (
                            <DisplayAppliedJob key={value.id} jobId={value}></DisplayAppliedJob>))
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
