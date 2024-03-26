import React, { useState } from "react";
import style from "../styles/Screen/AdminManagerCreation.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";

function AdminManagerCreationModal({ CancelManagerModal }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [color, setColor] = useState("white");

  const details = { name, email };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  async function AdminHandler(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_MANAGER}manager/create`,
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
          "Manager created successfully.\n\n Reset Password link has been sent to your email",
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
          <h1>Create Manager</h1>
          <AiOutlineCloseCircle
            onClick={() => {
              CancelManagerModal(false);
            }}
            size={43}
            style={{ color: "#5E5ADB", cursor: "pointer" }}
          />
        </div>
        <div className={style.form}>
          <div className={style.header}>
            <label>Manager Name</label>
            <input
              type="text"
              placeholder="Enter Manager Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={style.header}>
            <label>Manager Email</label>
            <input
              type="email"
              placeholder="Enter Manager email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={AdminHandler}>
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

export default AdminManagerCreationModal;
