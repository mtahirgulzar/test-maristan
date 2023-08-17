"use client";
import React, { useState, useEffect } from "react";
import { Heart } from "@/common/icons/heart";
import Hamburger from "@/components/header/hamburger";
import { usePathname } from "next/navigation";
import Dropdown from "./dropdown";
import { ChevronDown } from "@/common/icons/chevron-down.svg";
import { ChevronUp } from "@/common/icons/chevron-up.svg";
import Image from "next/image";
import Link from "next/link";
import { imageResolver } from "@/utils/image-resolver";

export const Navbar = ({ data, layoutData }) => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  const bg =
    pathname == "/contact-us"
      ? "bg-[#F7F3F0]"
      : pathname == "/"
      ? "bg-[#EFE8E2]"
      : "bg-[#ffff]";

  const handleClick = () => {
    setIsSubmenu2(!isSubMenu2);
  };
  useEffect(() => {
    setIsSubmenu2(false);
    setIsMenu(false)
  }, [pathname]);
  return (
    <>
      <header className="z-0  w-full ff-overpass">
        <div className={`${bg} w-full  cus-shadow-nav `}>
          <div className="max-w-[1440px]  mx-auto py-[11px] sm:py-[14px] flex justify-between items-center px-4 ">
            <Link href={`/`}>
              <div className=" ff-montserrat flex items-center gap-x-3 text-[21px] leading-[26px] sm:text-3xl sm:leading-[30px] lg:leading-[36px] tracking-wider text-[#252525]">
                <Image
                  src={imageResolver(layoutData?.logo)?.path}
                  loader={()=> imageResolver(layoutData?.logo)?.path}
                  alt={layoutData?.logo?.data?.attributes?.alternativeText}
                  loading="lazy"
                  width={65}
                  height={100}
                  className="w-[35px] h-[46px] sm:w-[45px] md:w-[55px] lg:w-[65px] sm:h-[60px] md:h-[90px] lg:h-[100px]"
                />
              </div>
            </Link>
            <div className="flex items-center gap-x-5">
              <ul className="lg:flex hidden gap-[27px] text-[14px] leading-[34px] text-[#4E4B66] ">
                {layoutData?.navItems?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="relative flex items-center transition-all duration-300 gap-x-2 group"
                    >
                      <Link href={`${item?.link}`}>
                        <p
                          className={` list-none pt-[3px] ff-overpass transition-none duration-300 hover:cursor-pointer text-[#000000] text-[14px] leading-[18px] uppercase font-[400] group-hover:text-[#901C01]  
                           `}
                        >
                          {item.name}
                        </p>
                      </Link>
                      <div
                        onClick={handleClick}
                        className={`${
                          index !== 2 && "hidden "
                        } hover:cursor-pointer `}
                      >
                        {isSubMenu2 ? (
                          <ChevronDown
                            className={` group-hover:stroke-[#901C01]  ml-[5px]`}
                          />
                        ) : (
                          <ChevronUp
                            className={` group-hover:fill-[#901C01] bi bi-caret-down-fill ml-[5px]`}
                          />
                        )}
                        <div className={`${!isSubMenu2 && "hidden"}`}>
                          <Dropdown data={data?.data} />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="lg:hidden flex items-center min-h-full h-[62px] ">
                <Hamburger
                  isMenu={isMenu}
                  setIsMenu={setIsMenu}
                  data={layoutData}
                  projectsData={data}
                  
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <button className="flex items-center gap-x-[13px] px-[32px] py-[14px] border-[1px] uppercase text-[#ffff] border-[#901C01] rounded-[8px] font-[600] transition-all duration-300 hover:bg-opacity-[0.3] bg-[#901C01] text-[16px] leading-[20px] ">
                <Heart stroke="#ffff" />
                {layoutData?.btnName}
              </button>
              {/* <Modal isOpenModal={isOpenModal} hide={!isOpenModal} /> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
