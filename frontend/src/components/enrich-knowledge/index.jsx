"use client";
import React from "react";
import Link from "next/link";
import { Arrow } from "@/common/icons/arrow.svg";
import dynamic from "next/dynamic";
import { HeadingBar } from "@/common/ui/heading-bar";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const EnrichKnowledge = ({ data }) => {
  return (
    <>
      {data ? (
        <section className="max-w-[1440px] mx-auto px-4 my-[75px]">
          <div className="flex flex-col items-center  ">
            <HeadingBar data={data?.heading} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[24px] sm:mt-[75px]">
            {data?.cards?.map((item, index) => (
              <div
                key={index}
                className="bg-[#EFE8E2] duration-300 transition-all rounded-[8px] pb-[24px] px-[16px] pt-[16px] shadow-lg border-b-[1px] hover:shadow-2xl hover:cursor-pointer"
              >
                <Link href={"/"}>
                  <div className="rounded-[12px]">
                    <div className=" flex justify-center items-center">
                      <ReactPlayer
                        url={
                          item?.url
                            ? item.url
                            : "https://www.youtube.com/embed/54H6NGqNY2w?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdanvilleorthodontics.com&widgetid=17"
                        }
                        width="100%"
                        height="240px"
                      />
                    </div>
                    <div className="mt-[24px]">
                      <p className="font-[400] text-[14px] leading-[16px] uppercase text-[#2C2C2C] mb-[10px] ff-convergence">
                        {item.title}
                      </p>
                      <h5 className="text-[#2E2B26] ff-convergence text-[24px] leading-[28px] sm:[29px] md:leading-[30px] lg:leading-[32px] font-[400] max-w-[320px]">
                        {item?.tagline}
                      </h5>
                    </div>

                    <button className="uppercase flex gap-x-[15px] justify-center items-center hover:bg-[#F9FAFB] duration-500 transition-all text-[#802A22] font-[700] text-[14px] leading-[20px] mt-[32px] ff-overpass">
                      {item?.ctaName}
                      <Arrow />
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link href={`${data?.goToEducation?.link}`}>
            <div className="flex justify-center items-center mt-[75px] ">
              <button className="w-full sm:w-auto py-[14px] px-[32px] font-[600]  border-[1px] border-[#802A22] rounded-[8px] hover:bg-[#F9FAFB] duration-200 transition-all">
                <div className="text-[16px] leading-[20px] text-[#802A22] uppercase ff-overpass text-center flex justify-center items-center gap-x-[10px]">
                  {data?.goToEducation?.name} <Arrow />
                </div>
              </button>
            </div>
          </Link>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default EnrichKnowledge;
