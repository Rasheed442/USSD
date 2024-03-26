import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function CustomerRequest() {
  const [chartData] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false, // Set to false to hide the toolbar/menu bar
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      xaxis: {
        type: "name",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            // Replace default labels with custom names
            if (value === 60) return "2M";
            else if (value === 40) return "1K";
            else if (value === 20) return "2K";
            else if (value === 80) return "3K";
            else if (value === 100) return "4K";
            else if (value === 120) return "5K";
            else if (value === 140) return "6K";
            // Add more conditions as needed
            else return value; // Use original value if not customized
          },

          style: {
            colors: "#464F60", // Color of y-axis labels
            fontSize: "12px", // Font size of y-axis labels
            fontWeight: 400, // Font weight of y-axis labels
            fontFamily: "Arial, sans-serif", // Font family of y-axis labels
            // Other style properties can be added as needed
          },
        },
      },
      legend: {
        show: false, // Hide legend for smaller screens
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    // <ResponsiveContainer width="100%" aspect={2}>
    //   <LineChart
    //     width={500}
    //     height={500}
    //     data={data}
    //     margin={{
    //       // top: 0,
    //       right: 50,
    //       // left: 70,
    //       bottom: 10,
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="7 7" />
    //     <XAxis
    //       dataKey="name"
    //       axisLine={false}
    //       dy={18}
    //       tickLine={false}
    //       fontSize={12}
    //       fontWeight={500}
    //     />
    //     <YAxis
    //       axisLine={false}
    //       tickLine={false}
    //       fontSize={12}
    //       fontWeight={500}
    //     />
    //     <Line
    //       type="monotone"
    //       dataKey="pv"
    //       stroke="#D94040"
    //       strokeWidth={2}
    //       strokeDasharray="10 10"
    //       activeDot={{ r: 8 }}
    //     />
    //     {/* <Line
    //       type="monotone"
    //       dataKey="uv"
    //       stroke="#FF718B"
    //       strokeWidth={2}
    //       strokeDasharray="10 10"
    //     /> */}
    //     <Line
    //       type="monotone"
    //       dataKey="amt"
    //       stroke="#2A278F"
    //       strokeWidth={2}
    //       strokeDasharray="10 10"
    //     />
    //   </LineChart>
    // </ResponsiveContainer>
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default CustomerRequest;
