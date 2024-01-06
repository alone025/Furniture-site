"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ImageSwitcher from "@/app/components/imageSwitcher";
import localFont from "next/font/local";
import Cardshopabout from "@/app/components/cardshopabout";
import Rpcard from "@/app/components/rpcard";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

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

  React.useEffect(() => {
    dataProducts();
    recProducts();
  }, [!cardData, !recCard]);

  function dataProducts() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/products/${params.slug}`,
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        console.log(response.data);
        setCardData(response.data);
        setImages(response.data.images);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  function recProducts() {
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
        console.log(response.data.slice(params.slug - 1, params.slug - 1 + 4));
        if (params.slug > 8) {
          setRecCard(response.data.slice(params.slug - 5, params.slug - 1));
        } else {
          setRecCard(response.data.slice(params.slug - 1, params.slug - 1 + 4));
          console.log(recCard);
        }
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  return (
    <div className="card-content pt-[86px] px-6 2xl:px-14">
      <div className="route-tab pt-[10px] md:pt-3 lg:pt-5">
        <p
          className={`${ProductSans4.className} text-[16px] md:text-[18px] text-[#7E7E7E]`}
        >
          shop / {cardData.title}
        </p>
      </div>
      <div className="content-shopcard pt-[30px] md:pt-[45px] lg:pt-[56px] pb-[70px] flex flex-col md:flex-row gap-[20px] lg:gap-[50px]">
        <div className="left-content">
          <ImageSwitcher data={imgs} />
        </div>
        <div className="right-content max-w-[1000px] w-full">
          <Cardshopabout data={cardData} />
        </div>
      </div>
      <div className="btm-content mb-[75px]">
        <div className="logo-content mb-[30px] md:mb-[40px] lg:mb-[50px]">
          <h4
            className={`${ProductSans7.className} text-[20px] sm:text-[23px] md:text-[25px] lg:text-[30px] text-[#2B2B2B]`}
          >
            Related products
          </h4>
        </div>
        <div className="content-sec flex flex-wrap justify-center gap-5 xl:gap-3 2xl:gap-6">
          {recCard.map((ee: any) => (
            <Rpcard
              key={ee.id}
              name={ee.title}
              img={ee.images}
              id={ee.id}
              rating={ee.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
