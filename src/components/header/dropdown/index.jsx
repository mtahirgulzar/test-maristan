import React from "react";
import Link from "next/link";

const Dropdown = ({ data }) => {
  return (
    <section className="transition z-50 absolute top-[40px] right-0 left-0 insect-0 mx-auto w-[282px] dropdown-shadow rounded-[8px] bg-[#ffff] py-[12px] px-[12px] ">
      {data?.map((item, index) => (
        <div key={index} className="">
            <Link href={`/projects/${item?.attributes?.slug}`}>
              <p className=" text-[14px] py-[12px] px-[12px] rounded-[5px] hover:bg-[#F7F3F0] text-[#2C2C2C] leading-[24px] ff-overpass font-[400] uppercase hover:text-[#901C01] transition-all duration-300 mx-auto w-full ">
                {item?.attributes?.title}
              </p>
            </Link>
          </div>
      ))}
    </section>
  );
};

export default Dropdown;
