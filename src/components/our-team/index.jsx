import React from "react";
import Cards from "../empowering-minds/cards";
import { Arrow } from "@/common/icons/arrow.svg";

const OurTeam = ({data}) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 ">
      <div className=" sm:border-b-[2px] sm:border-[#2E2B26] ">
       <div> <p className="font-[400] text-[14px] leading-[16px] text-[#901C01] uppercase text-center sm:text-start ff-convergence">
        {data?.heading?.tagline}
        </p>
        <h2 className="my-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] leading-[37px] sm:leading-[39px] md:leading-[43px] lg:leading-[48px] tracking-[-0.02em] text-center sm:text-start text-[#2E2B26] ff-convergence">
          {data?.heading?.title}
        </h2></div>
        <div className="flex flex-col sm:flex-row justify-between sm:mb-[40px] mb-0">
          <p className="max-w-[919px] font-[400] text-center sm:text-start text-[16px] text-[#2E2B26] sm:text-[18px] leading-[24px] lg:leading-[26px] ff-overpass mb-[24px]">
            {data?.description}
          </p>
          <div className=" flex sm:justify-end sm:items-end text-center justify-center items-center ">
            {" "}
            <button className="w-full max-h-[109px] justify-center items-center py-[14px] px-[32px] sm:px-[32px] border-[1px] border-[#802A22] rounded-[8px]  text-[#802A22] uppercase ff-overpass  flex  gap-x-[10px] font-[600] text-[16px] leading-[20px] hover:bg-[#F9FAFB] duration-200 transition-all">
            {data?.cta?.name} <Arrow />
            </button>
          </div>
        </div>
      </div>
      <Cards data={data?.cards}/>
    </section>
  );
};

export default OurTeam;
