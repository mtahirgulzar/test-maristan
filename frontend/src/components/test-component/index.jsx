import React from "react";

export default function TestComponent() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-custom py-[135px] xl:px-[135px] lg:px-[100px] md:px-[50px] px-[24px]">
        <div className="text-center">
          <h3 className="font-semibold text-[20px] leadign-[24px] tracking-[0.5px] text-[#3AB799]">
            Smile Gallery
          </h3>
          <h2 className="lg:text-[38px] md:text-[33px] text-[28px] leading-[47.5px text-[#333333] ]">
            See Our Stunning Transformations
          </h2>
          <div className="max-w-[870px] mx-auto">
            <p className="text-[20px] leading-[30px] font-medium ">
              Take a look at these before and after images showcasing the
              incredible smile transformations our patients have achieved
              through our cosmetic dental services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
