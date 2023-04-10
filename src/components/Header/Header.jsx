import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h2 className="site-title">ANT Jobs</h2>
            <nav className="">
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button>Start Applying</button>
        </div>
    );
};

export default Header;
