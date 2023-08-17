"use client";
import React from "react";
import Link from "next/link";
import { Tick } from "@/common/icons/tick.svg";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

const Empowering = ({ data }) => {
  return (
    <section className="py-[40px] sm:py-[50px] md:py-[60px] lg:py-[75px] mt-[75px] bg-[#F7F3F0]">
      <div className=" grid lg:grid-cols-2 lg:gap-x-[75px] items-center max-w-[1440px] mx-auto px-4">
        <div className=" mb-[40px] lg:mb-0 ">
          <Image
            src={imageResolver(data?.image)?.path}
            loader={() => imageResolver(data?.image)?.path}
            width={609}
            height={613}
            alt={data?.image?.data?.attributes?.alternativeText}
          />
        </div>
        <div>
          <div>
            <p className="text-[#901C01] font-[400] text-[14px] leading-[16px] uppercase ff-convergence ">
              {data?.heading?.tagline}
            </p>
            <h2 className=" max-w-[698px] mb-[20px] mt-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[37px] lg:text-[40px] leading-[37.54px] sm:leading-[42px] md:leading-[46px] text-[#2C2C2C] ff-convergence ">
              {data?.heading?.title}
            </h2>
            <p className="max-w-[607px] font-[400] text-[16px] leading-[24px] ff-overpass">
              {data?.heading?.description}
            </p>
          </div>
          <div className="pt-[20px] ">
            <h3 className="mb-[14px] text-[18px] leading-[24px] text-[#2C2C2C] ff-convergence">
              Mission:
            </h3>
            <div className="flex flex-col gap-y-[6px]">
              {data?.mission.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-x-[13.15px] mb-[4px] sm:mb-0"
                  >
                    <div>
                      <Tick />
                    </div>
                    <h2 className="text-[16px] leading-[20px] text-[#2C2C2C] ff-overpass">
                      {value.value}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pt-[22px] pb-[22px]">
            <h3 className="mb-[14px] text-[18px] leading-[24px] text-[#2C2C2C] ff-convergence">
              Vision:
            </h3>
            <div className="flex flex-col gap-y-[6px]">
              {data?.vision.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-x-[13.15px] mb-[4px] sm:mb-0"
                  >
                    <div>
                      <Tick />
                    </div>
                    <h2 className="text-[16px] leading-[20px] text-[#2C2C2C] ff-overpass">
                      {value.value}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="font-[500] text-[16px] leading-[26px] text-[#12141D]  ff-overpass">
            {data?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Empowering;
