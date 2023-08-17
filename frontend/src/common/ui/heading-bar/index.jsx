import React from "react";
import Image from "next/image";

export const HeadingBar = ({ data }) => {

  return (
    <section className="max-w-[600px] mx-auto">
      <div className="text-center ff-convergence">
        <p className="text-[14] leading-[16px] font-[400] uppercase text-[#901C01] ">
          {data?.tagline}
        </p>
        <h2 className="text-[32px] sm:text-[34px] md:text-[37px] lg:text-[40px] leading-[37px] sm:leading-[43px] md:leading-[47px] font-[400] text-[#1D121C] mt-[12px]">
          {data?.title || data?.headline}
        </h2>
        <div className="w-[72px] h-[24px] mx-auto mt-[12px]">
          <Image src="/images/about-us/Vector.png" width={72} height={24} alt="vector" />
        </div>
      </div>
    </section>
  );
};
