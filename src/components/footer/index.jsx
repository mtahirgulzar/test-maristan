"use client";
import { Location } from "@/common/icons/location.svg";
import { Mail } from "@/common/icons/mail.svg";
import React from "react";
import Link from "next/link";
import { Heart } from "@/common/icons/heart";
import { Facebook } from "@/common/icons/facebook.svg";
import { Instagram } from "@/common/icons/instagram.svg";
import { Twitter } from "@/common/icons/twitter.svg";
import { Youtube } from "@/common/icons/youtube.svg";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

const Footer = ({ data }) => {
  console.log(data?.FooterItems)
  const socialLinks = [
        { icon: <Instagram fill="#BCA692" />, Link: "/" },
        { icon: <Facebook fill="#BCA692" />, Link: "/" },
        { icon: <Twitter fill="#BCA692" />, Link: "/" },
        { icon: <Youtube fill="#BCA692" />, Link: "/" },
      ]

  return (
    <section className={` z-10 "bg-[#ffff] `}>
      <div className="max-w-[1440px]  mx-auto px-4 py-[75px] sm:py-[80px] ">
        <div className=" grid sm:grid-cols-2 gap-x-[29px] sm:mb-[39px]">
          <div className="mt-[24px] sm:mb-0 order-last sm:order-first">
            <Image
              src={imageResolver(data?.Footer?.logo)?.path}
              loader={() => imageResolver(data?.Footer?.logo)?.path}
              alt={data?.Footer?.logo?.data?.attributes?.alternativeText}
              loading="lazy"
              className="mx-auto sm:mx-0"
              width={65}
              height={100}
            />
            <p className="ff-overpass py-[22px] text-[16px] leading-[28px] text-[#4B4B4B] max-w-[355px]">
              {data?.Footer?.description}{" "}
              <span className="font-[700]">{data?.Footer?.tagline}</span>
            </p>
            <Link href={`mailto:${data?.Footer?.email}`}>
              <div className="flex items-center gap-x-[10px] mb-[10px] max-w-[357px]">
                <Mail fill="#BCA692" />
                <span className="ff-overpass text-[#4B4B4B] font-[400] text-[16px] leading-[24px]">
                  {data?.Footer?.email}
                </span>
              </div>
            </Link>
            <Link href={`${data?.Footer?.locationLink}`}>
              <div className="flex items-center gap-x-[10px]  max-w-[357px]">
                <Location fill="#BCA692" />
                <span className="ff-overpass text-[#4B4B4B] font-[400] text-[16px] leading-[24px]">
                  {data?.Footer?.locationName}
                </span>
              </div>
            </Link>
          </div>
          <div className="">
            <div className=" ">
              <div className="flex flex-wrap justify-between gap-x-[30px] ">
                {data?.FooterItems?.map((item, idx) => {
                  console.log(item?.items)
                  return (
                    <div key={idx}>
                      <h6 className="mb-[26px] text-[18px] ff-convergence leading-[21.11px] font-[400] text-[#2C2C2C]">
                        {item?.title}
                      </h6>
                      <ul className="">
                        {item?.items?.map((item, idx) => (
                        
                          <Link key={idx} href={`/404`}>
                            <li className="hover:text-[#111827] mb-[26px] ff-overpass duration-500 transition-all font-[400] text-[16px]  leading-[20.26px] text-[#4B4B4B] capitalize max-w-max cursor-pointer">
                              {item?.name}
                            </li>
                          </Link>
                        ))}
                      </ul>

                      <div className={`flex flex-col ${data?.FooterItems.length-1 === idx ? "" : "hidden" }`}>
                        <div className=" hidden sm:block">
                          <div className="flex gap-x-[7px]">
                            {socialLinks?.map((item, index) => (
                              <div
                                key={index}
                                className="w-[40px] h-[40px] flex items-center justify-center bg-[#EFE8E2] hover:bg-[#e0dcd9] transition-all duration-300  rounded-full sm:mb-[24px] cursor-pointer"
                              >
                                <Link href={""} >
                                  {item.icon}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          {data?.Footer?.donateBtnName != null ? (
                            <div className=" shadow-md inline-flex rounded-[8px] border border-1px hover:bg-opacity-[0.3] bg-[#901C01] border-[#802A22] ff-overpass  duration-200 transition-all ">
                              <button className="flex items-center py-[14px] px-[32px] justify-center font-[600] text-[16px] text-[#ffff]  leading-[20px] gap-x-[8px] uppercase ">
                                <Heart stroke="#ffff" />
                                <p className="ff-overpass">{data?.Footer?.donateBtnName}</p>
                              </button>
                            </div>
                           ) : (
                            ""
                          )} 
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center box justify-center bg-red-900 p-[16px] rounded-full mb-[24px]">
              <Heart stroke="#FFFFFF" fill="#FFFFFF" />
            </div>
            <p className="font-[600] text-[16px] leading-[21.79px] text-[#999999]">
              {" "}
              2023 Maristan, org. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
