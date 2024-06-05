import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import Axios from "axios";
import { config, token } from "./Authorization";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

function UploadPrefix({ close, refresh }) {
  const [countryData, setCountryData] = useState();
  const [timezones, setTimeZone] = useState();
  const [loading, setLoading] = useState(false);
  const [myData, setData] = useState({
    countryName: "France",
    prefix: "+33",
    operatorPrefix: "0",
    timezone: "Pacific/Midway",
  });

  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_API}country`, config)
      .then((response) => {
        setCountryData(response?.data);
      })
      .catch((error) => {});
  }, []);
  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_API}prefix/getTimezones`, config)
      .then((response) => {
        setTimeZone(response?.data?.data);
      })
      .catch((error) => {});
  }, []);

  // async function CreateHandler() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API}prefix/createPrefix`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify(myData),
  //       }
  //     );

  //     const server = await response.json();
  //     setLoading(false);
  //     console.log(server);
  //     if (server?.code === 200 || 201) {
  //       toast.success(server?.message);
  //       setLoading(false);
  //     } else if (server?.code === 401 || 400) {
  //       toast.error(server?.message);
  //       alert(response?.message);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  //   refresh((prev) => !prev);
  // }

  async function CreateHandler() {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}prefix/createPrefix`,
        {
          method: "POST",
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

      // Check for successful response
      if (response.ok) {
        toast.success(server?.message);
      } else {
        toast.error(server?.message || "An error occurred");
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred");
      setLoading(false);
    }

    // Toggle refresh state
    refresh((prev) => !prev);
  }

  return (
    <Upload>
      <SmallModalLayout
        subtitle="Upload prefix to identify operator"
        title="Upload Prefixes"
        onClick={() => close(false)}
      >
        <div className="topp">
          <div className="labels">
            <label>Country Name</label>
            <div className="select">
              <select
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, countryName: e.target.value };
                  });
                }}
              >
                <option>select country</option>
                {countryData?.map((c) => {
                  return <option>{c}</option>;
                })}
              </select>
              <AiOutlineDown size={10} />
            </div>
          </div>
          <LabelinputLayout
            label="Prefix"
            placeholder="Enter Prefix code"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, prefix: e.target.value };
              });
            }}
          />
          <LabelinputLayout
            label="Operator Prefix"
            placeholder="Enter Operator Prefix number"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, operatorPrefix: e.target.value };
              });
            }}
          />
          <div className="labels" style={{ paddingTop: "10px" }}>
            <label>Timezone</label>
            <div className="select">
              <select
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, timezone: e.target.value };
                  });
                }}
              >
                <option>Select Timezone</option>
                {timezones?.map((c) => {
                  return <option>{c?.tzCode}</option>;
                })}
              </select>
              <AiOutlineDown size={10} />
            </div>
          </div>
          <div className="upload">
            {/* <span>Upload logo</span>
            <div className="logo">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  fill="#F2F4F7"
                />
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  stroke="#F9FAFB"
                  stroke-width="6"
                />
                <g clip-path="url(#clip0_42_61297)">
                  <path
                    d="M26.3333 26.3334L23 23M23 23L19.6666 26.3334M23 23V30.5M29.9916 28.325C30.8044 27.8819 31.4465 27.1808 31.8165 26.3322C32.1866 25.4837 32.2635 24.5361 32.0351 23.6389C31.8068 22.7418 31.2862 21.9463 30.5555 21.3779C29.8248 20.8095 28.9257 20.5006 28 20.5H26.95C26.6977 19.5244 26.2276 18.6186 25.5749 17.8509C24.9222 17.0831 24.104 16.4732 23.1817 16.0672C22.2594 15.6612 21.2571 15.4695 20.2501 15.5066C19.243 15.5437 18.2575 15.8086 17.3676 16.2814C16.4777 16.7542 15.7066 17.4226 15.1122 18.2363C14.5177 19.0501 14.1155 19.988 13.9358 20.9795C13.756 21.9711 13.8034 22.9905 14.0743 23.9611C14.3452 24.9317 14.8327 25.8282 15.5 26.5834"
                    stroke="#475467"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_42_61297">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(13 13)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p>
                <label
                  style={{ color: "#6941C6", cursor: "pointer" }}
                  for="fileInput"
                >
                  Click to upload
                </label>
                &nbsp;
                <input type="file" id="fileInput" />
                or drag and drop
                <br />
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div> */}
            <div className="btn">
              <button
                style={{ color: "#464F60", border: "1px solid #464F6029" }}
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
                {loading ? <PulseLoader color="white" size={15} /> : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </SmallModalLayout>
    </Upload>
  );
}

export default UploadPrefix;
const Upload = styled.div`
  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    padding-top: 40px;
    cursor: pointer;
  }
  .btn button {
    padding: 10px;
    border-radius: 8px;
    background-color: transparent;
  }
  .labels {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .labels label {
    color: #344054;
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
  }
  .topp {
    padding: 20px;
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
  .upload span {
    color: #344054;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #344054;
  }
  .upload {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #eaecf0;
    padding: 16px;
    border-radius: 10px;
  }
  .logo span {
    color: #667085;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
  }
  .logo p {
    color: #667085;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
  }
  .logo input[type="file"] {
    /* Hide the default button */
    display: none;
  }
`;
