import React from "react";
import Icon from "@/components/hoc/Icon";

const SendIcon = Icon(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 27 26"
      fill="none"
    >
      <g clipPath="url(#clip0_10_1919)">
        <path
          d="M8.12989 18.2862L3.82982 14.8199C2.5991 13.8279 2.88844 11.9059 4.3443 11.4085L16.629 7.20588C18.1972 6.66899 19.7471 8.21884 19.2102 9.78705L15.0083 22.0725C14.5102 23.5276 12.5888 23.8177 11.5969 22.587L8.12989 18.2862ZM8.12989 18.2862L12.9612 13.4548"
          stroke={color || "#2B2B2B"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_1919">
          <rect
            width="17.97"
            height="17.9705"
            fill="white"
            transform="translate(0.792969 13.293) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default SendIcon;
