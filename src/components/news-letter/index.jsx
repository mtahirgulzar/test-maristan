  "use client";
  import React, { useState, useEffect } from "react";
  import { Zigzag } from "@/common/icons/zigzag.svg";
  import { Mail } from "@/common/icons/mail.svg";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useForm } from "react-hook-form";
  import { imageResolver } from "@/utils/image-resolver";

  const Newsletter = ({ data }) => {
    const [dis, setDis] = useState({
      email: "",
    });
    const [btnDis, setBtnDis] = useState(false);
    useEffect(() => {
      if (dis.email.length) {
        setBtnDis(true);
        document.getElementById("mySubmit").disabled = false;
      } else {
        setBtnDis(false);
        //   document.getElementById("mySubmit").disabled = true;
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
      if (data.email.length > 30) {
        toast("Please Enter correct mail");
      } else {
        fetch("/api/", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            // console.log("Response received", res);
            if (res.status === 200) {
              // console.log("Response succeeded!");
              toast("Thank you for contacting us!");
            } else {
              // console.log("Email/Password is invalid.");
              toast("Mail is not sent.");
            }
            setBtnDis(false);
            document.getElementById("mySubmit").disabled = true;
          })
          .catch((e) => console.log(e));
        reset();
      }
    };
    return (
      <section
        className="px-4 bg-cover bg-no-repeat bg-bottom h-[538px]"
        style={{
          backgroundImage: `url(${imageResolver(data?.backgroundImage).path})`,
        }}
      >
        <div className="pt-[75px]  flex flex-col justify-center items-center">
          <div className="text-center mb-[43px]">
            <Zigzag className=" w-full" fill="#fff" />
            <h2 className="my-[14px] font-[400] text-[32px] sm:text-[36px] md:text-[39px] lg:text-[48px] leading-[34px] sm:leading-[37px] md:leading-[40px] lg:leading-[60px] tracking-[0.2 px] sm:tracking-[0.2px] text-white ff-convergence">
              {data?.title}
            </h2>
            <p className="font-[400] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] text-white ff-overpass">
              {data?.tagline}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="bg-white w-full sm:w-[430px] rounded-[8px] border-[1px] border-[#C3CAD9] flex items-center justify-between">
              <div className="flex gap-[10px] items-center ml-3 sm:ml-[21.15px]">
                <Mail fill="#CCCCCC" />
                <input
                  {...register("email", { required: true })}
                  tabIndex={0}
                  id="email"
                  name="email"
                  onChange={(e) => setDis({ ...dis, email: e.target.value })}
                  required
                  role="input"
                  arial-label="Please input your email"
                  type="email"
                  className="outline outline-offset-0 outline-none py-[11px] px-[10px] ff-overpass text-[#CCCCCC] placeholder:text-[#CCCCCC] font-[600] text-[16px] leading-[20px] w-[100%]"
                  placeholder="Your Email"
                />
              </div>
              <div className="mr-[10px] my-[5px]">
                <button
                  type="submit"
                  id="mySubmit"
                  className={`py-[11px] text-center px-[10px] lg:px-[20px] font-[400] text-[18px] text-[#FFFFFF] leading-[20px] bg-[#802A22] rounded-[4px] ff-convergence hover:bg-[#a1261b] duration-200 transition-all ${
                    !btnDis && "cursor-not-allowed"
                  }`}
                >
                  {data?.cta?.name}
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>
    );
  };

  export default Newsletter;
