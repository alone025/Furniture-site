import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

import Imagea from "@/public/Rectangle43.png";
import Link from "next/link";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {
  data: string;
  name: string;
};

export default function CardBlog({ data, name }: Props) {
  return (
    <div className="cardBlog-content flex flex-col items-center max-w-[300px] w-full sm:max-w-max sm:w-[280px]  md:w-[300px] lg:w-[350px] xl:w-auto">
      <Image src={Imagea} alt="" />
      <div className="data mt-[8px] md:mt-[10px] lg:mt-3 xl:mt-5">
        <p
          className={`${ProductSans4.className} text-[15px] md:text-[17px] lg:text-[19px] text-[#9E9E9E] text-center`}
        >
          {data}
        </p>
      </div>
      <p
        className={`${ProductSans4.className} text-[15px]  md:text-[17px] lg:text-[19px] text-[#303030] text-center mt-[8px] md:mt-[11px] lg:mt-[14px]`}
      >
        {name}
      </p>
      <p
        className={`${ProductSans4.className} text-[15px] md:text-[17px] lg:text-[19px] text-[#303030] text-center mt-[9px] md:mt-3 lg:mt-5 cursor-pointer hover:underline`}
      >
        Read more
      </p>
      {/* <Link href={{ pathname: "/shop/akula" }}>heyyo</Link> */}
    </div>
  );
}
