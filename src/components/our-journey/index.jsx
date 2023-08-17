"use client";
import React from "react";
import { Tick } from "@/common/icons/tick.svg";
import Link from "next/link";
import { Heart } from "@/common/icons/heart";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";

const OurJourney = ({ order, data }) => {
  return (
    <>
      {data ? (
        <section
          className=" py-[75px] my-[75px] bg-no-repeat bg-cover "
          style={{
            backgroundImage: 'url("/images/empowering-minds.png" )',
          }}
        >
          <div className=" grid lg:grid-cols-2 lg:gap-x-[75px] max-w-[1440px] mx-auto px-4">
            <div className=" mb-[40px] lg:mb-0 max-w-[666px] mx-auto">
              <Image
                src={imageResolver(data?.image)?.path}
                loader={() => imageResolver(data?.image)?.path}
                width={585}
                height={570}
                loading="lazy"
                className="w-full "
                alt={data?.image?.data?.attributes?.alternativeText}
              />
            </div>
            <div>
              <div>
                <div>
                  {" "}
                  <p className="text-[#2C2C2C] font-[400] text-[14px] leading-[16px] uppercase ff-convergence text-center sm:text-start">
                    {data?.heading?.tagline}
                  </p>
                  <h2 className=" max-w-[698px] mb-[20px] mt-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[37px] sm:leading-[56px] text-[#2C2C2C] ff-convergence text-center sm:text-start">
                    {data?.heading?.title}
                  </h2>
                </div>
                <p className="max-w-[607px] font-[400] text-[16px] leading-[24px] ff-overpass">
                  Change lives and inspire healing by helping us launch{" "}
                  <Link
                    className="underline text-blue-500 underline-offset-2"
                    href={"/"}
                  >
                    Maristan&apos;s
                  </Link>{" "}
                  mental health clinic! Every dollar you give will create real
                  change!
                </p>
              </div>
              <div className="pt-[20px] pb-[40px]">
                <h3 className="mb-[12px] text-[18px] leading-[24px] text-[#2C2C2C] ff-convergence">
                  {data?.valueTitle}
                </h3>
                <div className="grid sm:grid-cols-3">
                  {data?.values?.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-x-[13.15px] mb-[4px] sm:mb-0"
                      >
                        <Tick />
                        <h2 className="text-[16px] leading-[20px] text-[#2C2C2C] ff-overpass">
                          {value.value}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="font-[500] text-[16px] leading-[26px] text-[#12141D] italic ff-overpass">
                {data?.quote}
              </p>
              <div className="flex items-center justify-start w-full my-[40px] space-x-[14px]">
                <div className="flex items-end h-[41px] rounded-full w-[42px]">
                  <Image
                    src={imageResolver(data?.user?.image).path}
                    alt={data?.user?.image?.data?.attributes?.alternativeText}
                    loading="lazy"
                    loader={() => imageResolver(data?.user?.image).path}
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col items-start justify-start pr-1 ff-overpass">
                  <p className="text-[15px] font-[600] leading-[25px] text-[#12141D]">
                    {data?.user?.name}
                  </p>
                  <p className="text-[14px] font-[600] leading-[16px] sm:leading-[24px] text-[#2E2B26]">
                    {data?.user?.position}
                  </p>
                </div>
              </div>
              {order ? (
                <button className="w-full sm:w-auto shadow-md py-[14px] px-[32px] rounded-[10px] border border-1px bg-[#802A22] ff-overpass hover:bg-[#a1261b] duration-200 transition-all ">
                  <div className="flex items-center justify-center font-[600] text-[16px] text-[#FFFFFF] leading-[20px] gap-x-[13px] uppercase ">
                    <Heart stroke="white" />
                    <p>Donate</p>
                  </div>
                </button>
              ) : (
                <Link href={`${data?.learnMore?.link}`}>
                  <button className="w-full sm:w-auto shadow-md py-[14px]  px-[32px] font-[600] text-[16px] text-[#901C01] leading-[20px] uppercase rounded-[10px] border border-1px border-[#901C01] ff-overpass hover:bg-[#e5dad1] duration-300 transition-all">
                    <p className="text-center"> {data?.learnMore?.name}</p>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default OurJourney;
