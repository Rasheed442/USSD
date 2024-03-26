import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import MerchantDetails from "@/component/MerchantDetails";

const data = [
  {
    name: "Reseller 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Reseller 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },

  {
    name: "Reseller 3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Reseller 4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
const Stacked = () => {
  return (
    <ResponsiveContainer width="100%" aspect={1.2}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          fontWeight={500}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          fontSize={12}
          fontWeight={500}
        />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {/* <Bar
          dataKey="pv"
          stackId="a"
          fill="#6941C6"
          barSize={40}
          // radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="uv"
          stackId="a"
          fill="#9E77ED"
          // radius={[10, 10, 0, 0]}
        /> */}
        <Bar
          barSize={30}
          fontWeight={500}
          dataKey="uv"
          stackId="a"
          fill="#D6BBFB"
          // radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Stacked;
