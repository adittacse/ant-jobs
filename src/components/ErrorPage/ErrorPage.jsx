import React from 'react';
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="page-title">Invalid URL</h1>
            <div className="error-content">
                <div id="main">
                    <h1>404 Error!</h1>
                    <h3>Page Not Found</h3>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
