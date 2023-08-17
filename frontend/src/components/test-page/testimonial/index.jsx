"use client";
import React from "react";
import { TestimonialCards } from "./testimonial-cards";
import Slider from "react-slick";
import { ArrowRight } from "@/common/icons/arrow-right";
import { ArrowLeft } from "@/common/icons/arrow-left";


export const Testimonial = ({data}) => {
 
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <section className="z-30 absolute bottom-[-30px]  sm:top-[40%] right-[30%] sm:right-[-10px]" onClick={onClick}>
        <button className="">
          <ArrowRight/>
        </button>
      </section>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <section className="z-30 absolute bottom-[-30px] sm:top-[40%] left-[30%] sm:left-[-10px]" onClick={onClick}>
        <button className="">
          <ArrowLeft />
        </button>
      </section>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-[75px] ">
      <div className="">
        <Slider {...settings}>
          {data?.map((item, index) => (
            <div key={index}>
              <TestimonialCards data={item} profileImage={data}/>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
