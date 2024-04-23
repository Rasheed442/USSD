import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
function CampaignPerformanceClient() {
  const data = [
    {
      name: "Jan 6",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jan 7",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Jan 8",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jan 9",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jan 10",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "JAN 11",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "JAN 12",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={400}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="0" /> */}
        <CartesianGrid horizontal={true} vertical={false} stroke="#ccc" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          barSize={22}
          padding={{ top: 0, bottom: 50 }}
        />
        {/* <Tooltip /> */}
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#5E5ADB"
          fill="#D94040"
          strokeWidth={3.5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CampaignPerformanceClient;
