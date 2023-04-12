import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div>
            <h1 className="page-title">Blog</h1>
            <div className="page-area">
                <h3>1. When Does Context API Use?</h3>
                <p>Context API in React is used to pass data between components that are not directly related to each
                    other, without having to pass the data explicitly through props. It is useful when we have data
                    that needs to be accessed by many components at different levels in the component tree and passing
                    the data through props would be cumbersome or inefficient.</p>
                <h3>2. What is custom hook?</h3>
                <p>A custom hook in React is a function that allows you to extract and reuse logic across components.
                    It is created using the use prefix and can use other built-in hooks or other custom hooks. Custom
                    hooks can help make code more modular, reduce duplication, improve readability, and make testing
                    easier.</p>
                <h3>3. What is useRef hook? why it's used?</h3>
                <p>The useRef hook in React creates a mutable reference to an element or value that persists across
                    renders. It allows you to access and manipulate the DOM nodes directly, store data that needs to
                    persist between renders, store mutable values, and avoid unnecessary re-renders.</p>
                <h3>4. What is useMemo hook? why it's used?</h3>
                <p>The useMemo hook in React is used to optimize performance by memoizing the result of a computation
                    that is expensive or time-consuming. It returns a memoized value, based on the dependencies passed
                    as an array, which determines when the memoized value should be re-computed. It's commonly used for
                    expensive calculations or optimizing rendering performance.</p>
            </div>
        </div>
    );
};

export default Blog;
