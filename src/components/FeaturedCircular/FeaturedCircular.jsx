import React from 'react';
import "./FeaturedCircular.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCoins } from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom";

const FeaturedCircular = ({ circular }) => {
    const {id, job_title, company_name, remote_or_onsite, location, salary} = circular;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/circular/${id}`);
    }

    return (
        <div className="circular">
            <h3 className="job-title">{job_title}</h3>
            <h3 className="company-title">{company_name}</h3>
            <button className="remote_or_onsite" disabled={true}>{remote_or_onsite}</button>
            <div className="location-salary">
                <p className="location"><FontAwesomeIcon icon={ faLocationDot } /> {location}</p>
                <p className="salary"><FontAwesomeIcon icon={ faCoins } /> Salary: {salary}</p>
            </div>
            {/*<button onClick={handleNavigate}>View Details</button>*/}
            <Link to={`/circular/${id}`}>
                <button >View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedCircular;
