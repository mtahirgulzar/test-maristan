"use client";
import AboutHeroSvg from "@/common/icons/abouthero";
import ChevronRight from "@/common/icons/chevron-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart } from "@/common/icons/heart";
import Calender from "@/common/icons/calender";
import { Clipboard } from "@/common/icons/clipboard";
import BookOpen from "@/common/icons/book-open";
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

const CommonHero = ({ data }) => {
  return (
    <section
      className=" relative  w-full h-full pt-[42px] sm:pt-[60px] md:pt-[77px] pb-[199px] sm:pb-[215px] md:pb-[237px] px-4"
      style={{
        background: `url(${
          imageResolver(data?.backgroundImage)?.path
        }) no-repeat  center center/cover`,
      }}
    >
      <div className="relative max-w-[1440px] mx-auto">
        <div className="max-w-[800px] mx-auto ">
          <div className="flex sm:justify-center gap-x-[23px]">
            <div>
              <Link href={"/"}>
                <span className="inline-flex gap-x-[25px] items-center">
                  <AboutHeroSvg />
                  <ChevronRight />
                </span>
              </Link>
            </div>
            <Link href={`${data?.listLinks[0]?.link}`}>
              <span className="text-[14px] leading-[16.42px] uppercase text-[#ffff] ff-convergence inline-flex gap-x-[23px] items-center">
                {data?.listLinks[0]?.name} <ChevronRight />
              </span>
            </Link>
            <Link href={`${data?.listLinks[1]?.link}`}>
              <span className="text-[14px] leading-[16.42px] uppercase text-[#ffff] ff-convergence">
                {data?.listLinks[1]?.name}
              </span>
            </Link>
          </div>
          <h1 className="mt-[22px] sm:text-center text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[44px] sm:leading-[50px] md:leading-[68.03px] font-[400] tracking-[-0.01em] text-[#ffff] ff-convergence">
            {data?.heading}
          </h1>
          <p className="sm:text-center min-h-[200px] max-w-[653px] mx-auto mt-[20px] text-[#ffff] ff-overpass">
            {data?.description}
          </p>
        </div>
        <div className="absolute flex flex-col items-end right-0 top-0">
          <div className="hidden lg:block">
            <button className="flex items-center gap-x-[15px] px-[16px] py-[14.05px] bg-[#901C01] rounded-[10px] font-[600] transition-all duration-300 hover:bg-[#7c220e] uppercase ff-overpass text-[#FFFFFF] text-[16px] leading-[20px] ">
              <Heart stroke="#FFFFFF" />
              Zakat
            </button>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-y-[23px] mt-[23px] ">
            {(data?.cardsButton?.length > 0
              ? data?.cardsButton
              : myData
            ) ?.map((item, index) => (
              <div key={index}>
                <Button data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-[-1px] right-0 z-0">
        <Image
          src={imageResolver(data?.img)?.path}
          loader={() => imageResolver(data?.img)?.path}
          alt={data?.img?.data?.attributes?.alternativeText}
          width={0}
          height={0}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default CommonHero;
