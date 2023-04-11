import React, {useEffect, useState} from 'react';
import "./JobDetails.css";
import {useLoaderData, useParams} from "react-router-dom";
import JobSummary from "../JobSummary/JobSummary.jsx";

const JobDetails = () => {
    const circular = useLoaderData();
    const {id} = useParams();
    const [job, setJob] = useState({});

    useEffect(() => {
        const jobData = circular.find(circular => circular.id == id);
        setJob(jobData);
    },[]);

    return (
        <div>
            <h1 className="page-title">Job Details</h1>
            <div className="job-details">
                <div className="job-info">
                    <p><span className="job-info-description">Job Description:</span> {job.job_description}</p>
                    <p><span className="job-info-description">Job Responsibility:</span> {job.job_responsibility}</p>
                    <div>
                        <span className="job-info-description">Educational Requirements:</span>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <span className="job-info-description">Experiences:</span>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div>
                    <JobSummary key={job.id} job={job}></JobSummary>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
