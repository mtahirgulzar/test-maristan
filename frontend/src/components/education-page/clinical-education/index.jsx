import React from "react";
import GeneralClinic from "./general-clinic";
import EducationCommunity from "./education-community";

const ClinicalEducation = ({data, clinicalData}) => {
  return (
    <section className=" max-w-[1440px] mx-auto px-4 mt-[24px] sm:mt-[40px] md:mt-[55px] lg:mt-[75px] pb-[75px]">
      <div className="my-[24px] max-w-[840px] mx-auto">
        <h4 className="text-[#901C01] text-[14px] leading-[16px] uppercase font-[400] ff-convergence">
          {clinicalData?.tagline}
        </h4>
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] leading-[37px] sm:leading-[44px] md:leading-[47px] text-[#1D121C] font-[400] ff-convergence pt-[12px]">
         {clinicalData?.title}
        </h2>
        <div className="bg-[#F3EAF6] p-[24px] mt-[24px] border-l-[2px] border-[#901C01]">
          <p className="text-[#111827] text-[16px] leading-[20px] ff-overpass italic uppercase opacity-[0.8]">
           {clinicalData?.description}
          </p>
        </div>
        <div className="mt-[24px]">
          <GeneralClinic data={data} />
        </div>
        <div className="mt-[24px]">
          <EducationCommunity data={data?.EducationAndCommunityCards}/>
        </div>
      </div>
    </section>
  );
};

export default ClinicalEducation;
