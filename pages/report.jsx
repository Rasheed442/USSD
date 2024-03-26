import AdminTransaction from "@/component/AdminTransaction";
import MerchantTransaction from "@/component/MerchantTransaction";
import ProtectedRoute from "@/P_Route/ProtectedRoute";
import React from "react";

function report() {
  return (
    <ProtectedRoute>
      <div>
        <AdminTransaction />
      </div>
    </ProtectedRoute>
  );
}

export default report;
