"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import localFont from "next/font/local";

// Images
import star from "@/public/star.png";
import star2 from "@/public/star2.png";
import heart from "@/public/heart_1.png";
import heart2 from "@/public/heart-2.png";
import nexticon from "@/public/arr-right.svg";
import previcon from "@/public/arrow-left.svg";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  data: any;
};

export default function Cardshopabout({ data }: Props) {
  const [index, setIndex] = React.useState(1);
  const [liked, setLiked] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value >= 10) {
        setIndex(10);
      } else if (value <= 1) {
        setIndex(1);
      } else {
        setIndex(value);
      }
    }
  };

  const stars: number[] = Array.from(
    { length: data.rating },
    (_, index) => index + 1
  );
  const lstar = 5 - stars.length;
  const stars2: number[] = Array.from(
    { length: lstar },
    (_, index) => index + 1
  );

  return (
    <div className="cardshopabout-sec">
      <div className="top-sec">
        <h4
          className={`${ProductSans7.className} text-[26px] md:text-[28px] lg:text-[30px] text-[#2B2B2B]`}
        >
          {data.title}
        </h4>
        <div className="stars-div mt-[12px] md:mt-[13px] lg:mt-[15px] flex gap-[3px] md:gap-1 lg:gap-2">
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
          className={`${ProductSans7.className} mt-[15px] md:mt-[17px] lg:mt-[20px] text-[15px] md:text-[16px] lg:text-[18px] text-[#323232]`}
        >
          ${data.price}
        </p>
      </div>
      <div className="description-sec mt-[15px] md:mt-[20px] lg:mt-[30px]">
        <p
          className={`${ProductSans4.className} text-[15px] mg:text-[16px] lg:text-[18px] text-[#9B9B9B]`}
        >
          {data.description}
          {/* Max length 164 */}
        </p>
      </div>
      <div className="add-to-card gap-11 flex mt-6 md:mt-8 lg:mt-10">
        <div className="input-tab relative flex items-center">
          <input
            type="number"
            value={index}
            onChange={handleInputChange}
            className={`${ProductSans4.className} text-[#8D8D8D] text-[15px] md:text-[17px] lg:text-[19px] text-center py-[10px] min-w-[72px] max-w-[150px] w-full rounded-none border-[1px] border-solid border-[#A3A3A3] outline-none`}
          />
          <span
            className="absolute w-[19px]"
            onClick={() => {
              index == 1 ? setIndex(1) : setIndex(index - 1);
            }}
          >
            <Image
              src={previcon}
              alt=""
              className="w-[19px] h-[19px]"
              loading="lazy"
            />
          </span>
          <span
            className="absolute w-[19px] right-0"
            onClick={() => {
              index == 10 ? setIndex(10) : setIndex(index + 1);
            }}
          >
            <Image
              src={nexticon}
              alt=""
              className="w-[19px] h-[19px]"
              loading="lazy"
            />
          </span>
        </div>
        <Button
          placeholder=""
          size="md"
          onClick={() => {
            console.log(index);
          }}
          className={`${ProductSans4.className}  text-[15px] md:text-[17px] lg:text-[19px] text-[#F4F4F4] normal-case font-normal rounded-none`}
        >
          Add to card
        </Button>
      </div>
      <div className="liked-sec flex gap-[15px] md:gap-[17px] lg:gap-[19px] items-center mt-[17px] md:mt-[20px] lg:mt-[30px]">
        {liked ? (
          <Image
            src={heart2}
            alt=""
            onClick={() => {
              setLiked(!liked);
            }}
            className="w-[17px] md:w-[19px] lg:w-[21px] h-[17px] md:h-[19px] lg:h-[21px] cursor-pointer"
          />
        ) : (
          <Image
            src={heart}
            alt=""
            onClick={() => {
              setLiked(!liked);
            }}
            className="w-[17px] md:w-[19px] lg:w-[21px] h-[17px] md:h-[19px] lg:h-[21px] cursor-pointer"
          />
        )}
        <p
          className={`${ProductSans4.className} text-15px md:text-[16px] lg:text-[18px] text-[#9B9B9B] cursor-pointer`}
          onClick={() => {
            setLiked(!liked);
          }}
        >
          Add to wishlist
        </p>
      </div>
      <div className="category-sec mt-5 md:mt-7 lg:mt-10">
        <ul className="flex flex-col gap-[11px] md:gap-[13px] lg:gap-[15px]">
          <li
            className={`${ProductSans4.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#9B9B9B]`}
          >
            Sku: {data.id < 10 ? `0${data.id}` : data.id}
          </li>
          <li
            className={`${ProductSans4.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#9B9B9B]`}
          >
            Category: {data.category}
          </li>
          <li
            className={`${ProductSans4.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#9B9B9B]`}
          >
            Tags: <span className="underline">{data.tags}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
