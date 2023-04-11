import React from 'react';
import "./JobSummary.css";

const JobSummary = ({ job }) => {
    const {salary, job_title, phone, email, location} = job;
    return (
        <div className="job-summary">
            <h2>Job details</h2>
            <hr/>
            <p>Salary: {salary}</p>
            <p>Job title: {job_title}</p>
            <h2>Contact Information</h2>
            <hr/>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {location}</p>
        </div>
    );
};

export default JobSummary;
