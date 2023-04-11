import React, {useEffect, useState} from 'react';
import {getAppliedJobs} from "../../utilities/fakedb.js";
import DisplayAppliedJob from "../DisplayAppliedJob/DisplayAppliedJob.jsx";


const AppliedJobs = () => {
    // const [jobId, setJobId] = useState([]);
    // const [singleId, setSingleId] = useState({});
    // useEffect(() => {
    //     const storedJobId = [];
    //     const items = getAppliedJobs();
    //     for (const item in items) {
    //         storedJobId.push(items)
    //     }
    //     setJobId(storedJobId);
    // }, []);
    //
    // useEffect(() => {
    //     for (let id in jobId) {
    //         // console.log(jobId[id])
    //         setSingleId(jobId[id]);
    //     }
    // },[jobId]);

    const getAppliedJobs = () => {
        const storedJobs = localStorage.getItem('applied-jobs');
        if (storedJobs) {
            const jobs = JSON.parse(storedJobs);
            const jobIds = Object.values(jobs);
            return jobIds;
        }
        return {};
    };

    const appliedJobs = getAppliedJobs();
    // console.log(appliedJobs);


    return (
        <div>
            <h1 className="page-title">Applied Jobs</h1>
            <div>
                {
                    // Object.entries(jobId).map(([key, value]) => (
                    //     <p key={key}>{`${key}: ${value}`}</p>))
                }

                {
                    appliedJobs.map(value => <DisplayAppliedJob key={value} jobId={value}></DisplayAppliedJob>)
                }
                {
                    // jobId.map(id => console.log(id))
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
