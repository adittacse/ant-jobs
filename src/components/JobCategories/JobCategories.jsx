import React, {useEffect, useState} from 'react';
import "./JobCategories.css";
import JobCategory from "../JobCategory/JobCategory.jsx";

const JobCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("jobsCategory.json")
            .then(res => res.json())
            .then(data => setCategories(data.categories));
    },[]);

    return (
        <div className="category-list-container">
            <h2 className="category-list-title">Job Category List</h2>
            <p className="category-info">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="categories">
                {
                    categories.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;
