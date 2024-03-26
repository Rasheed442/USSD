import React, { useState } from "react";
import style from "../styles/AuthStyle/signup.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { atm, lock } from "@/public/Image";
import PulseLoader from "react-spinners/PulseLoader";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import toast from "react-hot-toast";

function signup() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [see, setSee] = useState(false);
  const [loading, setLoading] = useState(false);
  const details = { userName, email, password };
  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    });
    const server = await response.json();
    console.log(server);
    setLoading(false);

    if (response.status === 200) {
      toast.success(server.message);
    } else {
      toast.error(server.message);
    }
    typeof window !== "undefined"
      ? localStorage.setItem("userName", server?.userName)
      : null;
  }

  return (
    <div className={style.top}>
      <div className={style.container}>
        <div className={style.header}>
          <Image src="/tokenization.svg" width={370} height={110} alt="" />
          <div className={style.white}>
            <div className={style.content}>
              <h1>CREATE AN ACCOUNT</h1>
              <span>
                <p>Already have an account?</p>
                <Link href="/" className={style.link}>
                  Sign in
                </Link>
              </span>
            </div>
            <form className={style.form}>
              <div className={style.info}>
                <label>Username</label>
                <input
                  type="email"
                  placeholder="temitope@gmail.com"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              {/* <div className={style.info}>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div> */}
              {/* <div className={style.info}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div> */}
              <div className={style.info}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Doe"
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
                  <BsEyeSlash size={20} onClick={() => setSee(!see)} />
                </div>
              </div>
              <div className={style.check}>
                <input type="checkbox" />
                <p>
                  I agree to have my personal information gathered and handled
                  in accordance
                  <br /> with data regulations outlined in the Privacy Policy
                </p>
              </div>

              <div className={style.btn} onClick={submitHandler}>
                <button>
                  {loading ? (
                    <PulseLoader color="white" loading={loading} size={20} />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
              <p style={{ textAlign: "center", fontSize: "16px" }}>
                By clicking the “Create account” button, you agree to the
                <br />{" "}
                <span style={{ color: "#5E5ADB" }}>Terms of Service</span>
              </p>
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
                  Customize your subscription plans with different cards to suit
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
  );
}

export default signup;
