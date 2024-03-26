import React from "react";
import style from "../styles/ComponentStyle/delete.module.css";
import { DeleteBin } from "@/public/ICON";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import SmallModalLayout from "@/Layouts/SmallModalLayout";
function DeleteBinsManager({ CloseDeleteBin }) {
  return (
    <SmallModalLayout>
      <div className={style.top}>
        <div className={style.main}>
          <div className={style.container}>
            <Image src={DeleteBin} width={60} height={60} alt="" />
            <div
              onClick={() => {
                CloseDeleteBin(false);
              }}
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <h2>Delete Manager</h2>
          <p>
            Are you sure you want to delete this merchant? This
            <br /> action cannot be undone.
          </p>
        </div>
        <div className={style.btn}>
          <button
            className={style.btn1}
            onClick={() => {
              CloseDeleteBin(false);
            }}
          >
            Cancel
          </button>
          <button className={style.btn2}>Delete</button>
        </div>
      </div>
    </SmallModalLayout>
  );
}

export default DeleteBinsManager;
