import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  AiFillSetting,
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import { notification, boss1, hook } from "@/public/ICON";
import { useRouter } from "next/router";
import styled from "styled-components";
const ResellerHeader = ({ title }) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [typeof window !== "undefined" ? localStorage.getItem("username") : null]);

  return (
    <Reseller>
      <div className="head">
        <div className="topp">
          <h3>Welcome Back, Albert</h3>
          <span>This is your overview report</span>
        </div>
        <div className="content">
          <Image src={notification} width={32} height={32} alt="" />
          <div className="line"></div>
          <div className="profile">
            <Image src={boss1} width={30} height={30} alt="" />
            <div className="user">
              <p>
                {username ? username : "Albert Abiodun"}
                &nbsp; &nbsp;
                <AiOutlineDown size={10} />
              </p>
              <span>Albert01@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="white"></div>
    </Reseller>
  );
};

export default ResellerHeader;
const Reseller = styled.div`
  overflow: hidden;
  width: -webkit-fill-available;
  .white {
    position: fixed;
    height: 160px;
    background-color: white;
    top: 140px;
    z-index: 999;
    overflow: hidden;
    width: -webkit-fill-available;
  }
  .topp {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .topp h3 {
    color: white;
    font-size: 24px;
    font-weight: 500;
    line-height: 9px;
  }
  .head {
    /* background-color: #5e5adb; */
    /* background-color: #323075; */
    background: linear-gradient(to right, #5e5adb, #323075);
    padding: 70px 20px 70px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    overflow: hidden;
    height: 120px;
    top: 0;
    width: -webkit-fill-available;
    z-index: 999;
    box-shadow: 0px 1px 0px 0px #0000001a;
  }

  .topp span {
    color: white;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
  }
  .topp p {
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
  }

  .content {
    display: flex;
    gap: 20px;
    color: white;
  }
  .profile {
    display: flex;
    gap: 15px;
  }
  .profile img {
    border-radius: 50%;
  }
  .profile p {
    color: white;
  }
  .profile span {
    font-size: 13px;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .line {
    height: 30px;
    background-color: #eeebeb;
    width: 2px;
    /* margin-top: 20px;
        margin-bottom: 20px; */
  }

  .user p {
    color: white;
    line-height: 19px;
    font-size: 16px;
    font-weight: 500;
  }
`;
