"use client";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Button = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`flex justify-end gap-x-[10px] items-center  px-[19px] ${
          open && "max-w-[230px] bg-[#901C01] dropdown"
        } py-[5px] bg-[#901C01] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#7c220e] h-[48px]`}
      >
        <div className="my-[9px]">
          {data?.logo ? (
            <Image
              src={imageResolver(data?.logo)?.path}
              alt={data?.logo?.data?.attributes?.alternativeText}
              loader={() => imageResolver(data?.logo)?.path}
              width={20}
              height={20}
            />
          ) : (
            data?.svg
          )}
        </div>
        {open && (
          <Link href={`${data?.link}`}>
            <p className=" transition delay-150 duration-700 ease-in-out uppercase ff-overpass text-[#FFFFFF] text-[14px] leading-[18px]">
              {data?.name}
            </p>
          </Link>
        )}
      </button>
    </>
  );
};
