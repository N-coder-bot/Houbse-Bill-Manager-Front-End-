/* eslint-disable react/prop-types */
import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";
import styles from "./Piechart.module.css";

function Piechart({ categories }) {
  console.log(categories);
  const data = [
    {
      name: "grocery",
      value: categories["grocery"],
      color: "#8884d8",
    },
    {
      name: "clothing",
      value: categories["clothing"],
      color: "#82ca9d",
    },
    {
      name: "healthcare",
      value: categories["healthcare"],
      color: "#ffc658",
    },
    {
      name: "others",
      value: categories["others"],
      color: "#ff6e6e",
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" outerRadius={150} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}

export default Piechart;
