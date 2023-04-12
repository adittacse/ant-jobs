import React from 'react';
import "./FeaturedCircular.css";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/assets/Icons/Frame.png";
import salaryIcon from "../../assets/assets/Icons/Frame-4.png";

const FeaturedCircular = ({ circular }) => {
    const {id, img, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary} = circular;

    return (
        <div className="circular">
            <img className="company-logo" src={img} alt="company logo"/>
            <h3 className="job-title">{job_title}</h3>
            <h3 className="company-title">{company_name}</h3>
            <button className="remote_or_onsite" disabled={true}>{remote_or_onsite}</button>
            <button className="fulltime_or_parttime" disabled={true}>{fulltime_or_parttime}</button>
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
            <Link to={`/circular/${id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedCircular;
