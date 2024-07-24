import React from "react";
import Icon from "@/components/hoc/Icon";

const SendIcon = Icon(({ color, size }) => {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="iconamoon:send-light" clipPath="url(#clip0_10_1919)">
        <path
          id="Vector"
          d="M12.5507 21.9791L8.27907 18.5616C7.05648 17.5837 7.38105 15.6427 8.85607 15.1166L21.3026 10.6717C22.8914 10.1039 24.4259 11.6384 23.858 13.2272L19.4139 25.6744C18.8871 27.1487 16.9468 27.474 15.9689 26.2514L12.5507 21.9791ZM12.5507 21.9791L17.5005 17.0293"
          stroke={color || "#2B2B2B"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_1919">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.529297 17.0293) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default SendIcon;
