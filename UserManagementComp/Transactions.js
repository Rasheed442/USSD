import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";

function Transactions() {
  const [showdate, setShowDate] = useState(false);

  return (
    <Tran>
      <div className="top">
        <h1>Transactions</h1>
        <span>Manage and view invoice transaction in the table below.</span>
      </div>
      <div className="contain">
        <div className="search">
          <AiOutlineSearch size={22} />
          <input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="sort">
          <button
            onClick={() => {
              setShowDate(!showdate);
            }}
          >
            <AiOutlineCalendar />
            Jan 6, 2023 – Jan 13, 2023
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>TRANSACTION ID</th>
            <th>TRANSACTION TYPE</th>
            <th>AMOUNT</th>
            <th>ROUTE</th>
            <th>DONE BY</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Tran>
  );
}

export default Transactions;
const Tran = styled.div`
  .sort {
    display: flex;
  }
  .table {
    width: 100%;
  }

  .table th {
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    padding: 9px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 17px;
    font-weight: 500;
    font-size: 14px;
    color: #5a6376;
    border: 1px solid #e9edf5;
    cursor: pointer;
  }

  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .sort button {
    color: #344054;
    font-size: 12px;
    border: 1px solid gainsboro;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 500;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    padding: 10px 5px 10px 5px;
  }
  .contain {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 30px 20px;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 2px;
    border: 1px solid #d0d5dd;
    padding: 6px;
    width: 20rem;
    border-radius: 7px;
    color: #999999;
  }

  .search input {
    border: none;
    outline: none;
    font-size: 14px;
  }

  .search ::placeholder {
    font-size: 15px;
  }
  .top {
    display: flex;
    flex-direction: column;
    padding: 15px 20px 10px 20px;
    gap: 7px;
  }
  .top h1 {
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
  }
  .top span {
    color: #667085;
  }
`;
