"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import localFont from "next/font/local";
import { ProductType } from "../interface/interface";

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
  data: ProductType;
  loading: any;
};

export default function Cardshopabout({ data, loading }: Props) {
  const producta = data;
  const [index, setIndex] = React.useState(1);
  const [liked, setLiked] = React.useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("liked") as string) || []
      : []
  );

  const [product, setProduct] = React.useState<ProductType>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value >= 100) {
        setIndex(100);
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

  const addToCard = (e: any) => {
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];

    const isExistProduct = products.find((c) => c.id === product?.id);

    if (isExistProduct) {
      const updatedData = products.map((c) => {
        if (c.id === product?.id) {
          return {
            ...c,
            quanity: c.quanity + e,
          };
        }

        return c;
      });

      localStorage.setItem("carts", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...product, quanity: e }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
  };

  const addToLiked = (e: any) => {
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("liked") as string) || [];

    const isExistProduct = products.find((c) => c.id === e?.id);

    if (isExistProduct) {
      const updatedData = products.filter(
        (product: any) => product.id !== e?.id
      );

      localStorage.setItem("liked", JSON.stringify(updatedData));
      setLiked(updatedData);
    } else {
      const data58 = [...products, { ...e, liked: true }];
      localStorage.setItem("liked", JSON.stringify(data58));

      setLiked(data58);
    }
  };

  useEffect(() => {
    setProduct(producta);
  }, [producta]);

  return (
    <div className="cardshopabout-sec md:sticky md:top-[90px] ">
      <div className="top-sec">
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="h1"
            className="mb-4 h-3 max-w-56 w-full rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <h4
            className={`${ProductSans7.className} text-[26px] md:text-[28px] lg:text-[30px] text-[#2B2B2B]`}
          >
            {data.title}
          </h4>
        )}
        <div className="stars-div mt-[12px] md:mt-[13px] lg:mt-[15px] flex gap-[3px] md:gap-1 lg:gap-2">
          {!loading ? (
            <>
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
            </>
          ) : (
            <Button
              placeholder={""}
              disabled
              tabIndex={-1}
              className="h-1 max-w-20 w-full bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          )}
        </div>
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="paragraph"
            className="mb-4 h-3 max-w-20 w-full rounded-full bg-gray-300 mt-[15px] md:mt-[17px] lg:mt-[20px] "
          >
            &nbsp;
          </Typography>
        ) : (
          <p
            className={`${ProductSans7.className} mt-[15px] md:mt-[17px] lg:mt-[20px] text-[15px] md:text-[16px] lg:text-[18px] text-[#323232]`}
          >
            <span className="text-[14px] text-[#646464] line-through mr-4">
              ${data.lastprice}.00
            </span>
            ${data.price}.00
          </p>
        )}
      </div>
      <div className="description-sec mt-[15px] md:mt-[20px] lg:mt-[30px]">
        {loading ? (
          <>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full max-w-md rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              placeholder={""}
              variant="paragraph"
              className="mb-2 h-2 w-full max-w-md rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full max-w-md rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              placeholder={""}
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full max-w-md rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </>
        ) : (
          <p
            className={`${ProductSans4.className} text-[15px] mg:text-[16px] lg:text-[18px] text-[#9B9B9B]`}
          >
            {data.description}
            {/* Max length 164 */}
          </p>
        )}
      </div>
      <div className="add-to-card gap-11 flex mt-6 md:mt-8 lg:mt-10">
        {loading ? (
          <Button
            placeholder={""}
            disabled
            tabIndex={-1}
            className="h-14 max-w-36 w-full bg-gray-300 shadow-none hover:shadow-none"
          >
            &nbsp;
          </Button>
        ) : (
          <div className="input-tab relative flex items-center">
            <input
              type="phone"
              value={index}
              onChange={handleInputChange}
              className={`${ProductSans4.className} text-[#8D8D8D] text-[15px] md:text-[17px] lg:text-[19px] text-center py-[10px] min-w-[72px] max-w-[150px] w-full rounded-[10px] border-[1px] border-solid border-[#A3A3A3] outline-none`}
            />
            <span
              className="absolute w-[19px] left-1 cursor-pointer"
              onClick={() => {
                index == 1 ? null : setIndex(index - 1);
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
              className="absolute w-[19px] right-1 cursor-pointer"
              onClick={() => {
                index == 100 ? null : setIndex(index + 1);
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
        )}

        {loading ? (
          <Button
            placeholder={""}
            disabled
            tabIndex={-1}
            className="h-14 max-w-36 w-full bg-gray-300 shadow-none hover:shadow-none"
          >
            &nbsp;
          </Button>
        ) : (
          <Button
            placeholder=""
            size="md"
            onClick={() => {
              addToCard(index);
            }}
            className={`${ProductSans4.className} whitespace-nowrap text-[15px] md:text-[17px] lg:text-[19px] text-[#F4F4F4] normal-case font-normal rounded-[13px]`}
          >
            Add to card
          </Button>
        )}
      </div>
      <div className="liked-sec flex gap-[15px] md:gap-[17px] lg:gap-[19px] items-center mt-[17px] md:mt-[20px] lg:mt-[30px]">
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="paragraph"
            className="h-5 w-5 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <>
            {liked.find((like: any) => like.id === data.id) ? (
              <Image
                src={heart2}
                alt=""
                onClick={() => {
                  addToLiked(data);
                }}
                className="w-[17px] md:w-[19px] lg:w-[21px] h-[17px] md:h-[19px] lg:h-[21px] cursor-pointer"
              />
            ) : (
              <Image
                src={heart}
                alt=""
                onClick={() => {
                  addToLiked(data);
                }}
                className="w-[17px] md:w-[19px] lg:w-[21px] h-[17px] md:h-[19px] lg:h-[21px] cursor-pointer"
              />
            )}
          </>
        )}
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="paragraph"
            className="h-5 w-28 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <>
            {liked.find((like: any) => like.id === data.id) ? (
              <p
                className={`${ProductSans4.className} text-15px md:text-[16px] lg:text-[18px] text-[#9B9B9B] cursor-pointer`}
                onClick={() => {
                  addToLiked(data);
                }}
              >
                Delete from wishlist
              </p>
            ) : (
              <p
                className={`${ProductSans4.className} text-15px md:text-[16px] lg:text-[18px] text-[#9B9B9B] cursor-pointer`}
                onClick={() => {
                  addToLiked(data);
                }}
              >
                Add to wishlist
              </p>
            )}
          </>
        )}
      </div>
      <div className="category-sec mt-5 md:mt-7 lg:mt-10">
        <ul className="flex flex-col gap-[11px] md:gap-[13px] lg:gap-[15px]">
          {loading ? (
            <>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="h-4 w-16 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="h-4 w-16 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={""}
                as="div"
                variant="paragraph"
                className="h-4 w-16 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
