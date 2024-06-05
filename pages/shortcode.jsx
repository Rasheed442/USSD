import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import CreateShortCode from "@/component/ShortCode/CreateShortCode";
import React, { useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineSearch,
} from "react-icons/ai";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";

import Axios from "axios";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { config, token } from "@/component/Authorization";
import UpdateShortCode from "@/component/ShortCode/UpdateShortCode";
function shortcode() {
  const [createShort, setShortcode] = useState(false);
  const [MyData, setMyData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [limits, setLimits] = useState(10);
  const [updateShortcode, setUpdateShortcode] = useState(false);
  const [dataID, setDataId] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}shortCode/getShortCodes/?page=${pageNumber}&limit=${limits}`,
      config
    )
      .then((response) => {
        console.log(response?.data);
        setMyData(response?.data?.data);
      })
      .catch((error) => {});
  }, [pageNumber, refresh]);

  async function HandleClick(s) {
    try {
      //   setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}shortCode/deleteShortCode/${s?.id}`,
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
    <ShortCodeStyle>
      {createShort && (
        <CreateShortCode
          closeShortCode={setShortcode}
          setrefresh={setRefresh}
        />
      )}
      {updateShortcode && (
        <UpdateShortCode dataID={dataID} closeShortCode={setUpdateShortcode} />
      )}
      <DashbaordLayout>
        <AdminHeader title="ShortCode" />
        <div className="bg">
          <div className="container">
            <div className="head">
              <h1>Shortcode ID</h1>
              <p>Approve or reject shortcode ID request from users.</p>
            </div>
          </div>
          <button onClick={() => setShortcode(true)}>
            <AiOutlinePlus /> Create Shortcode
          </button>
        </div>
        <div className="white">
          <div className="main">
            {/* <p>
                  <span>sort:</span>Date Created <AiOutlineDown size={10} />
                </p> */}
            <div className="search">
              <AiOutlineSearch size={20} />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  USER-ID
                  {/* <TiArrowUnsorted size={15} /> */}
                </th>
                <th>SHORT CODE NAME</th>
                {/* <th>
                  STATUS
                  <TiArrowUnsorted size={13} />
                </th> */}
                <th>CREATED AT</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {MyData?.map((s, index) => {
                return (
                  <tr key={index}>
                    <td>{s?.id}</td>
                    <td>{s?.name}</td>
                    {/* <td>{s?.status}</td> */}
                    <td>{s?.createdAt?.toString().slice(0, 10)}</td>
                    <td>
                      <Dropdown title={<BiDotsVerticalRounded size={20} />}>
                        <Dropdown.Item onClick={() => HandleClick(s)}>
                          Delete ShortCode
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setUpdateShortcode(true);
                            setDataId(s?.id);
                          }}
                        >
                          Update ShortCode
                        </Dropdown.Item>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row">
            <span>Showing 1-5 of entries</span>
            <div className="pagins">
              <p>Rows per page:</p>
              <select>
                <option>{limits}</option>
              </select>
              <div className="arrow">
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
      </DashbaordLayout>
    </ShortCodeStyle>
  );
}

export default shortcode;
const ShortCodeStyle = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 15px;
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
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
    margin-top: 10px;
  }

  .table th {
    font-weight: 600;
    text-align: left;
    font-size: 11px;
    border: 1px solid gainsboro;
    padding: 10px;
    color: #687182;

    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 10px;
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    color: #5a6376;
    border: 1px solid gainsboro;
  }

  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .search {
    display: flex;
    border: 1px solid gainsboro;
    align-items: center;
    padding: 10px 10px 10px 10px;
    gap: 5px;
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
  .main {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 20px 20px;
  }
  .white {
    background-color: white;
    margin: 0px 30px 30px 30px;
    padding: 20px 0px 30px 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px #6362621a;
  }
  .bg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 110px 30px 20px 30px;
  }
  .bg button {
    background-color: #5e5adb;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    font-weight: 300;
    align-items: center;
    gap: 5px;
  }
  .container {
    display: flex;
    line-height: 0px;
    flex-direction: column;
  }
  .container p {
    color: #848d87;
    font-size: 14px;
    font-weight: 300;
  }
  .head {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .head h1 {
    font-weight: 500;
    font-size: 29px;
    line-height: 30px;
    color: #090814;
  }
`;
