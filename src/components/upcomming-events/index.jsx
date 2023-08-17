import React from "react";
import Cards from "./cards";
import { HeadingBar } from "@/common/ui/heading-bar";

const UpcomingEvents = ({ data }) => {
  return (
    <>
      {data ? (
        <section className="max-w-[1440px] mx-auto px-4 mt-[75px] sm:mb-[75px] mb-[32px]">
          <div className="">
            <div className="flex flex-col items-center  ">
              <HeadingBar data={data?.heading} />
            </div>
            <Cards btn={data?.cta} data={data?.card}/>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default UpcomingEvents;
