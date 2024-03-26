import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";

import style from "../styles/UserManagementComp/shortcode.module.css";
function UssdSession() {
  const [showdate, setShowDate] = useState(false);

  return (
    <>
      <div className={style.top}>
        <h1>Sent Campaign</h1>
        <span>Manage sent campaign in the table below.</span>
      </div>
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
      <table className={style.table}>
        <thead>
          <tr>
            <th>DATE</th>
            <th>ROUTE</th>
            <th>SHORTCODE</th>
            <th>NUMBER OF RECIPENTS</th>
            <th>USSD TYPE</th>
            <th>USSD SESSION</th>
            <th>COST</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default UssdSession;
