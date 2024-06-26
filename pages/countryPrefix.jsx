import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import UploadPrefix from "@/component/UploadPrefix";
import Axios from "axios";
import { config, token } from "@/component/Authorization";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
function countryPrefix() {
  const [upload, setUpload] = useState(false);
  const [prefix, setPrefix] = useState();
  const [refresh, setRefresh] = useState();
  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_API}prefix/getPrefixs`, config)
      .then((response) => {
        setPrefix(response?.data?.data);
      })
      .catch((error) => {});
  }, [refresh]);
  async function HandleClick(d) {
    try {
      //   setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}prefix/deletePrefix/${d.id}`,
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
    <Country>
      {upload && <UploadPrefix close={setUpload} refresh={setRefresh} />}
      <DashbaordLayout>
        <AdminHeader title="Country Prefix" />
        <div className="bg">
          <div className="container">
            <div className="head">
              <h1>User Management</h1>
              <p>Manage and view all resellers and clients registered.</p>
            </div>
          </div>
          <button onClick={() => setUpload(true)}>
            Upload Operator Prefixes
          </button>
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
          <div className="gridoutside">
            <table className="table">
              <thead>
                <tr>
                  <th>COUNTRY NAME</th>
                  <th>COUNTRY CODE </th>
                  <th>PREFIXE</th>
                  <th>TIMEZONE </th>
                  <th>CREATED AT </th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {prefix?.map((d) => {
                  return (
                    <tr>
                      <td>{d?.countryName}</td>
                      <td>{d?.countryCode}</td>
                      <td>{d?.prefix}</td>
                      <td>{d?.timezone}</td>
                      <td>{d?.createdAt.toString().slice(0, 10)}</td>
                      <td>
                        <Dropdown title={<BiDotsVerticalRounded size={20} />}>
                          <Dropdown.Item onClick={() => HandleClick(d)}>
                            Delete Prefix
                          </Dropdown.Item>
                        </Dropdown>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
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
    </Country>
  );
}

export default countryPrefix;
const Country = styled.div`
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
`;
