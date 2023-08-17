import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import React from "react";

const TeamCards = ({ data }) => {
  return (
    <section>
      <Image
        src={imageResolver(data?.image)?.path}
        width={384}
        height={235}
        loader={()=> imageResolver(data?.image)?.path}
        alt={data?.image?.data?.attributes?.alternativeText}
        className="rounded-[8px] h-[235px] w-full object-cover"
      />

      <h3 className="text-[#901C01] text-[14px] leading-[16px] uppercase font-[400] ff-convergence pt-[32px]">
        {data?.tagline}
      </h3>
      <h2 className="text-[#2E2B26] text-[20px] leading-[28px] font-[400] ff-convergence pt-[4px] tracking-[0.014em]">
        {data?.title}
      </h2>
      <p className="pt-[16px] text-[#3B3731] text-[16px] leading-[20px] ff-overpass]">
        {data?.description}
      </p>
    </section>
  );
};

export default TeamCards;
