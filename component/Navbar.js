import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillQuestionCircle, AiOutlineClose } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiUserSettingsFill } from "react-icons/ri";
import { RxCountdownTimer } from "react-icons/rx";
import { BsFillCreditCardFill, BsFillTelephoneFill } from "react-icons/bs";
import style from "../styles/ComponentStyle/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

import AdminNavbar from "./AdminNavbar";
import ClientNavbar from "./ClientNavbar";
import ResellerNavbar from "./ResellerNavbar";

function Navbar({ closeStates, SetcloseStates }) {
  const router = useRouter();

  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  console.log(role);

  // const links =
  //   (role === "admin" && <AdminNavbar />) ||
  //   (role === "reseller" && [
  //     {
  //       name: "Dashboard",
  //       url: "/dashboard",
  //       icon: <MdDashboard size={20} />,
  //     },
  //     {
  //       name: "Merchants",
  //       url: "/merchant",
  //       icon: <HiUsers size={20} />,
  //     },

  //     {
  //       name: "Cards",
  //       url: "/cards",
  //       icon: <BsFillCreditCardFill size={20} />,
  //     },
  //     {
  //       name: "Transactions",
  //       url: "/transaction",
  //       icon: <RxCountdownTimer size={20} />,
  //     },
  //   ]) ||
  //   (role === "client" && [
  //     {
  //       name: "Dashboard",
  //       url: "/dashboard",
  //       icon: <MdDashboard size={20} />,
  //     },
  //     {
  //       name: "Cards",
  //       url: "/cards",
  //       icon: <BsFillCreditCardFill size={20} />,
  //     },
  //     {
  //       name: "Transactions",
  //       url: "/transaction",
  //       icon: <RxCountdownTimer size={20} />,
  //     },
  //   ]) ||
  //   [];
  return (
    <div>
      {role === "admin" && <AdminNavbar />}
      {role === "client" && <ClientNavbar />}
      {role === "reseller" && <ResellerNavbar />}
    </div>
  );
}

export default Navbar;
