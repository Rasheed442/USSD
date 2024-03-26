import DashbaordLayout from "@/Layouts/DashbaordLayout";
import style from "../styles/ComponentStyle/admindashboard.module.css";
import Image from "next/image";
import { tradedown } from "@/public/ICON";
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
import ManagerHeader from "./ManagerHeader";
import Stacked from "@/ChartComponent/Stacked";

function ManagerDashboard({ Managerlabels }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(state);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(true);
  const [type, setType] = useState(false);
  const [sortdate, setSortDate] = useState(1);
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(0);

  return (
    <DashbaordLayout>
      <ManagerHeader title="Dashboard" />
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
            <FiCalendar size={20} /> Jan 6, 2023 - Jan 13, 2023
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
        {Managerlabels?.map((l) => {
          return (
            <div className={style.white}>
              <div className={style.merchant}>
                <Image src={l.icon} alt="" width={60} height={60} />
                <p>{l.details}</p>
              </div>
              <h2>{l.amount}</h2>
              <div style={{ display: "flex", gap: "10px" }}>
                <Image src={tradedown} alt="" width={15} height={15} />
                <h4>
                  <span>{l.rate}</span> down from last week
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.container}>
        <div className={style.contain}>
          <div className={style.history}>
            <div className={style.merch}>
              <h1>Merchant History</h1>
              <p>
                {" "}
                Shows a snapshot of top merchants performances on your system
              </p>
            </div>
            <div className={style.content}>
              <Link href="/cards">
                <button style={{ padding: "10px" }}>
                  See All <AiOutlineArrowRight size={17} />
                </button>
              </Link>
            </div>
          </div>
          <Stacked />
        </div>

        <div className={style.contain}>
          <div className={style.history}>
            <div className={style.merch}>
              <h1>Cards</h1>
              <p>(The description goes here)</p>
            </div>
            <div className={style.content}>
              <Link href="/cards">
                <button style={{ padding: "10px" }}>
                  See All <AiOutlineArrowRight size={17} />
                </button>
              </Link>
            </div>
          </div>
          <div className={style.btn}>
            <button
              onClick={() => {
                setStatus(true), setType(false);
              }}
              style={{
                backgroundColor: status ? "white" : "transparent",
                color: status ? "#5E5ADB" : "",
              }}
            >
              Type
            </button>
            <button
              onClick={() => {
                setType(true), setStatus(false);
              }}
              style={{
                backgroundColor: type ? "white" : "transparent",
                color: type ? "#5E5ADB" : "black",
              }}
            >
              Status
            </button>
          </div>
          <div className={style.card}>
            {type ? <Card /> : ""}
            {status ? <Card2 /> : ""}
          </div>
        </div>
      </div>

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
          <tbody>
            {history.slice(end, start).map((h) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" />
                    &nbsp; &nbsp;
                    <Image
                      src={h.icon}
                      width={30}
                      height={30}
                      style={{ marginBottom: "-8px", marginRight: "10px" }}
                    />
                    {h.customer_name}
                  </td>

                  <td>{h.email_address}</td>

                  <td>{h.merchant}</td>

                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Image src={h.icon2} width={40} height={40} />
                    <p>
                      {h.type}
                      <br />
                      <span>{h.expiry}</span>
                    </p>
                  </td>

                  <td>
                    <div
                      style={{
                        color:
                          h.status === "Tokenized"
                            ? "#027A48"
                            : h.status === "De-tokenized"
                            ? "#B42318"
                            : "red",

                        backgroundColor:
                          h.status === "Tokenized"
                            ? "#ECFDF3"
                            : h.status === "De-tokenized"
                            ? "#FFFAEB"
                            : "#FEF3F2",
                        display: "inline-flex",
                        gap: "10px",
                        width: " 100%",
                        justifyContent: "center",
                        padding: "9px",
                        borderRadius: " 5px",
                      }}
                    >
                      <TiMediaRecord /> {h.status}
                    </div>
                  </td>

                  <td>{h.date}</td>

                  <td>
                    <FiMoreVertical size={20} />
                  </td>
                </tr>
              );
            })}
          </tbody>
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

export default ManagerDashboard;
