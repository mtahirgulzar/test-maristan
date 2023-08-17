import React from "react";
export const Heart = (props) => {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.31802 3.06338C0.56066 4.82074 0.56066 7.66998 2.31802 9.42734L10.0001 17.1094L17.682 9.42734C19.4393 7.66998 19.4393 4.82074 17.682 3.06338C15.9246 1.30602 13.0754 1.30602 11.318 3.06338L10.0001 4.38145L8.68198 3.06338C6.92462 1.30602 4.07538 1.30602 2.31802 3.06338Z"
        stroke="#DF2C1A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
};
