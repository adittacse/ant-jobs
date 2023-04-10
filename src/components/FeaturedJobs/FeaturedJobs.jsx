import React, {useEffect, useState} from 'react';
import "./FeaturedJobs.css";
import FeaturedCircular from "../FeaturedCircular/FeaturedCircular.jsx";

const FeaturedJobs = () => {
    const [circulars, setCircular] = useState([]);

    useEffect(() => {
        fetch("jobCircular.json")
            .then(res => res.json())
            .then(data => setCircular(data.companies));
    },[]);

    return (
        <div>
            <h2 className="featured-jobs-title">Featured jobs</h2>
            <p className="featured-jobs-info">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="circulars">
                {
                    circulars.map(circular => <FeaturedCircular key={circular.id}
                                                                circular={circular}>
                    </FeaturedCircular>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
