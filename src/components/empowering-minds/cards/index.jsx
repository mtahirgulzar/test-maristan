"use client";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import React from "react";

const Cards = ({ data }) => {
  return (
    <section className="mt-[60px] grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-[20px] md:gap-[30px] lg:gap-[40px]">
      {data?.map((item, index) => {
        return (
          <div key={index} className=" mb-[40px] sm:mt-0">
            <div className=" pb-[24px] flex justify-center sm:justify-start">
              <Image
                src={imageResolver(item.Image).path}
                loader={() => imageResolver(item.Image).path}
                alt={item?.Image?.data?.attributes?.alternativeText}
                width={60}
                height={60}
                loading="lazy"
              />
            </div>
            <h2 className="text-[#2E2B26] mt-[24.39px] mb-[8px] text-[20px] leading-[28px] font-[400] tracking-[-0.014em] text-center sm:text-start ff-convergence">
              {item.title}
            </h2>
            <p className="text-[#2E2B26] text-[16px] leading-[24px] text-center sm:text-start ff-overpass font-[400] min-h-[120px]">
              {item.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
