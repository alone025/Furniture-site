import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { Card, Tooltip } from "@material-tailwind/react";

type Props = {};

const SkeletonBlogPage = (props: Props) => {
  return (
    <Card
      placeholder={""}
      className="blog-page-card max-w-[895px] mt-[30px] md:mt-10 lg:mt-[50px] animate-pulse"
    >
      <div className="header-picture">
        <div className="image-tab max-w-[895px] h-[250px] sm:h-[300px] md:h-[500px] flex justify-center items-center w-full bg-gray-300 rounded-[5px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div className={`bottom-picture mt-[20px]`}>
          <p className={`h-[15px] rounded-full w-[80%] bg-gray-300 ml-2`}>
            &nbsp;
          </p>
        </div>
      </div>
      <div className="bottom-sec mt-[27px] pb-[20px]">
        <div className="log-text">
          <h2
            className={`h-5 w-[70%] ml-2 rounded-full bg-gray-300 text-[20px] md:text-[25px] lg:text-[30px] text-[#2D2D2D]`}
          >
            &nbsp;
          </h2>
        </div>
        <div className="ml-2 dex-tab mt-[15px] md:mt-[18px] lg:mt-[25px] gap-2 flex flex-col ">
          <p className={`h-3 w-[80%] rounded-full bg-gray-300 max-w-[1465px]`}>
            &nbsp;
          </p>
          <p className={`h-3 w-[80%] rounded-full bg-gray-300 max-w-[1465px]`}>
            &nbsp;
          </p>
          <p className={`h-3 w-[80%] rounded-full bg-gray-300 max-w-[1465px]`}>
            &nbsp;
          </p>
        </div>
        <div className="read-more mt-6 w-max">
          <p className={`h-4 ml-2 rounded-[5px] w-20 bg-gray-300`}>&nbsp;</p>
        </div>
      </div>
    </Card>
  );
};

export default SkeletonBlogPage;
