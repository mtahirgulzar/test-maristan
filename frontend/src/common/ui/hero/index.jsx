"use client";
import React from "react";
import Image from "next/image";
import { Heart } from "@/common/icons/heart";
import Calender from "@/common/icons/calender";
import { Clipboard } from "@/common/icons/clipboard";
import BookOpen from "@/common/icons/book-open";
import { Dial } from "@/common/icons/dial.svg";
import { imageResolver } from "@/utils/image-resolver";
import { Button } from "../btn";

const myData = [
  {
    svg: <Calender height={20} width={20} fill="#ffff" />,
    name: "book a clinic appointment",
    link: "https://go.oncehub.com/calmmhi",
  },
  {
    svg: <Clipboard height={20} width={20} />,
    name: "suicide Response training",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSewCGf_hMUAy4hxlLCRFu1i1nwLF59GbXTdLgqtd-bicD36AQ/viewform?pli=1",
  },
  {
    svg: <BookOpen height={20} width={20} stroke="#ffff" />,
    name: "ReSOURCES",
    link: "/education",
  },
];

export const Hero = ({ data, slugdata }) => {
  return (
    <section
      className=" relative  w-full h-full pt-[42px] sm:pt-[60px] md:pt-[77px] pb-[199px] sm:pb-[215px] md:pb-[237px] px-4"
      style={{
        background: `url('${
          imageResolver(data?.backgroundImage)?.path
        }') no-repeat  center center/cover`,
      }}
    >
      <div className="relative max-w-[1440px] mx-auto">
        <div className="max-w-[651px] mx-auto ">
          <p className="text-[14px] leading-[16px] text-[#ffff] font-[400] uppercase ff-convergence sm:text-center">
            {data?.tagline}
          </p>
          <h1 className="mt-[20px] sm:text-center text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[44px] sm:leading-[50px] md:leading-[68.03px] font-[400] tracking-[-0.01em] text-[#ffff] ff-convergence">
            {data?.heading}
          </h1>
          <p className="sm:text-center  max-w-[653px] mx-auto mt-[20px] text-[#ffff] ff-overpass">
            {data?.description}
          </p>
          <div className="mt-[31px] sm:flex gap-x-[12px] justify-center ff-overpass">
            <button className="inline-flex gap-[19px] items-center py-[16px] px-[24px] w-full sm:w-auto bg-[#901C01] text-[#FFFFFF] font-[600]  leading-[20px] uppercase rounded-[8px] hover:bg-[#a1261b] duration-200 transition-all">
              <Heart stroke="#ffff" /> {data?.listLinks[0]?.name}
            </button>
            <button className="flex items-center justify-center mt-[12px] sm:mt-0 w-full sm:w-auto hover:bg-[#e5dad1] transition-all duration-300 gap-x-[18px] py-[16px] border-[1px] border-[#ffff] px-[24px] text-[#ffff]  font-[600] leading-[20px] uppercase rounded-[8px]">
              <Dial className="fill-[#ffff] " />
              {data?.listLinks[1]?.name}
            </button>
          </div>
          <p className="ff-overpass text-[#ffff] opacity-[0.8] mt-[40px] sm:max-w-[414px] mx-auto sm:text-center">
            For the nationwide mental health crisis and suicide prevention
            available 24/7.
          </p>
        </div>
        <div className="absolute flex flex-col items-end right-4 top-0">
          <div className="hidden lg:block">
            <button className="flex items-center gap-x-[15px] px-[16px] py-[14.05px] bg-[#901C01] rounded-[10px] font-[600] transition-all duration-300 hover:bg-[#7c220e] uppercase ff-overpass text-[#FFFFFF] text-[16px] leading-[20px] ">
              <Heart stroke="#FFFFFF" />
              Zakat
            </button>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-y-[23px] mt-[23px] ">
            {(data?.buttonCards?.length > 0 ? data?.buttonCards : myData)?.map(
              (item, index) => (
                <div key={index}>
                  <Button data={item} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-[-1px] right-0 z-50">
        <Image
          src="/images/wave.svg"
          width={0}
          height={0}
          alt="wave image"
          className="w-full"
        />
      </div>
    </section>
  );
};
