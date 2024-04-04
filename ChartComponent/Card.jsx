import React from "react";
import dynamic from "next/dynamic";
import style from "../styles/ChatStyle/card.module.css";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
function Card() {
  const options = {
    series: [44, 13],
    options: {
      labels: ["Reseller", "Clients"],
      chart: {
        width: 380,
        type: "donut",
      },
      colors: ["#4318FF", "#5E5ADB99"],

      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        show: false, // Hide legend for smaller screens
      },
    },
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="donut"
          width={370}
        />
        <div className={style.title}>
          <p>Total</p>
          <h1>5,000</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
