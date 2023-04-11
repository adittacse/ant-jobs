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
                    <p><b>Job Description:</b> {job.job_description}</p>
                    <p><b>Job Responsibility:</b> {job.job_responsibility}</p>
                    <p><b>Educational Requirements:</b> {job.educational_requirements}</p>
                    <p><b>Experiences:</b> {job.experiences}</p>
                </div>
                <div>
                    <JobSummary key={job.id} job={job}></JobSummary>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
