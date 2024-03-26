import React, { useState } from "react";
import style from "../styles/ComponentStyle/revenuereport.module.css";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
function RevenueReport() {
  const [chartData] = useState({
    series: [
      {
        name: "series1",
        data: [65, 75, 40, 28, 51, 42, 109],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false, // Set to false to hide the toolbar/menu bar
        },
        // offsetY: 120, // Add space to the top of the chart
        offsetX: -5,
      },
      colors: ["#4A3AFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "name",
        categories: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            // Replace default labels with custom names
            if (value === 60) return "2M";
            else if (value === 40) return "1M";
            else if (value === 20) return "0";
            else if (value === 80) return "3M";
            else if (value === 100) return "4M";
            else if (value === 120) return "5M";
            else if (value === 140) return "6M";
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

      //   tooltip: {
      //     show: false,
      //   },
    },
  });
  return (
    <div className={style.top}>
      <div className={style.report}>
        <h3>
          <svg
            width="25"
            height="25"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 7.49935C8.689 7.49935 8.16667 8.02168 8.16667 8.66602C8.16667 9.31035 8.689 9.83268 9.33333 9.83268H18.6667C19.311 9.83268 19.8333 9.31035 19.8333 8.66602C19.8333 8.02168 19.311 7.49935 18.6667 7.49935H9.33333Z"
              fill="#1A1A1A"
              fill-opacity="0.7"
            />
            <path
              d="M8.16667 14.4993C8.16667 13.855 8.689 13.3327 9.33333 13.3327H18.6667C19.311 13.3327 19.8333 13.855 19.8333 14.4993C19.8333 15.1437 19.311 15.666 18.6667 15.666H9.33333C8.689 15.666 8.16667 15.1437 8.16667 14.4993Z"
              fill="#1A1A1A"
              fill-opacity="0.7"
            />
            <path
              d="M9.33333 19.166C8.689 19.166 8.16667 19.6884 8.16667 20.3327C8.16667 20.977 8.689 21.4994 9.33333 21.4994H12.4444C13.0888 21.4994 13.6111 20.977 13.6111 20.3327C13.6111 19.6884 13.0888 19.166 12.4444 19.166H9.33333Z"
              fill="#1A1A1A"
              fill-opacity="0.7"
            />
            <path
              d="M15.5556 19.166C14.9112 19.166 14.3889 19.6884 14.3889 20.3327C14.3889 20.977 14.9112 21.4994 15.5556 21.4994H18.6667C19.311 21.4994 19.8333 20.977 19.8333 20.3327C19.8333 19.6884 19.311 19.166 18.6667 19.166H15.5556Z"
              fill="#1A1A1A"
              fill-opacity="0.7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0621 26.0508C18.1933 26.0836 18.3205 26.1306 18.4414 26.1911C21.2249 27.5829 24.5 25.5588 24.5 22.4467V6.33268C24.5 3.75535 22.4107 1.66602 19.8333 1.66602H8.16667C5.58934 1.66602 3.5 3.75535 3.5 6.33268V22.4467C3.5 25.5588 6.77506 27.5829 9.5586 26.1911C9.67953 26.1306 9.80671 26.0836 9.93788 26.0508L13.4341 25.1767C13.8056 25.0838 14.1944 25.0838 14.5659 25.1767L18.0621 26.0508ZM5.83333 6.33268C5.83333 5.04402 6.878 3.99935 8.16667 3.99935H19.8333C21.122 3.99935 22.1667 5.04402 22.1667 6.33268V22.4467C22.1667 23.8242 20.717 24.7201 19.4849 24.1041C19.2117 23.9675 18.9244 23.8612 18.628 23.7871L15.1318 22.9131C14.3887 22.7273 13.6113 22.7273 12.8682 22.9131L9.37196 23.7871C9.07563 23.8612 8.7883 23.9675 8.5151 24.1041C7.283 24.7201 5.83333 23.8242 5.83333 22.4467V6.33268Z"
              fill="#1A1A1A"
              fill-opacity="0.7"
            />
          </svg>
          Revenue
        </h3>
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default RevenueReport;
