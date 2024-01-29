"use client";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

// import images
import bgPicture from "@/public/Rectangle 47.png";
import heard from "@/public/heart_1.png";
import heard2 from "@/public/heart-2.png";
import comment from "@/public/comment.svg";
import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import axios from "axios";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  data: any;
  liek: any;
};

const Blogpagecards = ({ data, liek }: Props) => {
  const token = localStorage.getItem("token");

  return (
    <div className="blog-page-card">
      <div className="header-picture mt-[30px] md:mt-10 lg:mt-[50px]">
        <Image
          src={data.image}
          alt=""
          className="rounded-[5px]"
          width={895}
          height={474}
        />
        <div className={`bottom-picture mt-[20px]`}>
          <p
            className={` ${ProductSans4.className} text-[11px] md:text-[13px] lg:text-[15px] text-[#898989] grid grid-cols-3 gap-y-2 md:gap-0 md:flex`}
          >
            <span className="pr-[10px] md:pr-[14px] border-r border-r-[#A4A4A4]">
              {/* Sep 26, 2022 */}
              {data.data}
            </span>
            <span className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] border-r line-clamp-1 border-r-[#A4A4A4]">
              {/* Newest, sofa and chair , wooden */}
              {data.type}
            </span>
            <span className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] border-r line-clamp-1 border-r-[#A4A4A4]">
              {data.owner}
            </span>
            <Tooltip content={`${data.liked.length} people liked it`}>
              <span
                onClick={() => {
                  liek(data.id);
                }}
                className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] border-r border-r-[#A4A4A4] flex gap-3 items-center cursor-pointer"
              >
                {data.liked.some(
                  (like: any) => like.id === token && like.liked
                ) ? (
                  <Image src={heard2} alt="" className="w-[14px] md:w-[16px]" />
                ) : (
                  <Image src={heard} alt="" className="w-[14px] md:w-[16px]" />
                )}{" "}
                {data.liked.length}
              </span>
            </Tooltip>

            <Tooltip content={`${data.comment.length} people wrote comment it`}>
              <span className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] flex gap-3 items-center">
                <Image src={comment} alt="" className="w-[16px] md:w-[21px]" />{" "}
                {data.comment.length}
              </span>
            </Tooltip>
          </p>
        </div>
      </div>
      <div className="bottom-sec mt-[27px] pb-[20px]">
        <div className="log-text">
          <h2
            className={`${ProductSans7.className} text-[20px] md:text-[25px] lg:text-[30px] text-[#2D2D2D]`}
          >
            {data.title}
          </h2>
        </div>
        <div className="dex-tab mt-[18px] md:mt-[22px] lg:mt-[27px]">
          <p
            className={`${ProductSans4.className} max-w-[1465px] text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] text-[#898989]`}
          >
            {data.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            massa libero, mattis volutpat id. Egestas adipiscing placerat
            eleifend a nascetur. Mattis proin enim, nam porttitor vitae.
            Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum
            velit vulputate amet nunc amet. */}
          </p>
        </div>
        <div className="read-more mt-6 w-max">
          <Link href={{ pathname: `/blog/${data.id}` }} className="w-max">
            <p
              className={`${ProductSans4.className} underline text-sm md:text-lg lg:text-xl text-[#2F2D2D] hover:no-underline ease-in-out w-max cursor-pointer`}
            >
              Read more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogpagecards;
