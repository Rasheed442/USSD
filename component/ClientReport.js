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
import { FiMoreVertical } from "react-icons/fi";
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
import { tokenizecards, transactionLogs } from "@/TableComponent/TokenizeTable";
import ViewReportLogs from "./ViewReportLogs";
function ClientReport() {
  const [show, setShow] = useState(false);
  const [viewLogs, setViewLogs] = useState(false);
  const Analytics = [
    {
      icon: blue,
      details: "Total Revenue",
      amount: "₦98,250",
      rate: "2.1%",
      charts: <Detokenized />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
    {
      icon: green,
      details: "Total Resellers",
      amount: "20,230",
      rate: "34%",
      charts: <TokenizedCard />,
      sign: <AiOutlineArrowUp style={{ color: "green" }} />,
    },
    {
      icon: red,
      details: "Total clients",
      amount: "45,250",
      rate: "50%",
      charts: <DeletedTokens />,
      sign: <AiOutlineArrowUp style={{ color: "green" }} />,
    },
    {
      icon: yellow,
      details: "Total Outbound USSD",
      amount: "0h:02m:48s",
      rate: "2.1%",
      charts: <CustomerReq />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
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
      {viewLogs && <ViewReportLogs closeLogs={setViewLogs} />}
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
        {/* for table search */}
        <div className="white">
          <div className="logs">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3754_19626)">
                <path
                  d="M10.7299 12.1667C10.4979 12.1667 10.2753 12.2589 10.1112 12.423C9.94713 12.5871 9.85494 12.8097 9.85494 13.0417C9.85494 13.2738 9.94713 13.4964 10.1112 13.6605C10.2753 13.8246 10.4979 13.9167 10.7299 13.9167H18.3133C18.5453 13.9167 18.7679 13.8246 18.932 13.6605C19.0961 13.4964 19.1883 13.2738 19.1883 13.0417C19.1883 12.8097 19.0961 12.5871 18.932 12.423C18.7679 12.2589 18.5453 12.1667 18.3133 12.1667H10.7299ZM7.95095 16.8334C7.71888 16.8334 7.49632 16.9256 7.33223 17.0897C7.16813 17.2538 7.07595 17.4764 7.07595 17.7084C7.07595 17.9405 7.16813 18.163 7.33223 18.3271C7.49632 18.4912 7.71888 18.5834 7.95095 18.5834H15.5343C15.7663 18.5834 15.9889 18.4912 16.153 18.3271C16.3171 18.163 16.4093 17.9405 16.4093 17.7084C16.4093 17.4764 16.3171 17.2538 16.153 17.0897C15.9889 16.9256 15.7663 16.8334 15.5343 16.8334H7.95095ZM6.10645 21.5001C5.87438 21.5001 5.65182 21.5923 5.48773 21.7564C5.32363 21.9205 5.23145 22.143 5.23145 22.3751C5.23145 22.6071 5.32363 22.8297 5.48773 22.9938C5.65182 23.1579 5.87438 23.2501 6.10645 23.2501H13.6898C13.9218 23.2501 14.1444 23.1579 14.3085 22.9938C14.4726 22.8297 14.5648 22.6071 14.5648 22.3751C14.5648 22.143 14.4726 21.9205 14.3085 21.7564C14.1444 21.5923 13.9218 21.5001 13.6898 21.5001H6.10645Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
                <path
                  d="M4.81274 0.500022H23.1877C23.8202 0.498089 24.4469 0.621309 25.0315 0.862585C25.6162 1.10386 26.1474 1.45842 26.5944 1.90586C27.0418 2.35291 27.3964 2.88407 27.6377 3.46873C27.879 4.0534 28.0022 4.68003 28.0002 5.31252C28.0002 6.92719 27.4449 8.57219 26.6842 10.1659C25.9236 11.7584 24.9167 13.3824 23.9402 14.9539L23.9309 14.969C22.9404 16.565 21.9837 18.1085 21.2709 19.6007C20.5546 21.0975 20.1252 22.459 20.1252 23.6875C20.1253 24.2166 20.2624 24.7367 20.5232 25.197C20.784 25.6574 21.1597 26.0423 21.6135 26.3143C22.0674 26.5863 22.5839 26.736 23.1129 26.7489C23.6418 26.7619 24.1651 26.6375 24.6317 26.3881C25.0983 26.1386 25.4923 25.7725 25.7753 25.3255C26.0583 24.8784 26.2207 24.3657 26.2466 23.8372C26.2725 23.3087 26.161 22.7826 25.923 22.31C25.6851 21.8374 25.3287 21.4346 24.8887 21.1407C24.7932 21.0768 24.7112 20.9947 24.6474 20.8991C24.5836 20.8036 24.5392 20.6964 24.5169 20.5836C24.4945 20.4709 24.4946 20.3549 24.517 20.2422C24.5395 20.1295 24.5839 20.0223 24.6478 19.9268C24.7117 19.8312 24.7938 19.7492 24.8894 19.6854C24.985 19.6216 25.0922 19.5773 25.2049 19.5549C25.3176 19.5325 25.4336 19.5326 25.5463 19.5551C25.659 19.5775 25.7662 19.622 25.8617 19.6859C26.7195 20.2599 27.3701 21.0944 27.7174 22.0664C28.0648 23.0383 28.0905 24.0961 27.7909 25.0838C27.4913 26.0715 26.8821 26.9367 26.0533 27.5518C25.2245 28.1669 24.2199 28.4993 23.1877 28.5H5.25024C3.97389 28.5 2.74981 27.993 1.84729 27.0905C0.944773 26.188 0.437744 24.9639 0.437744 23.6875C0.437744 21.0812 1.90541 18.2555 3.45941 15.6352C3.86541 14.9515 4.27841 14.2795 4.68441 13.6192C5.61774 12.0979 6.51258 10.6407 7.18574 9.25819H3.95524C2.99508 9.25819 1.75491 9.03302 0.96041 8.05069C0.329407 7.27867 -0.0104221 6.30955 0.000243631 5.31252C0.000243631 4.03617 0.507273 2.81209 1.40979 1.90957C2.31231 1.00705 3.53639 0.500022 4.81274 0.500022ZM18.3752 23.6875C18.3752 22.0775 18.9306 20.4372 19.6912 18.8459C20.4484 17.2615 21.4517 15.6457 22.4247 14.0789L22.4446 14.0462C23.4351 12.4514 24.3917 10.9055 25.1046 9.41219C25.8209 7.91302 26.2502 6.54569 26.2502 5.31252C26.2518 4.90992 26.1736 4.51099 26.0203 4.13873C25.8669 3.76648 25.6414 3.42826 25.3567 3.14357C25.072 2.85888 24.7338 2.63336 24.3615 2.48C23.9893 2.32664 23.5903 2.24848 23.1877 2.25002C22.3755 2.25002 21.5966 2.57268 21.0222 3.14701C20.4479 3.72134 20.1252 4.5003 20.1252 5.31252C20.1252 6.32169 20.6164 7.07302 21.4867 7.65636C21.6425 7.76078 21.7607 7.9125 21.8237 8.08914C21.8867 8.26579 21.8913 8.45801 21.8368 8.63747C21.7823 8.81693 21.6716 8.97413 21.521 9.08588C21.3703 9.19764 21.1878 9.25805 21.0002 9.25819H9.11424C8.35591 10.9884 7.21958 12.8387 6.10774 14.647C5.71808 15.2817 5.33074 15.9105 4.96441 16.5277C3.38358 19.1959 2.18774 21.6272 2.18774 23.6875C2.18774 24.4998 2.5104 25.2787 3.08473 25.853C3.65906 26.4274 4.43802 26.75 5.25024 26.75H19.4754C18.7627 25.8887 18.3736 24.8054 18.3752 23.6875ZM1.75024 5.31252C1.73858 5.90869 1.94041 6.48852 2.31841 6.94936C2.61474 7.31452 3.18174 7.50819 3.95408 7.50819H18.9574C18.568 6.84256 18.3668 6.08364 18.3752 5.31252C18.3738 4.19466 18.7629 3.1114 19.4754 2.25002H4.81274C4.00052 2.25002 3.22156 2.57268 2.64723 3.14701C2.0729 3.72134 1.75024 4.5003 1.75024 5.31252Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
              </g>
              <defs>
                <clipPath id="clip0_3754_19626">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>USSD Logs</p>
          </div>
          <>
            <div className="container">
              <div className="search">
                <AiOutlineSearch size={20} />
                <input placeholder="Search" />
              </div>
            </div>
            <div className="tablecontent">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ display: "flex", gap: "10px" }}>
                      <input type="checkbox" /> SERVICE NAME
                    </th>
                    <th>DATE</th>
                    <th>NUMBER OF CONTACT</th>
                    <th>ROUTE</th>
                    <th>USSD TYPE</th>
                    <th>SHORTCODE</th>
                    <th>SHORTCODE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionLogs.map((t) => {
                    return (
                      <tr>
                        <td
                          style={{
                            display: "flex",
                            gap: "10px",
                            padding: "15px",
                          }}
                        >
                          <input type="checkbox" />
                          {t.date}
                        </td>
                        <td>{t.number_of_contact}</td>
                        <td>{t.route}</td>
                        <td>{t.ussd_type}</td>
                        <td>{t.shortcode}</td>
                        <td>{t.ussd_session}</td>
                        <td>{t.amount}</td>
                        <td
                          style={{ color: "#5E5ADB" }}
                          onClick={() => setViewLogs(true)}
                        >
                          {t.action}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="row">
                <span>Showing 1-5 of entries</span>
                <div className="pagins">
                  <p>Rows per page:</p>
                  <select>
                    <option>5</option>
                  </select>
                  <div className="arrow]">
                    <button>
                      <AiOutlineLeft />
                    </button>
                    <button>1</button>
                    <button>
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </DashbaordLayout>
    </Transact>
  );
}

export default ClientReport;
const Transact = styled.div`
  .logs {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 10px;
  }
  .logs p {
    font-size: 20px;
    line-height: 41px;
    font-weight: 500;
  }
  .white {
    background-color: white;
    margin: 0px 30px 30px 30px;
    border-radius: 20px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 30px 30px 30px 20px;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid gainsboro;
    padding: 10px;
    width: 25rem;
    border-radius: 5px;
    color: #999999;
  }
  .search input {
    border: none;
    height: 20px;
    outline: none;
    font-size: 14px;
  }
  .search ::placeholder {
    font-size: 14px;
  }
  .sort {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .sort p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  .sort span {
    color: #999999;
  }
  /* .tablecontent{
    padding: 0px 30px 30px 30px;
} */
  .table {
    width: 100%;
  }

  .table th {
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    padding: 10px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 12px;
    font-weight: 400;
    font-size: 12px;
    color: #5a6376;
    border: 1px solid #e9edf5;
  }
  .table tr {
  }

  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 15px;
    color: #687182;
  }

  .pagins {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .pagins p {
    font-size: 14px;
    color: #687182;
  }

  .pagins select {
    width: 48px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    padding: 2px;
    border-radius: 3px;
  }

  .arrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrow button {
    width: 28.8px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }
  .container {
    padding: 0px 55px 30px 20px;
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 27px;
  }
  .contain2 {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  /* .container {
    padding: 0px 55px 30px 30px;
    display: grid;
    grid-template-columns: 65% 35%;
    gap: 27px;
  } */
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
