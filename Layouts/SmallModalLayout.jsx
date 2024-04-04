import React, { Children } from "react";
import style from "../styles/LayoutStyle/SmallModalLayout.module.css";
const SmallModalLayout = ({
  children,
  title,
  subtitle,
  onClick,
  titstyle,
  topStyle,
}) => {
  return (
    <div className={style.container}>
      <div className={style.white}>
        <div className={style.top} style={topStyle}>
          <div className={style.main}>
            <h3 style={titstyle}>{title}</h3>
            <span>{subtitle}</span>
          </div>
          <svg
            onClick={onClick}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2921_34336)">
              <path
                d="M7.22736 5.63609C6.78802 5.19675 6.07571 5.19675 5.63637 5.63609C5.19703 6.07543 5.19703 6.78774 5.63637 7.22708L10.4093 12L5.63642 16.773C5.19708 17.2123 5.19708 17.9246 5.63642 18.364C6.07576 18.8033 6.78807 18.8033 7.22741 18.364L12.0003 13.591L16.7733 18.364C17.2126 18.8033 17.925 18.8033 18.3643 18.364C18.8036 17.9247 18.8036 17.2124 18.3643 16.773L13.5913 12L18.3643 7.22703C18.8037 6.78769 18.8037 6.07538 18.3643 5.63604C17.925 5.1967 17.2127 5.1967 16.7734 5.63604L12.0003 10.4091L7.22736 5.63609Z"
                fill="#464F60"
              />
            </g>
            <defs>
              <clipPath id="clip0_2921_34336">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SmallModalLayout;
