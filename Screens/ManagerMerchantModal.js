import React, { useState, useEffect } from "react";
import style from "../styles/Screen/ManagerMerchantModal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";
function ManagerMerchantModal({ cancelManagerMerchant }) {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [serviceContext, setServiceContext] = useState();
  const [companyPrimaryTradeName, setCompanyPrimaryTradeName] = useState();
  const [primaryWebsiteUrl, setPrimaryWebsiteUrl] = useState();
  const [companyCity, setCompanyCity] = useState();
  const [companyCountryCode, setCompanyCountryCode] = useState();
  const [primaryContactEmail, setPrimaryContactEmail] = useState();
  const [
    businessIdentificationType,
    setBusinessIdentificationType,
  ] = useState();
  const [
    businessIdentificationValue,
    setBusinessIdentificationValue,
  ] = useState();

  const details = {
    name,
    email,
    serviceContext,
    companyPrimaryTradeName,
    primaryWebsiteUrl,
    companyCity,
    companyCountryCode,
    primaryContactEmail,
    businessIdentificationType,
    businessIdentificationValue,
  };
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  async function MerchnatHandler(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_MERCHANT}merchant/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(details),
        }
      );
      const server = await response.json();
      console.log(server);
      if (server?.status) {
        toast.success(
          "Merchant created successfully.\n\n Reset Password link has been sent to your email",
          {
            duration: 6500,
          }
        );
        setLoading(false);
        CancelManagerModal(false);
        setTimeout(() => {
          window.location = "/manager";
        }, 2500);
      } else {
        toast.error(server?.message);
        setLoading(false);
      }
    } catch (error) {
      error?.response?.code ||
        (error?.response?.code === 500 && "") ||
        toast.error(error?.message);
      setLoading(false);
    }
  }
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.top}>
          <h1>Create Merchant</h1>
          <AiOutlineCloseCircle
            onClick={() => {
              cancelManagerMerchant(false);
            }}
            size={43}
            style={{ color: "#5E5ADB", cursor: "pointer" }}
          />
        </div>
        <div className={style.form}>
          <div className={style.header}>
            <label>Merchant Name</label>
            <input
              type="text"
              placeholder="Merchant name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Merchant Email</label>
            <input
              type="email"
              placeholder="Merchant email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Service Context</label>
            <input
              type="text"
              placeholder="Service Context"
              onChange={(e) => {
                setServiceContext(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Company Trade Name</label>
            <input
              type="text"
              placeholder="Company Trade Name"
              onChange={(e) => {
                setCompanyPrimaryTradeName(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Website Url</label>
            <input
              type="text"
              placeholder="Website Url"
              onChange={(e) => {
                setPrimaryWebsiteUrl(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Company City</label>
            <input
              type="text"
              placeholder="Company City"
              onChange={(e) => {
                setCompanyCity(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Company Country Code</label>
            <input
              type="text"
              placeholder="Company Country Code"
              onChange={(e) => {
                setCompanyCountryCode(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Primary Contact Email</label>
            <input
              type="text"
              placeholder="Primary Context Email"
              onChange={(e) => {
                setPrimaryContactEmail(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Business Identification Type</label>
            <input
              type="text"
              placeholder="Business Identification Type"
              onChange={(e) => {
                setBusinessIdentificationType(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Business Identification Value</label>
            <input
              type="text"
              placeholder="Business Identification Value"
              onChange={(e) => {
                setBusinessIdentificationValue(e.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={MerchnatHandler}>
          {loading ? (
            <PulseLoader color={color} loading={loading} size={20} />
          ) : (
            "Create"
          )}
        </button>
      </div>
    </div>
  );
}

export default ManagerMerchantModal;
