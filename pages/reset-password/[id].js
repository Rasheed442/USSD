import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/AuthStyle/login.module.css";
import { BsEyeSlash } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PulseLoader from "react-spinners/PulseLoader";
import { Autoplay, Pagination, Navigation } from "swiper";
import { atm, lock } from "@/public/Image";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function resetpassword() {
  const router = useRouter();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [see, setSee] = useState(false);
  const [see1, setSee1] = useState(false);
  const [loading, setLoading] = useState(false);

  const details = { password, confirmPassword };

  useEffect(() => {
    const getId = window.location.toString();
    const idToReset = getId.split("?")[1].replace("token=", "").trim();
    console.log(idToReset);
    setRoute_id(idToReset.toString());
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(details),
        }
      );
      const server = await response.json();
      setLoading(false);
      console.log(server);
      if (response.status == 200) {
        typeof window !== "undefined"
          ? localStorage.setItem("role", server?.data?.roles)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("token", server?.data?.token)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("username", server?.data?.name)
          : null;
        toast.success("Successfully Login");
        window.location = "/dashboard";
      } else {
        toast.error(server?.data);
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
    <>
      <Head>
        <title>Tokenization</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.top}>
        <div className={style.container}>
          <div className={style.header}>
            <Image src="/tokenization.svg" width={370} height={110} alt="" />
            <div className={style.white}>
              <div className={style.content}>
                <h1>RESET PASSWORD</h1>
                {/* <span>
                  <p>New to Tokenization?</p>
                  <Link href="signup" className={style.link}>
                    Sign up
                  </Link>
                </span> */}
              </div>
              <form className={style.form}>
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
                    <BsEyeSlash size={22} onClick={() => setSee(!see)} />
                  </div>
                </div>
                <div className={style.password}>
                  <label>Confirm Password</label>
                  <div className={style.eye}>
                    <input
                      type={see1 ? "text" : "password"}
                      placeholder="Confirm Password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                    <BsEyeSlash size={22} onClick={() => setSee1(!see1)} />
                  </div>
                </div>
                <div className={style.btn} onClick={submitHandler}>
                  <button>
                    {loading ? (
                      // <ClipLoader loading={loading} size={20} color={color} />
                      <PulseLoader color="white" loading={loading} size={20} />
                    ) : (
                      "Reset"
                    )}
                  </button>
                </div>
              </form>{" "}
            </div>
          </div>

          <div className={style.carousel}>
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
                  <Image src={atm} width={550} height={550} alt="" />
                  <p>Different cards for different plans</p>
                  <span>
                    Customize your subscription plans with different cards to
                    suit
                    <br /> varying customer needs and budgets.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.atm}>
                  <Image src={lock} width={550} height={550} alt="" />
                  <p>Securely store your payment information</p>
                  <span>
                    Using advanced technology, we are sure to provide you a
                    <br /> convenient way to make fast and safe transactions
                    online.
                  </span>
                </div>{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
