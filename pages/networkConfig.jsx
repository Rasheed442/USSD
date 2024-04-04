import React, { useState } from "react";
import style from "../styles/PagesStyle/networkConfig.module.css";
import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import styled from "styled-components";
import ButtonLayout from "@/Layouts/ButtonLayout";
import LabelinputLayout from "@/Layouts/LabelinputLayout";
import Image from "next/image";
function networkConfig() {
  const [selectprotocol, setSelectProtocol] = useState(true);
  const [smpp, setSmpp] = useState(false);
  const [api, setApi] = useState(false);
  const [sip, setSip] = useState(false);
  return (
    <Header>
      <DashbaordLayout>
        <AdminHeader title="Network Config" />
        <div className="overview">
          <div>
            <h2>Network Configuration</h2>
            <span>Select Protocol and configure network</span>
          </div>
        </div>
        <div className="white">
          <div className="inputs">
            <LabelinputLayout
              inputstyle={{ width: "50%" }}
              label="Network Name"
              placeholder="Enter your network name"
            />
            <div className="role">
              <label>Select Protocol</label>
              <div className="select">
                <select
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue === "1") {
                      setSelectProtocol(true);
                      setSmpp(false);
                      setApi(false);
                      setSip(false);
                    } else if (selectedValue === "2") {
                      setSelectProtocol(false);
                      setSmpp(true);
                      setApi(false);
                      setSip(false);
                    } else if (selectedValue === "3") {
                      setSelectProtocol(false);
                      setSmpp(false);
                      setApi(true);
                      setSip(false);
                    } else if (selectedValue === "4") {
                      setSelectProtocol(false);
                      setSmpp(false);
                      setApi(false);
                      setSip(true);
                    }
                  }}
                >
                  <option value="1">Select Protocol</option>
                  <option value="2">SMPP</option>
                  <option value="3">API</option>
                  <option value="4">SIP</option>
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
            {selectprotocol ? (
              <div className="src">
                <img src="./source.svg" />
              </div>
            ) : (
              ""
            )}
            {sip || api || smpp ? (
              <div>
                <LabelinputLayout
                  label="Protocol*"
                  style={{ gap: "30px" }}
                  inputstyle={{ width: "20%", color: "#5E5ADB" }}
                  value={smpp ? "SMPP" : api ? "API" : sip ? "SIP" : ""}
                />
              </div>
            ) : (
              ""
            )}
            {smpp && (
              <div>
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SMPP Hostname"
                  placeholder="https:URL///hhjsbnhkss"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SMPP Port"
                  placeholder="3678vhnvdachjv376378e57"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SMPP System"
                  placeholder="Enter your username"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Password"
                  placeholder="Enter your password"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SMPP Interface Version"
                  placeholder="SMPP 3.4"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SMPP Blind Type"
                  placeholder="Content-Type"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SMPP TON(Type of Number)"
                  placeholder="XML"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Allowed Prefixes"
                  placeholder="44"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Denied Prefixes"
                  placeholder="234"
                />
              </div>
            )}
            {api && (
              <div>
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="API Endpoint URL"
                  placeholder="https:URL///hhjsbnhks s"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="API Key"
                  placeholder="3678vhnvdachjv376378e57"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Username"
                  placeholder="Enter your username"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Password"
                  placeholder="Enter your password"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Request Method"
                  placeholder="POST"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Request Headers"
                  placeholder="Content-Type"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Request Body Format"
                  placeholder="XML"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Allowed Prefixes"
                  placeholder="44"
                />
              </div>
            )}
            {sip && (
              <div>
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SIP Server Address"
                  placeholder="https:URL///hhjsbnhks s"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SIP Port"
                  placeholder="2673.273662.28"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SIP Username"
                  placeholder="Enter your username"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Password"
                  placeholder="Enter your password"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SIP Protocol Version"
                  placeholder="SIP 2.0"
                />
                <div className="role">
                  <label>SIP Transport Protocol</label>
                  <div className="select">
                    <select>
                      <option value="1">UDP</option>
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
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="SIP Content Type"
                  placeholder="application/vnd.3gpp.ussd+xml"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Allowed Prefixes"
                  placeholder="44"
                />
                <LabelinputLayout
                  inputstyle={{ width: "50%" }}
                  label="Denied Prefixes"
                  placeholder="234"
                />
              </div>
            )}
          </div>
        </div>
      </DashbaordLayout>
    </Header>
  );
}

export default networkConfig;
const Header = styled.div`
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
  .overview {
    padding: 100px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .overview h2 {
    color: #090814;
    font-size: 29px;
    font-weight: 500;
    line-height: 43px;
  }
  .overview span {
    color: #848d87;
    letter-spacing: 0.5%;
    line-height: 20px;
    font-size: 12.5px;
    font-weight: 300;
  }
  .white {
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    margin: 20px;
  }
`;
