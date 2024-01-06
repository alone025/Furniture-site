"use client";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

type Props = {
  name: string;
  starts: number;
  price: string;
  img: any;
  id: number;
};

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

// Images
import star from "@/public/star.png";
import star2 from "@/public/star2.png";
import soft from "@/public/Rectangle27.png";

function CardShop({ name, starts, price, img, id }: Props) {
  const stars: number[] = Array.from(
    { length: starts },
    (_, index) => index + 1
  );
  const lstar = 5 - stars.length;
  const stars2: number[] = Array.from(
    { length: lstar },
    (_, index) => index + 1
  );

  return (
    <Link href={{ pathname: `/shop/${id}` }}>
      <div className="card-content flex flex-col items-center gap-[9px] sm:gap-[12px] md:gap-[15px] w-[190px] sm:w-[200px] md:w-[245px] lg:w-auto">
        <Image
          src={img[0].img}
          alt=""
          loading="lazy"
          width={275}
          height={266}
        />
        <p
          className={`${ProductSans7.className} text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] text-[#000000] line-clamp-2 max-w-[274px] w-full`}
        >
          {name}
        </p>
        <div className="stars-div flex gap-[3px] md:gap-1 lg:gap-2">
          {stars.map((c, lk) => (
            <Image
              src={star}
              alt=""
              key={lk}
              className="w-[10px] sm:w-[12px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px]"
            />
          ))}
          {stars.length < 5 &&
            stars2.map((c, lk) => (
              <Image
                src={star2}
                alt=""
                key={lk}
                className="w-[10px] sm:w-[12px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px]"
              />
            ))}
        </div>
        <p
          className={`${ProductSans4.className} text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] text-[#6B6B6B]`}
        >
          ${price}
        </p>
      </div>
    </Link>
  );
}

export default CardShop;
