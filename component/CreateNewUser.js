import React from "react";
import style from "../styles/ComponentStyle/createuser.module.css";
import LabelinputLayout from "@/Layouts/LabelinputLayout";
import EmailInputLayout from "@/Layouts/EmailInputLayout";
import PasswordInput from "@/Layouts/PasswordInput";
function CreateNewUser({ closeUser }) {
  return (
    <>
      <div className={style.top}>
        <div className={style.back} onClick={() => closeUser(false)}>
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
          <span>Back to User Management</span>
        </div>
        <h2>Add New User</h2>
        <p>Add a new user account and assign user roles and permissions</p>
      </div>

      <div className={style.white}>
        <div className={style.container}>
          <p>PERSONAL DETAILS </p>

          <div className={style.names}>
            <LabelinputLayout
              label="First Name"
              placeholder="Enter first name"
              style={{ width: "50%" }}
            />
            <LabelinputLayout
              label="Last Name"
              placeholder="Enter last name"
              style={{ width: "50%" }}
            />
          </div>
          <div className={style.container1}>
            <EmailInputLayout
              logo="mail"
              label="Email"
              placeholder="Enter email address"
            />
            <EmailInputLayout
              logo="country"
              label="Phone number"
              placeholder="+234 567 789 30"
            />
            <LabelinputLayout label="Address" placeholder="Enter Address" />
            <div className={style.role}>
              <label>Select User Role</label>
              <div className={style.select}>
                <select>
                  <option>Client Account</option>
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
              <label>Account Manager</label>
              <div className={style.select}>
                <select>
                  <option>Select manager</option>
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
        {/* owners deatils */}
        <div className={style.container2}>
          <p>LOGIN DETAILS </p>

          <LabelinputLayout
            label="Login Username"
            placeholder="Enter unique username for this user"
          />
          <PasswordInput
            label="New Password"
            content="Password must contain one uppercase letter, one special character, one number and must be characters long "
          />
          <PasswordInput
            label="Old Password"
            content="Password must contain one uppercase letter, one special character, one number and must be characters long "
          />
        </div>
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
          <button style={{ backgroundColor: "#5E5ADB", color: "white" }}>
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateNewUser;
