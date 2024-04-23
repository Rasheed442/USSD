import DashbaordLayout from "@/Layouts/DashbaordLayout";
import Image from "next/image";

import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

import CustomerRequest from "@/ChartComponent/CustomerRequest";

import ResellerHeader from "./ResellerHeader";
import styled from "styled-components";
import RevenueReportClient from "./RevenueReportClient";
import UssdServiceChart from "@/ChartComponent/UssdServiceChart";
import CampaignPerformanceClient from "@/ChartComponent/CampaignPerformanceClient";
import TopUpClient from "./TopUpClient";

function ClientDashboard({ Adminlabels, Resellerlabels }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // console.log(state);
  const [topup, setTopup] = useState(false);

  return (
    <ResellerDash>
      {topup && <TopUpClient closeModal={setTopup} />}
      <DashbaordLayout>
        <ResellerHeader title="Dashboard" />

        <div className="overview">
          <div className="transactions">
            <div className="template">
              <div className="white">
                <div className="merchant">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.026"
                      fill="#5E5ADB"
                      fill-opacity="0.2"
                      stroke="#5E5ADB"
                      stroke-width="1.94805"
                    />
                    <circle cx="25.5" cy="24.5" r="14" fill="#5955CF" />
                    <path
                      d="M26.3337 24.5023C26.3337 24.042 25.9606 23.6689 25.5003 23.6689C25.0401 23.6689 24.667 24.042 24.667 24.5023C24.667 24.9625 25.0401 25.3356 25.5003 25.3356C25.9606 25.3356 26.3337 24.9625 26.3337 24.5023Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.667 18.6689H31.3337C32.7144 18.6689 33.8337 19.7882 33.8337 21.1689V27.8356C33.8337 29.2163 32.7144 30.3356 31.3337 30.3356H19.667C18.2863 30.3356 17.167 29.2163 17.167 27.8356V21.1689C17.167 19.7882 18.2863 18.6689 19.667 18.6689ZM19.667 19.9189C19.2068 19.9189 18.8337 20.292 18.8337 20.7523C18.8337 21.2125 19.2068 21.5856 19.667 21.5856H21.3337C21.7939 21.5856 22.167 21.2125 22.167 20.7523C22.167 20.292 21.7939 19.9189 21.3337 19.9189H19.667ZM28.8337 20.7523C28.8337 20.292 29.2068 19.9189 29.667 19.9189H31.3337C31.7939 19.9189 32.167 20.292 32.167 20.7523C32.167 21.2125 31.7939 21.5856 31.3337 21.5856H29.667C29.2068 21.5856 28.8337 21.2125 28.8337 20.7523ZM19.667 27.4189C19.2068 27.4189 18.8337 27.792 18.8337 28.2523C18.8337 28.7125 19.2068 29.0856 19.667 29.0856H21.3337C21.7939 29.0856 22.167 28.7125 22.167 28.2523C22.167 27.792 21.7939 27.4189 21.3337 27.4189H19.667ZM28.8337 28.2523C28.8337 27.792 29.2068 27.4189 29.667 27.4189H31.3337C31.7939 27.4189 32.167 27.792 32.167 28.2523C32.167 28.7125 31.7939 29.0856 31.3337 29.0856H29.667C29.2068 29.0856 28.8337 28.7125 28.8337 28.2523ZM25.5003 22.0023C26.881 22.0023 28.0003 23.1216 28.0003 24.5023C28.0003 25.883 26.881 27.0023 25.5003 27.0023C24.1196 27.0023 23.0003 25.883 23.0003 24.5023C23.0003 23.1216 24.1196 22.0023 25.5003 22.0023Z"
                      fill="white"
                    />
                  </svg>

                  <p>Wallet Balance</p>
                </div>
                <div className="amount">
                  <h2 style={{ fontWeight: "500" }}>₦72,400.02</h2>
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60179 10.5C9.60179 11.3702 9.94749 12.2048 10.5628 12.8202C11.1782 13.4356 12.0128 13.7813 12.883 13.7813C13.7533 13.7813 14.5879 13.4356 15.2032 12.8202C15.8186 12.2048 16.1643 11.3702 16.1643 10.5C16.1643 9.62976 15.8186 8.79516 15.2032 8.17981C14.5879 7.56445 13.7533 7.21875 12.883 7.21875C12.0128 7.21875 11.1782 7.56445 10.5628 8.17981C9.94749 8.79516 9.60179 9.62976 9.60179 10.5V10.5ZM25.6037 9.74414C22.8264 3.89356 18.6282 0.949219 13.0002 0.949219C7.36937 0.949219 3.17406 3.89355 0.396715 9.74707C0.285314 9.98296 0.227539 10.2406 0.227539 10.5015C0.227539 10.7623 0.285314 11.02 0.396715 11.2559C3.17406 17.1064 7.3723 20.0508 13.0002 20.0508C18.6311 20.0508 22.8264 17.1064 25.6037 11.2529C25.8293 10.7783 25.8293 10.2275 25.6037 9.74414V9.74414ZM12.883 15.6563C10.0354 15.6563 7.72679 13.3477 7.72679 10.5C7.72679 7.65234 10.0354 5.34375 12.883 5.34375C15.7307 5.34375 18.0393 7.65234 18.0393 10.5C18.0393 13.3477 15.7307 15.6563 12.883 15.6563Z"
                      fill="#5E5ADB"
                    />
                  </svg>
                </div>
                <button onClick={() => setTopup(true)}>
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25H11.943C9.634 1.25 7.825 1.25 6.413 1.44C4.969 1.634 3.829 2.04 2.934 2.934C2.039 3.829 1.634 4.969 1.44 6.414C1.25 7.825 1.25 9.634 1.25 11.943V12.057C1.25 14.366 1.25 16.175 1.44 17.587C1.634 19.031 2.04 20.171 2.934 21.066C3.829 21.961 4.969 22.366 6.414 22.56C7.825 22.75 9.634 22.75 11.943 22.75H12.057C14.366 22.75 16.175 22.75 17.587 22.56C19.031 22.366 20.171 21.96 21.066 21.066C21.961 20.171 22.366 19.031 22.56 17.586C22.75 16.175 22.75 14.366 22.75 12.057V12C22.75 11.8011 22.671 11.6103 22.5303 11.4697C22.3897 11.329 22.1989 11.25 22 11.25C21.8011 11.25 21.6103 11.329 21.4697 11.4697C21.329 11.6103 21.25 11.8011 21.25 12C21.25 14.378 21.248 16.086 21.074 17.386C20.902 18.665 20.574 19.436 20.005 20.006C19.435 20.575 18.665 20.902 17.386 21.074C16.086 21.248 14.378 21.25 12 21.25C9.622 21.25 7.914 21.248 6.614 21.074C5.335 20.902 4.564 20.574 3.994 20.005C3.425 19.435 3.098 18.665 2.926 17.386C2.752 16.086 2.75 14.378 2.75 12C2.75 9.622 2.752 7.914 2.926 6.614C3.098 5.335 3.426 4.564 3.995 3.994C4.565 3.425 5.335 3.098 6.614 2.926C7.914 2.752 9.622 2.75 12 2.75C12.1989 2.75 12.3897 2.67098 12.5303 2.53033C12.671 2.38968 12.75 2.19891 12.75 2C12.75 1.80109 12.671 1.61032 12.5303 1.46967C12.3897 1.32902 12.1989 1.25 12 1.25Z"
                      fill="white"
                    />
                    <path
                      d="M21.53 3.52985C21.6625 3.38767 21.7346 3.19963 21.7312 3.00532C21.7277 2.81102 21.649 2.62564 21.5116 2.48822C21.3742 2.35081 21.1888 2.2721 20.9945 2.26867C20.8002 2.26524 20.6122 2.33737 20.47 2.46985L12.75 10.1898V6.65485C12.75 6.45593 12.671 6.26517 12.5303 6.12452C12.3897 5.98386 12.1989 5.90485 12 5.90485C11.8011 5.90485 11.6103 5.98386 11.4697 6.12452C11.329 6.26517 11.25 6.45593 11.25 6.65485V11.9998C11.25 12.4138 11.586 12.7498 12 12.7498H17.344C17.5429 12.7498 17.7337 12.6708 17.8743 12.5302C18.015 12.3895 18.094 12.1988 18.094 11.9998C18.094 11.8009 18.015 11.6102 17.8743 11.4695C17.7337 11.3289 17.5429 11.2498 17.344 11.2498H13.81L21.53 3.52985Z"
                      fill="white"
                    />
                  </svg>
                  Top Up
                </button>
              </div>
            </div>
            {Resellerlabels?.map((m) => {
              return (
                <div className="template">
                  <div className="white">
                    <div className="merchant">
                      <Image src={m.icon} alt="" width={45} height={45} />
                      <p>{m?.details}</p>
                    </div>
                    <h2
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      {m?.amount}
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <p>{m.sign}</p>
                      <h4>
                        <span
                          style={{ color: m.rate > "2.1%" ? "green" : "red" }}
                        >
                          {m.rate}
                        </span>{" "}
                        vs last week
                      </h4>
                    </div>
                  </div>
                  <div className="mychart">{m?.charts}</div>
                </div>
              );
            })}
          </div>
        </div>
        <RevenueReportClient />

        {/* call duration analysis and outbound call distributiom */}
        <div className="container">
          <div className="contain">
            <div className="history">
              <div className="merch">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 3.125C14 3.125 16.3137 3.125 18.4279 4.01926C18.4279 4.01926 20.4694 4.88274 22.0433 6.45666C22.0433 6.45666 23.6173 8.03058 24.4807 10.0721C24.4807 10.0721 25.375 12.1863 25.375 14.5C25.375 14.5 25.375 16.8136 24.4807 18.9279C24.4807 18.9279 23.6173 20.9694 22.0433 22.5433C22.0433 22.5433 20.4694 24.1173 18.4279 24.9807C18.4279 24.9807 16.3136 25.875 14 25.875C14 25.875 11.6863 25.875 9.57207 24.9807C9.57207 24.9807 7.53058 24.1173 5.95666 22.5433C5.95666 22.5433 4.38274 20.9694 3.51926 18.9279C3.51926 18.9279 2.625 16.8137 2.625 14.5C2.625 14.5 2.625 12.1863 3.51926 10.0721C3.51926 10.0721 4.38274 8.03058 5.95666 6.45666C5.95666 6.45666 7.53058 4.88274 9.57207 4.01926C9.57207 4.01926 11.6863 3.125 14 3.125ZM14 4.875C14 4.875 12.0412 4.875 10.2538 5.63102C10.2538 5.63102 8.52666 6.36153 7.1941 7.6941C7.1941 7.6941 5.86153 9.02666 5.13102 10.7538C5.13102 10.7538 4.375 12.5412 4.375 14.5C4.375 14.5 4.375 16.4588 5.13102 18.2462C5.13102 18.2462 5.86153 19.9733 7.1941 21.3059C7.1941 21.3059 8.52666 22.6385 10.2538 23.369C10.2538 23.369 12.0412 24.125 14 24.125C14 24.125 15.9588 24.125 17.7462 23.369C17.7462 23.369 19.4733 22.6385 20.8059 21.3059C20.8059 21.3059 22.1385 19.9733 22.869 18.2462C22.869 18.2462 23.625 16.4588 23.625 14.5C23.625 14.5 23.625 12.5412 22.869 10.7538C22.869 10.7538 22.1385 9.02666 20.8059 7.6941C20.8059 7.6941 19.4733 6.36153 17.7462 5.63102C17.7462 5.63102 15.9588 4.875 14 4.875Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M14 15.375H20.125C20.6082 15.375 21 14.9832 21 14.5C21 14.0168 20.6082 13.625 20.125 13.625H14.875V8.375C14.875 7.89175 14.4832 7.5 14 7.5C13.5168 7.5 13.125 7.89175 13.125 8.375V14.5C13.125 14.9832 13.5168 15.375 14 15.375Z"
                    fill="#1C1C1C"
                  />
                </svg>
                <h1>USSD Session</h1>
              </div>
              <div className="bounds">
                <div className="call">
                  <div className="line2"></div>
                  <p>Completed Session</p>
                </div>
                <div className="call">
                  <div className="line1"></div>
                  <p>Incomplete Session</p>
                </div>
              </div>
            </div>
            <div className="ussdsession">
              <span>563.5K</span>
              <div className="totals">
                <p>
                  Total USSD Session &nbsp; &nbsp;<span>+2.54%</span>
                </p>
              </div>
            </div>
            {/* <MerchanyHistoryChart /> */}
            <CustomerRequest />
          </div>

          <div className="contain2">
            <div className="userdistribution">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0006 6.33398C11.4233 6.33398 9.33392 8.42332 9.33392 11.0007C9.33392 13.578 11.4233 15.6673 14.0006 15.6673C16.5779 15.6673 18.6673 13.578 18.6673 11.0007C18.6673 8.42332 16.5779 6.33398 14.0006 6.33398ZM11.6673 11.0007C11.6673 9.71199 12.7119 8.66732 14.0006 8.66732C15.2892 8.66732 16.3339 9.71199 16.3339 11.0007C16.3339 12.2893 15.2892 13.334 14.0006 13.334C12.7119 13.334 11.6673 12.2893 11.6673 11.0007Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0006 26.1673C12.6742 26.1673 10.7618 25.8538 9.3104 25.1869C8.59845 24.8597 7.83454 24.3744 7.38394 23.6484C7.14607 23.2651 6.99578 22.8133 7.0007 22.3104C7.00557 21.8124 7.16177 21.34 7.41754 20.9072C8.58709 18.9278 11.0134 16.834 14.0006 16.834C16.9878 16.834 19.4141 18.9278 20.5836 20.9072C20.8394 21.34 20.9956 21.8124 21.0005 22.3104C21.0054 22.8133 20.8551 23.2651 20.6172 23.6484C20.1666 24.3744 19.4027 24.8597 18.6908 25.1869C17.2394 25.8538 15.3269 26.1673 14.0006 26.1673ZM9.42638 22.0942C9.33703 22.2454 9.33405 22.3205 9.33392 22.3332C9.33382 22.3417 9.33354 22.3648 9.36649 22.4179C9.45912 22.5672 9.72813 22.8109 10.2847 23.0667C11.3705 23.5656 12.9376 23.834 14.0006 23.834C15.0636 23.834 16.6307 23.5656 17.7164 23.0667C18.273 22.8109 18.5421 22.5672 18.6347 22.4179C18.6676 22.3648 18.6674 22.3422 18.6673 22.3338C18.6671 22.321 18.6641 22.2454 18.5748 22.0942C17.668 20.5596 15.8947 19.1673 14.0006 19.1673C12.1065 19.1673 10.3331 20.5596 9.42638 22.0942Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.91725 14.5007C2.91725 12.5677 4.48425 11.0007 6.41725 11.0007C8.35025 11.0007 9.91725 12.5677 9.91725 14.5007C9.91725 16.4336 8.35025 18.0007 6.41725 18.0007C4.48425 18.0007 2.91725 16.4336 2.91725 14.5007ZM6.41725 13.334C5.77292 13.334 5.25058 13.8563 5.25058 14.5007C5.25058 15.145 5.77292 15.6673 6.41725 15.6673C7.06158 15.6673 7.58392 15.145 7.58392 14.5007C7.58392 13.8563 7.06158 13.334 6.41725 13.334Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
                <path
                  d="M3.37894 23.186C3.09247 23.7632 2.39238 23.9988 1.81523 23.7123C1.23808 23.4259 1.00243 22.7258 1.2889 22.1486C1.71751 21.2851 2.36626 20.4181 3.18237 19.7547C3.9988 19.091 5.04498 18.584 6.23895 18.584C6.88328 18.584 7.40562 19.1063 7.40562 19.7507C7.40562 20.395 6.88328 20.9173 6.23895 20.9173C5.72447 20.9173 5.18149 21.1366 4.65418 21.5652C4.12656 21.9941 3.67703 22.5854 3.37894 23.186Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4457 14.5007C18.4457 12.5677 20.0127 11.0007 21.9457 11.0007C23.8787 11.0007 25.4457 12.5677 25.4457 14.5007C25.4457 16.4336 23.8787 18.0007 21.9457 18.0007C20.0127 18.0007 18.4457 16.4336 18.4457 14.5007ZM21.9457 13.334C21.3013 13.334 20.779 13.8563 20.779 14.5007C20.779 15.145 21.3013 15.6673 21.9457 15.6673C22.59 15.6673 23.1123 15.145 23.1123 14.5007C23.1123 13.8563 22.59 13.334 21.9457 13.334Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
                <path
                  d="M26.7174 22.1486C27.0039 22.7258 26.7682 23.4259 26.1911 23.7123C25.6139 23.9988 24.9138 23.7632 24.6274 23.186C24.3293 22.5854 23.8797 21.9941 23.3521 21.5652C22.8248 21.1366 22.2818 20.9173 21.7673 20.9173C21.123 20.9173 20.6007 20.395 20.6007 19.7507C20.6007 19.1063 21.123 18.584 21.7673 18.584C22.9613 18.584 24.0075 19.091 24.8239 19.7547C25.64 20.4181 26.2888 21.2851 26.7174 22.1486Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
              </svg>
              <p>USSD Service</p>
            </div>
            <div className="thechart">
              <UssdServiceChart />
            </div>
          </div>
        </div>
        <div className="compaignPerformance">
          <div className="contain2">
            <div className="userdistribution">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.51986 1.77699C6.69741 -0.0454574 3.74265 -0.0454535 1.9202 1.77699L1.29541 2.40178C0.433981 3.26321 -0.155217 4.55409 0.180855 5.95246C0.696069 8.09622 2.24645 12.0027 6.86995 16.6262C11.4934 21.2497 15.4 22.8001 17.5437 23.3153C18.9421 23.6514 20.233 23.0622 21.0944 22.2008L21.7192 21.576C23.5416 19.7535 23.5416 16.7988 21.7192 14.9763L20.6355 13.8926C19.15 12.4072 16.8551 12.0974 15.0289 13.1358L14.9163 13.1998C14.168 13.6253 13.3083 13.5906 12.6992 13.1498C12.2078 12.7941 11.7381 12.4199 11.4072 12.089C11.0763 11.7581 10.702 11.2884 10.3464 10.797C9.90562 10.1879 9.87084 9.32822 10.2964 8.57988L10.3604 8.46726C11.3988 6.64108 11.089 4.34615 9.60355 2.86068L8.51986 1.77699ZM3.57012 3.42691C4.48134 2.51568 5.95872 2.51568 6.86995 3.42691L7.95364 4.5106C8.69637 5.25333 8.85127 6.40079 8.33206 7.31389L8.26802 7.42651C7.44564 8.87278 7.41678 10.7288 8.45614 12.1649C8.83791 12.6925 9.29671 13.2783 9.7573 13.7389C10.2179 14.1995 10.8037 14.6583 11.3312 15.04C12.7674 16.0794 14.6234 16.0505 16.0697 15.2282L16.1823 15.1641C17.0954 14.6449 18.2428 14.7998 18.9856 15.5425L20.0693 16.6262C20.9805 17.5375 20.9805 19.0148 20.0693 19.9261L19.4445 20.5509C18.9932 21.0022 18.4957 21.1444 18.089 21.0466C16.3751 20.6347 12.8478 19.3043 8.51986 14.9763C4.19191 10.6484 2.86149 7.12109 2.44959 5.40721C2.35183 5.00046 2.494 4.50302 2.94533 4.0517L3.57012 3.42691Z"
                  fill="#1A1A1A"
                  fill-opacity="0.7"
                />
              </svg>

              <p>Campaign Performance</p>
            </div>
            <CampaignPerformanceClient />
          </div>
        </div>
      </DashbaordLayout>
    </ResellerDash>
  );
}

