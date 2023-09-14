"use client";
import { Location } from "@/common/icons/location.svg";
import { imageResolver } from "@/utils/image-resolver";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const JoinOurTeam = ({ data }) => {
  return (
    <section className="py-[75px]  relative">
      <div className="max-w-[1440px] mx-auto px-4 md:flex justify-between gap-[75px] items-center">
        <div className="w-full md:w-[40%]">
          <h4 className="text-[#901C01] text-[14px] leading-[16px] font-[400] ff-convergence uppercase">
            {data?.heading?.tagline}
          </h4>
          <h2 className="text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] text-[#2C2C2C] leading-[37px] sm:leading-[44px] md:leading-[47px] font-[400] ff-convergence pt-[8px]">
            {data?.heading?.title}
          </h2>
          <p className="text-[16px] leading-[20px] text-[#3B3731] font-[400] ff-overpass opacity-[0.8] pt-[24px]">
            {data?.heading?.description}
          </p>
        </div>
        <div className="w-full mt-[38px] md:mt-0 md:w-[60%] bg-[#F7F3F0] rounded-[16px] p-[32px] relative">
          <div>
            <Image
              src={imageResolver(data?.img)?.path}
              loader={() => imageResolver(data?.img)?.path}
              width={120}
              height={75}
              alt={data?.img?.data?.attributes?.alternativeText}
              className="absolute top-[-50px] left-[275px] hidden lg:block"
            />
          </div>
          {data?.card?.map((item, index) => {
            return (
              <div key={index}>
                <div className="xl:flex justify-between items-center">
                  <h2 className="text-[#524940] text-[24px] leading-[28px] font-[400] ff-convergence">
                    {item.title}
                  </h2>{" "}
                  <div className="pt-[13px] xl:pt-0 text-[#901C01] inline-flex gap-x-[11px] items-center ff-overpass">
                    <Location fill="#901C01" /> {item.location}
                  </div>
                </div>
                <p className="text-[#3B3731] ff-overpass opacity-[0.8] pt-[24px]">
                  {item.description}
                </p>
                <div className="mt-[24px] border-[1px] border-[#901C01] rounded-[8px] transition-all duration-300 hover:bg-[#e8e8e8] inline-flex">
                  <Link href="/contact-us">
                    <button className="px-[30px] py-[16px] text-[#901C01] leading-[20px] font-[600] ff-overpass uppercase">
                      {data?.ctaName || "Apply now"}
                    </button>
                  </Link>
                </div>

              
                <div
                  className={`${
                    index == 1 && "hidden"
                  } bg-[#E3DFDC] h-[2px] w-full my-[24px]`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src="/images/about-us/Vector1.png"
        width={205}
        height={112}
        alt="vector 1"
        className="absolute top-[-20px] left-[-145px] hidden md:block"
      />
    </section>
  );
};
