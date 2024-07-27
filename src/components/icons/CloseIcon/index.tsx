import React from "react";
import Icon from "@/components/hoc/Icon";

const CloseIcon = Icon(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 7L17 17M7 17L17 7"
        stroke={color || "#F5F5F5"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default CloseIcon;
