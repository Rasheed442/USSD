import React, { useState } from "react";
import styled from "styled-components";

function CreditDbitAcc({ pop }) {
  return (
    <Credits>
      <div className="top">
        <p>Credit/Debit Account</p>
        <span>Add credit and manage your cost </span>
      </div>
      <div className="top2">
        <p>Add Credit & Cost</p>
      </div>
      <div className="add">
        <div className="wallets">
          <div className="walletbalance">
            <span>Wallet Balance</span>
            <p>₦98,250,400.02</p>
            <button onClick={() => pop(true)}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 1.25H12.443C10.134 1.25 8.325 1.25 6.913 1.44C5.469 1.634 4.329 2.04 3.434 2.934C2.539 3.829 2.134 4.969 1.94 6.414C1.75 7.825 1.75 9.634 1.75 11.943V12.057C1.75 14.366 1.75 16.175 1.94 17.587C2.134 19.031 2.54 20.171 3.434 21.066C4.329 21.961 5.469 22.366 6.914 22.56C8.325 22.75 10.134 22.75 12.443 22.75H12.557C14.866 22.75 16.675 22.75 18.087 22.56C19.531 22.366 20.671 21.96 21.566 21.066C22.461 20.171 22.866 19.031 23.06 17.586C23.25 16.175 23.25 14.366 23.25 12.057V12C23.25 11.8011 23.171 11.6103 23.0303 11.4697C22.8897 11.329 22.6989 11.25 22.5 11.25C22.3011 11.25 22.1103 11.329 21.9697 11.4697C21.829 11.6103 21.75 11.8011 21.75 12C21.75 14.378 21.748 16.086 21.574 17.386C21.402 18.665 21.074 19.436 20.505 20.006C19.935 20.575 19.165 20.902 17.886 21.074C16.586 21.248 14.878 21.25 12.5 21.25C10.122 21.25 8.414 21.248 7.114 21.074C5.835 20.902 5.064 20.574 4.494 20.005C3.925 19.435 3.598 18.665 3.426 17.386C3.252 16.086 3.25 14.378 3.25 12C3.25 9.622 3.252 7.914 3.426 6.614C3.598 5.335 3.926 4.564 4.495 3.994C5.065 3.425 5.835 3.098 7.114 2.926C8.414 2.752 10.122 2.75 12.5 2.75C12.6989 2.75 12.8897 2.67098 13.0303 2.53033C13.171 2.38968 13.25 2.19891 13.25 2C13.25 1.80109 13.171 1.61032 13.0303 1.46967C12.8897 1.32902 12.6989 1.25 12.5 1.25Z"
                  fill="#5E5ADB"
                />
                <path
                  d="M22.03 3.53009C22.1625 3.38792 22.2346 3.19987 22.2312 3.00557C22.2277 2.81127 22.149 2.62588 22.0116 2.48847C21.8742 2.35106 21.6888 2.27234 21.4945 2.26892C21.3002 2.26549 21.1122 2.33761 20.97 2.47009L13.25 10.1901V6.65509C13.25 6.45618 13.171 6.26541 13.0303 6.12476C12.8897 5.98411 12.6989 5.90509 12.5 5.90509C12.3011 5.90509 12.1103 5.98411 11.9697 6.12476C11.829 6.26541 11.75 6.45618 11.75 6.65509V12.0001C11.75 12.4141 12.086 12.7501 12.5 12.7501H17.844C18.0429 12.7501 18.2337 12.6711 18.3743 12.5304C18.515 12.3898 18.594 12.199 18.594 12.0001C18.594 11.8012 18.515 11.6104 18.3743 11.4698C18.2337 11.3291 18.0429 11.2501 17.844 11.2501H14.31L22.03 3.53009Z"
                  fill="#5E5ADB"
                />
              </svg>
              Top Up
            </button>
          </div>
          <div className="contents">
            <h2>Network Cost</h2>
            <div>
              <p>Route</p>
              <span>Choose the route you want to assign credits for</span>
              <div className="select">
                <select>
                  <option value="1">Select Route</option>
                  <option value="2">Candice Woo</option>
                  <option value="3">Drew Cano</option>
                  <option value="4">Natali Craig</option>
                </select>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="Myadmin">
              <label>
                MTN<span></span>
              </label>
              <div className="label">
                <span>₦</span>
                <input type="text" placeholder="Enter Amount" />
                <span>per</span>
              </div>
            </div>
            <div className="Myadmin">
              <label>
                AIRTEL<span></span>
              </label>
              <div className="label">
                <span>₦</span>
                <input type="text" placeholder="Enter Amount" />
                <span>per</span>
              </div>
            </div>
            <div className="Myadmin">
              <label>
                9MOBILE<span></span>
              </label>
              <div className="label">
                <span>₦</span>
                <input type="text" placeholder="Enter Amount" />
                <span>per</span>
              </div>
            </div>
            <div className="Myadmin">
              <label>
                GLO<span></span>
              </label>
              <div className="label">
                <span>₦</span>
                <input type="text" placeholder="Enter Amount" />
                <span>per</span>
              </div>
            </div>
            <div className="Myadmin">
              <label>
                OTHER<span></span>
              </label>
              <div className="label">
                <span>₦</span>
                <input type="text" placeholder="Enter Amount" />
                <span>per</span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button style={{ color: "#464F60", border: "1px solid #464F6029" }}>
            Cancel
          </button>
          <button
            style={{
              backgroundColor: "#5E5ADB",
              border: "none",
              color: "white",
            }}
          >
            Make Transaction
          </button>
        </div>
      </div>
    </Credits>
  );
}

