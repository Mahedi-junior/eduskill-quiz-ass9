import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quizObj = useLoaderData();
  const { data } = quizObj;
  console.log(data);
  return (
    <div className="rechart-container">
      <h2>Total questions in graph</h2>
      <div className="rechart">
        <BarChart width={400} height={400} data={data}>
          <Bar dataKey="total" fill="#2d5c2c" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
