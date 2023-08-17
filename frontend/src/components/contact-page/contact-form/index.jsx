"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Location } from "@/common/icons/location.svg";
import { Mail } from "@/common/icons/mail.svg";
import Phone from "@/common/icons/phone";
import { Instagram } from "@/common/icons/instagram.svg";
import { Facebook } from "@/common/icons/facebook.svg";
import { Twitter } from "@/common/icons/twitter.svg";
import { Youtube } from "@/common/icons/youtube.svg";
const socialLinks = [
  { icon: <Instagram fill="#901C01" />, Link: "/" },
  { icon: <Facebook fill="#901C01" />, Link: "/" },
  { icon: <Twitter fill="#901C01" />, Link: "/" },
  { icon: <Youtube fill="#901C01" />, Link: "/" },
];

const ContactForm = ({data}) => {
  const [dis, setDis] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    message: "",
    email: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (
      dis.firstname.length &&
      dis.lastname.length &&
      dis.email.length &&
      dis.subject.length &&
      dis.message.length
    ) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      document.getElementById("mySubmit").disabled = true;
    }
  }, [dis]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name.trim().length === 0) {
      toast("Please Enter a correct Name");
      return;
    } else if (data.message.length > 800) {
      toast("write a correct message");
    } else {
      fetch("/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
         
          if (res.status === 200) {
           
            toast("Thank you for contacting us!");
          } else {
            
            toast("Something is wrong.");
          }
        })
        .catch((e) => (e));
      reset();
    }
  };
 
  return (
    <section className="bg-[#F7F3F0] relative pb-[155px] pt-[40px] md:pt-0">
      <div className="max-w-[1440px] mx-auto gap-x-[20px] px-4 grid md:grid-cols-2 items-center">
        <div>
          <h1 className="text-[#2C2C2C] text-[42px] md:text-[45px] lg:text-[48px] leading-[44px] md:leading-[60px] font-[400] tracking-[0.2px] ff-convergence">
            Get in Touch with Us
          </h1>
          <p className="text-[18px] leading-[30.6px] font-[700] mt-[8px] text-[#2C2C2C] ff-overpass">
            Have a question?
            <span className="font-[400] pl-1">
              {data?.paragraph}
            </span>
          </p>
          <div className="mt-[36px]">
            <h4 className="text-[#2C2C2C] text-[20px] leading-[24px] tracking-[0.2px] font-[400] ff-convergence">
            {data?.tagline}
            </h4>
            <div className="flex flex-col pt-[24px]">
              <Link href={""}>
                <span className="inline-flex gap-[15.15px] items-center text-[16px] leading-[27px] ff-overpass font-[500] uppercase text-[#2C2C2C]">
                  <Phone /> {data?.callCta?.title}
                </span>
              </Link>
              <Link href={""}>
                <span className="inline-flex gap-[15.15px] items-center pt-[12px] text-[16px] leading-[27px] ff-overpass font-[500] uppercase text-[#2C2C2C]">
                  <Location fill="#901C01" />
                 {data?.location?.title}
                </span>
              </Link>
              <Link href={"mailto:info@maristan.org"}>
                <span className="inline-flex gap-[13.15px] items-center pt-[12px] text-[16px] leading-[27px] ff-overpass font-[500] uppercase text-[#2C2C2C]">
                  <Mail fill="#901C01" />
                 {data?.mail?.title}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex gap-x-[7px] pt-[36px]">
            {socialLinks?.map((item, index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] flex items-center justify-center bg-[#ffff]  rounded-full cursor-pointer"
              >
                <Link href={"/"}>{item.icon}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#ffff] p-[30px] rounded-[12px] mt-[34px] md:mt-0">
          <h2 className="text-[24px] md:text-[26px] lg:text-[28px] leading-[28px] md:leading-[36px] font-[400] tracking-[0.2px] text-[#2C2C2C] ff-convergence">
           {data?.subHeading}
          </h2>
          <form
            onSubmit={() => handleSubmit(onSubmit)}
            method="POST"
            className="mt-[22px]"
          >
            <div className="grid sm:grid-cols-2 gap-x-[15px]">
              <div>
                <label
                  className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
                  htmlFor="name"
                >
                  First Name
                </label>{" "}
                <br />
                <input
                  {...register("firstname", { required: true })}
                  name="firstname"
                  id="firstname"
                  type="text"
                  tabIndex={0}
                  onChange={(e) =>
                    setDis({ ...dis, firstname: e.target.value })
                  }
                  placeholder="Input Name"
                  className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px] mb-2"
                />
              </div>
              <div>
                <label
                  className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
                  htmlFor="name"
                >
                  Last Name
                </label>{" "}
                <br />
                <input
                  {...register("lastname", { required: true })}
                  name="lastname"
                  id="lastname"
                  type="text"
                  tabIndex={0}
                  placeholder="Input Name"
                  onChange={(e) => setDis({ ...dis, lastname: e.target.value })}
                  className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px] mb-2"
                />
              </div>
            </div>
            <div>
              <label
                className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
                htmlFor="name"
              >
                Your Email
              </label>{" "}
              <br />
              <input
                {...register("email", { required: true })}
                name="email"
                id="email"
                type="email"
                tabIndex={0}
                placeholder="Your email"
                onChange={(e) => setDis({ ...dis, email: e.target.value })}
                className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px] mb-2"
              />
            </div>
            <div>
              <label
                className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
                htmlFor="name"
              >
                Subject
              </label>{" "}
              <br />
              <input
                {...register("subject", { required: true })}
                name="subject"
                id="subject"
                tabIndex={0}
                type="text"
                onChange={(e) => setDis({ ...dis, subject: e.target.value })}
                placeholder="Enter subject"
                className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px] mb-2"
              />
            </div>
            <div>
              <label
                className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
                htmlFor=""
              >
                Message
              </label>
              <textarea
                defaultValue={""}
                {...register("message", { required: true })}
                id="message"
                name="message"
                tabIndex={0}
                required
                onChange={(e) => setDis({ ...dis, message: e.target.value })}
                className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] placeholder:text-[14px] outline-none rounded p-[8px] my-2 w-full"
                placeholder="Your Message..."
                cols="30"
                rows="4"
              ></textarea>
            </div>
            <button
              id="mySubmit"
              type="submit"
              className={` bg-[#901C01] text-[16px] font-[600] leading-[20px] ff-overpass uppercase transition-all duration-300 text-[#ffff] hover:bg-[#6d1906] py-[18px] rounded-[8px] w-full
              ${!btnDis && "cursor-not-allowed"}  `}
            >
              submit
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div>
        <Image
          src="/images/about-us/Wave.png"
          width={1440}
          height={80}
          alt="wave "
          className="w-full h-[80px] absolute bottom-0 left-0 right-0"
        />
      </div>
    </section>
  );
};

export default ContactForm;
