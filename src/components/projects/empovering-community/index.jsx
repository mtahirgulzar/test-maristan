'use client'
import React from "react";
import Image from "next/image";
import CommunityCards from "../community-cards/index.jsx";
import { imageResolver } from "@/utils/image-resolver";

const EmpoveringCommunity = ({data, projectData}) => {
  return (
    <section className="bg-[#F7F3F0] relative z-20 mt-[-3px]">
      <div className="max-w-[1440px]  mx-auto px-4">
        <div className="text-center ff-convergence">
          <p className="text-[14] leading-[16px] font-[400] uppercase text-[#901C01] ">
            {data?.tagline}
          </p>
          <h2 className="text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] leading-[37px] sm:leading-[44px] md:leading-[47px] font-[400] text-[#1D121C] mt-[12px] max-w-[588px] mx-auto">
           {data?.title}
          </h2>
          <div className="w-[72px] h-[24px] mx-auto mt-[12px]">
            <Image src={imageResolver(data?.img)?.path}  alt={data?.img?.data?.attributes?.alternativeText} loader={()=> imageResolver(data?.img)?.path} width={72} height={24} />
          </div>
        </div>
        <div className="pt-[40px] sm:pt-[60px] pb-[75px] md:py-[75px] grid sm:grid-cols-2 gap-[24px]">
          {projectData?.data?.map((item, index) => (
            <div key={index} >
              <CommunityCards data={item?.attributes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoveringCommunity;
