import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/AuthStyle/login.module.css";
import { BsEyeSlash } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ussdlogo } from "@/public/ICON";
import ButtonLayout from "@/Layouts/ButtonLayout";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [see, setSee] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState("admin");
  // admin, reseller, client
  const details = { username, email, password };

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    // typeof window !== "undefined" ? localStorage.setItem("role", roles) : null;
    // setLoading(true);
    // setTimeout(() => {
    //   window.location = "/dashboard";
    // }, 1000);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });
      const server = await response.json();
      setLoading(false);
      console.log(server);
      if (response.status === 200) {
        typeof window !== "undefined"
          ? localStorage.setItem("role", server?.user?.role)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("userID", server?.user?.id)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("token", server?.tokens?.access?.token)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("username", server?.user?.username)
          : null;

        toast.success("Successfully Login");
        window.location = "/dashboard";
      } else {
        if (server?.code === 401) {
          toast.error(server?.message);
          setLoading(false);
        }
      }
    } catch (error) {
      error?.response?.code ||
        (error?.response?.code === 500 && "") ||
        toast.error(error?.message);
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>UUSD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.top}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.content}>
              <Image src={ussdlogo} width={370} height={110} alt="" />
              <div className={style.logs}>
                <h1>Log in to your account</h1>
                <p>Welcome back! Please enter your details.</p>
              </div>
            </div>
            <form className={style.form}>
              <div className={style.info}>
                <label>Username / Email</label>
                <input
                  type="email"
                  placeholder="Enter username or email "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={style.password}>
                <label>Password</label>
                <div className={style.eye}>
                  <input
                    type={see ? "text" : "password"}
                    placeholder="Enter Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <BsEyeSlash size={19} onClick={() => setSee(!see)} />
                </div>
              </div>
              <div className={style.forgotpass}>
                <div className={style.routes}>
                  <div className={style.check}>
                    <input type="checkbox" />
                    <span>Remember for 30 days</span>
                  </div>
                  <Link href="/signup">
                    <p>Sign Up</p>
                  </Link>
                </div>
                <Link href="/forgotpassword">
                  <p>Forgot password</p>
                </Link>
              </div>

              <ButtonLayout
                svg="none"
                styles={{
                  backgroundColor: "#5E5ADB",
                  justifyContent: "center",
                }}
                loading={loading}
                placeholder="Sign in"
                onClick={submitHandler}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className={style.carousel}>
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div className={style.atm}>
        <Image src={atm} width={0} height={0} alt="" />
        <p>Different cards for different plans</p>
        <span>
          Customize your subscription plans with different cards to
          suit varying customer needs and budgets.
        </span>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.atm}>
        <Image src={lock} width={0} height={0} alt="" />
        <p>Securely store your payment information</p>
        <span>
          Using advanced technology, we are sure to provide you a
          convenient way to make fast and safe transactions online.
        </span>
      </div>{" "}
    </SwiperSlide>
  </Swiper>
</div> */
}
