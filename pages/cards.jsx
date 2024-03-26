import AdminCard from "@/component/AdminCard";
import ManagerCard from "@/component/ManagerCard";
import MerchantCard from "@/component/MerchantCard";
import ProtectedRoute from "@/P_Route/ProtectedRoute";
import React from "react";
import { Fragment } from "react";

function cards() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;

  return (
    <div>
      <AdminCard />
      {/* // ) : role === "reseller" ? (
      //   <ManagerCard />
      // ) : role === "clients" ? (
      //   <MerchantCard />
      // ) : (
      //   ""
      // )} */}
    </div>
  );
}

export default cards;
