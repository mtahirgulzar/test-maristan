import { HeadingBar } from "@/common/ui/heading-bar";
import React from "react";


export const LatestResearch = ({data}) => {
  return (
    <section className="px-4">
      <div>
        <HeadingBar data={data?.HeadingBar} />
      </div>
      <div className="max-w-[840px] mx-auto p-[32px] shadow rounded-[12px] bg-[#ffff] mt-[50px] sm:mt-[50px] md:mt-[60px] lg:mt-[75px]">
        <h3 className="text-[20px] leading-[28px] text-[#111827] font-[400] ff-convergence">Suicide Prevention/Intervention</h3>
        <ul className="mt-[12px] pl-4">
          {data?.ResearchData?.map((item, index) => (
            <>
              <li
                key={index}
                className="list-style font-[700] text-[#2E2B26] ff-overpass"
              >
                {item.title}
              </li>
              <p className="underline font-[400] text-[#2E2B26] ff-overpass cursor-pointer">
                {item.tagline}
              </p>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};
