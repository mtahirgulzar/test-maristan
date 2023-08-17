'use client'
import { Arrow } from "@/common/icons/arrow.svg";
import Image from "next/image";
import React from "react";
import { imageResolver } from "@/utils/image-resolver";

export const ResearchCards = ({ data }) => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-x-[75px] my-[40px] sm:my-[50px] md:my-[60px] lg:my-[75px] items-center">
        <div className={`${data?.order === '1' ? "md:order-1" : "md:order-2"}`}>
          <h2 className="text-[#111827] text-[24px] leading-[32px] font-[400] ff-convergence">
            {data?.title}
          </h2>
          <p className="mt-[12px] text-[#3B3731] leading-[20px] ff-overpass opacity-[0.8]">
            {data?.description}
          </p>
          <div className="text-[#901C01] cursor-pointer text-[16px] leading-[20px] font-[600] ff-overpass uppercase pt-[46px] inline-flex items-center gap-x-[10px]">
            {" "}
            {data?.cta?.name}
            <Arrow />
          </div>
        </div>
        <div
          className={`${
            data?.order === '2' ? "md:order-1" : "md:order-2"
          } mt-[54px] md:mt-0 `}
        >
          <Image loader={()=> imageResolver(data?.img)?.path} src={imageResolver(data?.img)?.path} width={0} className="w-full h-full" height={0} alt={data?.img?.data?.attributes?.alternativeText}/>
        </div>
      </div>
    </section>
  );
};
