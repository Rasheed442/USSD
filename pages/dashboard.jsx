import { deleted_token, total_merchant, tradedown } from "@/public/ICON";
import { tokenized, de_tokenized, customer_request } from "@/public/Image";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import AdminDashboard from "@/component/AdminDashboard";
import TokenizedCard from "@/ChartComponent/TokenizedCard";
import Detokenized from "@/ChartComponent/Detokenized";
import DeletedTokens from "@/ChartComponent/DeletedTokens";
import CustomerReq from "@/ChartComponent/CustomerReq";
import { Bin } from "@/public/ICON";
import { AiOutlineArrowUp } from "react-icons/ai";
import ProtectedRoute from "@/P_Route/ProtectedRoute";
function Dashboard() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
  console.log(role);

  const Adminlabels = [
    {
      icon: total_merchant,
      details: "Total Merchants",
      amount: "₦3,250,400.02",
      rate: `2.1%`,
    },
    {
      icon: customer_request,
      details: "Customer Request",
      amount: "10,230",
      rate: "2.1%",
    },
    {
      icon: tokenized,
      details: "Tokenized Cards",
      amount: "10,000",
      rate: "2.1%",
    },
    {
      icon: de_tokenized,
      details: "De-tokenized Cards",
      amount: "450,500",
      rate: "2.1%",
    },
    // {
    //   icon: Bin,
    //   details: "Deleted Tokens",
    //   amount: "0",
    //   rate: "2.1%",
    // },
  ];

  const Merchantlabels = [
    {
      icon: tokenized,
      details: "Total Revenue",
      amount: "₦32,502,000.02",
      rate: "2.1%",
      charts: <Detokenized />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
    {
      icon: de_tokenized,
      details: "Total User",
      amount: "45,973",
      rate: "34%",
      charts: <TokenizedCard />,
      sign: <AiOutlineArrowUp style={{ color: "green" }} />,
    },
    {
      icon: deleted_token,
      details: "Total USSD Sessions",
      amount: "732,900",
      rate: "50%",
      charts: <DeletedTokens />,
      sign: <AiOutlineArrowUp style={{ color: "green" }} />,
    },
    {
      icon: total_merchant,
      details: "Average Session Time",
      amount: "0h:02m:48s",
      rate: "2.1%",
      charts: <CustomerReq />,
      sign: <AiOutlineArrowUp style={{ color: "red" }} />,
    },
  ];

  const Managerlabels = [
    {
      icon: total_merchant,
      details: "Total Merchants",
      amount: "0",
      rate: `2.1%`,
    },
    {
      icon: customer_request,
      details: "Customer Request",
      amount: "0",
      rate: "2.1%",
    },
    {
      icon: tokenized,
      details: "Tokenized Cards",
      amount: "0",
      rate: "2.1%",
    },
    {
      icon: de_tokenized,
      details: "De-tokenized Cards",
      amount: "0",
      rate: "2.1%",
    },
    {
      icon: Bin,
      details: "Deleted Tokens",
      amount: "0",
      rate: "2.1%",
    },
  ];

  return (
    <div>
      {/* <ProtectedRoute> */}
      {role && role === "admin" && (
        <AdminDashboard
          Adminlabels={Adminlabels && Adminlabels}
          Merchantlabels={Merchantlabels}
        />
      )}
    </div>
  );
}

export default Dashboard;
