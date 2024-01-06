"use client";
import { Option, Select } from "@material-tailwind/react";
import React from "react";
import localFont from "next/font/local";
import CardShop from "./CardShop";
import Pagination from "./pagination";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {
  lka: any;
  color: any;
  filterprice: any;
  searchValue: any;
};

const ShopCardCont = ({ lka, color, filterprice, searchValue }: Props) => {
  const [data, setData] = React.useState<any>([]);
  const [pgData, setPgData] = React.useState<any>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sort, setSort] = React.useState("");

  React.useEffect(() => {
    dataProducts(sort);
  }, [!data, currentPage, sort, lka, color, filterprice, searchValue]);

  const hndvl = (event: any) => {
    console.log(event);
    setSort(event);
  };

  console.log(color);

  const dataProducts = (e: string) => {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "https://2c57c2fe491dd2f3.mokky.dev/products",
      params: {
        _select: "title,price,images,id,rating",
        page: currentPage,
        limit: "8",
      },
    };

    if (sort) {
      options.params.sortBy = sort;
    } else {
      null;
    }

    if (lka !== "") {
      options.params.category = lka;
    } else {
      null;
    }

    if (color !== "") {
      options.params.color = color;
    } else {
      null;
    }

    if (searchValue !== "") {
      options.params.title = "*" + searchValue;
    } else {
      null;
    }

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        console.log(response.data);
        setData(response.data.items);
        setPgData(response.data.meta);
        if (filterprice !== 0) {
          const filteredCards = response.data.items.filter(
            (card: any) => card.price > 0 && card.price < filterprice
          );
          console.log(filteredCards);
          setData(filteredCards);
          setPgData(filteredCards);
        }
      })
      .catch(function (error: any) {
        console.error(error);
      });
  };

  function sortProducts(e: any) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/products`,
      params: {
        _select: "title,price,images,id,rating",
        sortBy: e,
        page: currentPage,
        limit: "8",
      },
    };
    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        console.log(response.data);
        setData(response.data.items);
        setPgData(response.data.meta);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  return (
    <div className="shopCardCont pt-[20px] sm:pt-[40px] lg:pt-[60px] px-3 sm:px-5 md:px-6 2xl:px-14">
      <div className="top-sec flex justify-between gap-3 flex-wrap items-center">
        <p
          className={`${ProductSans4.className} text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#7E7E7E]`}
        >
          Showing 1-9 of 57 results
        </p>
        <div className="select-dv  max-w-[200px] lg:max-w-[210px]">
          <Select
            placeholder=""
            variant="standard"
            color="gray"
            label="Select Sort"
            onChange={hndvl}
            className={`${ProductSans4.className} max-w-[170px] md:max-w-[180px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#7E7E7E]`}
          >
            <Option value="-rating">Sort by popularity</Option>
            <Option value="title">Sort by name</Option>
            <Option value="price">Sort by price</Option>
          </Select>
        </div>
      </div>
      <div className="content-sec mt-[55px] flex justify-center gap-[23px] md:gap-[33px] lg:gap-[43px] flex-wrap">
        {data.length == 0 ? (
          <div className="error-sec">
            <h3 className={`text-[18px] text-center`}>
              There are no products for this data
            </h3>
          </div>
        ) : (
          <>
            {data.map((g: any, lg: any) => (
              <CardShop
                price={g.price}
                name={g.title}
                starts={g.rating}
                img={g.images}
                key={lg}
                id={g.id}
              />
            ))}
          </>
        )}
      </div>
      <div className="pagination-sec mt-[52px] mb-[100px]">
        <Pagination data={pgData} set={setCurrentPage} />
      </div>
    </div>
  );
};

export default ShopCardCont;
