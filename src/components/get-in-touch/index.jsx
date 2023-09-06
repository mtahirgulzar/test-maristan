import React from "react";
import { Dial } from "@/common/icons/dial.svg";
import Link from "next/link";

const GetInTouch = ({ about, data }) => {
  return (
    <section className={`px-4 ${about && "pb-[75px]"}`}>
      <div
        className="max-w-[1440px] mx-auto px-4 rounded-[32px] bg-cover bg-no-repeat md:bg-left "
        style={{
          backgroundImage: 'url("/images/getintouch-bg.png" )',
        }}
      >
        <div className=" flex flex-col lg:flex-row justify-between items-center py-[40px] lg:py-[75px] lg:px-[30px] xl:px-[75px]  lg:gap-x-[40px] xl:gap-x-[75px] ">
          <div className="lg:w-[55%] mb-[24px] lg:mb-0 sm:text-center lg:text-start">
            <h1 className="text-[#FFFFFF] ff-convergence mb-[8px] font-[400] text-[32px] lg:text-[40px] xl:text-[48px]  sm:text-[34px] md:text-[36px] leading-[34px] sm:leading-[36px] md:leading-[39px] lg:leading-[48px] xl:leading-[60px] tracking-[-0.01em] lg:tracking-[0.2px]">
              {data?.title}
            </h1>
            <p className="max-w-[487px]  sm:mx-auto lg:mx-0 font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-[#FFFFFF] ff-overpass">
              {data?.description}
            </p>
          </div>
          <div className="lg:w-[45%] h-full justify-center  sm:mx-auto lg:mx-0 flex flex-col sm:text-center lg:text-start">
            <div className="w-full flex flex-col sm:flex-row gap-x-[12px] mb-[12px]">
              <Link href={`${data?.appotment?.link || data?.cta[0]?.link}`}>
                <div className="mb-[12px] sm:mb-0">
                  <button className="w-full sm:w-auto hover:bg-[#F9FAFB] duration-500 transition-all  text-[#2C2C2C]  text-[16px] leading-[20.26px] font-[600] flex items-center bg-[#FFFFFF] rounded-[8px] py-[16px] sm:px-[24px] justify-center uppercase focus:outline-none ff-overpass">
                    {data?.appotment?.name || data?.cta[0]?.name}
                  </button>
                </div>
              </Link>
              <Link href={`tel:+${data?.call?.link || data?.cta[1]?.link}`}>
                <button className="w-full sm:w-auto py-[14px] px-[32px] font-[600]  border-[1px] border-[#FFFFFF] rounded-[8px] ">
                  <div className="text-[16px] leading-[20.26px] text-[#FFFFFF] uppercase ff-overpass text-center flex justify-center items-center gap-x-[8px]">
                    <span>
                      <Dial stroke="#000000" />
                    </span>
                    {data?.call?.name || data?.cta[1]?.name}
                  </div>
                </button>
              </Link>
            </div>
            <p className="ff-overpass font-[400] text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.8] max-w-[414px]">
              {data?.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
