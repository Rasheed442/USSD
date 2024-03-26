import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
function approveCaller() {
  return (
    <Head>
      <DashbaordLayout>
        <AdminHeader title="SIP Accounts" />
        <div className="bg">
          <div className="container">
            <h1>Manage Routes</h1>
            <p>Manage IVR Routes and routing rules.</p>
          </div>
        </div>
        <div className="white">
          <div className="main">
            <div className="sortdate">
              <div className="search">
                <AiOutlineSearch size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th
                  style={{ display: "flex", gap: "6px", paddingLeft: "20px" }}
                >
                  <input type="checkbox" />
                  CALLER ID
                </th>
                <th>REQUESTED BY</th>
                <th>DATE REQUESTED</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
          </table>
        </div>
      </DashbaordLayout>
    </Head>
  );
}

export default approveCaller;
const Head = styled.div`
  .bg {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 110px 30px 20px 30px;
  }
  .white {
    background-color: white;
    margin: 0px 30px 30px 30px;
    padding: 20px 0px 30px 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px #6362621a;
  }
  .container {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .container h1 {
    color: #090814;
    line-height: 38px;
    font-size: 32px;
    font-weight: 400;
  }
  .container p {
    color: #848d87;
    font-size: 13px;
    font-weight: 300;
  }
  .sortdate {
    display: flex;
    padding: 20px 0px 0px 10px;
    position: relative;
    align-items: center;
    justify-content: space-between;
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
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
    margin-top: 30px;
  }

  .table th {
    font-weight: 600;
    text-align: left;
    font-size: 11px;
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
`;
