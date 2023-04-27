import DisplayAppliedJob from "../DisplayAppliedJob/DisplayAppliedJob.jsx";
import "./AppliedJobs.css";
import React, {useEffect, useState} from "react";

const AppliedJobs = () => {
    const getAppliedJobs = () => {
        const storedJobs = localStorage.getItem("applied-jobs") || {};
        if (storedJobs.length === undefined) {
            return 0;
        }
        else if (storedJobs) {
            const jobs = JSON.parse(storedJobs);
            const jobIds = Object.values(jobs);
            console.log(jobIds)
            return jobIds;
        }
        return {};
    };

    const appliedJobs = getAppliedJobs();

    const [displayedJobs, setDisplayedJobs] = useState(appliedJobs);

    useEffect( () => {
        // console.log(typeof appliedJobs)
    }, []);

    const filterJobs = (filter) => {
        const filteredJobs = appliedJobs.filter((job) => job.remote_or_onsite == filter || []);
        setDisplayedJobs(filteredJobs);
    };

    return (
        <div>
            <h1 className="page-title">Applied Jobs</h1>
            <div className="page-area">
                <div className="job-status-filter">
                    {
                        appliedJobs !== 0 && <button className="btn-remote"
                                                     onClick={() => filterJobs("Remote")}>Remote</button>
                    }
                    {
                        appliedJobs !== 0 && <button className="btn-full-time"
                                                     onClick={() => filterJobs("Onsite")}>Onsite</button>
                    }
                </div>
                <div className="jobs">
                    {
                        appliedJobs !== 0 && displayedJobs.map((job) => (
                            <DisplayAppliedJob key={job.id} job={job}></DisplayAppliedJob>))
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
