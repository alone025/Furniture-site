import React from "react";
import localFont from "next/font/local";

// Fonts
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-content bg-[#2B2B2B] px-6 pt-9 pb-14">
      <div className="top-ton mb-11">
        <h2
          className={`${ProductSans7} text-[20px] md:text-[26px] xl:text-[28px] 2xl:text-[31px] text-[#E9E9E9]`}
        >
          Soudemy
        </h2>
      </div>
      <div className="botto-ton flex sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 xl:flex xl:flex-row justify-between max-w-[1300px] w-full gap-[50px] flex-wrap ">
        <div className="sec-about flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px] xl:gap-7">
          <h5
            className={`${ProductSans7} text-[15px] sm:text-[18px] md:text-[21px] xl:text-[23px] 2xl:text-[26px] text-[#E9E9E9]`}
          >
            About us
          </h5>
          <p
            className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB] max-w-[270px] w-full`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna
            facilisi ridiculus luctus amet. Aliquam
          </p>
        </div>
        <div className="social-sec flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px] xl:gap-7">
          <h5
            className={`${ProductSans7} text-[15px] sm:text-[18px] md:text-[21px] xl:text-[23px] 2xl:text-[26px] text-[#E9E9E9]`}
          >
            Socail links
          </h5>
          <ul className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-2 xl:gap-4">
            <li
              className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
            >
              Instagram
            </li>
            <li
              className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
            >
              Facebook
            </li>
            <li
              className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
            >
              Twitter
            </li>
            <li
              className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
            >
              Printeress
            </li>
            <li
              className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
            >
              Youtube
            </li>
          </ul>
        </div>
        <div className="contact-sec flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px] xl:gap-7">
          <h5
            className={`${ProductSans7} text-[15px] sm:text-[18px] md:text-[21px] xl:text-[23px] 2xl:text-[26px] text-[#E9E9E9]`}
          >
            Call center
          </h5>
          <p
            className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB] max-w-[270px] w-full text-left`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            vitae
          </p>
          <p
            className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
          >
            soroushnorozyui@gmail.com
          </p>
          <p
            className={`${ProductSans4} text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[#ABABAB]`}
          >
            +1 333 555
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
