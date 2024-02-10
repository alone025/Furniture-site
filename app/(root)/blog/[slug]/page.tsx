"use client";

import { Breadcrumbs, Tooltip, Typography } from "@material-tailwind/react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Postcomment from "@/app/components/postcomment";
import Comment from "@/app/components/comment";

// import images
import heard from "@/public/heart_1.png";
import heard2 from "@/public/heart-2.png";
import comment from "@/public/comment.svg";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Fonts
const ProductSans4 = localFont({
  src: "../../../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../../../public/Fonts/Product Sans Bold.ttf",
});

export default function Page({ params }: { params: { slug: any } }) {
  const [loading, setLoading] = React.useState(true);
  const [cardData, setCardData] = React.useState<any>([]);

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    setLoading(true);
    dataBlogs();
  }, [!cardData]);

  function dataBlogs() {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs/${params.slug}`,
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setCardData(response.data);
        setLoading(false);
      })
      .catch(function (error: any) {
        dataBlogs();
        setLoading(true);
      });
  }

  const handleLike = () => {
    const likedByUser = cardData.liked.find((like: any) => like.id === token);
    if (likedByUser) {
      const updatedLikedBy = cardData.liked.filter(
        (id: any) => id.id !== token
      );
      setCardData({ ...cardData, liked: updatedLikedBy });

      sendtoData(updatedLikedBy);
    } else {
      const updatedLikedBy = [...cardData.liked, { id: token, liked: true }];
      setCardData({ ...cardData, liked: updatedLikedBy });
      sendtoData(updatedLikedBy);
    }
  };

  function sendtoData(e: any) {
    const options: AxiosRequestConfig = {
      method: "PATCH",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs/${params.slug}`,
      headers: { "Content-Type": "application/json" },
      data: {
        liked: e,
      },
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {})
      .catch(function (error: any) {
        setLoading(true);
      });
  }

  return (
    <div className="blog-slug-page pt-[86px] pb-[80px] md:pb-[100px] px-6 2xl:px-14">
      <div className="route-tab-blog pt-[10px] md:pt-3 lg:pt-5 line-clamp-1 w-full">
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="h1"
            className="mb-4 h-4 max-w-40 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <Breadcrumbs placeholder={""}>
            <Link href="/" className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <Link href="/blog" className="cursor-pointer opacity-60">
              <span className={`${ProductSans4.className}`}>blog</span>
            </Link>
            <Link href="#">
              <span className="line-clamp-1 max-w-[100px] w-full sm:max-w-[300px]">
                {cardData.title}
              </span>
            </Link>
          </Breadcrumbs>
        )}
      </div>
      <div className="header-picture mt-[50px]">
        {loading ? (
          <div className="grid max-w-[895px] w-full h-[474px] place-items-center rounded-lg bg-gray-300 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="max-h-12 max-w-12 w-full h-full text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        ) : (
          <Image
            src={cardData?.image}
            alt=""
            className="rounded-[5px]"
            width={895}
            height={474}
          />
        )}
        <div className={`bottom-picture mt-[20px]`}>
          {loading ? (
            <p className="h-3 w-[50%] bg-gray-300 rounded-full animate-pulse">
              &nbsp;
            </p>
          ) : (
            <p
              className={` ${ProductSans4.className} text-[11px] md:text-[13px] lg:text-[15px] text-[#898989] grid grid-cols-3 gap-y-2 md:gap-0 md:flex`}
            >
              <span className="pr-[10px] md:pr-[14px] border-r border-r-[#A4A4A4]">
                {cardData.data}
              </span>
              <span className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] border-r line-clamp-1 border-r-[#A4A4A4]">
                {cardData.type}
              </span>
              <span className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] border-r line-clamp-1 border-r-[#A4A4A4]">
                {cardData.owner}
              </span>
              <Tooltip content={`${cardData?.liked?.length} people liked it`}>
                <span
                  onClick={() => {
                    handleLike();
                  }}
                  className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] border-r border-r-[#A4A4A4] flex gap-3 items-center cursor-pointer"
                >
                  {cardData?.liked?.some(
                    (like: any) => like.id === token && like.liked
                  ) ? (
                    <Image
                      src={heard2}
                      alt=""
                      className="w-[14px] md:w-[16px]"
                    />
                  ) : (
                    <Image
                      src={heard}
                      alt=""
                      className="w-[14px] md:w-[16px]"
                    />
                  )}{" "}
                  {cardData?.liked?.length}
                </span>
              </Tooltip>
              <Tooltip
                content={`${cardData?.comment?.length} people wrote comment it`}
              >
                <span className="pr-[10px] md:pr-[14px] pl-[10px] md:pl-[14px] flex gap-3 items-center">
                  <Image
                    src={comment}
                    alt=""
                    className="w-[16px] md:w-[21px]"
                  />{" "}
                  {cardData?.comment?.length}
                </span>
              </Tooltip>
            </p>
          )}
        </div>
      </div>
      <div className="bottom-sec mt-[27px] pb-[70px] border-b-2  border-b-[#3F3F3F]">
        <div className="log-text">
          {loading ? (
            <h2 className="h-[18px] rounded-full bg-gray-300 animate-pulse w-[40%]">
              &nbsp;
            </h2>
          ) : (
            <h2
              className={`${ProductSans7.className} text-[20px] md:text-[25px] lg:text-[30px] text-[#2D2D2D]`}
            >
              {cardData.title}
            </h2>
          )}
        </div>
        <div className="dex-tab mt-[18px] md:mt-[22px] lg:mt-[27px]">
          {loading ? (
            <>
              <p className="h-2 w-[70%] bg-gray-300 animate-pulse rounded-full mb-2">
                &nbsp;
              </p>
              <p className="h-2 w-[70%] bg-gray-300 animate-pulse rounded-full mb-2">
                &nbsp;
              </p>
              <p className="h-2 w-[70%] bg-gray-300 animate-pulse rounded-full mb-2">
                &nbsp;
              </p>
            </>
          ) : (
            <p
              className={`${ProductSans4.className} max-w-[1465px] text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] text-[#898989]`}
            >
              {cardData.description}
            </p>
          )}
        </div>
      </div>
      <div className="counter0section mt-10">
        {loading ? (
          <div className="loading-content mb-20"></div>
        ) : (
          <>
            <div
              id="scrollbar"
              className="comments- flex overflow-x-auto w-full flex-row gap-10"
            >
              {cardData?.comment?.map((c: any, lc: any) => (
                <Comment
                  key={lc}
                  data={c}
                  cdata={cardData}
                  setAllData={setCardData}
                />
              ))}
            </div>
            <div className="post-comment mt-[100px]">
              <Postcomment cardData={cardData} setData={setCardData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
