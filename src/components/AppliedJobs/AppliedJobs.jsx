import React, {useEffect, useState} from 'react';
import {getAppliedJobs} from "../../utilities/fakedb.js";
import DisplayAppliedJob from "../DisplayAppliedJob/DisplayAppliedJob.jsx";


const AppliedJobs = () => {
    const [jobId, setJobId] = useState([]);
    useEffect(() => {
        const storedJobId = [];
        // const items = JSON.parse(localStorage.getItem('applied-jobs'));
        const items = getAppliedJobs();
        for (const item in items) {
            storedJobId.push(item)
        }
        setJobId(storedJobId);
    }, []);

    return (
        <div>
            <h1 className="page-title">Applied Jobs</h1>
            <div>
                {/*<p>{jobId}</p>*/}
                {
                    jobId.map(id => <DisplayAppliedJob jobId={jobId}></DisplayAppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
