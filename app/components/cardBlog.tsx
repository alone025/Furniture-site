import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

import Imagea from "@/public/Rectangle43.png";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {
  data: any;
};

export default function CardBlog({ data }: Props) {
  return (
    <Card
      placeholder={""}
      className="cardBlog-content flex flex-col max-w-[300px] 2xl:max-w-[450px] w-full sm:max-w-max sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[330px] 2xl:w-[430px]"
    >
      <CardHeader placeholder={""} color="blue-gray">
        <Image src={data.image} alt="" width={402} height={364} />
      </CardHeader>
      <CardBody placeholder={""}>
        <Typography
          placeholder={""}
          variant="paragraph"
          className={`${ProductSans4.className} text-[13px] md:text-[15px] lg:text-[17px] text-[#9E9E9E] text-left`}
        >
          {data.data}
        </Typography>
        <Typography
          placeholder={""}
          variant="paragraph"
          style={{ display: "-webkit-box" }}
          className={`${ProductSans4.className} text-[15px] line-clamp-2 md:text-[17px] lg:text-[19px] text-[#303030] text-left mt-2`}
        >
          {data.title}
        </Typography>
      </CardBody>
      <CardFooter placeholder={""} className="pt-0">
        <Link href={{ pathname: `/blog/${data.id}` }}>
          <Button placeholder={""}>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
