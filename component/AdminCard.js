import DashbaordLayout from "@/Layouts/DashbaordLayout";
import React, { useState, useEffect } from "react";
import style from "../styles/PagesStyle/card.module.css";
import styles from "../styles/ComponentStyle/tokenize.module.css";
import { tokenizecards } from "@/TableComponent/TokenizeTable";
import { TiArrowUnsorted } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { menu, dashbar } from "@/public/Image";
import Image from "next/image";
import AdminHeader from "@/component/AdminHeader";
import ButtonLayout from "@/Layouts/ButtonLayout";
import CreateService from "./CreateService";
function AdminCard() {
  const [createService, SetCreateService] = useState(false);
  return (
    <DashbaordLayout>
      <AdminHeader title="Cards" />
      {createService && <CreateService closeService={SetCreateService} />}
      {createService ? (
        ""
      ) : (
        <div className={style.topp}>
          <div className={style.header}>
            <h1>USSD Service</h1>
            <p>Manage all services and monitor them</p>
          </div>
          <div className={style.btn}>
            <ButtonLayout
              onClick={() => {
                SetCreateService(true);
              }}
              styles={{ backgroundColor: "#5E5ADB" }}
              placeholder="New Service"
            />
          </div>
        </div>
      )}
      {createService ? (
        ""
      ) : (
        <div className={style.white}>
          <>
            <div className={styles.container}>
              <div className={styles.search}>
                <AiOutlineSearch size={20} />
                <input placeholder="Search" />
              </div>
            </div>
            <div className={styles.tablecontent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ display: "flex", gap: "10px" }}>
                      <input type="checkbox" /> SERVICE NAME
                      <TiArrowUnsorted />
                    </th>
                    <th>CLIENT</th>
                    <th>SERVICE TYPE</th>
                    <th>ASSOCIATED SHORTCODE</th>
                    <th>ROUTE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenizecards.map((t) => {
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
                          {t.service_name}
                        </td>
                        <td>{t.client}</td>
                        <td>{t.service_type}</td>
                        <td>{t.Associated_shortcode}</td>
                        <td>{t.route}</td>
                        <td>
                          <FiMoreVertical size={20} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className={styles.row}>
                <span>Showing 1-5 of entries</span>
                <div className={styles.pagins}>
                  <p>Rows per page:</p>
                  <select>
                    <option>5</option>
                  </select>
                  <div className={styles.arrow}>
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
      )}
    </DashbaordLayout>
  );
}

export default AdminCard;
