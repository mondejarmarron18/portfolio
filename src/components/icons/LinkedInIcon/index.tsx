import React from "react";
import Icon from "@/components/hoc/Icon";

const LinkedInIcon = Icon(({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5094 8.796V10.493C12.8648 9.95168 13.3546 9.5119 13.931 9.21671C14.5073 8.92152 15.1504 8.78103 15.7974 8.809C19.2524 8.809 19.9994 10.969 19.9994 13.779V19.5H16.7994V14.428C16.7994 13.218 16.5554 11.662 14.6714 11.662C12.8444 11.662 12.5324 12.979 12.5324 14.338V19.5H9.34238V8.796H12.5094ZM7.19938 6.106C7.19899 6.423 7.10502 6.73284 6.92926 6.99665C6.7535 7.26047 6.50377 7.46653 6.21138 7.589C5.91911 7.71048 5.5973 7.74226 5.28692 7.68029C4.97653 7.61832 4.6916 7.4654 4.46838 7.241C4.24475 7.01646 4.0925 6.73081 4.03077 6.41997C3.96905 6.10913 4.00061 5.78698 4.12149 5.49403C4.24237 5.20108 4.44717 4.95041 4.71013 4.77354C4.97309 4.59667 5.28248 4.5015 5.59938 4.5C5.81 4.5 6.01855 4.54158 6.21306 4.62236C6.40758 4.70315 6.58423 4.82154 6.73288 4.97075C6.88153 5.11996 6.99926 5.29705 7.07932 5.49186C7.15937 5.68668 7.20017 5.89538 7.19938 6.106Z"
        fill={color || "#F5F5F5"}
      />
      <path d="M7.2 8.80908H4V19.5001H7.2V8.80908Z" fill={color || "#F5F5F5"} />
    </svg>
  );
});

export default LinkedInIcon;