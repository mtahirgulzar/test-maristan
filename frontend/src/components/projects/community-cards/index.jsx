  "use client";
  import { Arrow } from "@/common/icons/arrow.svg";
  import { imageResolver } from "@/utils/image-resolver";
  import Image from "next/image";
  import Link from "next/link";
  import React from "react";

  const CommunityCards = ({ data }) => {
    return (
      <div className="bg-[#ffff] rounded-[16px] p-[32px]">
        <div className="bg-[#F7F3F0] rounded-[16px] w-[120px] h-[120px] flex justify-center items-center">
          <Image
            src={imageResolver(data?.img)?.path}
            loader={() => imageResolver(data?.img)?.path}
            width={67}
            height={72}
            alt={data?.img?.data?.attributes?.alternativeText}
          />
        </div>
        <h2 className="text-[#111827]  text-[20px] leading-[23px] sm:leading-[28px] font-[400] ff-convergence mt-[40px]">
          {data?.title}
        </h2>
        <p className="text-[#3B3731] leading-[20px] font-[400] ff-overpass pt-[12px]">
          {data?.description}
        </p>
        <div className="mt-[54px]">
          <Link href={`/projects/${data?.slug}`}>
            <div className="inline-flex items-center gap-x-[10px] leading-[20px] font-[600] ff-overpass text-[#901C01] uppercase">
              Learn more <Arrow />
            </div>
          </Link>
        </div>
      </div>
    );
  };

  export default CommunityCards;
