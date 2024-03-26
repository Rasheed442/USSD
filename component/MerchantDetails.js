import React, { useState } from "react";
import style from "../styles/ComponentStyle/breakdown.module.css";
import { transactions } from "@/TableComponent/TransactionTable";
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineDown,
  AiOutlineCloudDownload,
  AiOutlineCalendar,
} from "react-icons/ai";
import { CiUser } from "react-icons/ci";

import { TiArrowUnsorted, TiMediaRecord } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import { funke, netflix, visa } from "@/public/Image";
import { mail, call, user } from "@/public/ICON";
import { CiCalendar } from "react-icons/ci";

import Image from "next/image";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import Overview from "@/UserManagementComp/Overview";
import RouteSetting from "@/UserManagementComp/RouteSetting";
import ShortCode from "@/UserManagementComp/ShortCode";
import UssdSession from "@/UserManagementComp/UssdSession";
function MerchantDetails({ CloseMerchantDetails }) {
  const [searh, setSearch] = useState();
  const [showdate, setShowDate] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // overview settings
  const [overview, setOverview] = useState(true);
  const [routesetting, setRouteSetting] = useState(false);
  const [shortcode, setShortcode] = useState(false);
  const [ussdsessions, setUssdSesions] = useState(false);
  const [credit, setCredit] = useState(false);
  const [transaction, setTransactions] = useState(false);
  const [creditlog, setCreditlog] = useState(false);
  const [reportanalytics, setReportAnalytics] = useState(false);

  return (
    <>
      <div className={style.bg}>
        <div className={style.container}>
          <div className={style.head}>
            <h1>
              <AiOutlineArrowLeft
                size={20}
                onClick={() => {
                  CloseMerchantDetails(false);
                }}
              />
              Funke Obafemi
            </h1>
            <span>14 merchants</span>
          </div>
        </div>
        <div className={style.btn}>
          <button style={{ border: "1px solid gainsboro" }}>
            Actions
            <AiOutlineDown size={15} />
          </button>
        </div>
      </div>
      <div className={style.white}>
        <div className={style.ww}>
          <div className={style.overviewsetting}>
            <p
              style={{
                backgroundColor: overview ? "#5E5ADB26" : "",
                color: overview ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(true);
                setRouteSetting(false);
                setShortcode(false);
                setUssdSesions(false);
                setCredit(false);
                setTransactions(false);
                setCreditlog(false);
                setReportAnalytics(false);
              }}
            >
              Overview{" "}
            </p>
            <p
              style={{
                backgroundColor: routesetting ? "#5E5ADB26" : "",
                color: routesetting ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(true);
                setShortcode(false);
                setUssdSesions(false);
                setCredit(false);
                setTransactions(false);
                setCreditlog(false);
                setReportAnalytics(false);
              }}
            >
              Route Settings
            </p>
            <p
              style={{
                backgroundColor: shortcode ? "#5E5ADB26" : "",
                color: shortcode ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(false);
                setShortcode(true);
                setUssdSesions(false);
                setCredit(false);
                setTransactions(false);
                setCreditlog(false);
                setReportAnalytics(false);
              }}
            >
              Shortcode
            </p>
            <p
              style={{
                backgroundColor: ussdsessions ? "#5E5ADB26" : "",
                color: ussdsessions ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(false);
                setShortcode(false);
                setUssdSesions(true);
                setCredit(false);
                setTransactions(false);
                setCreditlog(false);
                setReportAnalytics(false);
              }}
            >
              USSD Sessions
            </p>
            <p
              style={{
                backgroundColor: credit ? "#5E5ADB26" : "",
                color: credit ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(false);
                setShortcode(false);
                setUssdSesions(false);
                setCredit(true);
                setTransactions(false);
                setCreditlog(false);
                setReportAnalytics(false);
              }}
            >
              Credit/Debit
            </p>
            <p
              style={{
                backgroundColor: transaction ? "#5E5ADB26" : "",
                color: transaction ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(false);
                setShortcode(false);
                setUssdSesions(false);
                setCredit(false);
                setTransactions(true);
                setCreditlog(false);
                setReportAnalytics(false);
              }}
            >
              Transactions
            </p>
            <p
              style={{
                backgroundColor: creditlog ? "#5E5ADB26" : "",
                color: creditlog ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(false);
                setShortcode(false);
                setUssdSesions(false);
                setCredit(false);
                setTransactions(false);
                setCreditlog(true);
                setReportAnalytics(false);
              }}
            >
              Credit Log
            </p>
            <p
              style={{
                backgroundColor: reportanalytics ? "#5E5ADB26" : "",
                color: reportanalytics ? "#5E5ADB" : "",
              }}
              onClick={() => {
                setOverview(false);
                setRouteSetting(false);
                setShortcode(false);
                setUssdSesions(false);
                setCredit(false);
                setTransactions(false);
                setCreditlog(false);
                setReportAnalytics(true);
              }}
            >
              Report Analytics
            </p>
          </div>
        </div>
        {overview && <Overview />}
        {routesetting && <RouteSetting />}
        {shortcode && <ShortCode />}
        {ussdsessions && <UssdSession />}
      </div>
    </>
  );
}

export default MerchantDetails;
