import React from "react";
import AdminHeader from "./AdminHeader";
import ManagerHeader from "./ManagerHeader";
import MerchantHeader from "./MerchantHeader";

const Header = ({ title }) => {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  console.log(role);
  return (
    <div>
      {role === "admin" && role && <AdminHeader />}
      {role === "reseller" && <MerchantHeader />}
      {role === "client" && <ManagerHeader />}
      {!role && <ManagerHeader />}
    </div>
    /* <div>{role === "USER" ? <AdminHeader /> : <MerchantHeader />}</div> */
  );
};

export default Header;
