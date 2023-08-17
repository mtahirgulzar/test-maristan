"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { ChevronDown } from "@/common/icons/chevron-down.svg";
import { ChevronUp } from "@/common/icons/chevron-up.svg";
import { usePathname } from "next/navigation";

const Hamburger = ({
  isMenu,
  setIsMenu,
  data,
  projectsData,
}) => {
  const pathname = usePathname();
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  useEffect(() => {
    setIsSubmenu2(false)
  }, [pathname]);
  return (
    <>
      {" "}
      {!isMenu && (
        <span
          onClick={() => setIsMenu(!isMenu)}
          className="transition-all duration-500 ease-linear "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="#901C01"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      )}
      {isMenu && (
        <span
          onClick={() => {
            setIsMenu(false);
          }}
          className="transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="#901C01"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </span>
      )}
      {isMenu && (
        <ul className="bg-[#EFE8E2]  z-50  min-h-[200px] absolute left-0 top-[110px] w-full shadow-lg">
          {data?.navItems?.map((item, index) => (
            <>
              <li
                key={index}
                className={`w-full px-[30px] py-[17px]   cursor-pointer transition-all ease duration-500 ${styles.cusHover}`}
              >
                <>
                  {" "}
                  <div
                    className={`w-full  cursor-pointer ${styles.cusMenu} flex-col`}
                  >
                    <p
                      className={`w-full group gap-x-2 items-center justify-between text-[#374151] text-[16px] leading-[20px] ff-circular-std-med font-[500] transition-all ease duration-500 inline-flex  gap-[6px] ${styles.hoverText}`}
                    >
                      <Link href={`${item.link}`}>{item.name}</Link>
                      {index === 2 && (
                        <div onClick={() => {
                          setIsSubmenu2(!isSubMenu2);
                        }}>
                          {isSubMenu2 ? (
                            <ChevronDown />
                          ) : (
                            <ChevronUp className="" />
                          )}
                        </div>
                      )}
                    </p>
                  </div>
                </>
              </li>
              <>
                {index === 2 && (
                  <>
                    {isSubMenu2 && (
                      <div
                        className={` w-full transition-all duration-3000 ease relative z-100 bg-white  `}
                      >
                        <ul className={` bg-white`}>
                          {projectsData?.data?.map((item, index) => (
                            <Link
                              key={index}
                              href={`/projects/${item?.attributes?.slug || "/"}`}
                              legacyBehavior
                            >
                              <li
                                className={`px-[30px] py-[13px] transition-all ease duration-500 ${styles.cusMenu}`}
                              >
                                <p
                                  className={` group flex items-center gap-x-3 text-[#374151] transition-all ease duration-500 text-[15px] leading-[24px] py-1 font-[450] pl-[10px]`}
                                >
                                  {item?.attributes?.title}
                                </p>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </>
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default Hamburger;
