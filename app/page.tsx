"use client";
import { useState } from "react";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import Butto from "./components/button";
import Image from "next/image";

// Images
import backImg from "@/public/Rectangle4.png";
import imgF1 from "@/public/Rectangle5.png";
import imgF2 from "@/public/Rectangle6.png";
import imgF3 from "@/public/Rectangle7.png";
import bc1 from "@/public/Rectangle8.png";
import bc2 from "@/public/Rectangle10.png";
import recImg1 from "@/public/Rectangle11.png";
import recImg2 from "@/public/Rectangle13.png";
import recImg3 from "@/public/Rectangle15.png";
import clock from "@/public/clock.svg";
import qulf from "@/public/qulf.svg";
import card from "@/public/card.svg";
import doller from "@/public/doller.svg";
import HomeSwipper from "./components/homeSwipper";

// Fonts
const ProductSans7 = localFont({
  src: "../public/Fonts/Product Sans Bold.ttf",
});
const ProductSans4 = localFont({
  src: "../public/Fonts/Product Sans Regular.ttf",
});

export default function Home() {
  const dataF = [
    {
      img: imgF1,
      name: "Pot",
      price: "$ 223,00",
    },
    {
      img: imgF3,
      name: "Lamp",
      price: "$ 230,00",
    },
    {
      img: imgF2,
      name: "Chair",
      price: "$ 215,00",
    },
  ];

  const dataRec = [
    {
      name: "stylish chairs",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.",
      img: recImg1,
      lf: true,
    },
    {
      name: "Table",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.",
      img: recImg2,
      lf: false,
    },
    {
      name: "contemporary lamps",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.",
      img: recImg3,
      lf: true,
    },
  ];

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

  return (
    <div
      className={`main-page pt-0 bg-cover bg-fixed`}
      style={{ backgroundImage: `url('${backImg.src}')` }}
    >
      <div className="content-main pt-[76px]">
        <div className="head-tab h-screen px-6 2xl:px-14 flex items-center justify-center">
          <div className="title-head max-w-[400px] w-full md:w-[584px] flex items-center flex-col text-center">
            <h2
              className={`${ProductSans7.className} text-[33px] sm:text-[35px] md:text-[45px] lg:text-[49px] text-[#fff] mb-[5px] sm:mb-[7px] md:mb-[8px] lg:mb-[15px]`}
            >
              All for your home
            </h2>
            <p
              className={`${ProductSans4.className} text-[16px] sm:text-[17px] md:text-[19px] lg:text-[23px] text-[#fff] mb-[20px] sm:mb-[25px] md:mb-[30px] lg:mb-[44px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              dolor odio odio malesuada at condimentum adipiscing iaculis
              semper.
            </p>
            <Butto black={false} />
          </div>
        </div>
        <div className="products-of-the-book bg-[#fff] pb-[72px]">
          <div className="top-sec px-6 flex flex-col items-center text-center pt-[60px] md:pt-[80px] lg:pt-[92px]">
            <h2
              className={`${ProductSans7.className} text-[28px] sm:text-[35px] md:text-[40px] lg:text-[44px] text-[#373737] mb-[15px] sm:mb-[20px] md:mb-[26px] lg:mb-[40px]`}
            >
              Products of the week
            </h2>
            <p
              className={`${ProductSans4.className} text-[14px] sm:text-[16px] md:text-[19px] lg:text-[23px] text-[#8A8A8A] w-full max-w-[685px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              dolor odio odio malesuada at condimentum adipiscing iaculis
              semper.
            </p>
          </div>
          <div className="bottom-sec px-6 mt-[62px] flex flex-col gap-5 sm:flex sm:flex-row sm:gap-10  md:gap-2 md:grid md:grid-cols-3 ">
            {dataF.map((c, il) => (
              <div className="card flex flex-col items-center" key={il}>
                <Image
                  src={c.img}
                  alt=""
                  className="h-[270px] max-w-max sm:h-[250px] sm:max-w-full md:h-auto md:max-w-[80%] 2xl:w-full"
                />
                <p
                  className={`${ProductSans7.className} text-[18px] md:text-[20px] lg:text-[23px] text-[#373737] md:mt-4 lg:mt-6`}
                >
                  {c.name}
                </p>
                <p
                  className={`${ProductSans4.className} text-[16px] md:text-[18px] lg:text-[23px] text-[#373737]`}
                >
                  {c.price}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="two-picture-section">
          <div
            className="top-pic px-6 h-[340px] bg-cover bg-no-repeat flex justify-end"
            style={{ backgroundImage: `url('${bc1.src}')` }}
          >
            <div className="content flex flex-col items-center mt-[86px] gap-[20px] md:gap-[26px]">
              <p
                className={`${ProductSans4.className} text-[20px] md:text-[23px] text-center text-[#fff] max-w-[580px]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat dolor odio odio malesuada at condimentum adipiscing
                iaculis semper.
              </p>
              <Butto black={false} />
            </div>
          </div>
          <div
            className="bottom-pic h-[655px] bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: `url('${bc2.src}')` }}
          ></div>
        </div>
        <div className="recommedation-sec bg-[#fff]  px-6 2xl:px-14 pt-[140px] flex flex-col gap-36 pb-36">
          {dataRec.map((ld, lg) => (
            <div
              className={`card justify-evenly gap-[40px] items-center flex flex-col  ${
                ld.lf ? "sm:flex-row" : "sm:flex-row-reverse"
              } `}
              key={lg}
            >
              <div className="left-tab max-w-[570px] w-full flex flex-col items-center">
                <h3
                  className={`${ProductSans7} uppercase text-[20px] sm:text-[25px] md:text-[34px] lg:text-[44px] text-[#373737] mb-[10px] sm:mb-[20px] md:mb-[20px] lg:mb-[35px] text-center`}
                >
                  {ld.name}
                </h3>
                <p
                  className={`${ProductSans4} text-[11px] sm:text-[13px] md:text-[16px] lg:text-[23px] text-[#ABABAB] text-center mb-[20px] sm:mb-[30px] md:mb-[45px]`}
                >
                  {ld.des}
                </p>
                <Butto black={true} />
              </div>
              <div className="right-tab">
                <Image
                  src={ld.img}
                  alt=""
                  className="w-[400px] max-h-[300px]  sm:max-h-max xl:w-[550px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="simple-page bg-[#EFEFEF] flex flex-col items-center md:flex-row gap-6 md:gap-14 py-[80px] lg:py-[100px] px-6 justify-center">
          <p
            className={`${ProductSans4.className} text-[24px] md:text-[28px] lg:text-[36px] text-[#373737] text-center`}
          >
            order now for an{" "}
            <span className={`${ProductSans7.className}  text-[#3F3F3F]`}>
              express delivery in 24h !
            </span>{" "}
          </p>
          <Butto black={true} />
        </div>
        <div className="section-sec bg-[#fff] px-6 2xl:px-14 pt-[80px] sm:pt-[120px] lg:pt-[150px] pb-24 flex flex-col items-center gap-[50px] sm:grid sm:grid-cols-2 lg:flex lg:flex-row sm:gap-[30px] justify-center">
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
        <div className="swipper-sec px-6 2xl:px-14 bg-[#EFEFEF]">
          <HomeSwipper />
        </div>
      </div>
    </div>
  );
}
