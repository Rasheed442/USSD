import React from "react";
import AdminHeader from "./AdminHeader";

const Header = ({ title }) => {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;

  console.log(role);
  return (
    <div>{role === "admin" && role && <AdminHeader />}</div>
    /* <div>{role === "USER" ? <AdminHeader /> : <MerchantHeader />}</div> */
  );
};

export default Header;
