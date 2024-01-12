"use client";

import React from "react";
import ImageSwitcher from "@/app/components/imageSwitcher";
import localFont from "next/font/local";
import Cardshopabout from "@/app/components/cardshopabout";
import Rpcard from "@/app/components/rpcard";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import LoaderRp from "./loaderRp";

// Fonts
const ProductSans4 = localFont({
  src: "../../../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../../../public/Fonts/Product Sans Bold.ttf",
});

export default function Page({ params }: { params: { slug: number } }) {
  const [cardData, setCardData] = React.useState<any>([]);
  const [imgs, setImages] = React.useState([]);
  const [recCard, setRecCard] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);

  React.useEffect(() => {
    dataProducts();
    setLoading(true);
    recProducts();
    setLoading2(true);
  }, [!cardData, !recCard]);

  function dataProducts() {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/products/${params.slug}`,
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setLoading(false);
        console.log(response.data);
        setCardData(response.data);
        setImages(response.data.images);
      })
      .catch(function (error: any) {
        console.error(error);
        dataProducts();
        setLoading(true);
      });
  }

  function recProducts() {
    setLoading2(true);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/products`,
      params: {
        _select: "title,images,id,rating",
      },
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        console.log(
          response.data.slice(params.slug - 1 + 2, params.slug - 1 + 6)
        );
        setLoading2(false);
        if (params.slug > 8) {
          setRecCard(response.data.slice(params.slug - 5, params.slug - 1));
        } else {
          setRecCard(
            response.data.slice(params.slug - 1 + 2, params.slug - 1 + 6)
          );
          console.log(recCard);
        }
      })
      .catch(function (error: any) {
        console.error(error);
        recProducts();
        setLoading2(true);
      });
  }

  return (
    <div className="card-content pt-[86px] px-6 2xl:px-14">
      <div className="route-tab pt-[10px] md:pt-3 lg:pt-5">
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="h1"
            className="mb-4 h-3 max-w-20 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <p
            className={`${ProductSans4.className} text-[16px] md:text-[18px] text-[#7E7E7E]`}
          >
            <Link href="/shop" className="cursor-pointer">
              shop
            </Link>{" "}
            / {cardData.title}
          </p>
        )}
      </div>
      <div className="content-shopcard pt-[30px] md:pt-[45px] lg:pt-[56px] pb-[70px] flex flex-col md:flex-row gap-[20px] lg:gap-[50px]">
        <div className="left-content">
          <ImageSwitcher data={imgs} loading={loading} />
        </div>
        <div className="right-content max-w-[1000px] w-full">
          <Cardshopabout data={cardData} loading={loading} />
        </div>
      </div>
      <div className="btm-content mb-[55px] md:mb-[75px]">
        <div className="logo-content mb-[30px] md:mb-[40px] lg:mb-[50px]">
          <h4
            className={`${ProductSans7.className} text-[20px] sm:text-[23px] md:text-[25px] lg:text-[30px] text-[#2B2B2B]`}
          >
            Related products
          </h4>
        </div>
        <div className="content-sec flex flex-wrap justify-center gap-5 xl:gap-3 2xl:gap-6">
          {loading ? (
            <div className="loading-page">
              <LoaderRp />
            </div>
          ) : (
            <>
              {recCard.map((ee: any) => (
                <Rpcard
                  key={ee.id}
                  name={ee.title}
                  img={ee.images}
                  id={ee.id}
                  rating={ee.rating}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
