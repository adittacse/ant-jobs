import React from 'react';
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink.jsx";

const Header = () => {
    return (
        <div className="header">
            <h2 className="site-title">ANT Jobs</h2>
            <nav className="">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
            <button>Start Applying</button>
        </div>
    );
};

export default Header;
