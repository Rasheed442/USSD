import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";

function NewRoute({ close }) {
  return (
    <Head>
      <SmallModalLayout
        onClick={() => close(false)}
        title="Add Route"
        subtitle="Add a new route for use in IVR campaigns"
      >
        <div className="inputt">
          <LabelinputLayout
            label="Route Name"
            placeholder="e.g Greetings Message"
          />
          <div className="labels">
            <label>SIP Account</label>
            <div className="select">
              <select>
                <option>Select account</option>
              </select>
              <AiOutlineDown size={13} />
            </div>
          </div>
          <div className="labels">
            <label>Category</label>
            <div className="select">
              <select>
                <option>All countries</option>
              </select>
              <AiOutlineDown size={13} />
            </div>
          </div>
          <div className="btn">
            <button
              style={{
                backgroundColor: "white",
                color: "#464F60",
                border: "1px  solid #D0D5DD",
              }}
            >
              Cancel
            </button>
            <button style={{ backgroundColor: "#5E5ADB", color: "white" }}>
              Add Route
            </button>
          </div>
        </div>
      </SmallModalLayout>
    </Head>
  );
}

export default NewRoute;
const Head = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-top: 20px;
    cursor: pointer;
  }
  .btn button {
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    border: none;
    width: 50%;
    padding: 10px;
  }
  .inputt {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 17px;
  }
  .labels label {
    color: #344054;
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
  }
  .select {
    display: flex;
    align-items: center;
    border: 1px solid #d0d5dd;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
  }
  .select select {
    appearance: none;
    padding: 5px;
    line-height: 24px;
    width: 100%;
    padding: 5px;
    color: #667085;
    border: none;
    outline: none;
  }
`;
