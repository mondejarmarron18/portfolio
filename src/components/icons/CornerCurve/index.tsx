import React from "react";
import { IconPropsType } from "../IconPropsType";

const CornerCurve = ({ color, size }: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 38V0C38 20.9868 20.9868 38 0 38H38Z"
        fill={color || "#1A1A1A"}
      />
    </svg>
  );
};

export default CornerCurve;
