import React, { useState, useEffect } from "react";
import ManagerHeader from "./ManagerHeader";
import style from "../styles/ComponentStyle/settings.module.css";
function ManagerSettings() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const details = { password, confirmPassword };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  async function HandleClick(e) {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/auth/reset-password/46d6521a-9e32-4462-b016-9e821f3248ce`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details),
      }
    );
    const server = await response.json();
    console.log(server);
  }
  return (
    <div>
      <ManagerHeader title="Settings" />
      <div className={style.top}>
        <h1>Settings</h1>
        <span>Perform various account settings here</span>
      </div>
      <div className={style.main}>
        <div className={style.passheader}>
          <h2>Password</h2>
          <p>Please enter your current password to change your password.</p>
        </div>
        <div className={style.form}>
          <label>Current Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <div className={style.form}>
          <label>New Password</label>
          <input type="password" placeholder="password" />
        </div> */}
        <div className={style.form}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className={style.btn}>
          {/* <button
            style={{ backgroundColor: "transparent", border: "1px solid gray" }}
          >
            Cancel
          </button> */}
          <button
            style={{ backgroundColor: "#5E5ADB", color: "white" }}
            onClick={HandleClick}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManagerSettings;
