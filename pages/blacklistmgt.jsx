import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
import React from "react";
import styled from "styled-components";

function blacklistmgt() {
  return (
    <Headings>
      <DashbaordLayout>
        <AdminHeader title="Blacklist Management" />
        <div className="bg">
          <div className="container">
            <div className="head">
              <h1>Blacklist Management</h1>
              <p>Manage database for blacklist number.</p>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={() => setCreateUser(true)}
              style={{
                backgroundColor: "white",
                border: "1px solid gainsboro",
                color: "black",
              }}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6676 9.66661L8.00095 6.99995M8.00095 6.99995L5.33428 9.66661M8.00095 6.99995V12.9999M13.5943 11.2599C14.2445 10.9055 14.7582 10.3445 15.0542 9.6657C15.3502 8.98686 15.4118 8.22877 15.2291 7.51107C15.0464 6.79338 14.6299 6.15696 14.0454 5.70225C13.4609 5.24754 12.7415 5.00044 12.001 4.99995H11.161C10.9592 4.21944 10.5831 3.49484 10.0609 2.88061C9.53877 2.26638 8.88418 1.77852 8.14635 1.45369C7.40852 1.12886 6.60665 0.975521 5.80103 1.0052C4.99541 1.03489 4.20699 1.24682 3.49507 1.62506C2.78314 2.0033 2.16622 2.53802 1.6907 3.189C1.21517 3.83999 0.89341 4.59031 0.749603 5.38354C0.605797 6.17678 0.643687 6.9923 0.860426 7.76879C1.07716 8.54528 1.46711 9.26252 2.00095 9.86661"
                  stroke="#464F60"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Upload mobile numbers
            </button>
            <button onClick={() => setCreateUser(true)}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4 6.3C10.4 5.80294 9.99706 5.4 9.5 5.4C9.00294 5.4 8.6 5.80294 8.6 6.3V8.1H6.8C6.30294 8.1 5.9 8.50294 5.9 9C5.9 9.49706 6.30294 9.9 6.8 9.9H8.6V11.7C8.6 12.1971 9.00294 12.6 9.5 12.6C9.99706 12.6 10.4 12.1971 10.4 11.7V9.9H12.2C12.6971 9.9 13.1 9.49706 13.1 9C13.1 8.50294 12.6971 8.1 12.2 8.1H10.4V6.3Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 0C4.52944 0 0.5 4.02944 0.5 9C0.5 13.9706 4.52944 18 9.5 18C14.4706 18 18.5 13.9706 18.5 9C18.5 4.02944 14.4706 0 9.5 0ZM2.3 9C2.3 5.02355 5.52355 1.8 9.5 1.8C13.4764 1.8 16.7 5.02355 16.7 9C16.7 12.9764 13.4764 16.2 9.5 16.2C5.52355 16.2 2.3 12.9764 2.3 9Z"
                  fill="white"
                />
              </svg>
              New Database
            </button>
          </div>
        </div>
      </DashbaordLayout>
    </Headings>
  );
}

export default blacklistmgt;
const Headings = styled.div`
  .bg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 110px 30px 20px 30px;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .btn button {
    background-color: #5e5adb;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    align-items: center;
    gap: 5px;
  }
  .head {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .head h1 {
    font-weight: 500;
    font-size: 29px;
    line-height: 20px;
    color: #090814;
  }
  .head span {
    background-color: #ececf4;
    font-size: 14px;
    font-weight: 500;
    padding: 13px;
    border-radius: 5px;
    line-height: 20px;

    color: #5e5adb;
  }
  .container {
    display: flex;
    line-height: 0px;
    flex-direction: column;
  }
  .container p {
    color: #848d87;
    font-size: 13px;
    font-weight: 500;
  }
`;
