'use client'
import React from "react";
import { User } from "@/common/icons/users.svg";
import { Heart } from "@/common/icons/heart";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

const OurMission = ({ data, home}) => {
  
  return (
    <>
      {data ? (
        <section className={`px-4 ${home && 'pb-[75px]'} `}>
          <div
            className="bg-cover bg-no-repeat rounded-[32px]  max-w-[1408px] mx-auto"
            style={{
              backgroundImage: 'url("/images/3.png")',
            }}
          >
            <div className="px-4">
              <div className="lg:p-[75px] py-[40px] lg:py-[75px] grid lg:grid-cols-2 lg:gap-x-[75px]">
                <div>
                  <div>
                    <div>
                      <div>
                        <p className="text-[#FFFFFF] font-[400] text-[14px] leading-[16px] uppercase ff-convergence">
                          {data?.heading?.tagline}
                        </p>
                        <h1 className="text-[#FFFFFF] mb-[20px] mt-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] leading-[34px] sm:leading-[36px] md:leading-[38px] lg:leading-[43px] tracking-[-0.01em] ff-convergence">
                          {data?.heading?.title}
                        </h1>
                        <p className="max-w-[533px] font-[400] text-[16px] leading-[24px] text-[#FFFFFF] mb-[20px] ff-overpass">
                          {data?.description}
                        </p>
                      </div>
                      <div className="flex gap-[20px] mb-[40px] mt-[20px]">
                        {data?.percent?.map((item, index) => {
                          return (
                            <div key={index} className="">
                              <div className=" ">
                                <p className="text-[54px] font-[400] leading-[60px] tracking-[-0.02em] mb-[8px] text-[#F3F7F4] ff-convergence">
                                  {item?.number}
                                </p>
                                <h5 className="text-[16px] text-[#F3F7F4] font-[400] leading-[24px] ff-overpass">
                                  {item?.tagline}
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-x-[10px] gap-y-[10px] lg:gap-y-0 ff-overpass">
                        <button className="py-[16px] px-[24px] rounded-[8px] border border-1px bg-[#FFFFFF] border-[#FFFFFF] hover:bg-[#F9FAFB] duration-300 transition-all">
                          <div className="w-full flex items-center gap-[16px] text-[#2C2C2C]  font-[600] text-[16px] leading-[20px] uppercase justify-center">
                            <Heart stroke="#2C2C2C" />
                            <p className="">{data?.cta[0]?.name}</p>
                          </div>
                        </button>
                        <button className="py-[16px] px-[24px]  rounded-[8px] border border-1px border-[#FFFFFF]">
                          <div className="flex items-center gap-[16px] text-[#FFFFFF] font-[600] text-[16px] leading-[20px] uppercase justify-center">
                            <User />
                            <p>{data?.cta[1]?.name}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-[24px] lg:mt-0 max-w-[575px] mx-auto">
                  <Image
                    src={imageResolver(data?.image)?.path}
                    loader={() => imageResolver(data?.image)?.path}
                    className="w-full h-auto"
                    alt={data?.image?.data?.attributes?.alternativeText}
                    height={442}
                    width={575}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default OurMission;
