import React from "react";
import { Heart } from "@/common/icons/heart";

export const AppointmentCta = ({data}) => {
  return (
    <section className="py-[75px]">
      <div className="max-w-[1440px] mx-auto px-4 rounded-[32px] cus-background ">
        <div className="sm:flex items-center justify-between py-[40px] lg:py-[48px] lg:px-[75px] gap-x-[75px] ">
          <div className="mb-[24px] lg:mb-0">
            <p className="text-[#901C01] text-[14px] leading-[16px] uppercase ff-convergence">
            {data?.tagline}
            </p>
            <h1 className="text-[#2C2C2C] ff-convergence mb-[8px] font-[400] text-[32px] sm lg:text-[48px]  sm:text-[34px] md:text-[36px] leading-[34px] sm:leading-[36px] md:leading-[39px] lg:leading-[60px] tracking-[-0.01em] lg:tracking-[0.2px]">
              {data?.title}
            </h1>
            <p className="max-w-[487px]  leading-[20px] text-[#3B3731] opacity-[0.8] ff-overpass">
            {data?.description}
            </p>
          </div>
          <div className=" w-full sm:max-w-[250px]  bg-[#901C01] transition-all duration-300 hover:bg-[#741e0b] rounded-[8px]">
            <button className="py-[14px] px-[32px] font-[600] text-[#ffff] inline-flex gap-x-[19px] items-center uppercase">
                <Heart stroke="#ffff" />
               {data?.cta?.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
