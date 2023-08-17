import BookOpen from "@/common/icons/book-open";
import React from "react";
import EducationCards from "./education-cards";


const EducationCommunity = ({ data }) => {
  return (
    <section>
      <div className="text-[32px] sm:text-[36px] md:text-[40px] leading-[37px] sm:leading-[44px] md:leading-[47px] font-[400] ff-convergence text-[#1D121C] inline-flex gap-x-[18px] items-center">
        <BookOpen height="28" width="36" /> Education & Community
      </div>
      <div className="px-[32px] pb-[32px] bg-[#ffff] rounded-[12px] shadow mt-[25px]">
        {data?.map((item, index) => {
          return (
            <div className="pt-[32px]" key={index}>
              <h3 className="text-[20px] leading-[28px] font-[400] ff-convergence text-[#111827]">{item.title}</h3>
              <div>
                <EducationCards index={index} myLength={data.length} data={item} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationCommunity;
