import Navbar from "@/component/Navbar";
import React, { useState, useEffect } from "react";
import style from "../styles/LayoutStyle/dashboardlayout.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function DashbaordLayout({ children }) {
  const Adminmenu =
    typeof window !== "undefined" ? localStorage.getItem("adminmenu") : null;

  const [close, setClose] = useState(false);
  return (
    <div
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: !Adminmenu ? "120px" : "1.9fr 9fr",
      // }}
      className={style.container}
      style={{
        // transition: "0.5s",
        display: "grid",
        gridTemplateColumns: close ? "130px 9fr" : "1.9fr 9fr",
      }}
    >
      <div className={style.navbar}>
        <Navbar SetcloseStates={setClose} closeStates={close} />
        {/* <div
          className={style.icon}
          onClick={() => {
            setOpen(!open);
            localStorage.setItem("adminmenu", open);
          }}
        >
          {open ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div> */}
      </div>
      <div className={style.body}>
        <div className={style.innerbody}>{children}</div>
      </div>
    </div>
  );
}

export default DashbaordLayout;
