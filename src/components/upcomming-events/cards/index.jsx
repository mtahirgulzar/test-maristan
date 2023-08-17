import React from "react";
import { Calender } from "@/common/icons/calender.svg";
import { Location } from "@/common/icons/location.svg";
import { Time } from "@/common/icons/time.svg";
import Link from "next/link";
import Image from "next/image";

const Cards = ({ data, btn }) => {
  return (
    <section className="max-w-[1440px] mx-auto ">
      <div className="grid sm:grid-cols-2 gap-x-[32px] gap-y-[32px] sm:gap-y-[42px] my-[24px] sm:my-[50px] md:my-[75px]">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[629px] p-[24px] rounded-[12px] shadow"
            >
              <div className="max-w-full lg:flex lg:gap-x-[24px]">
                <div>
                  <Image
                    src="/images/event.png"
                    alt="event"
                    loading="lazy"
                    className="w-full h-[204px] rounded-lg object-cover mb-[22px] lg:mb-0"
                    width={279}
                    height={204}
                  ></Image>
                </div>
                <div className="flex flex-col justify-between items-start leading-normal">
                  <div className="gap-x-[12.5px] flex">
                    <Calender fill="#BCA692" />
                    <p className="text-[16px] font-[400] leading-[24px] text-[#6B7280] ff-overpass">
                      {item.date}
                    </p>
                  </div>
                  <div className="mb-[12px] mt-[18px]">
                    <p className="text-[#111827] font-[400] text-[20px] leading-[28px] ff-convergence">
                      {item?.title}
                    </p>
                    <p className="text-[#6B7280] text-[16px] leading-[24px] font-[400] mt-[12px] mb-[22px] ff-overpass">
                      {item.tagline}
                    </p>

                    <div className="flex gap-[12px] ff-overpass">
                      <div className="flex items-center justify-center gap-[13.5px]">
                        <Location fill="#BCA692"/>
                        <p className="font-[400] text-[16px] leading-[24px] text-[#6B7280]">
                          {item.location}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-[13.5px]">
                        <Time fill="#BCA692"/>
                        <p className="font-[400] text-[16px] leading-[24px] text-[#6B7280]">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href={"#"} legacyBehavior>
                    <span className="font-[600] text-[16px] leading-[20px] uppercase text-[#901C01] cursor-pointer ff-overpass">
                      <a href="#">Register Here</a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="py-[14px] px-[32px] font-[600] w-full sm:w-auto text-[16px] leading-[20px] border-[1px] border-[#901C01] rounded-[8px] text-[#901C01] uppercase ff-overpass text-center flex justify-center items-center hover:bg-[#F9FAFB] duration-200 transition-all ">
         {btn?.name}
        </button>
      </div>
    </section>
  );
};

export default Cards;
