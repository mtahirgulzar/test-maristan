import React from "react";
import { Zigzag } from "@/common/icons/zigzag.svg";
import Cards from "./cards";
import { HeadingBar } from "@/common/ui/heading-bar";

const EmpoweringMinds = ({ data }) => {
  return (
    <>
    
      {data ? (
        <section
          className="bg-cover bg-no-repeat"
          style={
            {
              // backgroundImage: 'url("/images/minds.png" )',
            }
          }
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:mt-[75px] sm:mb-[75px] mb-[32px] ">
            <div className="flex flex-col items-center  ">
              <HeadingBar data={data?.heading} />
            </div>

            <Cards data={data?.cards} />
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default EmpoweringMinds;
