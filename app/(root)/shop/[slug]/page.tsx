"use client";

import React from "react";
import ImageSwitcher from "@/app/components/imageSwitcher";
import localFont from "next/font/local";
import Cardshopabout from "@/app/components/cardshopabout";
import Rpcard from "@/app/components/rpcard";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
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
        setCardData(response.data);
        setImages(response?.data.images);
        setLoading(false);
      })
      .catch(function (error: any) {
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
        if (params.slug > 8) {
          setRecCard(response.data.slice(params.slug - 5, params.slug - 1));
          setLoading2(false);
        } else {
          setRecCard(
            response.data.slice(params.slug - 1 + 2, params.slug - 1 + 6)
          );
          setLoading2(false);
        }
      })
      .catch(function (error: any) {
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
            className="mb-4 h-4 max-w-40 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <Breadcrumbs placeholder={""}>
            <Link href="/" className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <Link href="/shop" className="cursor-pointer opacity-60">
              <span className={`${ProductSans4.className}`}>shop</span>
            </Link>
            <Link href="#">
              <span>{cardData.title}</span>
            </Link>
          </Breadcrumbs>
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
        <div className="content-sec flex overflow-x-auto scroll-auto gap-2 md:gap-5 xl:gap-3 2xl:gap-6 2xl:justify-center">
          {loading2 ? (
            <div className="loading-page">
              <LoaderRp />
            </div>
          ) : (
            <>
              {recCard?.map((ee: any) => (
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
