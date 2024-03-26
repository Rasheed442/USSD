import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminMerchant from "@/component/AdminMerchant";
import Managermerchant from "@/component/Managermerchant";
import ProtectedRoute from "@/P_Route/ProtectedRoute";
function usermanagement() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  return (
    <div>
      {role === "admin" ? (
        <AdminMerchant />
      ) : role === "reseller" ? (
        <Managermerchant />
      ) : (
        <Managermerchant />
      )}
    </div>
  );
}

export default usermanagement;
