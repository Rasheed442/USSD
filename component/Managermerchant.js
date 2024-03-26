import DashbaordLayout from "@/Layouts/DashbaordLayout";
import style from "../styles/PagesStyle/merchant.module.css";
import {
  AiOutlineDown,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";

import { TiArrowUnsorted } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
// import { DateRangePicker } from "react-date-range";
import { history } from "@/TableComponent/MerchantTable";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MerchantDetails from "@/component/MerchantDetails";
import ManagerHeader from "./ManagerHeader";
import ManagerMerchantModal from "@/Screens/ManagerMerchantModal";
import Axios from "axios";
import { toast } from "react-hot-toast";

function Managermerchant() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [merchantDetails, setMerchantDetails] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [managerMerchantModal, setManagerMerchnatModal] = useState(false);
  const [allmerchant, setAllmerchant] = useState();
  const [merchant_id, setMerchantId] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);
  const [showdate, setShowDate] = useState(false);
  const [deletemerchant, setDeletemerchant] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API_MERCHANT}merchants?page=${pageNumber}`,
      config,
      setLoading(true)
    ).then((response) => {
      setLoading(false);
      setAllmerchant(response?.data?.data?.content);
    });
  }, [pageNumber]);
  // console.log(allmerchant);

  // function DeleteMerchant() {
  //   Axios.delete(
  //     `${process.env.NEXT_PUBLIC_API_DELETE_MERCHANT}merchant/${merchant_id}`,
  //     config
  //   ).then((response) => {
  //     console.log(response?.data);
  //   });
  // }

  const handleDateRangeChange = (value) => {
    setSelectedDateRange(value);

    if (value && value[0] && value[1]) {
      const firstDate = value[0].toISOString().slice(0, 10);
      const secondDate = value[1].toISOString().slice(0, 10);
      // console.log("Selected date range:");
      // console.log(firstDate);
      // console.log(secondDate);
      Axios.get(
        `${process.env.NEXT_PUBLIC_API_MERCHANT}merchants/filter?startDate=${firstDate}&endDate=${secondDate}`,
        config
      ).then((response) => {
        setAllmerchant(response?.data);
        console.log(response?.data);
      });
    }
  };

  return (
    <DashbaordLayout>
      {managerMerchantModal && (
        <ManagerMerchantModal cancelManagerMerchant={setManagerMerchnatModal} />
      )}
      <ManagerHeader title="Dashboard" />
      {merchantDetails && (
        <MerchantDetails CloseMerchantDetails={setMerchantDetails} />
      )}
      {!merchantDetails && (
        <>
          <div className={style.bg}>
            <div className={style.container}>
              <div className={style.head}>
                <h1>Merchants</h1>
                {/* <span>{history.length} members</span> */}
              </div>
              <p>This page allows you to manage merchants registered</p>
            </div>
            <button
              onClick={() => {
                setManagerMerchnatModal(true);
              }}
            >
              <AiOutlinePlus /> New Merchant
            </button>
          </div>

          <div className={style.white}>
            <div className={style.main}>
              <div className={style.calendar}>
                {/* <DateRangePicker
                  onChange={handleDateRangeChange}
                  appearance="Jan 6, 2023 - Jan 13, 2023"
                  placeholder="Default"
                /> */}
              </div>
              <div className={style.sortdate}>
                <p>
                  <span>sort:</span>Date Created <AiOutlineDown size={10} />
                </p>

                <DateRangePicker
                  onChange={handleDateRangeChange}
                  appearance="Jan 6, 2023 - Jan 13, 2023"
                  placeholder="Default"
                />
              </div>

              <div className={style.search}>
                <AiOutlineSearch size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* {showdate && (
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
              )} */}
            </div>
            {loading && <Skeleton count={5} width="" height="11vh" />}

            {loading ? (
              ""
            ) : (
              <table className={style.table}>
                <thead>
                  <tr>
                    <th style={{ display: "flex" }}>
                      MERCHANT
                      <TiArrowUnsorted />
                    </th>
                    {/* <th>ADMIN NAME</th> */}
                    <th>MERCHANT ID</th>
                    <th>EMAIL ADDRESS</th>
                    <th>
                      DATE
                      <TiArrowUnsorted />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allmerchant
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
                          <td style={{}}>
                            <input type="checkbox" />
                            &nbsp;
                            {/* <Image src={h.icon} width={30} height={30} /> */}
                            {h?.name}
                          </td>
                          {/* <td>-----</td> */}
                          <td>{h?.id.toString().substring(0, 8)}</td>
                          <td>{h.email}</td>
                          <td>{h?.createdDate.toString().substring(0, 10)}</td>
                          {/* <td
                      style={{ cursor: "pointer" }}
                      onClick={() => setDeletemerchant(true)}
                    >
                      <RiDeleteBinLine size={20} />
                    </td>
                    <td>
                      <BsPencil size={20} />
                    </td> */}
                          {/* <td onClick={() => DeleteMerchant(h)}>
                            <RiDeleteBinLine size={20} />
                          </td> */}
                          <td
                            style={{ color: "#5E5ADB", cursor: "pointer" }}
                            onClick={() => {
                              setMerchantDetails(true);
                            }}
                          >
                            View
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
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
                      setPageNumber(pageNumber - 1);
                    }}
                  >
                    <AiOutlineLeft />
                  </button>
                  <button>{pageNumber}</button>
                  <button
                    onClick={() => {
                      setPageNumber(pageNumber + 1);
                    }}
                  >
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

export default Managermerchant;
