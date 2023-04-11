import React, {useEffect, useState} from 'react';

const DisplayAppliedJob = ({ jobId }) => {
    // console.log(jobId)
    const [job, setJob] = useState();
    useEffect(() => {
        fetch("/jobCircular.json")
            .then(res => res.json())
            .then(data => setJob(data));
    },[]);

    const searchJob = () => {
        if (jobId in job) {
            console.log(jobId)
        }
    }

    return (
        <div>

        </div>
    );
};

export default DisplayAppliedJob;
