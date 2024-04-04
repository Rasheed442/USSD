import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";

function NewRoute({ close }) {
  const [dedicated, setDedicated] = useState();
  const [dynamic, setDynamic] = useState();
  const [logic, setLogic] = useState(true);
  return (
    <Head>
      <div className="top">
        <div className="back" onClick={() => close(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 12.2734L19.25 12.2734"
              stroke="#5E5ADB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2998 18.299L4.2498 12.275L10.2998 6.25"
              stroke="#5E5ADB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Back to Route Management</span>
        </div>
        <h2>Create New Route</h2>
        <p>Add a new route and select logic</p>
      </div>
      <div className="white">
        <div className="inputs">
          <LabelinputLayout
            inputstyle={{ width: "50%" }}
            label="Route Name"
            placeholder="Enter your network name"
          />
          <div className="role">
            <label>Select Logic</label>
            <div className="select">
              <select
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  if (selectedValue === "1") {
                    setDedicated(true);
                    setDynamic(false);
                    setLogic(false);
                  } else if (selectedValue === "2") {
                    setDedicated(false);
                    setDynamic(true);
                    setLogic(false);
                  } else if (selectedValue === "0") {
                    setDedicated(false);
                    setDynamic(false);
                    setLogic(true);
                  }
                }}
              >
                <option value="0">Select Logic</option>
                <option value="1">Dedicated</option>
                <option value="2">Dynamic</option>
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
          {dedicated || dynamic ? (
            ""
          ) : (
            <div className="src">
              <img src="./routelogic.svg" />
            </div>
          )}
          {dedicated || dynamic ? (
            <LabelinputLayout
              label="Logic Type*"
              style={{ gap: "30px" }}
              inputstyle={{ width: "20%", color: "#5E5ADB" }}
              value={dedicated ? "Dedicated" : dynamic ? "Dynamic" : ""}
            />
          ) : (
            ""
          )}
          {dedicated && (
            <div className="borderlines">
              <div className="colored">
                <div className="role">
                  <label style={{ color: "#5E5ADB" }}>Primary Network</label>
                  <div className="select2">
                    <select>
                      <option value="0">Select Primary network</option>
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
                <div className="role" style={{ paddingTop: "40px" }}>
                  <label style={{ color: "#5E5ADB" }}>Secondary Network</label>
                  <div className="select2">
                    <select>
                      <option value="0">Select Secondary network</option>
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
              </div>
            </div>
          )}

          {dynamic && (
            <div className="borderlines">
              <div className="colored">
                <div className="addnetwork">
                  <p>System will route the USSD traffic to the network</p>
                  <button>
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.50234 4.2C7.50234 3.86863 7.23371 3.6 6.90234 3.6C6.57097 3.6 6.30234 3.86863 6.30234 4.2V5.4H5.10234C4.77097 5.4 4.50234 5.66863 4.50234 6C4.50234 6.33137 4.77097 6.6 5.10234 6.6H6.30234V7.8C6.30234 8.13137 6.57097 8.4 6.90234 8.4C7.23371 8.4 7.50234 8.13137 7.50234 7.8V6.6H8.70234C9.03371 6.6 9.30234 6.33137 9.30234 6C9.30234 5.66863 9.03371 5.4 8.70234 5.4H7.50234V4.2Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.90234 0C3.58864 0 0.902344 2.68629 0.902344 6C0.902344 9.31371 3.58864 12 6.90234 12C10.2161 12 12.9023 9.31371 12.9023 6C12.9023 2.68629 10.2161 0 6.90234 0ZM2.10234 6C2.10234 3.34903 4.25138 1.2 6.90234 1.2C9.55331 1.2 11.7023 3.34903 11.7023 6C11.7023 8.65097 9.55331 10.8 6.90234 10.8C4.25138 10.8 2.10234 8.65097 2.10234 6Z"
                        fill="white"
                      />
                    </svg>
                    Add Network
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Head>
  );
}

export default NewRoute;
const Head = styled.div`
  .addnetwork {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .addnetwork p {
    color: #131313;
    font-size: 13px;
    font-weight: 300;
    line-height: 14px;
  }
  .addnetwork button {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    background-color: #5e5adb;
    color: white;
    border: none;
    font-size: 13px;
    border-radius: 7px;
    cursor: pointer;
    padding: 10px;
    width: 28%;
    text-align: center;
  }
  .colored {
    background-color: #5e5adb1a;
    padding: 30px;
    border-radius: 10px;
  }
  .borderlines {
    border: 1px solid #d0d5dd;
    border-radius: 7px;
    width: 50%;
    padding: 20px;
  }
  .src img {
    height: 50%;
    width: 50%;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .select select {
    appearance: none;
    width: 100%;
    padding: 5px;
    border: none;
    outline: none;
  }
  .select2 select {
    appearance: none;
    width: 100%;
    color: #7d7d7d;
    padding: 10px;
    font-size: 13px;
    font-weight: 300;
    border: none;
    outline: none;
  }
  .role {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
  .role label {
    font-size: 13px;
  }
  .select {
    display: flex;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px;
    width: 50%;
    align-items: center;
    border: 1px solid gainsboro;
  }
  .select2 {
    display: flex;
    border-radius: 10px;
    margin-top: 10px;
    padding: 0px 10px 0px 0px;
    background-color: white;
    width: 100%;
    align-items: center;
    border: 1px solid gainsboro;
  }
  .white {
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    margin: 20px;
  }
  .top {
    padding: 90px 30px 10px 30px;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  .back {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .back span {
    color: #5e5adb;
    font-size: 14px;
    font-weight: 300;
  }
  .top h2 {
    color: #090814;
    line-height: 38px;
    font-size: 26px;
    font-weight: 350;
  }
  .top p {
    color: #848d87;
    line-height: 18px;
    font-size: 13px;
    font-weight: 300;
  }
`;
