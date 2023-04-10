import React from 'react';
import "./JobHome.css";
import JobCategories from "../JobCategories/JobCategories.jsx";
import Banner from "../Banner/Banner.jsx";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs.jsx";

const JobHome = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default JobHome;
