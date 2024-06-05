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
  const [fullName, setFullname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [see, setSee] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState("admin");
  // admin, reseller, client
  const details = { fullName, phoneNumber, username, email, password, address };

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    // typeof window !== "undefined" ? localStorage.setItem("role", roles) : null;
    // setLoading(true);
    // setTimeout(() => {
    //   window.location = "/dashboard";
    // }, 1000);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(details),
        }
      );
      const server = await response.json();
      setLoading(false);
      console.log(server);
      if (response.status === 200 || 201) {
        toast.success("Signed Up Successfully");
      } else {
        if (response.status != 200 || 201) {
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
                <h1>Signup to get started</h1>
                <p>Welcome! Please enter your details.</p>
              </div>
            </div>
            <form className={style.form}>
              <div className={style.info}>
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Enter fullname "
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              <div className={style.info}>
                <label>Phonenumber</label>
                <input
                  type="text"
                  placeholder="Enter phonenumber "
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div className={style.info}>
                <label>email</label>
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
              <div className={style.password}>
                <label>Username</label>
                <div className={style.eye}>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={style.password}>
                <label>Address</label>
                <div className={style.eye}>
                  <input
                    type="text"
                    placeholder="Enter address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={style.forgotpass}>
                <div className={style.routes}>
                  <div className={style.check}>
                    <input type="checkbox" />
                    <span>Remember for 30 days</span>
                  </div>
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
