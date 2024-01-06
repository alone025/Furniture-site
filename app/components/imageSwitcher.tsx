"use client";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  data: any;
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

export default function ImageSwitcher({ data }: Props) {
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
          {data?.map((c: any, lc: any) => {
            return (
              <SwiperSlide key={lc}>
                <Image src={c.img} alt="" width={275} height={266} />
              </SwiperSlide>
            );
          })}
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
          {data?.map((c: any, lc: any) => {
            return (
              <SwiperSlide key={lc}>
                <Image src={c.img} alt="" width={275} height={266} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
