"use client";
import Link from "next/link";
import React from "react";

const EducationCards = ({ data, myLength, index }) => {
  return (
    <section>
      <ul className="mt-[12px]">
        {data?.LinksCards?.map((item, index) => (
          <>
            <li
              key={index}
              className="list-style ml-5 font-[700] text-[#2E2B26] ff-overpass"
            >
              {item.title}
            </li>
            <Link href={`${item?.link}`}>
              {" "}
              <p className="underline font-[400] text-[#2E2B26] ff-overpass">
                {item.tagline}
              </p>
            </Link>
          </>
        ))}
      </ul>
      <div
        className={`${
          myLength - 1 === index && "hidden"
        } h-[2px] bg-[#EAE9E9]  mt-[32px]`}
      />
    </section>
  );
};

export default EducationCards;