export default ClientDashboard;
const ResellerDash = styled.div`
  overflow: hidden;
  width: -webkit-fill-available;
  .thechart {
    width: 100%;
    height: 100%;
  }
  .compaignPerformance {
    margin: 20px;
  }
  .amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .report {
    padding-top: 120px;
  }
  .overview {
    padding: 80px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    top: 40px;
    width: -webkit-fill-available;
    z-index: 999;
    overflow: hidden;
    position: absolute;
  }

  .date {
    background-color: white;
    border: 1px solid gainsboro;
    height: 40px;
    padding: 10px;
    color: #344054;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    gap: 4px;
    position: relative;
  }
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 30px 0px 0px;
  }
  .calendar {
    position: absolute;
    top: 150px;
    z-index: 1;
    right: 0;
  }
  .transactions {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* margin: 0px 30px 0px 30px; */
    overflow: hidden;
    gap: 20px;
    box-shadow: 0px 0px 20px 0px #e2e8f0;
    border-radius: 10px;
  }
  /* .transactions>* {
     border-right: 1px solid #D5DBE5;
 }

 .transactions> :last-child {
     border-right: none;
 } */
  .mychart {
    position: absolute;
    right: 10px;
    width: 40%;
    top: 0;
  }
  .template {
    padding: 10px;
    width: 100%;
    box-shadow: 0px 0px 0px 1px gainsboro;
    border: 1px solid gainsboro;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    justify-content: space-between;

    /* margin: 20px 0px 20px 0px; */
  }

  .white {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
  .white button {
    background-color: #5e5adb;
    color: white;
    width: 100%;
    border: none;
    padding: 6px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .white h3 {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .white h2 {
    font-size: 33px;
    line-height: 43px;
    font-weight: 600;
  }

  .white h4 {
    font-size: 13px;
    color: #868fa0;
    font-weight: 400;
  }

  .white span {
    color: red;
    font-size: 13px;
    font-weight: 400;
  }
  .transactions {
    display: grid;
    box-shadow: 0px 0px 20px 0px #9c9c9c1a;
    grid-template-columns: repeat(4, 1fr);
    margin: 0px 30px 0px 30px;
    /* border-radius: 10px; */
  }
  .merchant {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .merchant p {
    font-size: 14px;
    color: #909090;
    line-height: 16px;
    font-weight: 300;
  }
  .container {
    padding: 0px 55px 30px 30px;
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 27px;
  }

  .container2 {
    padding: 0px 55px 30px 30px;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 27px;
  }
  .userdistribution {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 25px 20px 30px 20px;
  }
  .userdistribution h1 {
    font-size: 20px;
  }
  .userdistribution p {
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.34px;
    font-weight: 600;
    font-weight: 400;
  }
  .contain {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 0px 10px;
    border-radius: 10px;
  }
  .contain2 {
    background-color: white;
    overflow: hidden;
    border-radius: 10px;
  }
  .liner {
    background-color: #4318ff;
    width: 6px;
    height: 80px;
    border-radius: 5px;
  }
  .linec {
    background-color: #9e9ce9;
    width: 6px;
    height: 80px;
    border-radius: 5px;
  }
  .conts {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .conts span {
    color: #7d7d7d;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  .conts p {
    color: #000000;
    line-height: 31px;
    font-size: 26px;
    font-weight: 600;
  }
  .client {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .ussdsession {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0px 0px 0px 10px;
  }
  .ussdsession span {
    color: #5e5adb;
    line-height: 32px;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -2%;
  }
  .totals {
    display: flex;
    gap: 125px;
  }
  .totals span {
    color: #027a48;
    letter-spacing: -2%;
    line-height: 20px;
    font-size: 11px;
    font-weight: 600;
  }
  .totals p {
    color: #454545;
    letter-spacing: -2%;
    line-height: 24px;
    font-size: 12px;
    font-weight: 300;
  }
  .history {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 10px 30px 10px;
  }
  .history select {
    height: 35px;
    border-radius: 5px;
    border: 1px solid gainsboro;
    width: 10rem;
    outline: none;
  }
  .call {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    /* border-radius: 8px; */
  }
  .call p {
    color: #7d7d7d;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
  }
  .bounds {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .line1 {
    height: 15px;
    width: 15px;
    border-radius: 3px;
    background-color: #d94040;
  }
  .line2 {
    height: 14px;
    border-radius: 3px;
    width: 14px;
    background-color: #4318ff;
  }
  .merch {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .merch h1 {
    font-weight: 400;
    font-size: 22px;
  }
  .merch p {
    color: #909090;
    font-size: 12px;
    font-weight: 300;
  }
  .card {
    display: flex;
  }
  .btn {
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #f0f0f0;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 30px;
  }
  .btn button {
    width: 20rem;
    padding: 10px;
    font-size: 12px;
    background-color: transparent;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }
  .tablecontent {
    background-color: white;
    margin: 0px 30px 0px 30px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .content h1 {
    font-weight: 500;
  }
  .content button {
    background-color: transparent;
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 7rem;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }

  .table th {
    font-weight: 500;
    text-align: left;
    font-size: 13px;
    padding: 18px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 22px;
    font-weight: 500;
    font-size: 14px;
    border-top: 1px solid gainsboro;
  }
  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 15px;
    color: #687182;
  }

  .pagins {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .pagins p {
    font-size: 14px;
    color: #687182;
  }

  .pagins select {
    width: 48px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    padding: 2px;
    border-radius: 3px;
  }

  .arrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrow button {
    width: 28.8px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }

  /* @media screen and (max-width:1293px) {
    .container{
        grid-template-columns: repeat(1, 1fr);
    }
    .contain{
        width: 85vw;
    }
}
@media screen and (max-width:1555px) {
    .transactions {
            grid-template-columns: repeat(3, 1fr);
           
        }
        .white{
            border-radius: 5px;
        }
}
@media screen and (max-width:1019px) {
    .transactions {
            grid-template-columns: repeat(2, 1fr);
           
        }
        .white{
            border-radius: 5px;
        }
}
@media screen and (max-width:789px) {
    .transactions {
            grid-template-columns: repeat(1, 1fr);
           
        }
        .white{
            border-radius: 5px;
        }
} */
`;
