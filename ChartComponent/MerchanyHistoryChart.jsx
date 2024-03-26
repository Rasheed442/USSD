import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function MerchanyHistoryChart() {
  const data = [
    {
      name: "DSTV",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Amazon Prime",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Netflix",
      uv: 2000,
      pv: 4000,
      amt: 2290,
    },
    {
      name: "Paystack",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Access Bank",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Kuda MFB",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jumia Foods",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={1.8}>
      <BarChart
        width={100}
        height={100}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          fontSize={16.5}
          dy={10}
        />
        <YAxis axisLine={false} tickLine={false} />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="pv" stackId="a" fill="#5E5ADB" barSize={10} />
        <Bar dataKey="uv" fill="#B9B6FA" barSize={10} />
        <Bar dataKey="uv" fill="#2A278F" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default MerchanyHistoryChart;
