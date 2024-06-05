import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { token } from "../Authorization";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

function UpdateBlackList({ closeBlackList, dataID }) {
  const [loading, setLoading] = useState(false);
  const [myData, setData] = useState({
    addNumber: "",
    removeNumber: "",
    name: "",
  });
  async function CreateHandler() {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}blacklist/updateBlacklist/${dataID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(myData),
        }
      );

      const server = await response.json();
      setLoading(false);
      console.log(server);
      if (response?.status === 200) {
        toast.success(server?.message);
        // window.location.pathname = "/shortcode";
        setLoading(false);
      } else if (response?.status === 400 || response?.status === 401) {
        toast.error(server?.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // setrefresh((prev) => !prev);
  }
  return (
    <TopStyle>
      <SmallModalLayout
        title="Update Black List"
        onClick={() => {
          closeBlackList(false);
        }}
      >
        <div className="update">
          <LabelinputLayout
            label="Update Name"
            placeholder="update name"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
          <LabelinputLayout
            label="Add Number"
            placeholder="Add number"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, addNumber: e.target.value };
              });
            }}
          />
          <LabelinputLayout
            label="Remove Number"
            placeholder="Remove Number"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, removeNumber: e.target.value };
              });
            }}
          />
        </div>
        <div className="btn">
          <button
            onClick={() => {
              closeBlackList(false);
            }}
            style={{
              backgroundColor: "white",
              border: "1px solid gainsboro",
              color: "black",
            }}
          >
            Cancel
          </button>
          <button
            onClick={CreateHandler}
            style={{
              backgroundColor: "#5E5ADB",
              border: "none",
              color: "white",
            }}
          >
            {loading ? <PulseLoader color="white" size={20} /> : "Create"}
          </button>
        </div>
      </SmallModalLayout>
    </TopStyle>
  );
}

export default UpdateBlackList;
const TopStyle = styled.div`
  .btn {
    padding: 20px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
  .btn button {
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 2%;
    line-height: 20px;
    border-radius: 10px;
    font-weight: 500;
  }
  .update {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
`;
