import AdminTransaction from "@/component/AdminTransaction";
import ClientReport from "@/component/ClientReport";
import ProtectedRoute from "@/P_Route/ProtectedRoute";
import React from "react";

function report() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  console.log(role);
  return (
    <div>
      {role === "admin" && <AdminTransaction />}
      {role === "client" && <ClientReport />}
    </div>
  );
}

export default report;
