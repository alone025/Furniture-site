import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

// Fonts
const ProductSans4 = localFont({
  src: "../../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {};

const SkeletonBlog = (props: Props) => {
  return (
    <Card
      placeholder={""}
      className="cardBlog-content animate-pulse flex flex-col max-w-[300px] 2xl:max-w-[450px] w-full  sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[330px] 2xl:w-[430px]"
    >
      <CardHeader
        placeholder={""}
        color="blue-gray"
        className="h-56 place-items-center flex justify-center bg-gray-300"
      >
        {/* <Image src={} alt="" width={402} height={364} /> */}
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
      </CardHeader>
      <CardBody placeholder={""}>
        <Typography
          placeholder={""}
          variant="paragraph"
          className={`${ProductSans4.className} h-3 max-w-[80%] w-full bg-gray-300 rounded-full text-[13px] md:text-[15px] lg:text-[17px] text-[#9E9E9E] text-left`}
        >
          {" "}
          &nbsp;
        </Typography>
        <Typography
          placeholder={""}
          variant="paragraph"
          style={{ display: "-webkit-box" }}
          className={`${ProductSans4.className} h-2 max-w-[90%] w-full bg-gray-300 rounded-full text-[15px] line-clamp-2 md:text-[17px] lg:text-[19px] text-[#303030] text-left mt-2`}
        >
          &nbsp;
        </Typography>
        <Typography
          placeholder={""}
          variant="paragraph"
          style={{ display: "-webkit-box" }}
          className={`${ProductSans4.className} h-2 max-w-[90%] w-full bg-gray-300 rounded-full text-[15px] line-clamp-2 md:text-[17px] lg:text-[19px] text-[#303030] text-left mt-2`}
        >
          &nbsp;
        </Typography>
      </CardBody>
      <CardFooter placeholder={""} className="pt-0">
        <Button placeholder={""} className="h-8 max-w-20 w-full">
          {" "}
          &nbsp;
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkeletonBlog;
