"use client";
import React, { useState } from "react";

const ClinicFAQ = () => {
  const [showText, setShowText] = useState(false);
  const [isPlus, setIsPlus] = useState(true);
  const [showText2, setShowText2] = useState(false);
  const [isPlus2, setIsPlus2] = useState(true);
  const [showText3, setShowText3] = useState(false);
  const [isPlus3, setIsPlus3] = useState(true);
  const [showText4, setShowText4] = useState(false);
  const [isPlus4, setIsPlus4] = useState(true);
  const [showText5, setShowText5] = useState(false);
  const [isPlus5, setIsPlus5] = useState(true);
  const handleText = () => {
    setIsPlus((prevState) => !prevState);
    if (isPlus === true) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };
  const handleText2 = () => {
    setIsPlus2((prevState) => !prevState);
    if (isPlus2 === true) {
      setShowText2(true);
    } else {
      setShowText2(false);
    }
  };
  const handleText3 = () => {
    setIsPlus3((prevState) => !prevState);
    if (isPlus3 === true) {
      setShowText3(true);
    } else {
      setShowText3(false);
    }
  };
  const handleText4 = () => {
    setIsPlus4((prevState) => !prevState);
    if (isPlus4 === true) {
      setShowText4(true);
    } else {
      setShowText4(false);
    }
  };
  const handleText5 = () => {
    setIsPlus5((prevState) => !prevState);
    if (isPlus5 === true) {
      setShowText5(true);
    } else {
      setShowText5(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto    xl:px-[150px] xl:pb-[75px] pt-[26px] font-custom">
      <div className="1140px max-auto bg-[url('/images/CompoundPath(3).png')]  xl:bg-[url('/images/CompoundPath(3).png')] bg-[left_top] via-slate-900  bg-no-repeat ">
        <div className="max-w-[626px]    mx-auto flex flex-col gap-[12px] justify-center items-center  ">
          <h2 className="text-[#0F172A] lg:text-[38px] md:text-[33px] text-[28px]  font-[600] text-center ">
            Clinic FAQ
          </h2>
        </div>
        <div className="max-w-[1140px] lg:mx-[100px] md:mx-[80px] sm:mx-[50px] mx-[25px] xL:mx-auto mt-[56px] flex flex-col gap-[16px]   ">
          <div className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
            <div className="flex justify-between items-center">
              <p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
                How often will I be seen?
              </p>{" "}
              <span
                className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
                onClick={handleText}
              >
                {" "}
                {isPlus ? "+" : "-"}
              </span>{" "}
            </div>
            {showText && (
              <div className="pt-[10px] growText ">
                {" "}
                Your first session will be 60 minutes while each following
                session will be 45-50 minutes{" "}
              </div>
            )}
          </div>
          <div className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
            <div className="flex justify-between items-center">
              <p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
                How long will I be in therapy?
              </p>{" "}
              <span
                className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
                onClick={handleText2}
              >
                {" "}
                {isPlus2 ? "+" : "-"}
              </span>{" "}
            </div>
            {showText2 && (
              <div className="pt-[10px] growText ">
                {" "}
                Your first session will be 60 minutes while each following
                session will be 45-50 minutes
              </div>
            )}
          </div>
          <div className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
            <div className="flex justify-between items-center">
              <p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
              How much do sessions cost?
              </p>{" "}
              <span
                className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
                onClick={handleText3}
              >
                {" "}
                {isPlus3 ? "+" : "-"}
              </span>{" "}
            </div>
            {showText3 && (
              <div className="pt-[10px] growText  ">
                {" "}
                Your first session will be 60 minutes while each following
                session will be 45-50 minutes{" "}
              </div>
            )}
          </div>
          <div className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
            <div className="flex justify-between items-center">
              <p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
              What if I can’t afford therapy?
              </p>{" "}
              <span
                className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
                onClick={handleText4}
              >
                {" "}
                {isPlus4 ? "+" : "-"}
              </span>{" "}
            </div>
            {showText4 && (
              <div className="pt-[10px] growText  ">
                {" "}
                Your first session will be 60 minutes while each following
                session will be 45-50 minutes{" "}
              </div>
            )}
          </div>
          <div className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
            <div className="flex justify-between items-center">
              <p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
              What payment plans are available?
              </p>{" "}
              <span
                className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
                onClick={handleText5}
              >
                {" "}
                {isPlus5 ? "+" : "-"}
              </span>{" "}
            </div>
            {showText5 && (
              <div className="pt-[10px] growText  ">
                
                Your first session will be 60 minutes while each following
                session will be 45-50 minutes
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicFAQ;
