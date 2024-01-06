import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

// Images
import nextI from "@/public/arrow-right2.svg";
import prevI from "@/public/arrow-left.svg";

type Props = {
  data: any;
  set: any;
};

function Pagination({ data, set }: Props) {
  const stars: number[] = Array.from(
    { length: data.total_pages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination flex justify-center items-center flex-col">
      <p
        className={`${ProductSans4} text-[14px] md:text-[16px] lg:text-[18px] text-[#000] flex gap-2 md:gap-4 lg:gap-6`}
      >
        <span className="flex items-center">
          {data.total_pages == null ||
          data.total_pages == 1 ||
          data.total_pages == 0 ||
          data.length ? null : (
            <>
              {data.remaining_count == 0 ? (
                <Image
                  src={prevI}
                  alt=""
                  loading="lazy"
                  className="w-[18px] md:w-[20px] lg:w-[24px] cursor-pointer"
                  onClick={() => {
                    set(data.remaining_count),
                      console.log(data.remaining_count);
                  }}
                />
              ) : null}
            </>
          )}
        </span>
        {stars.map((c, lc) => (
          <span
            className="cursor-pointer border-solid border-[1px] rounded-[10px] p-2 "
            key={lc}
            onClick={() => {
              set(c);
            }}
          >
            {c}
          </span>
        ))}
        <span className="flex items-center">
          {data.total_pages == null ||
          data.total_pages == 1 ||
          data.total_pages == 0 ||
          data.length ? null : (
            <>
              {data.remaining_count == 0 ? null : (
                <Image
                  src={nextI}
                  alt=""
                  loading="lazy"
                  className="w-[18px] md:w-[20px] lg:w-[24px] cursor-pointer"
                  onClick={() => {
                    set(data.remaining_count),
                      console.log(data.remaining_count);
                  }}
                />
              )}
            </>
          )}
        </span>
      </p>
      {/* {data.total_pages == null ||
      data.total_pages == 1 ||
      data.total_pages == 0 ||
      data.length ? null : (
        <p
          className={`${ProductSans4} text-[15px] md:text-[17px] lg:text-[19px] text-[#6B6B6B] mt-1`}
        >
          view all
        </p>
      )} */}
    </div>
  );
}

export default Pagination;
