"use client";
import React from "react";
import localFont from "next/font/local";

import Image from "next/image";
import CardBlog from "@/app/components/cardBlog";

// Images
import backImg from "@/public/Rectangle4.png";
import clock from "@/public/clock.svg";
import qulf from "@/public/qulf.svg";
import card from "@/public/card.svg";
import doller from "@/public/doller.svg";
import start from "@/public/videoStart.svg";
import backVideo from "@/public/videoBack.svg";
import bgVideo from "@/public/Rectangle48.png";
import right from "@/public/arr-right.svg";
import left from "@/public/arrow-left.svg";
import VideoDialog from "@/app/components/videoDialog";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import SkeletonBlog from "./skeleton";

// Fonts
const ProductSans7 = localFont({
  src: "../../../public/Fonts/Product Sans Bold.ttf",
});
const ProductSans4 = localFont({
  src: "../../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {};

const AboutUs = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [blogCardData, setBlogCardData] = React.useState([]);

  React.useEffect(() => {
    datablogAbout();
  }, [!blogCardData]);

  function datablogAbout() {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs`,
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setBlogCardData(response.data.slice(0, 3));
        setLoading(false);
      })
      .catch(function (error: any) {
        datablogAbout();
        setLoading(true);
      });
  }

  const secData = [
    {
      img: clock,
      nm: "Shope online",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
    {
      img: qulf,
      nm: "Free shipping",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
    {
      img: card,
      nm: "Return policy",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
    {
      img: doller,
      nm: "PAYMENT",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
  ];
  const staticData = [
    {
      id: 1,
      name: "Creativity",
      foiz: "72 %",
      qr: "432px",
    },
    {
      id: 2,
      name: "Advertising",
      foiz: "84 %",
      qr: "451px",
    },
    {
      id: 3,
      name: "Design",
      foiz: "74 %",
      qr: "438px",
    },
  ];

  const blogdata = [
    {
      data: "Sep 26, 2022",
      nm: "Paint your office in natural colors only",
    },
    {
      data: "Sep 26, 2022",
      nm: "Paint your office in natural colors only",
    },
    {
      data: "Sep 26, 2022",
      nm: "Paint your office in natural colors only",
    },
  ];

  return (
    <div className="about-us pt-[86px] pb-12 md:pb-24">
      <div className="header-sec px-6 2xl:px-14 h-[440px] md:h-[468px] pt-8">
        <div
          className="image-tab h-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url('${backImg.src}')` }}
        >
          <h2
            className={`${ProductSans7.className} text-[40px] sm:text-[50px] md:text-[58px] lg:text-[68px] text-[#3F3F3F]`}
          >
            About us
          </h2>
        </div>
      </div>
      <div className="section-sec bg-[#fff] px-6 2xl:px-14 pt-[70px] sm:pt-[80px] lg:pt-[90px] pb-24 flex flex-col items-center gap-[50px] sm:grid sm:grid-cols-2 lg:flex lg:flex-row sm:gap-[30px] justify-center">
        {secData.map((as, asm) => (
          <div className="card-sec flex flex-col gap-[10px]" key={asm}>
            <div className="top-tab flex flex-row gap-5 items-center">
              <Image
                src={as.img}
                alt=""
                className="w-[45px] sm:w-[50px] lg:w-[55px] xl:w-auto"
              />
              <p
                className={`${ProductSans7.className} text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[29px] text-[#353535]`}
              >
                {as.nm}
              </p>
            </div>
            <div className="btm-tab">
              <p
                className={`${ProductSans4.className} text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[23px] text-[#ABABAB] max-w-[300px] w-full`}
              >
                {as.dec}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="video-cover-sec h-[440px] md:h-[468px] px-6 2xl:px-14">
        <div
          className="video-back h-full flex justify-center items-center bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url('${bgVideo.src}')` }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="video-start-icon">
            <div className="back-video relative flex justify-center items-center">
              <Image
                src={start}
                alt=""
                loading="lazy"
                className="absolute z-10 w-[30px] md:w-[40px]"
              />
              <Image
                src={backVideo}
                alt=""
                loading="lazy"
                className="fill-[rgba(255,255,255,0.01)] backdrop-blur-[20px] rounded-full w-[70px] md:w-[99px] "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="functionally-sec px-6 2xl:px-14 pt-[90px] flex flex-wrap gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[60px] justify-left xl:justify-between">
        <div className="left-cont flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px] max-w-full lg:max-w-[1000px] xl:max-w-[594px] w-full">
          <h3
            className={`${ProductSans7.className} text-[30px] md:text-[38px] lg:text-[42px] xl:text-[46px] text-[#353535] text-left`}
          >
            Functionality meets perfection
          </h3>
          <p
            className={`${ProductSans4.className} text-[15px] md:text-[17px] lg:text-[19px] xl:text-[22px] text-[#898989] text-left`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            massa libero, mattis volutpat id. Egestas adipiscing placerat
            eleifend a nascetur. Mattis proin enim, nam porttitor vitae.{" "}
          </p>
        </div>
        <div className="right-cont flex flex-col max-w-full lg:max-w-[1000px] xl:max-w-[565px] w-full gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px]">
          {staticData.map((c, lc) => (
            <div className={`${"l-" + c.id}`} key={lc}>
              <div className="text flex justify-between gap-3">
                <h4
                  className={`${ProductSans7.className} text-[19px] md:text-[22px] lg:text-[25px] xl:text-[28px] text-[#353535]`}
                >
                  {c.name}
                </h4>
                <p
                  className={`${ProductSans7.className} text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] text-[#353535]`}
                >
                  {c.foiz}
                </p>
              </div>
              <div className="statis relative mt-[15px] md:mt-[20px] lg:mt-[25px] xl:mt-[30px]">
                <div className="line-1 h-[5px] bg-[#C2C2C2]"></div>
                <div
                  className={`line-2 h-[5px] absolute w-full max-w-[242px] sm:max-w-[342px] md:max-w-[432px] bg-[#1F1F1F] top-0`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-rec-page-sec pt-[120px] px-6 2xl:px-14">
        <div className="top-tab flex justify-between gap-6">
          <div className="text">
            <h4
              className={`${ProductSans7.className} text-[20px] sm:text-[23px] md:text-[25px] lg:text-[30px] text-[#2B2B2B]`}
            >
              last blog post
            </h4>
          </div>
          {/* <div className="icons flex gap-[10px] md:gap-[15px] lg:gap-5">
            <Image src={left} alt="" />
            <Image src={right} alt="" />
          </div> */}
        </div>
        <div className="btm-sec-tab pt-[40px] md:pt-[60px] lg:pt-[80px] flex gap-10 flex-wrap justify-center">
          {loading ? (
            <>
              {[1, 2, 3].map((c, lg) => (
                <SkeletonBlog key={lg} />
              ))}
            </>
          ) : (
            <>
              {blogCardData.map((c, lg) => (
                <CardBlog key={lg} data={c} />
              ))}
            </>
          )}
        </div>
      </div>
      <VideoDialog open={open} handleOpen={setOpen} />
    </div>
  );
};

export default AboutUs;
