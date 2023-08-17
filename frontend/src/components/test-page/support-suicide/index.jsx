'use client'
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import React from "react";

export const SupportSuicide = ({data}) => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 grid md:grid-cols-2 pt-[75px] md:my-[75px] gap-x-[75px] items-center">
        <div className="h-[571px] relative">
            <Image src={imageResolver(data?.img)?.path} loader={()=> imageResolver(data?.img)?.path} className="object-cover" layout="fill"  alt={data?.img?.data?.attributes?.alternativeText}/>
        </div>
        <div>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] leading-[37px] sm:leading-[44px] lg:leading-[47px] text-[#2C2C2C] ff-convergence"> {data?.title}</h2>
          <p className="text-[#3B3731] ff-overpass leading-[20px] opacity-[0.8] mt-[24px]">
         {data?.description}
          </p>
          <div className="cus-background p-[24px] border-l-[2px] border-[#901C01] mt-[24px]">
            <p className="text-[#3B3731] ff-overpass leading-[20px] opacity-[0.8] italic">
           {data?.subline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
