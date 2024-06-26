import React from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from "recharts";

const data02 = [
  { name: "Service A", value: 10 },
  { name: "Service B", value: 50 },
  { name: "Service C", value: 50 },
  { name: "Service D", value: 30 },
  { name: "Service E", value: 40 },
];

function playground() {
  const COLORS = ["#539FE5", "#E07941", "#8456CE", "#2EA597", "#C33D69"]; // Array of colors for slices
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <PieChart width={400} height={400}>
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          label={({ name, value }) => `${name}: ${value}%`} // Customize label content
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default playground;