export default CreditDbitAcc;
const Credits = styled.div`
  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    padding-top: 40px;
    cursor: pointer;
  }
  .btn button {
    padding: 10px;
    border-radius: 8px;
    background-color: transparent;
  }
  .Myadmin {
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    display: flex;
  }
  .label input {
    width: 100%;
    outline: none;
    border: none;
    padding-left: 10px;
  }
  .label ::placeholder {
    color: #667085;
  }
  .label {
    border: 1px solid #eaecf0;
    display: flex;
    align-items: center;
    /* gap: 20px; */
    height: 100%;
    border-radius: 10px;
  }
  .label span {
    background-color: #e9edf5;
    color: #414e67;
    padding: 10px;
    width: 16%;
    text-align: center;
    font-weight: 400;
  }
  .select select {
    appearance: none;
    width: 100%;
    padding: 5px;
    border: none;
    outline: none;
  }

  .select {
    display: flex;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px;
    width: 100%;
    align-items: center;
    border: 1px solid gainsboro;
  }
  .contents h2 {
    font-weight: 500;
    font-size: 18px;
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .wallets {
    padding: 30px 30px 30px 160px;
    width: 50%;
  }
  .walletbalance span {
    line-height: 20px;
    font-size: 15px;
    font-weight: 400;
  }
  .walletbalance p {
    font-weight: 600;
    font-size: 28px;
    line-height: 33px;
  }
  .walletbalance {
    background-color: #5e5adb;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    padding: 15px;
  }
  .walletbalance button {
    color: #5e5adb;
    display: flex;
    align-items: center;
    font-size: 13px;
    gap: 6px;
    padding: 5px;
    text-align: center;
    border-radius: 5px;
  }
  .top {
    padding: 10px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    border-bottom: 1px solid gainsboro;
  }
  .top2 {
    border-bottom: 1px solid gainsboro;
    color: #5e5adb;
    font-weight: 600;
    padding: 10px 0px 0px 20px;
  }
  .top2 p {
    width: 145px;
    padding: 10px 0px 15px 20px;

    border-bottom: 1px solid #5e5adb;
  }
  .top p {
    font-size: 17px;
    color: #090814;
    line-height: 28px;
    font-weight: 500;
  }
  .top span {
    color: #667085;
    font-weight: 400;
    font-size: 13px;
  }
`;
