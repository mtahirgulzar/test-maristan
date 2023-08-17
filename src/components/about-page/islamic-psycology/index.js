'use client'
import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export const IslamicPsychology = ({data}) => {
  return (

            <section className="px-4">
              <div
                className="bg-cover bg-no-repeat rounded-[32px]  max-w-[1408px] mx-auto"
                style={{
                  backgroundImage: 'url("/images/3.png")',
                }}
              >
                <div className="px-4">
                  <div className="lg:p-[75px] py-[40px] lg:py-[75px] grid lg:grid-cols-2 lg:gap-x-[75px]">
                    <div>
                      <div>
                        <div>
                          <div>
                            <p className="text-[#FFFFFF] font-[400] text-[14px] leading-[16px] uppercase ff-convergence">
                              {data?.heading?.tagline}
                            </p>
                            <h1 className="text-[#FFFFFF] mb-[20px] mt-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] leading-[34px] sm:leading-[36px] md:leading-[38px] lg:leading-[43px] tracking-[-0.01em] ff-convergence">
                              {data?.heading?.title}
                            </h1>
                            <p className="max-w-[533px] px-[16px] font-[400] text-[16px] leading-[24px] text-[#FFFFFF] mb-[20px] ff-overpass">
                              <ul className=" pl-[7px] grid font-[400] leading-[24px] grid-cols-1 gap-[20px] list-disc">

                              {data?.list.map((items , index)=>{
                                return(
                                  <li className="" key={index}>{items.description}</li>
                                )

                              })}
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-[24px] lg:mt-0">
                      <Image
                        src={imageResolver(data?.image)?.path}
                        loader={() => imageResolver(data?.image)?.path}
                        className="w-full h-auto"
                        alt={data?.image?.data?.attributes?.alternativeText}
                        height={442}
                        width={575}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}
