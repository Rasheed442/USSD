import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";

import style from "../styles/UserManagementComp/shortcode.module.css";
function ShortCode() {
  const [showdate, setShowDate] = useState(false);

  return (
    <>
      <div className={style.top}>
        <h1>Shortcode</h1>
        <span>Shortcode request from users.</span>
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
            <th style={{ display: "flex" }}>
              <input type="checkbox" />
              &nbsp; &nbsp; &nbsp; SHORT&apos;&nbsp;CODE
            </th>
            <th>ADDED ON</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default ShortCode;
