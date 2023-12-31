import React from 'react';
import "./Banner.css";
import person from "../../assets/assets/All Images/person.png";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-info">
                <h1>One Step Closer To Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find
                    it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <img src={person} alt="person image"/>
        </div>
    );
};

export default Banner;
