import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import localFont from "next/font/local";

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

const Comment = ({ data }: Props) => {
  return (
    <Card
      placeholder={""}
      color="transparent"
      shadow={false}
      className="w-full max-w-[24rem] min-w-[280px] sm:min-w-[320px] "
    >
      <CardHeader
        placeholder={""}
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-3 md:gap-4 pt-0 pb-6 md:pb-7 lg:pb-8"
      >
        <Avatar
          placeholder={""}
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt=""
          className="w-[48px] h-[48px] md:w-[58px] md:h-[58px]"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography
              placeholder={""}
              variant="h5"
              color="blue-gray"
              className={`${ProductSans7.className} text-[15px] md:text-[16px] lg:text-xl`}
            >
              {data.name}
            </Typography>
            <div className="5 flex items-center gap-0"></div>
          </div>
          <Typography
            placeholder={""}
            color="blue-gray"
            className={`${ProductSans4.className} text-[14px] md:text-[15px] lg:text-base `}
          >
            {data.email}
          </Typography>
        </div>
      </CardHeader>
      <CardBody placeholder={""} className="mb-6 p-0">
        <Typography
          placeholder={""}
          className={`${ProductSans4.className} text-[14px] md:text-[15px] lg:text-base`}
        >
          {data.description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default Comment;
