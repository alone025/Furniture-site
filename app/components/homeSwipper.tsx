import React from "react";
import localFont from "next/font/local";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Swipper modules
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

// Fonts
// Fonts
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {};

export default function HomeSwipper({}: Props) {
  const data = [
    {
      nm: "Pablo Picasso",
      wr: "Artist",
      dc: "Every child is an artist, the problem is staying an artist when you grow up",
    },
    {
      nm: "Billie Eilish",
      wr: "Songer",
      dc: "There are always going to be bad things. But you can write it down and make a song out of it’.",
    },
    {
      nm: "Elon Musk",
      wr: "Seo of Tesla",
      dc: "You want to have a future where you're expecting things to be better, not one where you're expecting things to be worse.",
    },
  ];

  return (
    <div className="swipper-slide-content bg-[#EFEFEF] pt-14 md:pt-20 lg:pt-24 pb-14">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((c, lc) => (
          <SwiperSlide
            key={lc}
            className="flex flex-col justify-center items-center bg-[#EFEFEF]"
            style={{ display: "flex" }}
          >
            <p
              className={`${ProductSans7.className} text-[80px] md:text-[104px] text-[#2E2E2E] relative top-6 leading-[80px]`}
            >
              “
            </p>
            <p
              className={`${ProductSans4.className} text-[15px] md:text-[17px] lg:text-[20px] text-[#ABABAB] mb-4 max-w-[430px] w-full text-center`}
            >
              {c.dc}
            </p>
            <h4
              className={`${ProductSans7.className} text-[17px] md:text-[19px] lg:text-[21px] text-[#2E2E2E] mb-2`}
            >
              {c.nm}
            </h4>
            <p
              className={`${ProductSans4.className} text-[15px] text-[#2E2E2E] `}
            >
              {c.wr}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
