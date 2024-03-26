import AdminHeader from "@/component/AdminHeader";
import AdminSettings from "@/component/AdminSettings";
import ManagerSettings from "@/component/ManagerSettings";
import MerchantSettings from "@/component/MerchantSettings";
import DashbaordLayout from "@/Layouts/DashbaordLayout";
import React from "react";

function settings() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  return (
    <DashbaordLayout>
      {role === "SUPERADMIN" ? (
        <AdminSettings />
      ) : role === "MERCHANT" ? (
        <MerchantSettings />
      ) : role === "MANAGER" ? (
        <ManagerSettings />
      ) : (
        <ManagerSettings />
      )}
    </DashbaordLayout>
  );
}

export default settings;
