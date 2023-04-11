import React, {useEffect, useState} from 'react';
import "./DisplayAppliedJob.css";
import {useLoaderData, useParams} from "react-router-dom";
import data from "../../../public/jobCircular.json";

const DisplayAppliedJob = ({ jobId }) => {

    // const [jobs, setJob] = useState();
    // useEffect(() => {
    //     fetch("/jobCircular.json")
    //         .then(res => res.json())
    //         .then(data => setJob(data));
    // },[]);

    const matchedData = data.find(item => item.id === jobId);

    return (
        <div>
            <p>{matchedData.company_name}</p>
            <p>{matchedData.job_title}</p>
            <p>{matchedData.location}</p>
        </div>
    );
};

export default DisplayAppliedJob;
