import React from "react";
import Icon from "@/components/hoc/Icon";

const ScanEye = Icon(({ color, size }) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"

    //   viewBox="0 0 24 23"
    //   fill="none"
    // >
    //   <path
    //     d="M12.6262 17.1877C13.8372 16.9443 14.7082 15.6467 16.4482 13.0525C18.3412 10.2302 19.2882 8.81954 18.9232 7.67625C18.7969 7.28698 18.5797 6.9304 18.2882 6.63358C17.4182 5.75 15.6122 5.75 12.0002 5.75C8.38817 5.75 6.58217 5.75 5.71217 6.63358C5.42048 6.93068 5.20331 7.2876 5.07717 7.67721C4.71217 8.81954 5.65917 10.2302 7.55217 13.0525C9.29217 15.6467 10.1622 16.9433 11.3742 17.1877C11.7862 17.2711 12.2142 17.2711 12.6262 17.1877Z"
    //     stroke={color || "#F5F5F5"}
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
    </svg>
  );
});

export default ScanEye;
