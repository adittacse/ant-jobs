import React from 'react';
import "./JobCategory.css";

const JobCategory = ({category}) => {
    const {name, jobsAvailable} = category;

    return (
        <div className="category">
            <img className="category-icon" src={category.img} alt=""/>
            <h3>{name}</h3>
            <p>{jobsAvailable}+ Jobs Available</p>
        </div>
    );
};

export default JobCategory;
