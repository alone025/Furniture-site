import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

import imga from "@/public/Rectangle15.png";
import Link from "next/link";
import { ProductType } from "@/app/interface/interface";

// Fonts
const ProductSans4 = localFont({
  src: "../../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  dats: any;
  onl: any;
};

export default function LikedCard({ dats, onl }: Props) {
  const addToCard = () => {
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];

    const isExistProduct = products.find((c) => c.id === dats?.id);

    if (isExistProduct) {
      const updatedData = products.map((c) => {
        if (c.id === dats?.id) {
          return {
            ...c,
            quanity: c.quanity + 1,
          };
        }

        return c;
      });

      localStorage.setItem("carts", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...dats, quanity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
  };

  return (
    <Card
      // gap-[9px] sm:gap-[12px] md:gap-[15px]
      placeholder={""}
      className="card-content shadow-lg flex flex-col items-center  w-[200px] sm:w-[200px] md:w-[245px] lg:w-auto"
    >
      <CardHeader placeholder={""} floated={false} color="blue-gray">
        <Link href={{ pathname: `/shop/${dats.id}` }}>
          <Image
            src={dats?.images[1].img}
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
          color={dats.liked ? "red" : "white"}
          variant="text"
          onClick={() => onl(dats.id)}
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
        <div className="content-div flex flex-col gap-2 justify-between">
          <Typography
            placeholder={""}
            variant="paragraph"
            style={{ display: "-webkit-box" }}
            color="blue-gray"
            className={`font-medium ${ProductSans7.className} text-[15px] md:text-[17px] lg:text-[19px] text-[#000000] line-clamp-1 max-w-[110px] md:max-w-[274px] w-max`}
          >
            {dats.title}
          </Typography>
          <Typography
            placeholder={""}
            variant="paragraph"
            color="blue-gray"
            className={`font-medium ${ProductSans7.className} text-[13px] md:text-[17px] lg:text-[19px] text-[#000000] line-clamp-1 max-w-[274px] w-max`}
          >
            ${dats.price}{" "}
            <span
              className={`${ProductSans4.className} ml-2 text-[11px] md:text-[15px] lg:text-[17px] line-through text-[#989898]`}
            >
              ${dats.lastprice}
            </span>
          </Typography>
        </div>
      </CardBody>
      <CardFooter placeholder={""} className="w-full">
        <Button
          placeholder={""}
          size="md"
          fullWidth={true}
          className="font-bold"
          onClick={() => addToCard()}
        >
          Add to basket
        </Button>
      </CardFooter>
    </Card>
  );
}
