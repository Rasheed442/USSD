import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiUserSettingsFill } from "react-icons/ri";
import { RxCountdownTimer } from "react-icons/rx";
import { BsFillCreditCardFill, BsFillTelephoneFill } from "react-icons/bs";
import style from "../styles/ComponentStyle/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { exit } from "@/public/ICON";
import Link from "next/link";
function MerchantNavbar() {
  const router = useRouter();
  const links = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <MdDashboard size={20} />,
    },
    {
      name: "Cards",
      url: "/cards",
      icon: <BsFillCreditCardFill size={20} />,
    },
    {
      name: "Transactions",
      url: "/transaction",
      icon: <RxCountdownTimer size={20} />,
    },
  ];
  const Support = [
    {
      name: "Help & Support",
      url: "/",
      icon: <MdDashboard size={20} />,
    },
    {
      name: "Contact Us",
      url: "/",
      icon: <BsFillCreditCardFill size={20} />,
    },
  ];
  return (
    <div className={style.navbarstyle}>
      <div className={style.headimg}>
        <Image src="/tokenz.svg" height={100} width={100} />
      </div>

      <div className={style.header}>
        <span>MENU</span>
        <div className={style.top}>
          {links.map((l) => {
            return (
              <Link href={l.url}>
                <div
                  className={
                    router.pathname === l.url
                      ? style.navlink_active
                      : style.navlink
                  }
                >
                  <p>{l.icon}</p>
                  <p>{l.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className={style.header}>
        <span>SUPPORT</span>

        <div className={style.top}>
          {Support.map((s) => {
            return (
              <Link href={s.url}>
                <div
                  className={
                    router.pathname === s.url
                      ? style.navlink_active
                      : style.navlink
                  }
                >
                  <p>{s.icon}</p>
                  <p>{s.name}</p>
                </div>
              </Link>
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
          <p>
            Logout
            <br />
            <span>Paystack Admin</span>
          </p>
          <div className={style.img}>
            <Image src={exit} width={45} height={45} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MerchantNavbar;
