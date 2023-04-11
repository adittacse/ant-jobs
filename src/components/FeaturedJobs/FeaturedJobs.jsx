import React, {useEffect, useState} from 'react';
import "./FeaturedJobs.css";
import FeaturedCircular from "../FeaturedCircular/FeaturedCircular.jsx";

const FeaturedJobs = () => {
    const [circulars, setCircular] = useState([]);
    const [jobsCount, setJobsCount] = useState(4);

    useEffect(() => {
        fetch("jobCircular.json")
            .then(res => res.json())
            .then(data => setCircular(data));
    },[]);

    const loadAllJobs = () => {
        setJobsCount(circulars.length);
    }

    const loadLessJobs = () => {
        setJobsCount(4);
    }

    return (
        <div className="featured-jobs-container">
            <h2 className="featured-jobs-title">Featured jobs</h2>
            <p className="featured-jobs-info">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="circulars">
                {
                    circulars.slice(0, jobsCount).map(circular => <FeaturedCircular key={circular.id}
                                                                                    circular={circular}></FeaturedCircular>)
                }
            </div>
            {
                jobsCount < circulars.length ?
                    <button onClick={loadAllJobs} className="btn-jobs">See All Jobs</button> :
                    <button onClick={loadLessJobs} className="btn-jobs">Show Less Jobs</button>
            }
        </div>
    );
};

export default FeaturedJobs;
