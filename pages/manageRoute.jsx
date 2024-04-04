import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import style from "../styles/PagesStyle/manageroute.module.css";
import React, { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";

import { AiOutlineSearch } from "react-icons/ai";
import NewRoute from "@/component/NewRoute";
function manageRoute() {
  const [route, setRoute] = useState(false);
  return (
    <DashbaordLayout>
      <AdminHeader title="Manage Route" />
      {route && <NewRoute close={setRoute} />}
      {route ? (
        ""
      ) : (
        <div className={style.bg}>
          <div className={style.container}>
            <h1>Manage Routes</h1>
            <p>Manage IVR Routes and routing rules.</p>
          </div>
          <button
            //  onClick={() => setMerchantDetails(true)}
            onClick={() => setRoute(true)}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.99999 0C6.4142 0 6.74999 0.335786 6.74999 0.75V5.25H11.25C11.6642 5.25 12 5.58579 12 6C12 6.41422 11.6642 6.75 11.25 6.75H6.74999V11.25C6.74999 11.6642 6.4142 12 5.99999 12C5.58578 12 5.24999 11.6642 5.24999 11.25V6.75H0.75C0.335786 6.75 0 6.41422 0 6C0 5.58579 0.335786 5.25 0.75 5.25H5.24999V0.75C5.24999 0.335786 5.58578 0 5.99999 0Z"
                fill="white"
              />
            </svg>
            New Route
          </button>
        </div>
      )}

      {route ? (
        ""
      ) : (
        <div className={style.white}>
          <div className={style.main}>
            {/* <p>
                  <span>sort:</span>Date Created <AiOutlineDown size={10} />
                </p> */}
            <div className={style.search}>
              <AiOutlineSearch size={20} />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className={style.table}>
            <thead>
              <tr>
                <th>
                  ROUTE NAME
                  {/* <TiArrowUnsorted size={15} /> */}
                </th>
                <th>SIP</th>
                <th>
                  COVERAGE
                  {/* <TiArrowUnsorted size={13} /> */}
                </th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      )}
    </DashbaordLayout>
  );
}

export default manageRoute;
