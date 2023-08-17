import React from "react";

import ResourcesCards from "./resources-cards";

const Resources = ({ data, itemOffset }) => {

  return (
    <section className=" max-w-[1440px] mx-auto px-4 mt-[24px] sm:mt-[40px] md:mt-[55px] lg:mt-[75px] relative">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px]">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex  ${
                index >= itemOffset && index < itemOffset + 6 ? "" : "hidden"
              }`}
            >
              <ResourcesCards data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Resources;
