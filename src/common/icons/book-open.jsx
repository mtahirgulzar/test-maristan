import React from "react";

const BookOpen = (props) => {
  return (
    <>
      <svg
        width={21}
        height={17}
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.5 2.25278V15.2528M10.5 2.25278C9.33211 1.47686 7.74649 1 6 1C4.25351 1 2.66789 1.47686 1.5 2.25278V15.2528C2.66789 14.4769 4.25351 14 6 14C7.74649 14 9.33211 14.4769 10.5 15.2528M10.5 2.25278C11.6679 1.47686 13.2535 1 15 1C16.7465 1 18.3321 1.47686 19.5 2.25278V15.2528C18.3321 14.4769 16.7465 14 15 14C13.2535 14 11.6679 14.4769 10.5 15.2528"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        />
      </svg>
    </>
  );
};

export default BookOpen;
