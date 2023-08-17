"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { imageResolver } from "@/utils/image-resolver";

const GeneralClinic = ({ data }) => {
  return (
    <section className="px-[24px] pt-[24px] sm:pt-[28px] sm:px-[28px] lg:pt-[32px] lg:px-[32px] bg-[#ffff] rounded-[12px] shadow">
      <div>
        <h2 className="text-[#111827] text-[24px] sm:text-[28px] md:text-[32px] leading-[28px] sm:leading-[34px] md:leading-[38px] font-[400] ff-convergence">
          {data?.EducationGeneralLinks?.title}
        </h2>
        <ul className="mt-[12px]">
          {data?.EducationGeneralLinks?.links?.map((item, index) => {
            return (
              <Link key={index} href={`${data?.link}`}>
                <li className="list-style ml-5">
                  <p className="underline font-[400] text-[#2E2B26] ff-overpass">
                    {item.name}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className={` bg-[#EAE9E9] h-[2px] mt-[40px] `} />
        <div className="grid md:grid-cols-2 ">
          {data?.EducationCityNames?.map((item, index) => {
            return (
              <div
                key={index}
                className={`border-b-[2px] border-[#EAE9E9]`}
              >
                <div className="py-[40px]">
                  {item?.countryName ? (
                    <div className="flex  gap-3 items-center">
                      <Image
                        src={imageResolver(item?.logo)?.path}
                        loader={() => imageResolver(item?.logo)?.path}
                        height={24}
                        width={24}
                        alt={data?.logo?.data?.attributes?.alternativeText}
                      />
                      <p className="text-[#111827] text-[24px] sm:text-[28px] md:text-[32px] leading-[28px] sm:leading-[34px] md:leading-[38px] font-[400] ff-convergence">
                        {item?.countryName}
                      </p>
                    </div>
                  ) : (
                    <div className="h-[38px]" />
                  )}
                  <div>
                    <h4 className="mt-[12px] text-[20px] leading-[28px] font-[400] ff-convergence text-[#111827]">
                      {item?.cityName}
                    </h4>
                    <ul>
                      {item?.educationCityLinks?.map((item, index) => {
                        return (
                          <Link key={index} href={`${item?.link}`}>
                            <li className="list-style ml-5">
                              <p className="underline font-[400] text-[#2E2B26] ff-overpass">
                                {item.name}
                              </p>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mt-[12px]">
                    <h4 className="mt-[12px] text-[20px] leading-[28px] font-[400] ff-convergence text-[#111827]">
                      {item?.cityName2}
                    </h4>
                    <ul>
                      {item?.educationCityLinks2?.map((item, index) => {
                        return (
                          <Link key={index} href={`${item?.link}`}>
                            <li className="list-style ml-5">
                              <p className="underline font-[400] text-[#2E2B26] ff-overpass">
                                {item.name}
                              </p>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default GeneralClinic;
