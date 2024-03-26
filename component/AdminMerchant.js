import DashbaordLayout from "@/Layouts/DashbaordLayout";
import style from "../styles/PagesStyle/merchant.module.css";
import {
  AiOutlineDown,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { history } from "@/TableComponent/MerchantTable";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AdminHeader from "@/component/AdminHeader";
import MerchantDetails from "@/component/MerchantDetails";
import Axios from "axios";
import "rsuite/dist/rsuite.min.css";
// import { DateRangePicker } from "rsuite";
import CreateNewUser from "./CreateNewUser";

function AdminMerchant() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [showdate, setShowdate] = useState(false);
  const [show, setShow] = useState(false);

  const [merchantDetails, setMerchantDetails] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [createuser, setCreateUser] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // useEffect(() => {
  //   Axios.get(
  //     `${process.env.NEXT_PUBLIC_API_MERCHANT}admin/merchants`,
  //     config,
  //     setLoading(true)
  //   ).then((response) => {
  //     setAllmerchant(response?.data?.data?.content);
  //     setLoading(false);
  //   });
  // }, []);
  // console.log(allmerchant);

  const [selectedDateRange, setSelectedDateRange] = useState([]);

  // const handleDateRangeChange = (value) => {
  //   setSelectedDateRange(value);

  //   if (value && value[0] && value[1]) {
  //     const firstDate = value[0].toISOString().slice(0, 10);
  //     const secondDate = value[1].toISOString().slice(0, 10);
  //     // console.log("Selected date range:");
  //     // console.log(firstDate);
  //     // console.log(secondDate);
  //     Axios.get(
  //       `${process.env.NEXT_PUBLIC_API_MERCHANT}merchants/filter?startDate=${firstDate}&endDate=${secondDate}`,
  //       config
  //     ).then((response) => {
  //       setAllmerchant(response?.data);
  //       console.log(response?.data);
  //     });
  //   }
  // };
  return (
    <DashbaordLayout>
      <AdminHeader title="Merchant" />
      {merchantDetails && (
        <MerchantDetails CloseMerchantDetails={setMerchantDetails} />
      )}
      {createuser && <CreateNewUser closeUser={setCreateUser} />}

      {!merchantDetails && !createuser && (
        <>
          <div className={style.bg}>
            <div className={style.container}>
              <div className={style.head}>
                <h1>User Management</h1>
                <span>600 members</span>
              </div>
              <p>Manage and view all resellers and clients registered.</p>
            </div>
            <button
              //  onClick={() => setMerchantDetails(true)}
              onClick={() => setCreateUser(true)}
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4 6.3C10.4 5.80294 9.99706 5.4 9.5 5.4C9.00294 5.4 8.6 5.80294 8.6 6.3V8.1H6.8C6.30294 8.1 5.9 8.50294 5.9 9C5.9 9.49706 6.30294 9.9 6.8 9.9H8.6V11.7C8.6 12.1971 9.00294 12.6 9.5 12.6C9.99706 12.6 10.4 12.1971 10.4 11.7V9.9H12.2C12.6971 9.9 13.1 9.49706 13.1 9C13.1 8.50294 12.6971 8.1 12.2 8.1H10.4V6.3Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 0C4.52944 0 0.5 4.02944 0.5 9C0.5 13.9706 4.52944 18 9.5 18C14.4706 18 18.5 13.9706 18.5 9C18.5 4.02944 14.4706 0 9.5 0ZM2.3 9C2.3 5.02355 5.52355 1.8 9.5 1.8C13.4764 1.8 16.7 5.02355 16.7 9C16.7 12.9764 13.4764 16.2 9.5 16.2C5.52355 16.2 2.3 12.9764 2.3 9Z"
                  fill="white"
                />
              </svg>
              Create User
            </button>
          </div>

          <div className={style.white}>
            <div className={style.main}>
              <div className={style.sortdate}>
                <div className={style.search}>
                  <AiOutlineSearch size={20} />
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={() => setShow(!show)} className={style.date}>
                Showing for:
                <FiCalendar size={17} /> Jan 6, 2023 - Jan 13, 2023
              </button>
            </div>
            {/* {loading && <Skeleton count={5} width="" height="11vh" />} */}
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

            <table className={style.table}>
              <thead>
                <tr>
                  <th
                    style={{ display: "flex", gap: "6px", paddingLeft: "20px" }}
                  >
                    <input type="checkbox" />
                    USER NAME
                    <TiArrowUnsorted />
                  </th>
                  <th>LOGIN ID</th>
                  <th>PHONE NUMBER</th>
                  <th>
                    CATEGORY
                    <TiArrowUnsorted />
                  </th>
                  <th>IVR CREDIT</th>
                  <th>UPLINE RESELLER</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h) => {
                  return (
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "9px",
                          paddingLeft: "20px",
                        }}
                      >
                        <input type="checkbox" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Image src={h.icon} height={30} width={30} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0px",
                            }}
                          >
                            <p
                              style={{
                                color: "#101828",
                                lineHeight: "20px",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              {h.customer_name}
                            </p>
                            <span
                              style={{
                                color: "#5A6376",
                                lineHeight: "20px",
                                fontSize: "12px",
                                fontWeight: "400",
                              }}
                            >
                              {h.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>{h.login_id}</td>
                      <td>{h.phone}</td>
                      <td style={{ color: "#035AB5", fontWeight: "700" }}>
                        {h.category}
                      </td>
                      <td style={{ color: "#5E5ADB", fontWeight: "700" }}>
                        {h.ussdcredit}
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Image src={h.icon2} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0px",
                            }}
                          >
                            <p
                              style={{
                                color: "#101828",
                                lineHeight: "20px",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              {h.customer_name}
                            </p>
                            <span
                              style={{
                                color: "#5A6376",
                                lineHeight: "20px",
                                fontSize: "12px",
                                fontWeight: "400",
                              }}
                            >
                              {h.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td
                        style={{ color: "#5E5ADB", cursor: "pointer" }}
                        onClick={() => setMerchantDetails(true)}
                      >
                        View
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
        </>
      )}
    </DashbaordLayout>
  );
}

export default AdminMerchant;
