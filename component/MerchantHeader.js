import React, { useEffect, useState } from "react";
import style from "../styles/ComponentStyle/header.module.css";
import DashbaordLayout from "@/Layouts/DashbaordLayout";
import { BsSearch } from "react-icons/bs";
import { AiFillSetting, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import { notification, yvonne } from "@/public/ICON";

const MerchantHeader = ({ title }) => {
  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  return (
    <div className={style.head}>
      <p style={{ fontSize: "22px" }}>{title}</p>
      <div className={style.content}>
        <div className={style.search}>
          <BsSearch size={22} />
          <AiFillSetting size={22} />
          <Image src={notification} width={40} height={40} alt="" />
        </div>
        <div className={style.line}></div>
        <div className={style.profile}>
          <Image src={yvonne} width={40} height={40} alt="" />
          <div>
            <p>{username}</p>
            <span>Paystack Admin</span>
          </div>
          <AiOutlineDown size={14} />
        </div>
      </div>
    </div>
  );
};

export default MerchantHeader;
