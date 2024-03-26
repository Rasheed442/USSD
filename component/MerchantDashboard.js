import DashbaordLayout from "@/Layouts/DashbaordLayout";
import style from "../styles/ComponentStyle/merchantdashboard.module.css";
import Image from "next/image";
import Header from "./Header";
import { deleted_token, total_merchant, tradedown } from "@/public/ICON";
import {
  tokenized,
  de_tokenized,
  customer_request,
  femi,
} from "@/public/Image";
import Link from "next/link";
import MerchanyHistoryChart from "@/ChartComponent/MerchanyHistoryChart";
import Card from "@/ChartComponent/Card";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FiMoreVertical, FiCalendar } from "react-icons/fi";
import { TiArrowUnsorted, TiMediaRecord } from "react-icons/ti";
import Card2 from "@/ChartComponent/Card2";
import { history } from "@/TableComponent/DashboardTable";
import CustomerRequest from "@/ChartComponent/CustomerRequest";
import TokenizedCard from "@/ChartComponent/TokenizedCard";
import MerchantHeader from "./MerchantHeader";

function MerchantDashboard({ Merchantlabels }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  console.log(state);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [type, setType] = useState(true);

  return (
    <DashbaordLayout>
      <MerchantHeader title="Dashboard" />
      <div className={style.main}>
        <div className={style.overview}>
          <h1>Overview</h1>
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
        {Merchantlabels.map((m) => {
          return (
            <div className={style.template}>
              <div className={style.white}>
                <div className={style.merchant}>
                  <Image src={m.icon} alt="" width={60} height={60} />
                  <p>{m.details}</p>
                </div>
                <h2>{m.amount}</h2>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <p>{m.sign}</p>
                  <h4>
                    <span style={{ color: m.rate > "2.1%" ? "green" : "red" }}>
                      {m.rate}
                    </span>{" "}
                    Vs last week
                  </h4>
                </div>
              </div>
              <div className={style.mychart}>{m.charts}</div>
            </div>
          );
        })}
      </div>

      <div className={style.container}>
        <div className={style.contain}>
          <div className={style.history}>
            <div className={style.merch}>
              <h1>Cards</h1>
              <p>(The description goes here)</p>
            </div>
            <div className={style.content}>
              <Link href="/cards">
                <button style={{ padding: "10px" }}>
                  See All <AiOutlineDown />
                </button>
              </Link>
            </div>
          </div>
          <div className={style.btn}>
            <button
              onClick={() => {
                setType(true), setStatus(false);
              }}
              style={{
                backgroundColor: type ? "white" : "transparent",
                color: type ? "#5E5ADB" : "black",
              }}
            >
              Type
            </button>
            <button
              onClick={() => {
                setStatus(true), setType(false);
              }}
              style={{
                backgroundColor: status ? "white" : "transparent",
                color: status ? "#5E5ADB" : "",
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

        <div className={style.contain}>
          <div className={style.history}>
            <div className={style.merch}>
              <h1>Customer Request</h1>
              <p>Shows a snapshot of request on your system</p>
            </div>
          </div>
          <div className={style.btn2}>
            <button>
              <TiMediaRecord style={{ color: "#962DFF" }} size={18} />
              Tokenized Cards
            </button>
            <button>
              <TiMediaRecord style={{ color: "#FF718B" }} size={18} />
              De-Tokenized Cards
            </button>
            <button>
              <TiMediaRecord style={{ color: "#962DFF" }} size={18} />
              Deleted Cards
            </button>
          </div>
          <div className={style.card}>
            <CustomerRequest />
          </div>
        </div>
      </div>

      <div className={style.tablecontent}>
        <div className={style.content}>
          <h1>Recent History</h1>
          <button>
            See All <AiOutlineArrowRight />
          </button>
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
            {history.map((h) => {
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
    </DashbaordLayout>
  );
}

export default MerchantDashboard;
