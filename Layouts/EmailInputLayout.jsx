import React from "react";
import styles from "../styles/LayoutStyle/InputLayout.module.css";

function EmailInputLayout({
  label,
  placeholder,
  onChange,
  style,
  inputstyle,
  disabled,
  value,
  logo,
}) {
  return (
    <div className={styles.mails} style={style}>
      <label>{label}</label>
      <div className={styles.mail}>
        {logo === "mail" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3337 5.00065C18.3337 4.08398 17.5837 3.33398 16.667 3.33398H3.33366C2.41699 3.33398 1.66699 4.08398 1.66699 5.00065M18.3337 5.00065V15.0007C18.3337 15.9173 17.5837 16.6673 16.667 16.6673H3.33366C2.41699 16.6673 1.66699 15.9173 1.66699 15.0007V5.00065M18.3337 5.00065L10.0003 10.834L1.66699 5.00065"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : logo === "country" ? (
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.2595 0.5H7.74316V16.909H16.2595V0.5Z" fill="#EBF7F7" />
            <path
              d="M7.74211 0.5H2.32263C1.04519 0.5 0 1.43766 0 2.766V14.643C0 15.9713 1.04519 16.909 2.32263 16.909H7.74211V0.5Z"
              fill="#589F58"
            />
            <path
              d="M21.6773 0.5H16.2578V16.909H21.6773C22.9547 16.909 23.9999 15.9713 23.9999 14.643V2.766C23.9999 1.43766 22.9547 0.5 21.6773 0.5Z"
              fill="#589F58"
            />
            <path
              d="M21.6773 0.5H16.2578V12.2598L21.5999 16.909C22.8773 16.909 23.9999 15.9713 23.9999 14.643V2.766C23.9999 1.43766 22.9547 0.5 21.6773 0.5Z"
              fill="#479347"
            />
            <path
              d="M16.2595 12.2598V0.5H7.74316V5.14921L16.2595 12.2598Z"
              fill="#E2F2F1"
            />
            <path
              d="M7.74174 0.5H2.32227L7.74174 5.14921V0.5Z"
              fill="#479347"
            />
            <path
              d="M16.2578 16.9086H21.6773C22.9547 16.9086 23.9999 16.1272 23.9999 14.5645H16.2578V16.9086Z"
              fill="#398439"
            />
            <path
              d="M16.2595 14.5645H7.74316V16.9086H16.2595V14.5645Z"
              fill="#D6EAE8"
            />
            <path
              d="M0 14.5645C0 16.1272 1.04519 16.9086 2.32263 16.9086H7.74211V14.5645H0Z"
              fill="#398439"
            />
            <path
              d="M21.6773 0.5H16.2578V4.64131L23.9999 7.06359V2.766C23.9999 1.43766 22.9547 0.5 21.6773 0.5Z"
              fill="#398439"
            />
            <path
              d="M16.2595 4.64131V0.5H7.74316V2.10183L16.2595 4.64131Z"
              fill="#D6EAE8"
            />
            <path
              d="M7.74174 0.5H2.32227L7.74174 2.10183V0.5Z"
              fill="#398439"
            />
          </svg>
        ) : (
          ""
        )}

        <input
          value={value}
          type="text"
          disabled={disabled}
          style={inputstyle}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default EmailInputLayout;
