import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React, { useState } from "react";
import styled from "styled-components";

function TopUp({ pop }) {
  const [credit, setCredit] = useState(true);
  const [debit, setDebit] = useState(false);
  const [text, setText] = useState("credit");

  const [action, setAction] = useState(true);

  return (
    <Top>
      {action && (
        <SmallModalLayout
          title="Top Up"
          titstyle={{ color: "#5E5ADB", fontWeight: "500" }}
          onClick={() => pop(false)}
        >
          <div className="bal">
            <p>Total Balance</p>
            <span>₦98,250,400.02</span>
          </div>
          <div className="credit">
            <button
              onClick={(e) => {
                setText(e.target.textContent);
                setDebit(false);
                setCredit(true);
              }}
              style={{
                backgroundColor: credit ? "#5E5ADB" : "",
                color: credit ? "white" : "",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 1.25H12.443C10.134 1.25 8.325 1.25 6.913 1.44C5.469 1.634 4.329 2.04 3.434 2.934C2.539 3.829 2.134 4.969 1.94 6.414C1.75 7.825 1.75 9.634 1.75 11.943V12.057C1.75 14.366 1.75 16.175 1.94 17.587C2.134 19.031 2.54 20.171 3.434 21.066C4.329 21.961 5.469 22.366 6.914 22.56C8.325 22.75 10.134 22.75 12.443 22.75H12.557C14.866 22.75 16.675 22.75 18.087 22.56C19.531 22.366 20.671 21.96 21.566 21.066C22.461 20.171 22.866 19.031 23.06 17.586C23.25 16.175 23.25 14.366 23.25 12.057V12C23.25 11.8011 23.171 11.6103 23.0303 11.4697C22.8897 11.329 22.6989 11.25 22.5 11.25C22.3011 11.25 22.1103 11.329 21.9697 11.4697C21.829 11.6103 21.75 11.8011 21.75 12C21.75 14.378 21.748 16.086 21.574 17.386C21.402 18.665 21.074 19.436 20.505 20.006C19.935 20.575 19.165 20.902 17.886 21.074C16.586 21.248 14.878 21.25 12.5 21.25C10.122 21.25 8.414 21.248 7.114 21.074C5.835 20.902 5.064 20.574 4.494 20.005C3.925 19.435 3.598 18.665 3.426 17.386C3.252 16.086 3.25 14.378 3.25 12C3.25 9.622 3.252 7.914 3.426 6.614C3.598 5.335 3.926 4.564 4.495 3.994C5.065 3.425 5.835 3.098 7.114 2.926C8.414 2.752 10.122 2.75 12.5 2.75C12.6989 2.75 12.8897 2.67098 13.0303 2.53033C13.171 2.38968 13.25 2.19891 13.25 2C13.25 1.80109 13.171 1.61032 13.0303 1.46967C12.8897 1.32902 12.6989 1.25 12.5 1.25Z"
                  fill={credit ? "white" : "#5E5ADB"}
                />
                <path
                  d="M22.03 3.53009C22.1625 3.38792 22.2346 3.19987 22.2312 3.00557C22.2277 2.81127 22.149 2.62588 22.0116 2.48847C21.8742 2.35106 21.6888 2.27234 21.4945 2.26892C21.3002 2.26549 21.1122 2.33761 20.97 2.47009L13.25 10.1901V6.65509C13.25 6.45618 13.171 6.26541 13.0303 6.12476C12.8897 5.98411 12.6989 5.90509 12.5 5.90509C12.3011 5.90509 12.1103 5.98411 11.9697 6.12476C11.829 6.26541 11.75 6.45618 11.75 6.65509V12.0001C11.75 12.4141 12.086 12.7501 12.5 12.7501H17.844C18.0429 12.7501 18.2337 12.6711 18.3743 12.5304C18.515 12.3898 18.594 12.199 18.594 12.0001C18.594 11.8012 18.515 11.6104 18.3743 11.4698C18.2337 11.3291 18.0429 11.2501 17.844 11.2501H14.31L22.03 3.53009Z"
                  fill={credit ? "white" : "#5E5ADB"}
                />
              </svg>
              Credit
            </button>
            <button
              onClick={(e) => {
                setText(e.target.textContent);

                setDebit(true);
                setCredit(false);
              }}
              style={{
                backgroundColor: debit ? "#5E5ADB" : "",
                color: debit ? "white" : "",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 1.25H12.443C10.134 1.25 8.325 1.25 6.913 1.44C5.469 1.634 4.329 2.04 3.434 2.934C2.539 3.829 2.134 4.969 1.94 6.414C1.75 7.825 1.75 9.634 1.75 11.943V12.057C1.75 14.366 1.75 16.175 1.94 17.587C2.134 19.031 2.54 20.171 3.434 21.066C4.329 21.961 5.469 22.366 6.914 22.56C8.325 22.75 10.134 22.75 12.443 22.75H12.557C14.866 22.75 16.675 22.75 18.087 22.56C19.531 22.366 20.671 21.96 21.566 21.066C22.461 20.171 22.866 19.031 23.06 17.586C23.25 16.175 23.25 14.366 23.25 12.057V12C23.25 11.8011 23.171 11.6103 23.0303 11.4697C22.8897 11.329 22.6989 11.25 22.5 11.25C22.3011 11.25 22.1103 11.329 21.9697 11.4697C21.829 11.6103 21.75 11.8011 21.75 12C21.75 14.378 21.748 16.086 21.574 17.386C21.402 18.665 21.074 19.436 20.505 20.006C19.935 20.575 19.165 20.902 17.886 21.074C16.586 21.248 14.878 21.25 12.5 21.25C10.122 21.25 8.414 21.248 7.114 21.074C5.835 20.902 5.064 20.574 4.494 20.005C3.925 19.435 3.598 18.665 3.426 17.386C3.252 16.086 3.25 14.378 3.25 12C3.25 9.622 3.252 7.914 3.426 6.614C3.598 5.335 3.926 4.564 4.495 3.994C5.065 3.425 5.835 3.098 7.114 2.926C8.414 2.752 10.122 2.75 12.5 2.75C12.6989 2.75 12.8897 2.67098 13.0303 2.53033C13.171 2.38968 13.25 2.19891 13.25 2C13.25 1.80109 13.171 1.61032 13.0303 1.46967C12.8897 1.32902 12.6989 1.25 12.5 1.25Z"
                  fill={debit ? "white" : "#5E5ADB"}
                />
                <path
                  d="M22.03 3.53009C22.1625 3.38792 22.2346 3.19987 22.2312 3.00557C22.2277 2.81127 22.149 2.62588 22.0116 2.48847C21.8742 2.35106 21.6888 2.27234 21.4945 2.26892C21.3002 2.26549 21.1122 2.33761 20.97 2.47009L13.25 10.1901V6.65509C13.25 6.45618 13.171 6.26541 13.0303 6.12476C12.8897 5.98411 12.6989 5.90509 12.5 5.90509C12.3011 5.90509 12.1103 5.98411 11.9697 6.12476C11.829 6.26541 11.75 6.45618 11.75 6.65509V12.0001C11.75 12.4141 12.086 12.7501 12.5 12.7501H17.844C18.0429 12.7501 18.2337 12.6711 18.3743 12.5304C18.515 12.3898 18.594 12.199 18.594 12.0001C18.594 11.8012 18.515 11.6104 18.3743 11.4698C18.2337 11.3291 18.0429 11.2501 17.844 11.2501H14.31L22.03 3.53009Z"
                  fill={debit ? "white" : "#5E5ADB"}
                />
              </svg>
              Debit
            </button>
          </div>
          <div className="admin">
            <label>
              Amount to <span>{text && text}</span>
            </label>
            <div className="labels">
              <span>₦</span>
              <input type="text" placeholder="Enter Amount" />
              <span
                onClick={() => {
                  setAction(false);
                }}
              >
                {text && text}
              </span>
            </div>
          </div>
        </SmallModalLayout>
      )}
      {action ? (
        ""
      ) : (
        <SmallModalLayout topStyle={{ display: "none" }}>
          <div className="success">
            <p>Top-up Successful!</p>
            <h3>28th March 2024, 12:36 AM</h3>
            <span>Transaction ID: 000123</span>
          </div>
          <div className="creditt">
            <p>
              AMOUNT <span>CREDITED</span>
            </p>
            <p>+ ₦8,250.00</p>
          </div>
          <div className="btn">
            <button onClick={() => setAction(true)}>Go Back</button>
          </div>
        </SmallModalLayout>
      )}
    </Top>
  );
}

export default TopUp;
const Top = styled.div`
  .btn {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .btn button {
    background-color: #5e5adb;
    color: white;
    padding: 15px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
  }
  .creditt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 1px solid #eaecf0;
    border-bottom: 1px solid #eaecf0;
  }
  .credit p {
    font-size: 12px;
  }
  .credit span {
    font-size: 12px;
  }
  .success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: center;
  }
  .success h3 {
    font-size: 14px;
    font-weight: 400;
  }
  .success p {
    font-size: 17px;
    color: #1a1a1a;
    font-weight: 500;
  }
  .success span {
    font-size: 12px;
    color: #98a2b3;
  }
  .admin {
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    display: flex;
    padding: 20px;
    border: 1px solid #eaecf0;
  }
  .labels input {
    width: 100%;
    outline: none;
    border: none;
    padding-left: 10px;
  }
  .labels ::placeholder {
    color: #667085;
  }
  .labels {
    border: 1px solid #eaecf0;
    display: flex;
    align-items: center;
    /* gap: 20px; */
    height: 100%;
    border-radius: 10px;
  }
  .labels span {
    background-color: #e9edf5;
    color: #414e67;
    padding: 10px;
    width: 16%;
    text-align: center;
    font-weight: 400;
  }
  .credit {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 30px 30px 30px;
    border-bottom: 1px solid #eaecf0;
  }
  .credit button {
    color: #5e5adb;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 13px;
    background-color: white;
    border: 1px solid #5e5adb;
    gap: 6px;
    padding: 7px;
    font-size: 17px;
    text-align: center;
    border-radius: 5px;
  }
  .bal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .bal p {
    color: #5e5adb;
    font-size: 16px;
    font-weight: 400;
  }
  .bal span {
    color: #5e5adb;
    font-size: 28px;
    font-weight: 600;
  }
`;
