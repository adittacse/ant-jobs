import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import JobHome from "./components/JobHome/JobHome.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import jobData from "../public/jobCircular.json";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <JobHome></JobHome>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/appliedjobs",
                element: <AppliedJobs></AppliedJobs>,
                // loader: ({params}) => fetch("/jobCircular.json")
            },
            {
                path: "/circular/:id",
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch("/jobCircular.json")
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
