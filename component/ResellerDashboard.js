import DashbaordLayout from "@/Layouts/DashbaordLayout";
import style from "../styles/ComponentStyle/admindashboard.module.css";
import Image from "next/image";
import Link from "next/link";
import MerchanyHistoryChart from "@/ChartComponent/MerchanyHistoryChart";
import Card from "@/ChartComponent/Card";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import {
  AiOutlineArrowRight,
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FiMoreVertical, FiCalendar } from "react-icons/fi";
import { TiArrowUnsorted, TiMediaRecord } from "react-icons/ti";
import Card2 from "@/ChartComponent/Card2";
import { history } from "@/TableComponent/DashboardTable";
import AdminHeader from "./AdminHeader";
import TokenizedCard from "@/ChartComponent/TokenizedCard";
import RevenueReport from "./RevenueReport";
import CustomerRequest from "@/ChartComponent/CustomerRequest";
import USSDSERVICE from "@/ChartComponent/USSDSERVICE";
import CampaignPerformnace from "@/ChartComponent/CampaignPerformanceClient";
import styled from "styled-components";
import UssdServiceChart from "@/ChartComponent/UssdServiceChart";
import CampaignPerformanceReseller from "@/ChartComponent/CampaignPerformanceReseller";

function ResellerDashboard({ Adminlabels, Merchantlabels }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // console.log(state);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(true);
  const [type, setType] = useState(false);
  const [sortdate, setSortDate] = useState(1);
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(0);

  return (
    <ResellerStyle>
      <DashbaordLayout>
        <AdminHeader title="Dashboard" />
        <div className="main">
          <div className="overview">
            <h1>Overview </h1>
            <p>
              This overview provides a comprehensive snapshot of the
              tokenization processes over time.
            </p>
          </div>
          <div>
            <button onClick={() => setShow(!show)} className="date">
              Showing for:
              <FiCalendar size={17} /> Jan 6, 2023 - Jan 13, 2023
            </button>
            {show && (
              <div className="calendar">
                <DateRangePicker
                  onChange={(item) => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />
              </div>
            )}
          </div>
        </div>
        <div className="transactions">
          {Merchantlabels?.map((m) => {
            return (
              <div className="template">
                <div className="white">
                  <div className="merchant">
                    <Image src={m.icon} alt="" width={45} height={45} />
                    <p>{m?.details}</p>
                  </div>
                  <h2 style={{ fontWeight: "500" }}>{m?.amount}</h2>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <p>{m.sign}</p>
                    <h4>
                      <span
                        style={{ color: m.rate > "2.1%" ? "green" : "red" }}
                      >
                        {m.rate}
                      </span>{" "}
                      vs last week
                    </h4>
                  </div>
                </div>
                <div className="mychart">{m?.charts}</div>
              </div>
            );
          })}
        </div>
        <div>
          <RevenueReport />
        </div>

        {/* call duration analysis and outbound call distributiom */}
        <div className="container">
          <div className="contain">
            <div className="history">
              <div className="merch">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 3.125C14 3.125 16.3137 3.125 18.4279 4.01926C18.4279 4.01926 20.4694 4.88274 22.0433 6.45666C22.0433 6.45666 23.6173 8.03058 24.4807 10.0721C24.4807 10.0721 25.375 12.1863 25.375 14.5C25.375 14.5 25.375 16.8136 24.4807 18.9279C24.4807 18.9279 23.6173 20.9694 22.0433 22.5433C22.0433 22.5433 20.4694 24.1173 18.4279 24.9807C18.4279 24.9807 16.3136 25.875 14 25.875C14 25.875 11.6863 25.875 9.57207 24.9807C9.57207 24.9807 7.53058 24.1173 5.95666 22.5433C5.95666 22.5433 4.38274 20.9694 3.51926 18.9279C3.51926 18.9279 2.625 16.8137 2.625 14.5C2.625 14.5 2.625 12.1863 3.51926 10.0721C3.51926 10.0721 4.38274 8.03058 5.95666 6.45666C5.95666 6.45666 7.53058 4.88274 9.57207 4.01926C9.57207 4.01926 11.6863 3.125 14 3.125ZM14 4.875C14 4.875 12.0412 4.875 10.2538 5.63102C10.2538 5.63102 8.52666 6.36153 7.1941 7.6941C7.1941 7.6941 5.86153 9.02666 5.13102 10.7538C5.13102 10.7538 4.375 12.5412 4.375 14.5C4.375 14.5 4.375 16.4588 5.13102 18.2462C5.13102 18.2462 5.86153 19.9733 7.1941 21.3059C7.1941 21.3059 8.52666 22.6385 10.2538 23.369C10.2538 23.369 12.0412 24.125 14 24.125C14 24.125 15.9588 24.125 17.7462 23.369C17.7462 23.369 19.4733 22.6385 20.8059 21.3059C20.8059 21.3059 22.1385 19.9733 22.869 18.2462C22.869 18.2462 23.625 16.4588 23.625 14.5C23.625 14.5 23.625 12.5412 22.869 10.7538C22.869 10.7538 22.1385 9.02666 20.8059 7.6941C20.8059 7.6941 19.4733 6.36153 17.7462 5.63102C17.7462 5.63102 15.9588 4.875 14 4.875Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M14 15.375H20.125C20.6082 15.375 21 14.9832 21 14.5C21 14.0168 20.6082 13.625 20.125 13.625H14.875V8.375C14.875 7.89175 14.4832 7.5 14 7.5C13.5168 7.5 13.125 7.89175 13.125 8.375V14.5C13.125 14.9832 13.5168 15.375 14 15.375Z"
                    fill="#1C1C1C"
                  />
                </svg>
                <h1>USSD Session</h1>
              </div>
              <div className="bounds">
                <div className="call">
                  <div className="line2"></div>
                  <p>Completed Session</p>
                </div>
                <div className="call">
                  <div className="line1"></div>
                  <p>Incomplete Session</p>
                </div>
              </div>
            </div>
            <div className="ussdsession">
              <span>563.5K</span>
              <div className="totals">
                <p>
                  Total USSD Session &nbsp; &nbsp;<span>+2.54%</span>
                </p>
              </div>
            </div>
            {/* <MerchanyHistoryChart /> */}
            <CustomerRequest />
          </div>
        </div>
        <div className="container2">
          <div className="contain">
            <div className="history">
              <div className="merch" style={{ width: "50%" }}>
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9999 23.2493C13.885 23.2494 13.7712 23.2269 13.665 23.1829C13.5589 23.1389 13.4625 23.0743 13.3813 22.9929L10.7563 20.3679C10.6748 20.2869 10.6101 20.1905 10.5659 20.0843C10.5218 19.9781 10.499 19.8643 10.499 19.7493C10.499 19.6343 10.5218 19.5205 10.5659 19.4143C10.6101 19.3082 10.6748 19.2118 10.7563 19.1307L13.3813 16.5057C13.4623 16.4241 13.5587 16.3593 13.6649 16.315C13.771 16.2708 13.8849 16.248 13.9999 16.248C14.1149 16.248 14.2288 16.2708 14.335 16.315C14.4412 16.3593 14.5375 16.4241 14.6186 16.5057L17.2436 19.1307C17.3251 19.2118 17.3898 19.3082 17.434 19.4143C17.4781 19.5205 17.5008 19.6343 17.5008 19.7493C17.5008 19.8643 17.4781 19.9781 17.434 20.0843C17.3898 20.1905 17.3251 20.2869 17.2436 20.3679L14.6186 22.9929C14.5374 23.0743 14.441 23.1389 14.3348 23.1829C14.2287 23.2269 14.1148 23.2494 13.9999 23.2493ZM12.6122 19.7493L13.9999 21.1371L15.3877 19.7493L13.9999 18.3616L12.6122 19.7493ZM19.2499 17.9993C19.135 17.9994 19.0212 17.9768 18.915 17.9329C18.8089 17.8889 18.7124 17.8243 18.6313 17.7429L16.0063 15.1179C15.9248 15.0369 15.8601 14.9405 15.8159 14.8343C15.7718 14.7281 15.749 14.6143 15.749 14.4993C15.749 14.3843 15.7718 14.2705 15.8159 14.1643C15.8601 14.0582 15.9248 13.9618 16.0063 13.8807L18.6313 11.2557C18.7123 11.1741 18.8087 11.1093 18.9149 11.065C19.021 11.0208 19.1349 10.998 19.2499 10.998C19.3649 10.998 19.4788 11.0208 19.585 11.065C19.6912 11.1093 19.7875 11.1741 19.8686 11.2557L22.4936 13.8807C22.5751 13.9618 22.6398 14.0582 22.684 14.1643C22.7281 14.2705 22.7508 14.3843 22.7508 14.4993C22.7508 14.6143 22.7281 14.7281 22.684 14.8343C22.6398 14.9405 22.5751 15.0369 22.4936 15.1179L19.8686 17.7429C19.7874 17.8243 19.691 17.8889 19.5848 17.9329C19.4787 17.9768 19.3648 17.9994 19.2499 17.9993ZM17.8622 14.4993L19.2499 15.8871L20.6377 14.4993L19.2499 13.1116L17.8622 14.4993ZM13.9999 12.7493C13.885 12.7494 13.7712 12.7269 13.665 12.6829C13.5589 12.6389 13.4625 12.5743 13.3813 12.4929L10.7563 9.86794C10.6748 9.78687 10.6101 9.69048 10.5659 9.58432C10.5218 9.47815 10.499 9.3643 10.499 9.24932C10.499 9.13434 10.5218 9.02049 10.5659 8.91432C10.6101 8.80816 10.6748 8.71177 10.7563 8.63069L13.3813 6.00569C13.4623 5.92405 13.5587 5.85925 13.6649 5.81503C13.771 5.77081 13.8849 5.74805 13.9999 5.74805C14.1149 5.74805 14.2288 5.77081 14.335 5.81503C14.4412 5.85925 14.5375 5.92405 14.6186 6.00569L17.2436 8.63069C17.3251 8.71177 17.3898 8.80816 17.434 8.91432C17.4781 9.02049 17.5008 9.13434 17.5008 9.24932C17.5008 9.3643 17.4781 9.47815 17.434 9.58432C17.3898 9.69048 17.3251 9.78687 17.2436 9.86794L14.6186 12.4929C14.5374 12.5743 14.441 12.6389 14.3348 12.6829C14.2287 12.7269 14.1148 12.7494 13.9999 12.7493ZM12.6122 9.24932L13.9999 10.6371L15.3877 9.24932L13.9999 7.86157L12.6122 9.24932ZM8.74993 17.9993C8.63501 17.9994 8.5212 17.9768 8.41504 17.9329C8.30887 17.8889 8.21245 17.8243 8.1313 17.7429L5.5063 15.1179C5.42477 15.0369 5.36006 14.9405 5.31591 14.8343C5.27175 14.7281 5.24902 14.6143 5.24902 14.4993C5.24902 14.3843 5.27175 14.2705 5.31591 14.1643C5.36006 14.0582 5.42477 13.9618 5.5063 13.8807L8.1313 11.2557C8.21232 11.1741 8.30869 11.1093 8.41486 11.065C8.52104 11.0208 8.63491 10.998 8.74993 10.998C8.86494 10.998 8.97882 11.0208 9.085 11.065C9.19117 11.1093 9.28754 11.1741 9.36855 11.2557L11.9936 13.8807C12.0751 13.9618 12.1398 14.0582 12.184 14.1643C12.2281 14.2705 12.2508 14.3843 12.2508 14.4993C12.2508 14.6143 12.2281 14.7281 12.184 14.8343C12.1398 14.9405 12.0751 15.0369 11.9936 15.1179L9.36855 17.7429C9.28741 17.8243 9.19098 17.8889 9.08482 17.9329C8.97866 17.9768 8.86485 17.9994 8.74993 17.9993ZM7.36218 14.4993L8.74993 15.8871L10.1377 14.4993L8.74993 13.1116L7.36218 14.4993Z"
                    fill="#1A1A1A"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M14 1.375C13.8451 1.37492 13.6929 1.41599 13.559 1.494L3.059 7.619C2.92689 7.69609 2.8173 7.80646 2.74115 7.93911C2.665 8.07175 2.62495 8.22205 2.625 8.375V20.625C2.62495 20.778 2.665 20.9282 2.74115 21.0609C2.8173 21.1935 2.92689 21.3039 3.059 21.381L13.559 27.506C13.6928 27.5841 13.845 27.6253 14 27.6253C14.155 27.6253 14.3072 27.5841 14.441 27.506L24.066 21.8911L23.184 20.38L14 25.7367L4.375 20.1228V8.87812L14 3.26325L23.625 8.87725V15.375H25.375V8.375C25.375 8.22205 25.335 8.07175 25.2588 7.93911C25.1827 7.80646 25.0731 7.69609 24.941 7.619L14.441 1.494C14.3071 1.41599 14.1549 1.37492 14 1.375Z"
                    fill="#1A1A1A"
                    fill-opacity="0.7"
                  />
                </svg>

                <h1>USSD Service</h1>
              </div>
            </div>

            {/* <MerchanyHistoryChart /> */}
            <UssdServiceChart />
          </div>

          <div className="contain2">
            <div className="userdistribution">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.51986 1.77699C6.69741 -0.0454574 3.74265 -0.0454535 1.9202 1.77699L1.29541 2.40178C0.433981 3.26321 -0.155217 4.55409 0.180855 5.95246C0.696069 8.09622 2.24645 12.0027 6.86995 16.6262C11.4934 21.2497 15.4 22.8001 17.5437 23.3153C18.9421 23.6514 20.233 23.0622 21.0944 22.2008L21.7192 21.576C23.5416 19.7535 23.5416 16.7988 21.7192 14.9763L20.6355 13.8926C19.15 12.4072 16.8551 12.0974 15.0289 13.1358L14.9163 13.1998C14.168 13.6253 13.3083 13.5906 12.6992 13.1498C12.2078 12.7941 11.7381 12.4199 11.4072 12.089C11.0763 11.7581 10.702 11.2884 10.3464 10.797C9.90562 10.1879 9.87084 9.32822 10.2964 8.57988L10.3604 8.46726C11.3988 6.64108 11.089 4.34615 9.60355 2.86068L8.51986 1.77699ZM3.57012 3.42691C4.48134 2.51568 5.95872 2.51568 6.86995 3.42691L7.95364 4.5106C8.69637 5.25333 8.85127 6.40079 8.33206 7.31389L8.26802 7.42651C7.44564 8.87278 7.41678 10.7288 8.45614 12.1649C8.83791 12.6925 9.29671 13.2783 9.7573 13.7389C10.2179 14.1995 10.8037 14.6583 11.3312 15.04C12.7674 16.0794 14.6234 16.0505 16.0697 15.2282L16.1823 15.1641C17.0954 14.6449 18.2428 14.7998 18.9856 15.5425L20.0693 16.6262C20.9805 17.5375 20.9805 19.0148 20.0693 19.9261L19.4445 20.5509C18.9932 21.0022 18.4957 21.1444 18.089 21.0466C16.3751 20.6347 12.8478 19.3043 8.51986 14.9763C4.19191 10.6484 2.86149 7.12109 2.44959 5.40721C2.35183 5.00046 2.494 4.50302 2.94533 4.0517L3.57012 3.42691Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
              </svg>

              <p>Campaign Performnace</p>
            </div>
            {/* <Card /> */}
            <CampaignPerformanceReseller />
          </div>
        </div>
        {/* User distributions and campaign performance */}

        {/* table side  for transactions  */}
        {/* <div className={style.tablecontent}>
        <div className={style.content}>
          <h1>Recent History</h1>
          <Link href="/transaction">
            <button>
              See All <AiOutlineArrowRight size={17} />
            </button>
          </Link>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th style={{ display: "flex" }}>
                <input type="checkbox" />
                &nbsp; &nbsp; &nbsp; CUSTOMER&apos;&nbsp;S NAME
                <TiArrowUnsorted />
              </th>
              <th>EMAIL ADDRESS</th>
              <th>MERCHANT</th>
              <th>TYPE</th>
              <th>STATUS</th>
              <th>
                DATE
                <TiArrowUnsorted />
              </th>
              <th></th>
            </tr>
          </thead>
        </table>
        <div className={style.row}>
          <span>Showing 1-5 of entries</span>
          <div className={style.pagins}>
            <p>Rows per page:</p>
            <select>
              <option>5</option>
            </select>
            <div className={style.arrow}>
              <button
                onClick={() => {
                  // setSortDate(sortdate - 1);
                  // setEnd((prev) => prev - end);
                }}
              >
                <AiOutlineLeft />
              </button>
              <button>{sortdate}</button>
              <button>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </DashbaordLayout>
    </ResellerStyle>
  );
}

export default ResellerDashboard;
const ResellerStyle = styled.div`
  .overview {
    padding: 30px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: ab;
  }
  .overview p {
    color: #848d87;
    font-size: 13px;
    font-weight: 200;
    line-height: 18px;
  }
  .overview h1 {
    color: #090814;
    font-size: 29px;
    font-weight: 400;
    line-height: 38px;
  }
  .date {
    background-color: white;
    border: 1px solid gainsboro;
    height: 40px;
    padding: 10px;
    color: #344054;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    gap: 4px;
    position: relative;
  }
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 30px 0px 0px;
  }
  .calendar {
    position: absolute;
    top: 150px;
    z-index: 1;
    right: 0;
  }
  .transactions {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* margin: 0px 30px 0px 30px; */
    gap: 20px;
    border-radius: 10px;
  }
  /* .transactions>* {
     border-right: 1px solid #D5DBE5;
 }

 .transactions> :last-child {
     border-right: none;
 } */
  .mychart {
    position: absolute;
    right: 10px;
    width: 40%;
    top: 0;
  }
  .template {
    padding: 10px;
    width: 100%;
    box-shadow: 0px 0px 3px 0px gainsboro;
    display: flex;
    background-color: white;
    position: relative;
    border-radius: 7px;
    justify-content: space-between;

    /* margin: 20px 0px 20px 0px; */
  }

  .white {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .white h3 {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .white h2 {
    font-size: 33px;
    line-height: 43px;
    font-weight: 600;
  }

  .white h4 {
    font-size: 13px;
    color: #868fa0;
    font-weight: 400;
  }

  .white span {
    color: red;
    font-size: 13px;
    font-weight: 400;
  }
  .transactions {
    display: grid;
    box-shadow: 0px 0px 20px 0px #9c9c9c1a;
    grid-template-columns: repeat(4, 1fr);
    margin: 0px 30px 0px 30px;
    /* border-radius: 10px; */
  }
  .merchant {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .merchant p {
    font-size: 14px;
    color: #909090;
    line-height: 16px;
    font-weight: 300;
  }
  .container {
    padding: 0px 55px 30px 30px;
    display: grid;
    gap: 27px;
  }

  .container2 {
    padding: 0px 55px 30px 30px;
    display: grid;
    grid-template-columns: 40% 60%;
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
  .contain {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 0px 10px;
    border-radius: 10px;
  }
  .contain2 {
    background-color: white;
    overflow: hidden;
    border-radius: 20px;
  }
  .liner {
    background-color: #4318ff;
    width: 6px;
    height: 80px;
    border-radius: 5px;
  }
  .linec {
    background-color: #9e9ce9;
    width: 6px;
    height: 80px;
    border-radius: 5px;
  }
  .conts {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  .ussdsession {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0px 0px 0px 10px;
  }
  .ussdsession span {
    color: #5e5adb;
    line-height: 32px;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -2%;
  }
  .totals {
    display: flex;
    gap: 125px;
  }
  .totals span {
    color: #027a48;
    letter-spacing: -2%;
    line-height: 20px;
    font-size: 11px;
    font-weight: 600;
  }
  .totals p {
    color: #454545;
    letter-spacing: -2%;
    line-height: 24px;
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
    width: 70%;
  }
  .line1 {
    height: 15px;
    width: 15px;
    border-radius: 3px;
    background-color: #d94040;
  }
  .line2 {
    height: 14px;
    border-radius: 3px;
    width: 14px;
    background-color: #4318ff;
  }
  .merch {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 20%;
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
  .card {
    display: flex;
  }
  .btn {
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #f0f0f0;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 30px;
  }
  .btn button {
    width: 20rem;
    padding: 10px;
    font-size: 12px;
    background-color: transparent;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }
  .tablecontent {
    background-color: white;
    margin: 0px 30px 0px 30px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .content h1 {
    font-weight: 500;
  }
  .content button {
    background-color: transparent;
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 7rem;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }

  .table th {
    font-weight: 500;
    text-align: left;
    font-size: 13px;
    padding: 18px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 22px;
    font-weight: 500;
    font-size: 14px;
    border-top: 1px solid gainsboro;
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

  /* @media screen and (max-width:1293px) {
    .container{
        grid-template-columns: repeat(1, 1fr);
    }
    .contain{
        width: 85vw;
    }
}
@media screen and (max-width:1555px) {
    .transactions {
            grid-template-columns: repeat(3, 1fr);
           
        }
        .white{
            border-radius: 5px;
        }
}
@media screen and (max-width:1019px) {
    .transactions {
            grid-template-columns: repeat(2, 1fr);
           
        }
        .white{
            border-radius: 5px;
        }
}
@media screen and (max-width:789px) {
    .transactions {
            grid-template-columns: repeat(1, 1fr);
           
        }
        .white{
            border-radius: 5px;
        }
} */
`;
