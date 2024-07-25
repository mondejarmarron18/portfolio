import React from "react";
import Icon from "@/components/hoc/Icon";

const DownloadIcon = Icon(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 20.125H18M12 4.125V16.125M12 16.125L15.5 12.625M12 16.125L8.5 12.625"
        stroke={color || "#F5F5F5"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default DownloadIcon;
