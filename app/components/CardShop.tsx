"use client";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { ProductType } from "../interface/interface";

type Props = {
  name: string;
  starts: number;
  price: string;
  img: any;
  id: number;

  datas: any;
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

function CardShop({ name, starts, price, img, id, datas }: Props) {
  const [data, setData] = React.useState<ProductType[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("liked") as string) || []
      : []
  );

  const stars: number[] = Array.from(
    { length: starts },
    (_, index) => index + 1
  );
  const lstar = 5 - stars.length;
  const stars2: number[] = Array.from(
    { length: lstar },
    (_, index) => index + 1
  );

  const editeData = (e: any) => {
    const isExitINData = data.find((c: any) => c.id === e?.id);

    if (isExitINData) {
      const updatedData = data.filter((product: any) => product.id !== e?.id);
      setData(updatedData);
      localStorage.setItem("liked", JSON.stringify(updatedData));
    } else {
      const data58 = [...data, { ...e, liked: true }];
      localStorage.setItem("liked", JSON.stringify(data58));
      setData(data58);
    }
  };

  return (
    <Card
      // gap-[9px] sm:gap-[12px] md:gap-[15px]
      placeholder={""}
      className="card-content shadow-lg flex flex-col items-center  w-[200px] sm:w-[200px] md:w-[245px] lg:w-auto"
    >
      <CardHeader placeholder={""} floated={false} color="blue-gray">
        <Link href={{ pathname: `/shop/${id}` }}>
          <Image
            src={img[1].img}
            alt=""
            loading="lazy"
            width={275}
            height={266}
          />
        </Link>
        {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
        <IconButton
          placeholder={""}
          size="sm"
          color={data.find((like: any) => like.id === id) ? "red" : "blue-gray"}
          variant="text"
          onClick={() => {
            editeData(datas);
          }}
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody placeholder={""} className="w-full">
        <div className="content-div flex flex-wrap gap-2 justify-between">
          <Typography
            placeholder={""}
            variant="paragraph"
            style={{ display: "-webkit-box" }}
            color="blue-gray"
            className={`font-medium ${ProductSans7.className} text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] text-[#000000] line-clamp-1 max-w-[110px] md:max-w-[274px] w-max`}
          >
            {name}
          </Typography>
          <Typography
            placeholder={""}
            variant="paragraph"
            color="blue-gray"
            className={`font-medium ${ProductSans7.className} text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] text-[#000000] line-clamp-2 max-w-[274px] w-max`}
          >
            ${price}
          </Typography>
          <div className="stars-div flex gap-[3px] md:gap-1 lg:gap-2 w-full">
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
      </CardBody>
      <CardFooter placeholder={""} className="w-full">
        <Link href={{ pathname: `/shop/${id}` }}>
          <Button
            placeholder={""}
            size="md"
            fullWidth={true}
            className="font-bold"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardShop;
