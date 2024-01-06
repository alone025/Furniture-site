import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

// Images
import star from "@/public/star.png";
import star2 from "@/public/star2.png";

// Fonts

const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  img: any;
  name: any;
  rating: any;
  id: any;
};

function Rpcard({ img, name, rating, id }: Props) {
  const stars: number[] = Array.from(
    { length: rating },
    (_, index) => index + 1
  );
  const lstar = 5 - stars.length;
  const stars2: number[] = Array.from(
    { length: lstar },
    (_, index) => index + 1
  );

  return (
    <Link href={{ pathname: `/shop/${id}` }}>
      <div className="rpcard-content flex flex-col justify-center items-center w-[250px] md:w-[280px] lg:w-[310px] xl:w-[330px] 2xl:w-auto ">
        <Image src={img[0].img} alt="" width={275} height={266} />
        <h5
          className={`${ProductSans7.className} text-[#000000] text-[15px] md:text-[17px] xl:text-[19px] mt-3 md:mt-5 xl:mt-8`}
        >
          {name}
        </h5>
        <div className="stars mt-[11px] md:mt-[13px] xl:mt-[15px] flex gap-[3px] md:gap-1 lg:gap-2">
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
      </div>
    </Link>
  );
}

export default Rpcard;
