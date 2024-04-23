import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiUserSettingsFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { CiBank } from "react-icons/ci";
import style from "../styles/ComponentStyle/navbar.module.css";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

import Image from "next/image";
import { useRouter } from "next/router";
import { exit, ussdlogo } from "@/public/ICON";
import Link from "next/link";
// Available@2024??
function ClientNavbar() {
  const [subMenu, setSubmenu] = useState(false);

  const router = useRouter();

  function Route(l) {
    router.push(l?.url);
    if (l?.name === "Administration") {
      setSubmenu(!subMenu);
      console.log(l?.name);
    }
  }

  console.log(router.pathname);
  const links = [
    {
      name: "Overview",
      url: "/dashboard",
      icon: <RxDashboard size={17} />,
    },
    {
      name: "USSD Service",
      url: "/service",
      icon: <BsTelephone size={18} />,
    },

    {
      name: "Report Analytics",
      url: "/report",
      icon: <TbBrandGoogleAnalytics size={17} />,
    },
  ];
  return (
    <div className={style.navbarstyle}>
      <div className={style.headimg}>
        <svg
          width="54"
          height="54"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.2"
            y="0.2"
            width="63.6"
            height="63.6"
            rx="15.8"
            fill="white"
          />
          <rect
            x="0.2"
            y="0.2"
            width="63.6"
            height="63.6"
            rx="15.8"
            fill="url(#paint0_linear_2848_33334)"
          />
          <rect
            x="0.2"
            y="0.2"
            width="63.6"
            height="63.6"
            rx="15.8"
            stroke="#D0D5DD"
            stroke-width="0.4"
          />
          <rect
            x="7.11133"
            y="11.5547"
            width="49.7778"
            height="20.4967"
            rx="5.40573"
            fill="#5E5ADB"
          />
          <path
            d="M18.1843 16.6349H20.1792V22.7624C20.1792 23.4504 20.0148 24.0524 19.6862 24.5684C19.3606 25.0844 18.9045 25.4867 18.3179 25.7755C17.7312 26.0611 17.0478 26.2039 16.2677 26.2039C15.4845 26.2039 14.7995 26.0611 14.2129 25.7755C13.6262 25.4867 13.1701 25.0844 12.8446 24.5684C12.519 24.0524 12.3562 23.4504 12.3562 22.7624V16.6349H14.3511V22.5919C14.3511 22.9513 14.4294 23.2707 14.5861 23.5502C14.7458 23.8297 14.97 24.0493 15.2587 24.209C15.5474 24.3687 15.8838 24.4486 16.2677 24.4486C16.6547 24.4486 16.991 24.3687 17.2767 24.209C17.5654 24.0493 17.788 23.8297 17.9447 23.5502C18.1044 23.2707 18.1843 22.9513 18.1843 22.5919V16.6349Z"
            fill="white"
          />
          <path
            d="M28.9386 19.3485C28.9018 18.9768 28.7436 18.6881 28.4641 18.4823C28.1846 18.2765 27.8053 18.1736 27.3261 18.1736C27.0005 18.1736 26.7257 18.2197 26.5014 18.3119C26.2772 18.4009 26.1052 18.5253 25.9854 18.685C25.8687 18.8448 25.8104 19.026 25.8104 19.2287C25.8042 19.3976 25.8395 19.545 25.9163 19.671C25.9962 19.7969 26.1052 19.9059 26.2434 19.9981C26.3817 20.0871 26.5414 20.1655 26.7226 20.233C26.9038 20.2975 27.0973 20.3528 27.3031 20.3989L28.1508 20.6016C28.5624 20.6938 28.9402 20.8166 29.2842 20.9702C29.6282 21.1238 29.9261 21.3127 30.178 21.5369C30.4298 21.7611 30.6248 22.0252 30.7631 22.3293C30.9043 22.6334 30.9765 22.982 30.9796 23.3751C30.9765 23.9526 30.8291 24.4532 30.5373 24.8771C30.2486 25.2978 29.8309 25.625 29.2842 25.8584C28.7405 26.0887 28.0848 26.2039 27.3169 26.2039C26.5552 26.2039 25.8918 26.0872 25.3266 25.8538C24.7645 25.6203 24.3253 25.2748 24.009 24.8172C23.6957 24.3564 23.5314 23.7867 23.516 23.1079H25.4464C25.4679 23.4243 25.5585 23.6884 25.7182 23.9003C25.881 24.1092 26.0975 24.2674 26.3678 24.3749C26.6412 24.4793 26.9499 24.5315 27.2939 24.5315C27.6317 24.5315 27.9251 24.4824 28.1738 24.3841C28.4257 24.2858 28.6207 24.1491 28.7589 23.9741C28.8972 23.799 28.9663 23.5978 28.9663 23.3705C28.9663 23.1586 28.9033 22.9804 28.7774 22.8361C28.6545 22.6917 28.4733 22.5689 28.2337 22.4675C27.9972 22.3662 27.707 22.274 27.363 22.1911L26.3356 21.9331C25.5401 21.7396 24.912 21.437 24.4513 21.0255C23.9905 20.6139 23.7617 20.0595 23.7648 19.3623C23.7617 18.791 23.9138 18.2919 24.2209 17.865C24.5311 17.438 24.9565 17.1048 25.4971 16.8652C26.0377 16.6256 26.6519 16.5059 27.3399 16.5059C28.0402 16.5059 28.6514 16.6256 29.1736 16.8652C29.6988 17.1048 30.1073 17.438 30.3991 17.865C30.6909 18.2919 30.8414 18.7864 30.8506 19.3485H28.9386Z"
            fill="white"
          />
          <path
            d="M39.4025 19.3485C39.3656 18.9768 39.2075 18.6881 38.928 18.4823C38.6485 18.2765 38.2691 18.1736 37.79 18.1736C37.4644 18.1736 37.1895 18.2197 36.9653 18.3119C36.7411 18.4009 36.5691 18.5253 36.4493 18.685C36.3326 18.8448 36.2742 19.026 36.2742 19.2287C36.2681 19.3976 36.3034 19.545 36.3802 19.671C36.4601 19.7969 36.5691 19.9059 36.7073 19.9981C36.8455 20.0871 37.0052 20.1655 37.1865 20.233C37.3677 20.2975 37.5612 20.3528 37.767 20.3989L38.6147 20.6016C39.0262 20.6938 39.404 20.8166 39.748 20.9702C40.092 21.1238 40.39 21.3127 40.6418 21.5369C40.8937 21.7611 41.0887 22.0252 41.2269 22.3293C41.3682 22.6334 41.4404 22.982 41.4435 23.3751C41.4404 23.9526 41.293 24.4532 41.0012 24.8771C40.7125 25.2978 40.2947 25.625 39.748 25.8584C39.2044 26.0887 38.5486 26.2039 37.7808 26.2039C37.0191 26.2039 36.3556 26.0872 35.7905 25.8538C35.2284 25.6203 34.7892 25.2748 34.4728 24.8172C34.1595 24.3564 33.9952 23.7867 33.9799 23.1079H35.9103C35.9318 23.4243 36.0224 23.6884 36.1821 23.9003C36.3449 24.1092 36.5614 24.2674 36.8317 24.3749C37.1051 24.4793 37.4137 24.5315 37.7577 24.5315C38.0956 24.5315 38.3889 24.4824 38.6377 24.3841C38.8896 24.2858 39.0846 24.1491 39.2228 23.9741C39.361 23.799 39.4301 23.5978 39.4301 23.3705C39.4301 23.1586 39.3672 22.9804 39.2412 22.8361C39.1184 22.6917 38.9372 22.5689 38.6976 22.4675C38.4611 22.3662 38.1708 22.274 37.8268 22.1911L36.7994 21.9331C36.0039 21.7396 35.3758 21.437 34.9151 21.0255C34.4544 20.6139 34.2256 20.0595 34.2287 19.3623C34.2256 18.791 34.3776 18.2919 34.6848 17.865C34.995 17.438 35.4204 17.1048 35.9609 16.8652C36.5015 16.6256 37.1158 16.5059 37.8038 16.5059C38.5041 16.5059 39.1153 16.6256 39.6375 16.8652C40.1627 17.1048 40.5712 17.438 40.863 17.865C41.1548 18.2919 41.3053 18.7864 41.3145 19.3485H39.4025Z"
            fill="white"
          />
          <path
            d="M48.0936 26.0703H44.7488V16.6349H48.1212C49.0703 16.6349 49.8873 16.8237 50.5722 17.2015C51.2572 17.5762 51.7839 18.1153 52.1525 18.8186C52.5241 19.522 52.71 20.3636 52.71 21.3434C52.71 22.3262 52.5241 23.1709 52.1525 23.8773C51.7839 24.5837 51.2541 25.1258 50.563 25.5036C49.875 25.8814 49.0519 26.0703 48.0936 26.0703ZM46.7437 24.3611H48.0107C48.6004 24.3611 49.0964 24.2566 49.4988 24.0478C49.9042 23.8358 50.2083 23.5087 50.411 23.0664C50.6168 22.6211 50.7197 22.0467 50.7197 21.3434C50.7197 20.6462 50.6168 20.0764 50.411 19.6341C50.2083 19.1918 49.9057 18.8663 49.5034 18.6574C49.101 18.4485 48.605 18.3441 48.0153 18.3441H46.7437V24.3611Z"
            fill="white"
          />
          <path
            d="M25.3239 38.1853L25.849 37.6603C26.9976 36.5117 28.8598 36.5117 30.0084 37.6603L30.9191 38.5709C31.8553 39.5072 32.0505 40.9535 31.3961 42.1045L31.3423 42.1991C30.8179 43.1212 30.8204 44.2623 31.4423 45.1216C31.7522 45.5498 32.1022 45.9932 32.4348 46.3258C32.7673 46.6584 33.2108 47.0084 33.6389 47.3182C34.4983 47.9401 35.6393 47.9426 36.5614 47.4183L36.6561 47.3645C37.807 46.71 39.2534 46.9053 40.1896 47.8415L41.1003 48.7522C42.2489 49.9008 42.2489 51.763 41.1003 52.9116L40.5753 53.4366C40.0237 53.9882 39.2723 54.2955 38.5138 54.1132C36.893 53.7237 33.7695 52.5133 30.0084 48.7522C26.2473 44.991 25.0369 41.8676 24.6473 40.2467C24.4651 39.4883 24.7723 38.7369 25.3239 38.1853Z"
            fill="#5E5ADB"
          />
          <path
            d="M41.1605 44.2129L42.4083 36.6074H43.5967L42.3489 44.2129H41.1605ZM37.7552 42.3264L37.952 41.138H43.8937L43.6969 42.3264H37.7552ZM38.4867 44.2129L39.7345 36.6074H40.9229L39.6751 44.2129H38.4867ZM38.1896 39.6823L38.3902 38.4939H44.332L44.1314 39.6823H38.1896Z"
            fill="#5E5ADB"
          />
          <path
            d="M22.349 53.8956L22.4883 51.7399L20.6835 52.9487L19.937 51.634L21.8811 50.6871L19.937 49.7401L20.6835 48.4255L22.4883 49.6343L22.349 47.4785H23.8475L23.7026 49.6343L25.5075 48.4255L26.2539 49.7401L24.3154 50.6871L26.2539 51.634L25.5075 52.9487L23.7026 51.7399L23.8475 53.8956H22.349Z"
            fill="#5E5ADB"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2848_33334"
              x1="2"
              y1="2.66667"
              x2="64"
              y2="60.6667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.57977" stop-color="#D0D5DD" />
            </linearGradient>
          </defs>
        </svg>

        <p>USSD</p>
      </div>

      <div className={style.header}>
        <div className={style.top}>
          {links.map((l) => {
            return (
              <>
                <div className={style.line}>
                  <div
                    className={
                      router.pathname === l?.url ? style.line1 : style.line2
                    }
                  ></div>
                  <div
                    onClick={() => Route(l)}
                    className={
                      router.pathname === l?.url
                        ? style.navlink_active
                        : style.navlink
                    }
                  >
                    <div
                      className={style.ico}
                      style={{
                        color:
                          router.pathname === l?.url ? "#5E5ADB" : "#454545B2",
                      }}
                    >
                      {l.icon}
                    </div>
                    <p>{l.name}</p>
                  </div>
                </div>
                {subMenu &&
                  l?.subMenu?.map((s) => {
                    return (
                      <div
                        style={{
                          cursor: "pointer",
                          backgroundColor:
                            router.pathname === s?.url ? "#F1F1F1" : "",
                          color: router.pathname === s?.url ? "#1A1A1A" : "",
                        }}
                        className={style.submenu}
                        data-aos="slide-right"
                        onClick={() => {
                          router.push(s.url);
                        }}
                      >
                        <p
                          style={{
                            fontWeight: router.pathname === s?.url ? "500" : "",
                          }}
                        >
                          {s.name}
                        </p>
                      </div>
                    );
                  })}
              </>
            );
          })}
        </div>
      </div>

      <Link
        href="/"
        onClick={() => {
          localStorage.clear();
        }}
      >
        <div className={style.exit}>
          <div className={style.systemadmin}>
            <p>Logout</p>
            <span>System Admin</span>
          </div>
          <div className={style.img}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" rx="5" fill="#5E5ADB" />
              <path
                d="M22.0542 21.4354L25.698 17.5001M25.698 17.5001L22.0542 13.5647M25.698 17.5001H12.9446M18.4103 21.4354V22.4192C18.4103 23.202 18.1224 23.9527 17.6099 24.5062C17.0974 25.0598 16.4023 25.3707 15.6775 25.3707H12.0336C11.3088 25.3707 10.6137 25.0598 10.1012 24.5062C9.58871 23.9527 9.30078 23.202 9.30078 22.4192V12.5809C9.30078 11.7981 9.58871 11.0474 10.1012 10.4939C10.6137 9.94035 11.3088 9.62939 12.0336 9.62939H15.6775C16.4023 9.62939 17.0974 9.94035 17.6099 10.4939C18.1224 11.0474 18.4103 11.7981 18.4103 12.5809V13.5647"
                stroke="white"
                stroke-width="1.31178"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ClientNavbar;
