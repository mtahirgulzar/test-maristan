import React from "react";

export const Clipboard = (props) => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H13C14.1046 19 15 18.1046 15 17V5C15 3.89543 14.1046 3 13 3H11M5 3C5 4.10457 5.89543 5 7 5H9C10.1046 5 11 4.10457 11 3M5 3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3M8 10H11M8 14H11M5 10H5.01M5 14H5.01"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        {...props}
      />
    </svg>
  );
};
