import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React, { useState } from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

function CreateShortCode({ closeShortCode, setrefresh }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userID") : null;
  const [name, setName] = useState();
  const [MyuserId, setUserid] = useState();
  const [loading, setLoading] = useState(false);

  const details = { name, userId: userId };
  async function CreateHandler() {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}shortCode/createShortCode/`,
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
      setLoading(false);
      console.log(server);
      if (server?.status === true) {
        toast.success(server?.message);
        // window.location.pathname = "/shortcode";
        setLoading(false);
      } else if (server?.status === false) {
        toast.error(server?.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setrefresh((prev) => !prev);
  }
  return (
    <ShortCodes>
      <SmallModalLayout
        onClick={() => closeShortCode(false)}
        title="Create Short Code"
      >
        <div className="hide">
          <LabelinputLayout
            label="Short Code Name"
            placeholder="Enter shortcode name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="btn">
          <button style={{ border: "1px solid #464F6029", color: "#464F60" }}>
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
    </ShortCodes>
  );
}

export default CreateShortCode;
const ShortCodes = styled.div`
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
  .hide {
    padding: 20px;
  }
`;
