import React from 'react';
import "./JobHome.css";
import JobCategories from "../JobCategories/JobCategories.jsx";
import Banner from "../Banner/Banner.jsx";

const JobHome = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
        </div>
    );
};

export default JobHome;
