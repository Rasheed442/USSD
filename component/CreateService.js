import React, { useState } from "react";
import style from "../styles/ComponentStyle/createservice.module.css";
import LabelinputLayout from "@/Layouts/LabelinputLayout";
import TextAreaInput from "@/Layouts/TextAreaInput";
import styled from "styled-components";

function CreateService({ closeService }) {
  const [serviceDetails, setServiceDetails] = useState(true);
  const [applicationSource, setApplicationSource] = useState(false);
  const [check, setCheck] = useState(false);
  const [appurl, setAppurl] = useState(false);
  const [appmenu, setAppMenu] = useState(false);
  const [appsource, setAppSource] = useState(true);
  const [simpleResponse, setSimpleResponse] = useState(true);
  const [custom, setCustom] = useState(false);
  return (
    <Service>
      <div className={style.top}>
        <div className={style.back} onClick={() => closeService(false)}>
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
          <span>Back to USSD Service</span>
        </div>
        <h2>Create New Service</h2>
        <p>Add service details and select application source</p>
      </div>

      <div className={style.white}>
        <div className={style.services}>
          <div
            className={style.serviceDtls}
            onClick={() => {
              setServiceDetails(true),
                setApplicationSource(false),
                setCheck(false);
            }}
          >
            <span
              style={{
                backgroundColor: serviceDetails ? "#4945C4" : "white",
                color: serviceDetails ? "#FFFFFF" : "#A1A9B8",
                border: serviceDetails
                  ? "2px solid #5E5ADB"
                  : "1px solid #D5DBE5",
              }}
            >
              {check ? (
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#039855"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="32"
                    height="32"
                    rx="16"
                    stroke="#D5DBE5"
                  />
                  <path
                    d="M23.6663 12L14.4997 21.1667L10.333 17"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                1
              )}
            </span>
            <p style={{ color: serviceDetails ? "#5E5ADB" : "#A1A9B8" }}>
              Service Details
            </p>
          </div>
          <div
            className={style.serviceDtls}
            onClick={() => {
              setApplicationSource(true);
              setServiceDetails(false);
              setCheck(true);
            }}
          >
            <span
              style={{
                backgroundColor: applicationSource ? "#4945C4" : "white",
                color: applicationSource ? "#FFFFFF" : "#A1A9B8",
                border: applicationSource
                  ? "2px solid #5E5ADB"
                  : "1px solid #D5DBE5",
              }}
            >
              2
            </span>
            <p style={{ color: applicationSource ? "#5E5ADB" : "#A1A9B8" }}>
              USSD Application Source
            </p>
          </div>
        </div>
        {serviceDetails && (
          <div className={style.details}>
            <p>Service Details</p>
            <span>Add basic information about the service</span>
          </div>
        )}
        {serviceDetails && (
          <div className={style.container2}>
            <LabelinputLayout
              label="Service Name"
              placeholder="Enter new service name"
            />
            <TextAreaInput
              label="Description"
              inputstyle={{ height: "120px" }}
              placeholder="Type in the word"
            />
            <div className={style.role}>
              <label>Route</label>
              <div className={style.select}>
                <select>
                  <option>Select route</option>
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
            <div className={style.role}>
              <label>Shortcode</label>
              <div className={style.select}>
                <select>
                  <option>Select route</option>
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
        )}
        {serviceDetails && (
          <div className={style.btn}>
            <button
              style={{
                backgroundColor: "white",
                color: "#464F60",
                border: "1px solid #464F6029",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#5E5ADB",
                color: "white",
                border: "none",
              }}
            >
              Continue
            </button>
          </div>
        )}
        {applicationSource && (
          <div className={style.details}>
            <p>USSD Application Source</p>
            <span>Add basic information about the service</span>
          </div>
        )}
        {applicationSource && (
          <div className={style.container2}>
            <div className={style.role}>
              <label>Select Application Source</label>
              <div className={style.select}>
                <select
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue === "2") {
                      setAppSource(false);
                      setAppMenu(false);
                      setAppurl(true);
                    } else if (selectedValue === "3") {
                      setAppSource(false);
                      setAppMenu(true);
                      setAppurl(false);
                    } else if (selectedValue === "1") {
                      setAppSource(true);
                      setAppMenu(false);
                      setAppurl(false);
                    }
                  }}
                >
                  <option value="1">Select Application Source</option>
                  <option value="2">Application URL</option>
                  <option value="3">Application Menu</option>
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

            {appsource && (
              <div>
                <img src="./source.svg" />
              </div>
            )}

            <div className={style.applicationSource}>
              {appurl || appmenu ? (
                <LabelinputLayout
                  label="USSD Application Source*"
                  inputstyle={{ width: "40%", color: "#5E5ADB" }}
                  value={appurl ? "Application URL" : "Application Menu"}
                />
              ) : (
                ""
              )}
              {appurl && (
                <LabelinputLayout
                  label=" Application URL"
                  placeholder="Input URL"
                />
              )}
              {appmenu && (
                <LabelinputLayout
                  label="Welcome Message"
                  placeholder="Welcome Message"
                />
              )}
              {appmenu && (
                <div className="applications">
                  <h3>Select Application Menu</h3>
                  <div className="btn">
                    <button
                      onClick={() => {
                        setSimpleResponse(true);
                        setCustom(false);
                      }}
                      style={{
                        backgroundColor: simpleResponse ? "#5E5ADB" : "",
                        color: simpleResponse ? "white" : "",
                      }}
                    >
                      Simple Response
                    </button>
                    <button
                      onClick={() => {
                        setSimpleResponse(false);
                        setCustom(true);
                      }}
                      style={{
                        backgroundColor: custom ? "#5E5ADB" : "",
                        color: custom ? "white" : "",
                      }}
                    >
                      Custom
                    </button>
                  </div>
                  <div className="menuconfiguration">
                    <span>Application Menu Configuration</span>
                    <div className="config">
                      <p>Flow-1</p>
                      <span>
                        Keys 0-9 that which gives an action when pressed.
                      </span>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>KEYS</th>
                        <th>TITLE</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>HOME</td>
                        <td>
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.125 7.625H14.875C15.2202 7.625 15.5 7.34518 15.5 7C15.5 6.65482 15.2202 6.375 14.875 6.375H1.125C0.779822 6.375 0.5 6.65482 0.5 7C0.5 7.34518 0.779822 7.625 1.125 7.625Z"
                              fill="#667085"
                            />
                            <path
                              d="M13.9911 7L8.80806 12.1831C8.69085 12.3003 8.625 12.4592 8.625 12.625C8.625 12.7908 8.69085 12.9497 8.80806 13.0669C8.92527 13.1842 9.08424 13.25 9.25 13.25C9.41576 13.25 9.57473 13.1842 9.69194 13.0669L15.3169 7.44194C15.561 7.19786 15.561 6.80214 15.3169 6.55806L9.69194 0.933058C9.57473 0.815848 9.41576 0.75 9.25 0.75C9.08424 0.75 8.92527 0.815848 8.80806 0.933058C8.69085 1.05027 8.625 1.20924 8.625 1.375C8.625 1.54076 8.69085 1.69973 8.80806 1.81694L13.9911 7Z"
                              fill="#667085"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Check Balance</td>
                        <td>
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.125 7.625H14.875C15.2202 7.625 15.5 7.34518 15.5 7C15.5 6.65482 15.2202 6.375 14.875 6.375H1.125C0.779822 6.375 0.5 6.65482 0.5 7C0.5 7.34518 0.779822 7.625 1.125 7.625Z"
                              fill="#667085"
                            />
                            <path
                              d="M13.9911 7L8.80806 12.1831C8.69085 12.3003 8.625 12.4592 8.625 12.625C8.625 12.7908 8.69085 12.9497 8.80806 13.0669C8.92527 13.1842 9.08424 13.25 9.25 13.25C9.41576 13.25 9.57473 13.1842 9.69194 13.0669L15.3169 7.44194C15.561 7.19786 15.561 6.80214 15.3169 6.55806L9.69194 0.933058C9.57473 0.815848 9.41576 0.75 9.25 0.75C9.08424 0.75 8.92527 0.815848 8.80806 0.933058C8.69085 1.05027 8.625 1.20924 8.625 1.375C8.625 1.54076 8.69085 1.69973 8.80806 1.81694L13.9911 7Z"
                              fill="#667085"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Check Contact</td>
                        <td>
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.125 7.625H14.875C15.2202 7.625 15.5 7.34518 15.5 7C15.5 6.65482 15.2202 6.375 14.875 6.375H1.125C0.779822 6.375 0.5 6.65482 0.5 7C0.5 7.34518 0.779822 7.625 1.125 7.625Z"
                              fill="#667085"
                            />
                            <path
                              d="M13.9911 7L8.80806 12.1831C8.69085 12.3003 8.625 12.4592 8.625 12.625C8.625 12.7908 8.69085 12.9497 8.80806 13.0669C8.92527 13.1842 9.08424 13.25 9.25 13.25C9.41576 13.25 9.57473 13.1842 9.69194 13.0669L15.3169 7.44194C15.561 7.19786 15.561 6.80214 15.3169 6.55806L9.69194 0.933058C9.57473 0.815848 9.41576 0.75 9.25 0.75C9.08424 0.75 8.92527 0.815848 8.80806 0.933058C8.69085 1.05027 8.625 1.20924 8.625 1.375C8.625 1.54076 8.69085 1.69973 8.80806 1.81694L13.9911 7Z"
                              fill="#667085"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Service>
  );
}

export default CreateService;
const Service = styled.div`
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }

  .table th {
    font-weight: 600;
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
  .menuconfiguration {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px 20px 20px;
  }
  .menuconfiguration span {
    font-size: 14px;
    font-weight: 300;
  }
  .config p {
    color: #344054;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
  }
  .config span {
    color: #667085;
    font-size: 14px;
  }
  .applications {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #d0d5dd;
    border-radius: 5px;
  }
  .applications h3 {
    padding: 14px;
    color: #454545;
    font-weight: 400;
    font-size: 14px;
    border-bottom: 1px solid #d0d5dd;
  }
  .btn {
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #d0d5dd;
  }
  .btn button {
    padding: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
  }
`;
