import DashbaordLayout from "@/Layouts/DashbaordLayout";
import React, { useState } from "react";
import style from "../styles/PagesStyle/transaction.module.css";
import { TbCloudDownload } from "react-icons/tb";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { TiArrowUnsorted, TiMediaRecord } from "react-icons/ti";
import { transactions } from "@/TableComponent/TransactionTable";
import Image from "next/image";
import MerchantHeader from "./MerchantHeader";
function MerchantTransaction() {
  const [search, setSearch] = useState();
  return (
    <DashbaordLayout>
      <MerchantHeader title="Transactions" />
      <div className={style.bg}>
        <div className={style.container}>
          <div className={style.head}>
            <h1>Transactions Merchant</h1>
            {/* <span>600 members</span> */}
          </div>
          <p>Here shows a list of all transactions performed so far</p>
        </div>
        <button>
          <TbCloudDownload size={20} /> Download CSV
        </button>
      </div>

      <div className={style.white}>
        <div className={style.main}>
          <div className={style.search}>
            <AiOutlineSearch size={20} />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={style.sortdate}>
            <button>
              <MdFilterList size={25} /> Filter
            </button>
            <p>
              <span>sort:</span>Date Created <AiOutlineDown size={10} />
            </p>
          </div>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th style={{ display: "flex" }}>
                <input type="checkbox" /> &nbsp; CUSTOMER&apos;&nbsp;S NAME
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
            {transactions
              ?.filter((h) => {
                if (!search?.length) return h;
                else if (
                  Object.values(h).some((value) =>
                    value?.toString()?.toLowerCase()?.includes(search)
                  )
                ) {
                  return h;
                }
              })
              .map((h) => {
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
                              : h.status === "Disabled"
                              ? "#464F60"
                              : "red",

                          backgroundColor:
                            h.status === "Tokenized"
                              ? "#ECFDF3"
                              : h.status === "De-tokenized"
                              ? "#FFFAEB"
                              : h.status === "Disabled"
                              ? "#F1F3F6"
                              : "#FEF3F2",
                          display: "inline-flex",
                          alignItems: "center",
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

export default MerchantTransaction;
