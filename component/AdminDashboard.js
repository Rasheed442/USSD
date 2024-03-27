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
import CampaignPerformnace from "@/ChartComponent/CampaignPerformnace";

function AdminDashboard({ Adminlabels, Merchantlabels }) {
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
    <DashbaordLayout>
      <AdminHeader title="Dashboard" />
      <div className={style.main}>
        <div className={style.overview}>
          <h1>Overview </h1>
          <p>
            This overview provides a comprehensive snapshot of the tokenization
            processes over time.
          </p>
        </div>
        <div>
          <button onClick={() => setShow(!show)} className={style.date}>
            Showing for:
            <FiCalendar size={17} /> Jan 6, 2023 - Jan 13, 2023
          </button>
          {show && (
            <div className={style.calendar}>
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
      <div className={style.transactions}>
        {Merchantlabels?.map((m) => {
          return (
            <div className={style.template}>
              <div className={style.white}>
                <div className={style.merchant}>
                  <Image src={m.icon} alt="" width={45} height={45} />
                  <p>{m?.details}</p>
                </div>
                <h2 style={{ fontWeight: "500" }}>{m?.amount}</h2>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <p>{m.sign}</p>
                  <h4>
                    <span style={{ color: m.rate > "2.1%" ? "green" : "red" }}>
                      {m.rate}
                    </span>{" "}
                    vs last week
                  </h4>
                </div>
              </div>
              <div className={style.mychart}>{m?.charts}</div>
            </div>
          );
        })}
      </div>
      <div>
        <RevenueReport />
      </div>

      {/* call duration analysis and outbound call distributiom */}
      <div className={style.container}>
        <div className={style.contain}>
          <div className={style.history}>
            <div className={style.merch}>
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
            <div className={style.bounds}>
              <div className={style.call}>
                <div className={style.line2}></div>
                <p>Completed Session</p>
              </div>
              <div className={style.call}>
                <div className={style.line1}></div>
                <p>Incomplete Session</p>
              </div>
            </div>
          </div>
          <div className={style.ussdsession}>
            <span>563.5K</span>
            <div className={style.totals}>
              <p>
                Total USSD Session &nbsp; &nbsp;<span>+2.54%</span>
              </p>
            </div>
          </div>
          {/* <MerchanyHistoryChart /> */}
          <CustomerRequest />
        </div>

        <div className={style.contain2}>
          <div className={style.userdistribution}>
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
                d="M14.0006 6.33398C11.4233 6.33398 9.33392 8.42332 9.33392 11.0007C9.33392 13.578 11.4233 15.6673 14.0006 15.6673C16.5779 15.6673 18.6673 13.578 18.6673 11.0007C18.6673 8.42332 16.5779 6.33398 14.0006 6.33398ZM11.6673 11.0007C11.6673 9.71199 12.7119 8.66732 14.0006 8.66732C15.2892 8.66732 16.3339 9.71199 16.3339 11.0007C16.3339 12.2893 15.2892 13.334 14.0006 13.334C12.7119 13.334 11.6673 12.2893 11.6673 11.0007Z"
                fill="#1A1A1A"
                fill-opacity="0.7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0006 26.1673C12.6742 26.1673 10.7618 25.8538 9.3104 25.1869C8.59845 24.8597 7.83454 24.3744 7.38394 23.6484C7.14607 23.2651 6.99578 22.8133 7.0007 22.3104C7.00557 21.8124 7.16177 21.34 7.41754 20.9072C8.58709 18.9278 11.0134 16.834 14.0006 16.834C16.9878 16.834 19.4141 18.9278 20.5836 20.9072C20.8394 21.34 20.9956 21.8124 21.0005 22.3104C21.0054 22.8133 20.8551 23.2651 20.6172 23.6484C20.1666 24.3744 19.4027 24.8597 18.6908 25.1869C17.2394 25.8538 15.3269 26.1673 14.0006 26.1673ZM9.42638 22.0942C9.33703 22.2454 9.33405 22.3205 9.33392 22.3332C9.33382 22.3417 9.33354 22.3648 9.36649 22.4179C9.45912 22.5672 9.72813 22.8109 10.2847 23.0667C11.3705 23.5656 12.9376 23.834 14.0006 23.834C15.0636 23.834 16.6307 23.5656 17.7164 23.0667C18.273 22.8109 18.5421 22.5672 18.6347 22.4179C18.6676 22.3648 18.6674 22.3422 18.6673 22.3338C18.6671 22.321 18.6641 22.2454 18.5748 22.0942C17.668 20.5596 15.8947 19.1673 14.0006 19.1673C12.1065 19.1673 10.3331 20.5596 9.42638 22.0942Z"
                fill="#1A1A1A"
                fill-opacity="0.7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.91725 14.5007C2.91725 12.5677 4.48425 11.0007 6.41725 11.0007C8.35025 11.0007 9.91725 12.5677 9.91725 14.5007C9.91725 16.4336 8.35025 18.0007 6.41725 18.0007C4.48425 18.0007 2.91725 16.4336 2.91725 14.5007ZM6.41725 13.334C5.77292 13.334 5.25058 13.8563 5.25058 14.5007C5.25058 15.145 5.77292 15.6673 6.41725 15.6673C7.06158 15.6673 7.58392 15.145 7.58392 14.5007C7.58392 13.8563 7.06158 13.334 6.41725 13.334Z"
                fill="#1A1A1A"
                fill-opacity="0.7"
              />
              <path
                d="M3.37894 23.186C3.09247 23.7632 2.39238 23.9988 1.81523 23.7123C1.23808 23.4259 1.00243 22.7258 1.2889 22.1486C1.71751 21.2851 2.36626 20.4181 3.18237 19.7547C3.9988 19.091 5.04498 18.584 6.23895 18.584C6.88328 18.584 7.40562 19.1063 7.40562 19.7507C7.40562 20.395 6.88328 20.9173 6.23895 20.9173C5.72447 20.9173 5.18149 21.1366 4.65418 21.5652C4.12656 21.9941 3.67703 22.5854 3.37894 23.186Z"
                fill="#1A1A1A"
                fill-opacity="0.7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.4457 14.5007C18.4457 12.5677 20.0127 11.0007 21.9457 11.0007C23.8787 11.0007 25.4457 12.5677 25.4457 14.5007C25.4457 16.4336 23.8787 18.0007 21.9457 18.0007C20.0127 18.0007 18.4457 16.4336 18.4457 14.5007ZM21.9457 13.334C21.3013 13.334 20.779 13.8563 20.779 14.5007C20.779 15.145 21.3013 15.6673 21.9457 15.6673C22.59 15.6673 23.1123 15.145 23.1123 14.5007C23.1123 13.8563 22.59 13.334 21.9457 13.334Z"
                fill="#1A1A1A"
                fill-opacity="0.7"
              />
              <path
                d="M26.7174 22.1486C27.0039 22.7258 26.7682 23.4259 26.1911 23.7123C25.6139 23.9988 24.9138 23.7632 24.6274 23.186C24.3293 22.5854 23.8797 21.9941 23.3521 21.5652C22.8248 21.1366 22.2818 20.9173 21.7673 20.9173C21.123 20.9173 20.6007 20.395 20.6007 19.7507C20.6007 19.1063 21.123 18.584 21.7673 18.584C22.9613 18.584 24.0075 19.091 24.8239 19.7547C25.64 20.4181 26.2888 21.2851 26.7174 22.1486Z"
                fill="#1A1A1A"
                fill-opacity="0.7"
              />
            </svg>
            <p>User Distribution</p>
          </div>
          <Card />
          <div className={style.top}>
            <div className={style.client}>
              <div className={style.liner}></div>
              <div className={style.conts}>
                <span>Resellers</span>
                <p>2,200</p>
              </div>
            </div>
            <div className={style.client}>
              <div className={style.linec}></div>
              <div className={style.conts}>
                <span>Clients</span>
                <p>2,800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.contain}>
          <div className={style.history}>
            <div className={style.merch}>
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
          <USSDSERVICE />
        </div>

        <div className={style.contain2}>
          <div className={style.userdistribution}>
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
          <CampaignPerformnace />
        </div>
      </div>
      {/* User distributions and campaign performance */}

      {/* table side  for transactions  */}
      <div className={style.tablecontent}>
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
      </div>
    </DashbaordLayout>
  );
}

export default AdminDashboard;
