"use client";
import { Calender } from "@/common/icons/calender.svg";
import Image from "next/image";
import React, { useEffect } from "react";
import Modal from "../../modal";
import useModal from "@/components/use-modal";
import dynamic from "next/dynamic";
import { imageResolver } from "@/utils/image-resolver";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const ResourcesCards = ({ data }) => {
  const { isShowing, toggle } = useModal();
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isShowing]);
  return (
    <section className="p-[24px] rounded-[12px] bg-[#ffff] resources-card-shadow">
      <div className="">
        <div className="cursor-pointer" onClick={toggle}>
          <Image
            src={imageResolver(data?.img)?.path}
            loader={() => imageResolver(data?.img)?.path}
            className="w-full object-contain"
            width={360}
            height={204}
            alt={data?.img?.data?.attributes?.alternativeText}
          />{" "}
        </div>
        <Modal isShowing={isShowing} hide={toggle} src={data?.url} />

        <div className=" flex justify-between items-center pt-[26px]">
          <span className="text-[14px] sm:text-[12px] xl:text-[14px] leading-[18px] text-[#2E2B26] font-[400] ff-overpass inline-flex gap-x-[9px] items-center">
            <Calender fill="#BCA692" /> {data?.date}
          </span>
          <div className="py-[2px] px-[12px] bg-[#F3F4F6] rounded-[12px]">
            <p className="text-[14px] sm:text-[12px] xl:text-[14px] leading-[24px] text-[#2E2B26] font-[400] ff-overpass">
              {data?.category}
            </p>
          </div>
        </div>
        <h2 className="pt-[20px] pb-[12px] text-[20px] leading-[28px] font-[400] text-[#111827] ff-convergence min-h-[110px]">
          {data?.title}
        </h2>
        <p className="text-[#2E2B26] ff-overpass min-h-[220px] ">
          {data?.description}
        </p>
      </div>
    </section>
  );
};

export default ResourcesCards;
