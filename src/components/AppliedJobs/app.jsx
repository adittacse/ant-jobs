import DisplayAppliedJob from "../DisplayAppliedJob/DisplayAppliedJob.jsx";
import "./AppliedJobs.css";
import React, {useEffect, useState} from "react";
import jobsData from "../../../public/jobCircular.json";

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

    const filterJobs = (filter) => {
        const filteredJobs = jobsData.filter((job) => job.type === filter);
        setDisplayedJobs(filteredJobs);
    };

    return (
        <div>
            <h1 className="page-title">Applied Jobs</h1>
            <div className="page-area">
                <div className="job-status-filter">
                    <button onClick={filterJobs("Remote")} className="btn-remote">Remote</button>
                    <button className="btn-full-time">Full Time</button>
                </div>
                <div className="jobs">
                    {
                        appliedJobs.map(value => <DisplayAppliedJob key={value} jobId={value}></DisplayAppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
