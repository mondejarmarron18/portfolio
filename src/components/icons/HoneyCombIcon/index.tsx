import React from "react";
import Icon from "@/components/hoc/Icon";

const HoneyCombIcon = Icon(({ size, color }) => {
  const fill = color || "#222222";

  return (
    <svg
      width={size || "405"}
      height={size || "388"}
      viewBox="0 0 405 388"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7_1456)">
        <path
          d="M165.653 349.949L77.2203 326.15L57.6215 241.884L126.475 181.503L214.908 205.302L234.507 289.568L165.653 349.949ZM93.4071 311.882L161.078 330.278L213.685 283.907L198.721 219.57L131.11 201.432L78.4433 247.545L93.4071 311.882Z"
          fill={fill}
        />
        <path
          d="M304.436 317.67L216.004 293.871L196.405 209.606L265.259 149.224L353.691 173.023L373.29 257.289L304.436 317.67ZM232.19 279.603L299.861 297.999L352.468 251.629L337.505 187.291L269.894 169.153L217.226 215.266L232.19 279.603Z"
          fill={fill}
        />
        <path
          d="M209.134 222.4L120.701 198.601L101.102 114.336L169.956 53.9544L258.389 77.7532L277.987 162.019L209.134 222.4ZM136.888 184.333L204.499 202.472L257.146 156.273L242.202 92.0212L174.531 73.625L121.924 119.996L136.888 184.333Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_7_1456">
          <rect
            width="341.968"
            height="317.486"
            fill={fill}
            transform="translate(0 78) rotate(-13.0933)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default HoneyCombIcon;
