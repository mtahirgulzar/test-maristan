"use client";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import React from "react";

export const MMHIUCBerkeley = ({ data }) => {
  return (
    <section className="cus-background py-[75px] relative">
      <div className="max-w-[1440px] mx-auto px-4 grid md:grid-cols-2 items-center gap-x-[40px] lg:gap-x-[75px]">
        <div>
          <h4 className="text-[#901C01] text-[14px] leading-[16px] font-[400] ff-convergence uppercase ">
            {data?.tagline}
          </h4>
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[56px] ff-convergence text-[#2C2C2C] mt-[8px]">
            {data?.title}
          </h2>
          <p className="text-[#000000] ff-overpass mt-[12px]">
            {data?.description}
          </p>
          <div className="lg:flex gap-x-[12px] mt-[40px]">
            <div className="bg-[#901C01] hover:bg-[#79210d] rounded-[8px] transition-all duration-300">
              <button className="py-[16px] px-[29px] font-[600] ff-overpass uppercase text-[#ffff]">
                {data?.cta && data?.cta[0]?.name}
              </button>
            </div>
            <div className="border-[1px] opacity-[0.8] border-[#901C01] rounded-[8px] mt-[12px] lg:mt-0">
              <button className="py-[16px] px-[30px] font-[600] ff-overpass uppercase text-[#901C01]">
                {data?.cta && data?.cta[1]?.name}
              </button>
            </div>
          </div>
        </div>
        <div className="z-10 mt-[40px] ">
          <Image
            src={imageResolver(data?.img)?.path}
            loader={()=> imageResolver(data?.img)?.path}
            width={607}
            height={0}
            className="object-contain w-full h-[173px] sm:h-[308px]"
            alt={data?.img?.data?.attributes?.alternativeText}
          />
        </div>
      </div>
      <div>
        <Image
          className="hidden xl:absolute right-0 top-0 z-0"
          src={"/images/Layer19.png"}
          height={761}
          width={762}
          alt="Layer19"
        />
      </div>
      <div className="hidden xl:block">
        <Image
          src="/images/about-us/Vector1.png"
          width={205}
          height={112}
          alt="Vector1"
          className="absolute top-[130px] left-[-145px]"
        />
      </div>
    </section>
  );
};
