import React from 'react';
import "./FeaturedCircular.css";

const FeaturedCircular = ({ circular }) => {
    const {id, job_title, company_name, remote_or_onsite, location, salary} = circular;

    return (
        <div className="circular">
            <h3>{job_title}</h3>
            <h3>{company_name}</h3>
            <button>{remote_or_onsite}</button>
            <div className="location-salary">
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default FeaturedCircular;
