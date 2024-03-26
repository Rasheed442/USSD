import React, { useState, useEffect } from "react";
import style from "../styles/ComponentStyle/breakdown.module.css";
import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineDown,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { funke, menu, dashbar, netflix2 } from "@/public/Image";
import { mail, call } from "@/public/ICON";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { Mymanager } from "@/TableComponent/ManagerTable";
import { history } from "@/TableComponent/MerchantTable";
import Axios from "axios";
function Breakedown({ closeBreakdown }) {
  const [showdate, setShowDate] = useState(false);
  const [collection, setCollection] = useState(true);
  const [search, setSearch] = useState();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const merchant = [
    {
      merchant_name: "Netflix",
      request: "200",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "22",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "34",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "500",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "33",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "235",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "560",
      merchant_img: netflix2,
    },
    {
      merchant_name: "Netflix",
      request: "82",
      merchant_img: netflix2,
    },
  ];

  const managerid =
    typeof window !== "undefined"
      ? window.localStorage.getItem("managerid")
      : null;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_API_MANAGER}managers$`, config).then(
      (response) => {
        console.log(response?.data);
      }
    );
    // .catch((err) => {
    //   err?.response?.code ||
    //     (err?.response?.code === 500 && "") ||
    //     toast.error(err?.message);
    //   setLoading(false);
    // });
  }, []);

  return (
    <>
      <div className={style.bg}>
        <div className={style.container}>
          <div className={style.head}>
            <h1>
              <AiOutlineArrowLeft
                size={25}
                onClick={() => {
                  closeBreakdown(false);
                }}
              />
              Funke Obafemi
            </h1>
            <span>14 merchants</span>
          </div>
          <p>
            This page shows a breakdown of different merchants assigned to this
            manager
          </p>
        </div>
      </div>
      <div className={style.white}>
        <div className={style.top}>
          <div className={style.main}>
            <span>PROFILE</span>
            <div className={style.admin}>
              <Image src={funke} width={130} height={130} alt="" />
              <div className={style.name}>
                <h2>Funke Obafemi</h2>
                <p>Manager Admin</p>
                <span>ID: 156372</span>
              </div>
            </div>
          </div>
          <div className={style.infomation}>
            <h2>CONTACT INFORMATION</h2>
            <div className={style.info}>
              <Image src={mail} width={50} height={50} alt="" />
              <div className={style.content}>
                <span>Email</span>
                <p>funkeoba@gmail.com</p>
              </div>
            </div>
            <div className={style.info}>
              <Image src={call} width={50} height={50} alt="" />
              <div className={style.content}>
                <span>Phone</span>
                <p>(234) 800 234 4587</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.line}></div>
        <h1 style={{ padding: "30px", fontSize: "24px", fontWeight: "500" }}>
          Merchants
        </h1>
        <div className={style.contain}>
          <div className={style.search}>
            <AiOutlineSearch size={25} />
            <input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={style.sort}>
            <p>
              <span>sort:</span>Date created <AiOutlineDown size={13} />
            </p>
            <button
              onClick={() => {
                setShowDate(!showdate);
              }}
            >
              Filter By Date
            </button>
            <div className={style.bar}>
              <Image
                style={{ cursor: "pointer" }}
                src={dashbar}
                width={25}
                height={25}
                alt=""
                onClick={() => setCollection(true)}
              />
              <Image
                style={{ cursor: "pointer" }}
                src={menu}
                width={37}
                height={37}
                alt=""
                onClick={() => setCollection(false)}
              />
            </div>
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

        {collection && (
          <div className={style.gridout}>
            {merchant.map((m) => {
              return (
                <div className={style.merchant}>
                  <div className={style.netflix}>
                    <Image src={m.merchant_img} width={0} height={170} alt="" />
                  </div>
                  <div className={style.data}>
                    <p>{m.merchant_name}</p>
                    <span>{m.request}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!collection && (
          <table className={style.table}>
            <thead>
              <tr>
                <th style={{ display: "flex" }}>
                  MERCHANT
                  <TiArrowUnsorted />
                </th>
                <th>ADMIN NAME</th>
                <th>MERCHANT ID</th>
                <th>EMAIL ADDRESS</th>
                <th>
                  DATE
                  <TiArrowUnsorted />
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {history
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
                      <td
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <input type="checkbox" />
                        &nbsp;
                        <Image src={h.icon} width={30} height={30} />
                        {h.customer_name}
                      </td>
                      <td>{h.email_address}</td>
                      <td>{h.merchant}</td>
                      <td>{h.type}</td>
                      <td>{h.date}</td>
                      <td style={{ cursor: "pointer" }}>
                        <RiDeleteBinLine size={20} />
                      </td>
                      <td>
                        <BsPencil size={20} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Breakedown;
