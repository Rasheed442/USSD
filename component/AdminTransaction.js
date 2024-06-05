import DashbaordLayout from "@/Layouts/DashbaordLayout";
import React, { useState } from "react";
import style from "../styles/PagesStyle/transaction.module.css";
import { TbCloudDownload } from "react-icons/tb";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import Card from "@/ChartComponent/Card";

import Image from "next/image";
import AdminHeader from "@/component/AdminHeader";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FiCalendar } from "react-icons/fi";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { blue, deleted_token, green, red, yellow } from "@/public/ICON";
import DeletedTokens from "@/ChartComponent/DeletedTokens";
import CustomerReq from "@/ChartComponent/CustomerReq";
import TokenizedCard from "@/ChartComponent/TokenizedCard";
import Detokenized from "@/ChartComponent/Detokenized";
import styled from "styled-components";
import Card2 from "@/ChartComponent/Card2";
import USSDsessionAnalysis from "@/ChartComponent/USSDsessionAnalysis";
function AdminTransaction() {
  const [show, setShow] = useState(false);

  const Analytics = [
    // {
    //   icon: blue,
    //   details: "Total Revenue",
    //   amount: "₦98,250",
    //   rate: "2.1%",
    //   charts: <Detokenized />,
    //   sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    // },
    // {
    //   icon: green,
    //   details: "Total Resellers",
    //   amount: "20,230",
    //   rate: "34%",
    //   charts: <TokenizedCard />,
    //   sign: <AiOutlineArrowUp style={{ color: "green" }} />,
    // },
    // {
    //   icon: red,
    //   details: "Total clients",
    //   amount: "45,250",
    //   rate: "50%",
    //   charts: <DeletedTokens />,
    //   sign: <AiOutlineArrowUp style={{ color: "green" }} />,
    // },
    // {
    //   icon: yellow,
    //   details: "Total Outbound USSD",
    //   amount: "0h:02m:48s",
    //   rate: "2.1%",
    //   charts: <CustomerReq />,
    //   sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    // },
    {
      icon: blue,
      details: "Total Outbound USSD",
      amount: "0h:02m:48s",
      rate: "2.1%",
      charts: <CustomerReq />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
    {
      icon: green,
      details: "Total Outbound USSD",
      amount: "0h:02m:48s",
      rate: "2.1%",
      charts: <CustomerReq />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
    {
      icon: red,
      details: "Total Outbound USSD",
      amount: "21",
      rate: "2.1%",
      charts: <CustomerReq />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
    {
      icon: yellow,
      details: "Total Outbound USSD",
      amount: "32%",
      rate: "2.1%",
      charts: <CustomerReq />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
  ];

  return (
    <Transact>
      <DashbaordLayout>
        <AdminHeader title="Transactions" />
        <div className={style.bg}>
          <div className={style.container}>
            <div className={style.head}>
              <h1>Report and Analytics</h1>
              {/* <span>600 members</span> */}
            </div>
            <p>All general report appears in this field</p>
          </div>
          <div className={style.btn}>
            <button
              onClick={() => setShow(!show)}
              className={style.date}
              style={{
                backgroundColor: "white",
                color: "#344054",
                border: "1px solid gainboro",
              }}
            >
              Showing for:
              <FiCalendar size={17} /> Jan 6, 2023 - Jan 13, 2023
            </button>
            <button style={{ border: "none" }}>
              <TbCloudDownload size={20} /> Download Report
            </button>
          </div>
        </div>

        <div className={style.whit}>
          <div className="grid">
            {Analytics.map((g) => {
              return (
                <div className="charts">
                  <div className="details">
                    <Image src={g.icon} height={45} width={45} alt="" />
                    <span>{g.details}</span>
                    <p>{g.amount}</p>
                  </div>
                  <div className="mychart">{g.charts}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className="container">
          <div className="contain">
            <div className="history">
              <div className="merch">
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.583 10.0003C11.583 9.35599 11.0607 8.83366 10.4163 8.83366C9.77201 8.83366 9.24968 9.35599 9.24968 10.0003V15.8337C9.24968 16.478 9.77201 17.0003 10.4163 17.0003H13.9163C14.5607 17.0003 15.083 16.478 15.083 15.8337C15.083 15.1893 14.5607 14.667 13.9163 14.667H11.583V10.0003Z"
                    fill="#1A1A1A"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.49967 1.83366C7.49967 1.18933 8.02201 0.666992 8.66634 0.666992H13.333C13.9773 0.666992 14.4997 1.18933 14.4997 1.83366C14.4997 2.47799 13.9773 3.00033 13.333 3.00033H12.1663V4.16699C12.1663 4.18784 12.1658 4.20857 12.1647 4.22915C17.5769 4.8101 21.7913 9.39221 21.7913 14.9587C21.7913 20.9187 16.9597 25.7503 10.9997 25.7503C5.0396 25.7503 0.208008 20.9187 0.208008 14.9587C0.208008 9.39221 4.42248 4.8101 9.83464 4.22915C9.83356 4.20857 9.83301 4.18784 9.83301 4.16699V3.00033H8.66634C8.02201 3.00033 7.49967 2.47799 7.49967 1.83366ZM10.9997 6.50033C6.32827 6.50033 2.54134 10.2873 2.54134 14.9587C2.54134 19.6301 6.32827 23.417 10.9997 23.417C15.6711 23.417 19.458 19.6301 19.458 14.9587C19.458 10.2873 15.6711 6.50033 10.9997 6.50033Z"
                    fill="#1A1A1A"
                    fill-opacity="0.7"
                  />
                </svg>

                <h1>USSD Session Analysis</h1>
              </div>
              {/* <div className="bounds">
                <div className="call">
                  <div className="line2"></div>
                  <p>Completed Session</p>
                </div>
                <div className="call">
                  <div className="line1"></div>
                  <p>Incomplete Session</p>
                </div>
              </div> */}
            </div>

            {/* <MerchanyHistoryChart /> */}
            <USSDsessionAnalysis />
          </div>
          <div className="contain2">
            <div className="userdistribution">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25273 17.819C6.52304 17.0126 6.15603 15.5121 6.15603 13.3187V10.3223C6.15603 8.28121 5.83791 6.84517 5.1972 6.01097C4.55872 5.17463 3.49313 4.75737 2.00602 4.75737C1.68013 4.75737 1.38203 4.76967 1.10624 4.78974C0.830344 4.81309 0.573422 4.84645 0.332031 4.88988V5.69843H0.911555C1.58563 5.69843 2.05502 5.90755 2.31527 6.32909C2.57668 6.75291 2.70574 7.72285 2.70574 9.23556V12.955C2.70574 15.2586 3.41755 17.0127 4.8513 18.2139C5.9247 19.1149 7.40176 19.7033 9.28263 19.9859V18.8824C8.38619 18.6488 7.69434 18.3073 7.25273 17.8191V17.819ZM20.747 17.819C21.4767 17.0126 21.8437 15.5121 21.8437 13.3187V10.3223C21.8437 8.28121 22.1618 6.84517 22.8025 6.01097C23.441 5.17463 24.5066 4.75737 25.9937 4.75737C26.3196 4.75737 26.6177 4.76967 26.8935 4.78974C27.1694 4.81309 27.4263 4.84645 27.6677 4.88988V5.69843H27.0882C26.4141 5.69843 25.9447 5.90755 25.6844 6.32909C25.423 6.75291 25.294 7.72285 25.294 9.23556V12.955C25.294 15.2586 24.5822 17.0127 23.1484 18.2139C22.075 19.1149 20.598 19.7033 18.717 19.9859V18.8824C19.6135 18.6488 20.3054 18.3073 20.747 17.8191V17.819ZM16.6226 5.26695C17.0831 4.90098 18.0185 4.69076 19.4245 4.63842V4H8.57524V4.63837C10.0067 4.6907 10.9478 4.90092 11.4017 5.26689C11.8565 5.63499 12.0802 6.36245 12.0802 7.4492V21.5375C12.0802 22.6753 11.8565 23.425 11.4017 23.7809C10.9478 24.1402 10.0067 24.3337 8.57524 24.3638V25H19.3878L19.4245 24.3638C18.0297 24.3337 17.0966 24.1257 16.6315 23.7398C16.1712 23.3594 15.9353 22.6219 15.9353 21.5375V7.44914C15.9353 6.36239 16.1633 5.63494 16.6227 5.26684L16.6226 5.26695Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
              </svg>

              <p>Push USSD Delivery Rate</p>
            </div>
            <Card2 />
            <div className="top">
              <div className="client">
                <div className="liner"></div>
                <div className="conts">
                  <span>Push</span>
                  <p>2,200</p>
                </div>
              </div>
              <div className="client">
                <div className="linec"></div>
                <div className="conts">
                  <span>Pull</span>
                  <p>2,800</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashbaordLayout>
    </Transact>
  );
}

export default AdminTransaction;
const Transact = styled.div`
  .container {
    padding: 0px 55px 30px 30px;
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 27px;
  }
  .contain2 {
    background-color: white;
    border-radius: 10px;
  }
  .totals {
    display: flex;
    gap: 125px;
  }
  .totals span {
    color: #027a48;
    letter-spacing: -2%;
    line-height: 20px;
    font-size: 10px;
    font-weight: 500;
  }
  .totals p {
    color: #454545;
    letter-spacing: -2%;
    line-height: 24px;
    font-size: 12px;
    font-weight: 300;
  }
  .ussdsession {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0px 0px 0px 10px;
  }
  .ussdsession span {
    color: #5e5adb;
    line-height: 32px;
    font-weight: 600;
    font-size: 34px;
    letter-spacing: -2%;
  }
  .line1 {
    height: 15px;
    width: 15px;
    border-radius: 3px;
    background-color: red;
  }
  .line2 {
    height: 14px;
    border-radius: 3px;
    width: 14px;
    background-color: #4318ff;
  }
  .call {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    /* border-radius: 8px; */
  }
  .call p {
    color: #7d7d7d;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
  }
  .bounds {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .merch {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .merch h1 {
    font-weight: 400;
    font-size: 22px;
  }
  .merch p {
    color: #909090;
    font-size: 12px;
    font-weight: 300;
  }
  .history {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 10px 30px 10px;
  }
  .history select {
    height: 35px;
    border-radius: 5px;
    border: 1px solid gainsboro;
    width: 10rem;
    outline: none;
  }
  .contain {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 0px 10px;
    border-radius: 10px;
  }
  .liner {
    background-color: #5e5adb;
    width: 6px;
    height: 80px;
    border-radius: 5px;
  }
  .linec {
    background-color: #d94040;
    width: 6px;
    height: 80px;
    border-radius: 5px;
  }
  .conts span {
    color: #7d7d7d;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  .conts p {
    color: #000000;
    line-height: 31px;
    font-size: 26px;
    font-weight: 600;
  }
  .client {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 20px 0px 0px 0px;
  }
  .container {
    padding: 0px 55px 30px 30px;
    display: grid;
    grid-template-columns: 65% 35%;
    gap: 27px;
  }
  .userdistribution {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
  }
  .userdistribution p {
    font-size: 23px;
    line-height: 31px;
    letter-spacing: 0.34px;
    font-weight: 600;
    font-weight: 400;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 10px;
    margin: 20px 30px 20px 20px;
  }
  .charts {
    display: flex;
    background-color: white;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    position: relative;
    border-radius: 5px;
  }
  .mychart {
    position: absolute;
    right: 10px;
    width: 40%;
    top: 0;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .details span {
    color: #909090;
    letter-spacing: 1%;
    line-height: 18px;
    font-size: 15px;
    font-weight: 400;
  }
  .details p {
    color: #090814;
    line-height: 38px;
    font-size: 31px;
    font-weight: 500;
  }
`;
