import React from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, LineChart, ResponsiveContainer, Tooltip} from 'recharts';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import "./Statistics.css";

const Statistics = () => {
    const colors = scaleOrdinal(schemeCategory10).range();

    const marksArray = [
        {
            id: 1,
            name: "Assignment 1",
            marks: 60
        },
        {
            id: 2,
            name: "Assignment 2",
            marks: 60
        },
        {
            id: 3,
            name: "Assignment 3",
            marks: 60
        },
        {
            id: 4,
            name: "Assignment 4",
            marks: 60
        },
        {
            id: 5,
            name: "Assignment 5",
            marks: 57
        },
        {
            id: 6,
            name: "Assignment 6",
            marks: 60
        },
        {
            id: 7,
            name: "Assignment 7",
            marks: 60
        },
        {
            id: 8,
            name: "Assignment 8",
            marks: 58
        }
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="">
            <h2 className="page-title">Assignment Result Statistics Bar</h2>
            <div className="barchart">
                <BarChart width={1000} height={500} data={marksArray} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="marks" fill="#8884d8" shape={<TriangleBar />}>
                        {marksArray.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;
