import React, { useEffect, useState } from "react";
import style from "../styles/ComponentStyle/header.module.css";
import DashbaordLayout from "@/Layouts/DashbaordLayout";
import { BsSearch } from "react-icons/bs";
import { AiFillSetting, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { notification, boss1 } from "@/public/ICON";
import { useRouter } from "next/router";
const ManagerHeader = ({ title }) => {
  const [username, setUsername] = useState();
  const router = useRouter();
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [typeof window !== "undefined" ? localStorage.getItem("username") : null]);
  return (
    <div className={style.head}>
      <p style={{ fontSize: "22px" }}>{title}</p>
      <div className={style.content}>
        <div className={style.search}>
          <BsSearch size={22} />
          <Link href="/settings">
            <AiFillSetting
              size={35}
              style={{
                backgroundColor:
                  router.pathname === "/settings" ? "#5E5ADB" : "",
                color: router.pathname === "/settings" ? "white" : "gray",
                padding: "4px",
                borderRadius: "3px",
              }}
            />
          </Link>{" "}
          <Image src={notification} width={40} height={40} alt="" />
        </div>
        <div className={style.line}></div>
        <div className={style.profile}>
          <Image src={boss1} width={40} height={40} alt="" />
          <div>
            <p>
              {username}
              <AiOutlineDown size={10} />
            </p>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerHeader;
