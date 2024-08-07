import React from "react";
import Icon from "@/components/hoc/Icon";

const LoadingIcon = Icon(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
    >
      <path
        d="M12 4V2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12H4C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4Z"
        fill={color || "#F5F5F5"}
      />
    </svg>
  );
});

export default LoadingIcon;
