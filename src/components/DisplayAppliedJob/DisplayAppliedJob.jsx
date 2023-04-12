import React, {useEffect, useState} from 'react';
import "./DisplayAppliedJob.css";
import {Link, useLoaderData, useParams} from "react-router-dom";
import data from "../../../public/jobCircular.json";
import locationIcon from "../../assets/assets/Icons/Frame.png";
import salaryIcon from "../../assets/assets/Icons/Frame-4.png";

const DisplayAppliedJob = ({ jobId }) => {

    // const [jobs, setJob] = useState();
    // useEffect(() => {
    //     fetch("/jobCircular.json")
    //         .then(res => res.json())
    //         .then(data => setJob(data));
    // },[]);

    const job = data.find(item => item.id === jobId);
    const {id, img, job_title, company_name, remote_or_onsite, location, salary} = job;

    return (
        <div className="applied-job">
            <div className="logo-container">
                <img className="logo" src={img} alt=""/>
            </div>
            <div className="company-info">
                <p>{company_name}</p>
                <p>{job_title}</p>
                <button className="remote_or_onsite" disabled={true}>{remote_or_onsite}</button>
                <div className="location-salary">
                    <div className="job-data">
                        <img src={locationIcon} alt="location icon"/>
                        <p className="location">{location}</p>
                    </div>
                    <div className="job-data">
                        <img src={salaryIcon} alt="salary icon"/>
                        <p className="salary">Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <Link className="btn-view-details" to={`/circular/${id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default DisplayAppliedJob;
