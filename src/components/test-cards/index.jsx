import React from "react";
import Image from "next/image";

export default function TestCards() {
  return (
    <div className="max-w-[1440px] mx-auto font-custom my-[100px]  px-[24px]">
       
          
      <div className=" max-w-[1170px] mx-auto grid grid-cols-1 lg:text-[20px] md:text-[18px] text-[16px] lg:grid-cols-2 justify-center gap-[80px] ">
       
            <div className="bg-[#333333] mx-auto max-w-[570px] rounded-[10px]">
            <div
            style={{
              backgroundImage : `url(${"/images/CompoundPath(2).png"})`
            }}
             className=" w-[100%] h-full bg-center bg-no-repeat bg-cover grid grid-cols-1 gap-[40px] text-center py-[56px] text-[#FFFFFF] px-[48px]">
              <div className="grid grid-cols-1 gap-[27px]">

              <h2 className="lg:text-[32px] md:text-[30px] text-[28px] font-semibold leading-[40px] ">
                Ready to Smile Bright? Schedule Your Visit!
              </h2>
              <p className="text-center  ">
                Looking for fresh new expert dental care? Make an appointment now and let
                our skilled professionals take care of your oral health.
              </p>
              </div>
              <div>
                <button className="py-[18px] px-[32px] rounded-[50px] border-[1px]">
                  Make An Appointment
                </button>
              </div>
            </div>
            </div>

            
        
        
        <div className="mt-[32px] mx-auto sm:mt-[0px] max-w-[570px] text-black  bg-[#F8F8F8] rounded-[10px]">
          <div className="">
            <div className="  content-center px-[48px] py-[56px] grid grid-cols-1 gap-[40px]">
              <div className=" grid grid-cols-1 gap-[27px]">
                <h2 className="lg:text-[32px] md:text-[30px] text-[28px] text-center font-semibold leading-[40px] ">
                  Need Dental Care without Insurance? Take a Look!
                </h2>
             
              <p className="text-center font-medium  leading-[30px] ">
                  If you dont have insurance, weve got you covered! Explore
                  our membership plan for affordable dental care options.
                </p>
          
              </div>
              <div className="flex justify-center">
                <button className="py-[18px] px-[32px] border-[#333] rounded-[50px] border-[1px]">
                  See Our Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
