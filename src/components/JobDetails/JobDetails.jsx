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
        <div className="job-details">
            <div className="job-info">
                <p><b>Job Description:</b> {job.job_description}</p>
                <p><b>Job Responsibility:</b> {job.job_responsibility}</p>
                <p><b>Educational Requirements:</b> {job.educational_requirements}</p>
                <p><b>Experiences:</b> {job.experiences}</p>
            </div>
            <div>
                <JobSummary job={job}></JobSummary>
            </div>
        </div>
    );
};

export default JobDetails;
