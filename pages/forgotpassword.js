import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/AuthStyle/forgotpass.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { atm, lock } from "@/public/Image";
import { Autoplay, Pagination, Navigation } from "swiper";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";
import { ussdlogo } from "@/public/ICON";
import ButtonLayout from "@/Layouts/ButtonLayout";

const forgotpassword = () => {
  const [email, setEmail] = useState();
  const [color, setColor] = useState("white");

  const details = { email };

  return (
    <div className={style.top}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.white}>
            <div className={style.content}>
              <Image src={ussdlogo} width={370} height={110} alt="" />
              <div className={style.logs}>
                <h1>Forgot Password</h1>
                <p>Enter your email and we’ll send you a reset link.</p>
              </div>
            </div>
            <form className={style.form}>
              <div className={style.info}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <ButtonLayout placeholder="Submit" />
              <div className={style.forgotpass}>
                <span>Remember your password?</span>
                <Link href="/">
                  <p>Login</p>
                </Link>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgotpassword;
