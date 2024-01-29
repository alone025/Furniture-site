import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

type Props = {};

function LoaderRp({}: Props) {
  return (
    <div className="loading-sec flex flex-wrap gap-5 xl:gap-3 2xl:gap-6 justify-center">
      {[1, 2, 3, 4].map((c, lc) => (
        <Card
          key={lc}
          placeholder=""
          className="mt-6 w-[250px] md:w-[280px] lg:w-[310px] xl:w-[330px] 2xl:w-auto 2xl:min-w-[310px] animate-pulse"
        >
          <CardHeader
            placeholder={""}
            shadow={false}
            floated={false}
            className="relative grid h-56 place-items-center bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] 2xl:w-auto text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardBody
            placeholder={""}
            className="text-center flex justify-center"
          >
            <Typography
              placeholder={""}
              as="div"
              variant="h1"
              className="mb-1 h-4 w-[180px] md:w-[210px] lg:w-[230px] xl:w-[250px] 2xl:w-auto rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </CardBody>
          <CardFooter placeholder={""} className="pt-0 text-center">
            <Button
              placeholder={""}
              disabled
              tabIndex={-1}
              className="h-5 w-[100px] md:w-[130px] lg:w-[160px] xl:w-[180px] 2xl:w-auto 2xl:min-w-[200px] bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default LoaderRp;
