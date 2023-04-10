import React from 'react';
import "./JobHome.css";
import JobCategory from "../JobCategory/JobCategory.jsx";
import Banner from "../Banner/Banner.jsx";

const JobHome = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default JobHome;
