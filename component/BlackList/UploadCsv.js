import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { config, token } from "../Authorization";
import PulseLoader from "react-spinners/PulseLoader";

function UploadCsv({ closeUpload }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [blacklist, setBlackList] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setLoading(true);
    Axios.get(`${process.env.NEXT_PUBLIC_API}blacklist/getBlacklists/`, config)
      .then((response) => {
        setBlackList(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);

  //   const handleFileChange = async (event) => {
  //     const file = event.target.files[0];

  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         setMyfiles(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }

  //     var formdata = new FormData();
  //     formdata.append("file", file, "ID.jpeg");
  //   };
  var formdata = new FormData();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  //   useEffect(() => {
  //     if (file) {
  //       console.log(file);
  //     }
  //   }, [file]);

  const handleClick = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const formdata = new FormData();
    formdata.append("name", "jjjj");
    formdata.append("file", file);

    // Log the form data
    // for (let [key, value] of formdata.entries()) {
    //   console.log(`${key}:`, value);
    // }

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://89.38.135.41:7001/v1/blacklist/createBlacklistCSV",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <UploadStyles>
      <SmallModalLayout
        title="Upload Mobile Numbers"
        onClick={() => closeUpload(false)}
      >
        <div className="container">
          {/* <LabelinputLayout
            label="Select Blaclist Table"
            placeholder="-Select One-"
          /> */}
          <div className="role">
            <label>-Select One-</label>
            <div className="myselect">
              <select
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
              >
                <option>Select Name</option>
                {blacklist?.map((b) => {
                  return <option>{b?.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="upload">
            <span>Upload logo</span>
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
                  style={{ color: "#276EF1", cursor: "pointer" }}
                  for="fileInput"
                >
                  Click to upload
                </label>
                &nbsp;
                <input
                  type="file"
                  id="fileInput"
                  // value={addPartners.partnerLogo}
                  onChange={handleFileChange}
                />
                or drag and drop
              </p>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={() => closeUpload(false)}
              style={{
                backgroundColor: "white",
                border: "1px solid gainsboro",
                color: "black",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleClick}
              style={{
                backgroundColor: "#5E5ADB",
                border: "none",
                color: "white",
              }}
            >
              {loading ? <PulseLoader color="white" size={20} /> : "Create"}
            </button>
          </div>
        </div>
      </SmallModalLayout>
    </UploadStyles>
  );
}

export default UploadCsv;
const UploadStyles = styled.div`
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
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .role {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .role label {
    font-size: 15px;
  }
  .myselect {
    display: flex;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    align-items: center;
    border: 1px solid gainsboro;
  }
  .myselect select {
    width: 100%;
    padding: 5px;
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
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #eaecf0;
    padding: 35px;
    border-radius: 10px;
  }
  .logo span {
    color: #667085;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
  }
  .logo input[type="file"] {
    /* Hide the default button */
    display: none;
  }
`;
