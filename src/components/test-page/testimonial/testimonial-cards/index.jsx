"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "@/common/icons/instagram.svg";
import { Youtube } from "@/common/icons/youtube.svg";
import { Facebook } from "@/common/icons/facebook.svg";
import { Twitter } from "@/common/icons/twitter.svg";
import { imageResolver } from "@/utils/image-resolver";

const socialLinks = [
  { icon: <Instagram fill="#BCA692" />, Link: "/" },
  { icon: <Facebook fill="#BCA692" />, Link: "/" },
  { icon: <Twitter fill="#BCA692" />, Link: "/" },
  { icon: <Youtube fill="#BCA692" />, Link: "/" },
];

export const TestimonialCards = ({ data, profileImage }) => {
  return (
    <section className="flex lg:flex-row flex-col lg:justify-between lg:px-[38px] text-center lg:text-start items-center">
      <div className="max-w-[530px]">
        <div className="flex ml-[14px]">
          {profileImage?.slice(0,6)?.map((item, index) => (
            <div key={index} className="h-[40px] w-[40px]  ml-[-14px]">
              <Image
                src={imageResolver(item.profileImage)?.path}
                loader={() => imageResolver(item.profileImage)?.path}
                width={40}
                alt={data?.profileImage?.data?.attributes?.alternativeText}
                height={40}
                className="w-full h-full object-cover rounded-full "
              />
            </div>
          ))}
          {profileImage.length > 6 && (
            <div className="h-[40px] w-[40px] rounded-full bg-[#F7F3F0] ml-[-14px] flex justify-center items-center">
             <p className="text-[#2C2C2C] text-[14px] leading-[16.42px] ff-convergence">+{profileImage.length - 6}</p>
            </div>
          )}
        </div>
        <p className="text-[14px] leading-[16px] text-[#901C01] ff-convergence uppercase mt-[40px]">
          {data?.tagline}
        </p>
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] leading-[37px] sm:leading-[42px] lg:leading-[47px] text-[#2C2C2C] ff-convergence pt-[4px]">
          {data?.title}
        </h2>
        <p className="text-[#3B3731] leading-[20px] opacity-[0.8] ff-overpass mt-[25px] ">
          {data?.description}
        </p>
        <div className="flex items-center gap-x-[7px] mt-[40px]">
          {socialLinks?.map((item, index) => (
            <div
              key={index}
              className="group w-[40px] h-[40px] flex items-center justify-center bg-[#EFE8E2]  rounded-full mb-[24px] cursor-pointer"
            >
              <Link href={""}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block relative h-[400px] w-[530px]">
        <Image
          src={imageResolver(data?.img)?.path}
          loader={() => imageResolver(data?.img)?.path}
          layout="fill"
          className="object-contain "
          alt={data?.img?.data?.attributes?.alternativeText}
        />
      </div>
      <div className="relative h-[400px] w-full block sm:hidden">
        <Image
          src={imageResolver(data?.smImage === null ? data?.img : data?.smImage)?.path}
          loader={() => imageResolver(data?.smImage === null ? data?.img : data?.smImage)?.path}
          alt={data?.img?.data?.attributes?.alternativeText}
          layout="fill"
          className="object-contain "
        />
      </div>
    </section>
  );
};
