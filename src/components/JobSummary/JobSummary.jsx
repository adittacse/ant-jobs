import React, {useEffect, useState} from 'react';
import "./JobSummary.css";
import salaryIcon from "../../assets/assets/Icons/Frame.png";
import jobIcon from "../../assets/assets/Icons/Frame-1.png";
import phoneIcon from "../../assets/assets/Icons/Frame-2.png";
import emailIcon from "../../assets/assets/Icons/Frame-3.png";
import locationIcon from "../../assets/assets/Icons/Frame-4.png";
import {getAppliedJobs} from "../../utilities/fakedb.js";

const addToDB = (id) => {
    let getJobs = getAppliedJobs();
    const quantity = getJobs[id];
    // console.log(quantity);
    if (!quantity) {
        getJobs[id] = 1;
    } else {
        // toaster
    }
    console.log(getJobs);
    localStorage.setItem("applied-jobs", JSON.stringify(getJobs));
}

const JobSummary = ({ job }) => {
    const {id, salary, job_title, phone, email, location} = job;
    return (
        <div>
            <div className="job-summary">
                <h2>Job details</h2>
                <hr/>
                <div className="job-data">
                    <img src={salaryIcon} alt="salary icon"/>
                    <p><span className="highlighted-text">Salary:</span> {salary} (Per Month)</p>
                </div>
                <div className="job-data">
                    <img src={jobIcon} alt="job icon"/>
                    <p><span className="highlighted-text">Job title:</span> {job_title}</p>
                </div>
                <h2>Contact Information</h2>
                <hr/>
                <div className="job-data">
                    <img src={phoneIcon} alt="phone icon"/>
                    <p><span className="highlighted-text">Phone:</span> {phone}</p>
                </div>
                <div className="job-data">
                    <img src={emailIcon} alt="email icon"/>
                    <p><span className="highlighted-text">Email:</span> {email}</p>
                </div>
                <div className="job-data">
                    <img src={locationIcon} alt="location icon"/>
                    <p><span className="highlighted-text">Address:</span> {location}</p>
                </div>
            </div>
            <button onClick={() => addToDB(id)} className="btn-apply-now">Apply Now</button>
        </div>
    );
};

export default JobSummary;
