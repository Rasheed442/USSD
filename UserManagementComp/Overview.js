import React, { useState } from "react";
import style from "../styles/UserManagementComp/overview.module.css";
import { transactions } from "@/TableComponent/TransactionTable";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

import { mail, call, user } from "@/public/ICON";
import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
function Overview() {
  const [searh, setSearch] = useState();
  const [showdate, setShowDate] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div>
      <div className={style.top}>
        <div className={style.main}>
          <span>PROFILE</span>
          <div className={style.admin}>
            <Image src="/funke.svg" width={150} height={150} alt="" />
            <div className={style.name}>
              <h2>Netflix Inc.</h2>
              <p>RESELLER ACCOUNT</p>
              <span>
                Website Status:{" "}
                <Image src="/switch.svg" width={30} height={30} />
              </span>
            </div>
          </div>
          <p>
            <CiCalendar size={20} /> Member Since:
            <span>Fri 28th Jul 2023 3:12pm</span>
          </p>
          <p>
            <CiUser size={20} /> Login ID:
            <span>abcsm</span>
          </p>
        </div>
        <div className={style.infomation}>
          <h2>CONTACT INFORMATION</h2>
          <div className={style.info}>
            <Image src={mail} width={30} height={30} alt="" />
            <div className={style.content}>
              <span>Email</span>
              <p>funkeoba@gmail.com</p>
            </div>
          </div>
          <div className={style.info}>
            <Image src={call} width={30} height={30} alt="" />
            <div className={style.content}>
              <span>Phone</span>
              <p>(234) 800 234 4587</p>
            </div>
          </div>
          <div className={style.info}>
            <Image src={user} width={30} height={30} alt="" />
            <div className={style.content}>
              <span>Account Manager</span>
              <Image src="/prof.svg" width={160} height={50} alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1
        style={{
          padding: "20px 30px 0px 20px",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Activity Log
      </h1>
      <div className={style.contain}>
        <div className={style.search}>
          <AiOutlineSearch size={22} />
          <input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={style.sort}>
          <button
            onClick={() => {
              setShowDate(!showdate);
            }}
          >
            <AiOutlineCalendar />
            Jan 6, 2023 – Jan 13, 2023
          </button>
        </div>
      </div>
      {showdate && (
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
      <table className={style.table}>
        <thead>
          <tr>
            <th>TIMESTAP</th>
            <th>TYPE</th>
            <th>IP</th>
            <th>ACTIVITY</th>
            <th>UPLINE RESELLER</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((h) => {
            return (
              <tr>
                <td>{h.TIMESTAP}</td>

                <td>{h.type}</td>

                <td>{h.IP}</td>

                <td>{h.activity}</td>

                <td>{h.upline}</td>
                <td style={{ color: "#D92D20", fontWeight: "500" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "90px",
                      gap: "10px",
                    }}
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.5C15.5 0.5 20 5 20 10.5C20 16 15.5 20.5 10 20.5C4.5 20.5 0 16 0 10.5C0 5 4.5 0.5 10 0.5ZM10 2.5C8.1 2.5 6.4 3.1 5.1 4.2L16.3 15.4C17.3 14 18 12.3 18 10.5C18 6.1 14.4 2.5 10 2.5ZM14.9 16.8L3.7 5.6C2.6 6.9 2 8.6 2 10.5C2 14.9 5.6 18.5 10 18.5C11.9 18.5 13.6 17.9 14.9 16.8Z"
                        fill="#D92D20"
                      />
                    </svg>

                    {h.Actions}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;
