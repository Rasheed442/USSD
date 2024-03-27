import AdminMerchant from "@/component/AdminMerchant";

function usermanagement() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  return <div>{role == "admin" && <AdminMerchant />}</div>;
}

export default usermanagement;
