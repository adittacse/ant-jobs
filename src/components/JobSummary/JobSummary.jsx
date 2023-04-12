import "./JobSummary.css";
import salaryIcon from "../../assets/assets/Icons/Frame.png";
import jobIcon from "../../assets/assets/Icons/Frame-1.png";
import phoneIcon from "../../assets/assets/Icons/Frame-2.png";
import emailIcon from "../../assets/assets/Icons/Frame-3.png";
import locationIcon from "../../assets/assets/Icons/Frame-4.png";
import {getAppliedJobs} from "../../utilities/fakedb.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successfullyAppliedNotify = () => {
    toast.success("Application Applied Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

const previouslyAppliedNotify = () => {
    toast.error("Already Applied In This Job!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

const addToDB = (job) => {
    // let getJobs = getAppliedJobs();
    // const storedJobs = localStorage.getItem('applied-jobs');
    const existingJobs = JSON.parse(localStorage.getItem("applied-jobs")) || [];
    const duplicateJob = existingJobs.find(item => item.id == job.id);

    if (duplicateJob) {
        previouslyAppliedNotify();
    } else {
        // Add the job object to local storage if it doesn't already exist
        existingJobs.push(job);
        localStorage.setItem("applied-jobs", JSON.stringify(existingJobs));
        successfullyAppliedNotify();
    }
}

const JobSummary = ({ job }) => {
    const {id, salary, job_title, phone, email, location} = job;
    return (
        <div>
            <div className="job-summary">
                <h2>Job details</h2>
                <hr/>
                <div className="job-data">
                    <img src={salaryIcon} alt="salary icon"/>
                    <p><span className="highlighted-text">Salary:</span> {salary} (Per Month)</p>
                </div>
                <div className="job-data">
                    <img src={jobIcon} alt="job icon"/>
                    <p><span className="highlighted-text">Job title:</span> {job_title}</p>
                </div>
                <h2>Contact Information</h2>
                <hr/>
                <div className="job-data">
                    <img src={phoneIcon} alt="phone icon"/>
                    <p><span className="highlighted-text">Phone:</span> {phone}</p>
                </div>
                <div className="job-data">
                    <img src={emailIcon} alt="email icon"/>
                    <p><span className="highlighted-text">Email:</span> {email}</p>
                </div>
                <div className="job-data">
                    <img src={locationIcon} alt="location icon"/>
                    <p><span className="highlighted-text">Address:</span> {location}</p>
                </div>
            </div>
            <button onClick={() => addToDB(job)} className="btn-apply-now">Apply Now</button>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false}
                            newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
                            draggable pauseOnHover theme="colored"></ToastContainer>
        </div>
    );
};

export default JobSummary;
