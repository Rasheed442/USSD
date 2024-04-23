import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React from "react";
import styled from "styled-components";
function ViewReportLogs({ closeLogs }) {
  const labels = [
    {
      main: "ROUTE",
      content: "MTN Route",
    },
    {
      main: "USSD Type",
      content: "PUSH",
    },
    {
      main: "SHORTCODE",
      content: "31000",
    },
    {
      main: "USSD Session",
      content: "00:03:59",
    },
    {
      main: "TOTAL COMPLETED",
      content: "3",
    },
    {
      main: "TOTAL INCOMPLETED",
      content: "1",
    },
    {
      main: "AMOUNT",
      content: "1290.00",
    },
    {
      main: "START TIME",
      content: "00:03:59",
    },
    {
      main: "END TIME",
      content: "00:03:59",
    },
    {
      main: "CREATED AT",
      content: "12/04/23",
    },
    {
      main: "TOTAL TIME",
      content: "00:20:34",
    },
  ];
  return (
    <ViewReport>
      <SmallModalLayout title="USSD Detail" onClick={() => closeLogs(false)}>
        <div className="top">
          <div className="number">
            <p>
              PHONE NUMBER <span>4 </span>
            </p>
          </div>
          <button>Download Report</button>
        </div>
        <p
          style={{
            color: "#5A6376",
            fontWeight: "200",
            padding: "0px 20px 20px 20px",
            lineHeight: "30px",
          }}
        >
          +234 80 3297 8383 , 234 912586 3893,
          <br /> +234 81 4223 7365, +234 90 5632 2872
        </p>
        <div className="main">
          <p>Total Summary</p>
          <div>
            {labels.map((l) => {
              return (
                <div className="content">
                  <span>{l?.main}</span>
                  <p style={{ color: l?.content === "PUSH" ? "#5E5ADB" : "" }}>
                    {l?.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SmallModalLayout>
    </ViewReport>
  );
}

export default ViewReportLogs;
const ViewReport = styled.div`
  .main {
    padding: 0px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  /* .main p {
    color: black;
    font-style: 300;
    line-height: 20px;
  } */
  .content {
    display: flex;
    border: 1px solid #e9edf5;
    font-size: 13px;
    justify-content: space-between;
  }
  .content p {
    width: 50%;
    padding: 15px;

    display: flex;
    justify-content: flex-start;
  }
  .content span {
    justify-content: flex-start;
    color: #687182;
    background-color: #f9fafb;
    padding: 15px;
    font-weight: 400;
    width: 50%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .top button {
    background-color: #5e5adb;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px;
  }
  .number {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: gainsboro;
    border-radius: 10px;
    padding: 10px;
  }
  .number p {
    color: #687182;
    font-size: 12px;
    line-height: 14px;
  }
  .number span {
    background-color: #5e5adb;
    color: white;
    font-size: 12px;
    height: 10px;
    width: 10px;
    padding: 5px;
    border-radius: 10px;
  }
`;
