"use client";
import Image from "next/image";
import React from "react";
import TeamCards from "./team-cards";
import Slider from "react-slick";
import { imageResolver } from "@/utils/image-resolver";

const TeamsSlider = ({ data }) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="relative w-full mt-[40px] sm:mt-[75px] mb-[40px] sm:pb-[75px]">
      <div className="text-center ff-convergence">
        <p className="text-[14] leading-[16px] font-[400] uppercase text-[#901C01] ">
          {data?.heading?.tagline}
        </p>
        <h2 className="text-[40px] leading-[47px] font-[400] text-[#1D121C] mt-[12px]">
          {data?.heading?.title}
        </h2>
        <div className="w-[72px] h-[24px] mx-auto mt-[12px]">
          <Image
            src="/images/about-us/Vector.png"
            width={72}
            height={24}
            alt="vector image"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/images/about-us/Vector2.png"
          width={284}
          height={142}
          alt="vector two image"
          className="absolute bottom-0 right-[278px]"
        />
      </div>
      <div>
        <Image
          src={imageResolver(data?.heading?.img)?.path}
          loader={() => imageResolver(data?.heading?.img)?.path}
          width={205}
          height={112}
          alt={data?.heading?.img?.data?.attributes?.alternativeText}
          className="absolute top-8 sm:top-[-20px] left-[-145px]"
        />
      </div>

      <div className=" mt-[60px] max-w-[1440px] px-4 mx-auto  overflow-hidden">
        <Slider {...settings}>
          {data?.card?.map((item, index) => {
            return (
              <div className="md:max-w-[400px] sm:px-4 mx-auto" key={index}>
                <TeamCards data={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TeamsSlider;
