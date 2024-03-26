import React, { useEffect, useState } from "react";
import style from "../styles/ComponentStyle/header.module.css";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import {
  AiFillSetting,
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import { notification, boss1, hook } from "@/public/ICON";
import { useRouter } from "next/router";

const AdminHeader = ({ title }) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState();

  // const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [typeof window !== "undefined" ? localStorage.getItem("username") : null]);
  // const username = localStorage.getItem("username");
  // const username =
  //   typeof window !== "undefined" ? localStorage.getItem("username") : null;
  return (
    <div className={style.head}>
      <div className={style.top}>
        <div
          className={style.icon}
          onClick={() => {
            setOpen(!open);
            localStorage.setItem("adminmenu", open);
          }}
        >
          {!open && <AiOutlineMenu size={25} />}
        </div>
        <p>
          <span>Pages&nbsp; </span>/ &nbsp;{title}
        </p>
      </div>
      <div className={style.content}>
        <div className={style.search}>
          {/* <BsSearch size={22} /> */}
          {/* <Link href="/settings">
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
          </Link> */}
          <Image src={hook} width={45} height={45} alt="" />
          <Image src={notification} width={35} height={35} alt="" />
        </div>
        <div className={style.line}></div>
        <div className={style.profile}>
          <Image src={boss1} width={35} height={35} alt="" />
          <div className={style.user}>
            <p>
              {username ? username : "Albert Abiodun"}
              &nbsp; &nbsp;
              <AiOutlineDown size={10} />
            </p>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
