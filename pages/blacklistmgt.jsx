import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import { config, token } from "@/component/Authorization";
import CreateBlackList from "@/component/BlackList/CreateBlackList";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineSearch,
} from "react-icons/ai";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import UpdateBlackList from "@/component/BlackList/UpdateBlackList";
import UploadCsv from "@/component/BlackList/UploadCsv";

function blacklistmgt() {
  const [createList, setCreateList] = useState(false);
  const [blacklist, setBlackList] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState();
  const [updateBlackList, setUpdateBlackList] = useState(false);
  const [uploadMobileNumber, setUploadMobileNumber] = useState(false);
  const [dataID, setDataId] = useState();
  useEffect(() => {
    setLoading(true);
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}blacklist/getBlacklists/?page=1&limit=10`,
      config
    )
      .then((response) => {
        setBlackList(response?.data?.data);
        console.log(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, [refresh]);

  async function HandleClick(d) {
    try {
      //   setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}blacklist/deleteBlacklist/${d?.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const server = await response.json();
      console.log(server);
      if (server?.status === true) {
        toast.success(server?.message);
        // window.location.pathname = "/shortcode";
        setLoading(false);
      } else if (server?.status === false) {
        toast.error(server?.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      //   setLoading(false);
    }
    setRefresh((prev) => !prev);
  }
  return (
    <Headings>
      {createList && (
        <CreateBlackList closeList={setCreateList} setRefresh={setRefresh} />
      )}
      {updateBlackList && (
        <UpdateBlackList closeBlackList={setUpdateBlackList} dataID={dataID} />
      )}
      {uploadMobileNumber && <UploadCsv closeUpload={setUploadMobileNumber} />}
      <DashbaordLayout>
        <AdminHeader title="Blacklist Management" />
        <div className="bg">
          <div className="container">
            <div className="head">
              <h1>Blacklist Management</h1>
              <p>Manage database for blacklist number.</p>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={() => setUploadMobileNumber(true)}
              style={{
                backgroundColor: "white",
                border: "1px solid gainsboro",
                color: "black",
              }}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6676 9.66661L8.00095 6.99995M8.00095 6.99995L5.33428 9.66661M8.00095 6.99995V12.9999M13.5943 11.2599C14.2445 10.9055 14.7582 10.3445 15.0542 9.6657C15.3502 8.98686 15.4118 8.22877 15.2291 7.51107C15.0464 6.79338 14.6299 6.15696 14.0454 5.70225C13.4609 5.24754 12.7415 5.00044 12.001 4.99995H11.161C10.9592 4.21944 10.5831 3.49484 10.0609 2.88061C9.53877 2.26638 8.88418 1.77852 8.14635 1.45369C7.40852 1.12886 6.60665 0.975521 5.80103 1.0052C4.99541 1.03489 4.20699 1.24682 3.49507 1.62506C2.78314 2.0033 2.16622 2.53802 1.6907 3.189C1.21517 3.83999 0.89341 4.59031 0.749603 5.38354C0.605797 6.17678 0.643687 6.9923 0.860426 7.76879C1.07716 8.54528 1.46711 9.26252 2.00095 9.86661"
                  stroke="#464F60"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Upload mobile numbers
            </button>
            <button onClick={() => setCreateList(true)}>
              <AiOutlinePlus />
              Create Blacklist
            </button>
          </div>
        </div>
        <div className="tablecontent">
          <div className="search">
            <AiOutlineSearch size={20} />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {loading && <Skeleton count={5} width="" height="11vh" />}
          {loading ? (
            ""
          ) : (
            <div className="gridoutside">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME </th>
                    <th>PHONENUMBER</th>
                    <th>CREATED AT </th>
                  </tr>
                </thead>

                <tbody>
                  {blacklist?.map((d) => {
                    return (
                      <tr>
                        <td>{d?.id}</td>
                        <td>{d?.name}</td>
                        <td>{d?.phoneNumber}</td>
                        <td>{d?.createdAt}</td>
                        <td>
                          <Dropdown title={<BiDotsVerticalRounded size={20} />}>
                            <Dropdown.Item onClick={() => HandleClick(d)}>
                              Delete Blacklist
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                setUpdateBlackList(true);
                                setDataId(d?.id);
                              }}
                            >
                              Update Blacklist
                            </Dropdown.Item>
                          </Dropdown>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <div className="row">
            <span>Showing 1-5 of entries</span>
            <div className="pagins">
              <p>Rows per page:</p>
              <select>
                <option>10</option>
              </select>
              <div className="arrow">
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
    </Headings>
  );
}

export default blacklistmgt;
const Headings = styled.div`
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }

  .table th {
    font-weight: 400;
    text-align: left;
    font-size: 11px;
    padding: 15px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 18px;
    font-weight: 500;
    font-size: 11px;
    border-top: 1px solid gainsboro;
    text-transform: uppercase;
    color: #5a6376;
    line-height: 20px;
    cursor: pointer;
    font-weight: 500;
  }
  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 13px;
    color: #687182;
  }

  .pagins {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .pagins p {
    font-size: 14px;
    color: #687182;
  }

  .pagins select {
    width: 48px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    padding: 2px;
    border-radius: 3px;
  }

  .arrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrow button {
    width: 28.8px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }
  .search {
    display: flex;
    border: 1px solid gainsboro;
    align-items: center;
    padding: 10px 10px 10px 10px;
    gap: 5px;
    margin: 20px;
    width: 30vw;
    font-size: 15px;
    color: #999999;
    border-radius: 5px;
  }
  .search ::placeholder {
    color: #999999;
    font-size: 15px;
  }
  .search input {
    border: none;
    width: 100%;
    height: 20px;
    outline: none;
  }
  .tablecontent {
    background-color: white;
    margin: 20px;
    padding-top: 10px;
  }
  .bg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 110px 30px 20px 30px;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .btn button {
    background-color: #5e5adb;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    font-weight: 200;
    justify-content: center;
    font-size: 15px;
    align-items: center;
    gap: 8px;
  }
  .head {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .head h1 {
    font-weight: 500;
    font-size: 29px;
    line-height: 20px;
    color: #090814;
  }
  .head span {
    background-color: #ececf4;
    font-size: 14px;
    font-weight: 500;
    padding: 13px;
    border-radius: 5px;
    line-height: 20px;

    color: #5e5adb;
  }
  .container {
    display: flex;
    line-height: 0px;
    flex-direction: column;
  }
  .container p {
    color: #848d87;
    font-size: 13px;
    font-weight: 300;
  }
`;
