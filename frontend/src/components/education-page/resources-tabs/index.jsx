"use client";
import React, { useState } from "react";
import Image from "next/image";
import AcademicCap from "@/common/icons/academic-cap";
import BookOpen from "@/common/icons/book-open";
import PaginatedBlogs from "@/components/paginatedBlogs";
import ClinicalEducation from "@/components/education-page/clinical-education";

const ResourcesTabs = ({data, clinicalData}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section>
      <div className="text-center ff-convergence">
        <p className="text-[14] leading-[16px] font-[400] uppercase text-[#901C01] ">
          {data?.EducationCards?.headingBar?.tagline}
        </p>
        <h2 className="text-[40px] leading-[47px] font-[400] text-[#1D121C] mt-[12px]">
         {data?.EducationCards?.headingBar?.title}
        </h2>
        <div className="w-[72px] h-[24px] mx-auto mt-[12px]">
          <Image src="/images/about-us/Vector.png" width={72} height={24} alt="vector"/>
        </div>
      </div>

      <div className=" flex justify-center gap-x-[51px] pt-[40px] sm:pt-[55px] lg:pt-[75px]">
        <div
          className={`group ${
            activeTab === 0
              ? "bg-[#901C01] text-[#ffff]"
              : " text-[#2E2B26]"
          } hover:text-[#ffff] hover:bg-[#7e230f] transition-all duration-300 rounded-[6px] inline-flex  `}
        >
          <button
            className={`inline-flex items-center gap-x-[14px] text-[14px] leading-[16px] uppercase font-[400] py-[12px] px-[19px] ff-convergence  
            `}
            onClick={() => handleTabClick(0)}
          >
            <AcademicCap
              className={`group-hover:fill-[#ffff] ${
                activeTab === 0 ? "fill-[#ffff]" : "fill-[#2E2B26]"
              }`}
            />
            Education
          </button>
        </div>
        <div
          className={`group ${
            activeTab === 1
              ? "bg-[#901C01] text-[#ffff]"
              : " text-[#2E2B26]"
          } hover:text-[#ffff] hover:bg-[#7e230f] transition-all duration-300 rounded-[6px] inline-flex  `}
        >
          <button
            className={`inline-flex gap-x-[15px] items-center text-[14px] leading-[16px] uppercase ff-convergence font-[400] py-[12px] px-[19px] ${
              activeTab === 1 ? "active" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            <BookOpen   className={`group-hover:stroke-[#ffff] ${
                activeTab === 1 ? "stroke-[#ffff]" : "stroke-[#2E2B26]"
              }`}/>
            Resources
          </button>
        </div>
      </div>
      <section className="tab-content">
        {activeTab === 0 && <PaginatedBlogs data={data?.EducationCards?.cards}/>}
        {activeTab === 1 && <ClinicalEducation data={data} clinicalData={clinicalData} />}
      </section>
    </section>
  );
};

export default ResourcesTabs;


