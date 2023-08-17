'use client'
import React from "react";
import Image from "next/image";
import { FaqCards } from "./faq-cards";
import { imageResolver } from "@/utils/image-resolver";

export const Faq = ({ data }) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-4 my-[75px]">
        <div>
          <h2 className="text-center text-[40px] leading-[47px] text-[#2C2C2C] ff-convergence ">
            {data?.title}
          </h2>
          <div className="w-[72px] h-[24px] mx-auto mt-[12px]">
            <Image
              src={imageResolver(data?.img)?.path}
              loader={()=> imageResolver(data?.img)?.path}
              width={72}
              height={24}
              alt={data?.img?.data?.attributes?.alternativeText}
            />
          </div>
        </div>
        <div className="pt-[40px]">
          {data?.cards?.map((item, index) => (
            <div
              key={index}
              className="bg-[#ffff] border-[1px] border-[#E5E7EB] rounded-[8px] faq-card-shadow px-[38px] py-[35px] my-[16px]"
            >
              <FaqCards data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
