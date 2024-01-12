"use client";
import Image from "next/image";
import React from "react";
import { CardHeader } from "@material-tailwind/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  data: any;
  loading: any;
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Thumbs } from "swiper/modules";
import SwiperCore from "swiper/core";
SwiperCore.use([FreeMode, Thumbs]);

export default function ImageSwitcher({ data, loading }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore | null>(
    null
  );

  return (
    <div className="imageSwitcher">
      <div className="swipper-side">
        <Swiper
          cssMode={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {loading ? (
            <SwiperSlide>
              <CardHeader
                placeholder={""}
                shadow={false}
                floated={false}
                className="relative grid h-full place-items-center bg-gray-300 animate-pulse"
              >
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
            </SwiperSlide>
          ) : (
            <>
              {data?.map((c: any, lc: any) => {
                return (
                  <SwiperSlide key={lc}>
                    <Image src={c.img} alt="" width={275} height={266} />
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
        <Swiper
          cssMode={true}
          direction={"vertical"}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {loading ? (
            <>
              {[1, 2, 3].map((c, lc) => (
                <SwiperSlide key={c}>
                  <CardHeader
                    placeholder={""}
                    shadow={false}
                    floated={false}
                    className="relative grid h-full w-full place-items-center bg-gray-300 animate-pulse"
                  >
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
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {data?.map((c: any, lc: any) => {
                return (
                  <SwiperSlide key={lc}>
                    <Image src={c.img} alt="" width={275} height={266} />
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}
