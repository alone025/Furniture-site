"use client";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import LikedCard from "./likedCard";
import { ProductType } from "@/app/interface/interface";

// Fonts
const ProductSans4 = localFont({
  src: "../../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {};

const Page = (props: Props) => {
  const [data, setData] = React.useState<ProductType[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("liked") as string) || []
      : []
  );
  const removeProduct = (id: number) => {
    const updatedCart = data.filter((product: any) => product.id !== id);
    localStorage.setItem("liked", JSON.stringify(updatedCart));
    setData(updatedCart);
  };

  return (
    <div className="liked-page-current pt-[86px] pb-[65px] px-6 2xl:px-14">
      <div className="route-tab pt-[10px] md:pt-3 lg:pt-5">
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
            <span>Favorites</span>
          </Link>
        </Breadcrumbs>
      </div>
      {data.length === 0 ? (
        <></>
      ) : (
        <div className="secret-word-opened-when liked have value">
          <h1
            className={`${ProductSans7.className} pt-3 text-center text-[25px] lg:text-[30px] 2xl:text-[35px]`}
          >
            Favorites
          </h1>
        </div>
      )}
      <div className="content-secliked so we-started it mt-5 lg:mt-6 border-t-[1px] border-t-[#c4c4c4] pt-10 lg:pt-[60px]">
        {data.length === 0 ? (
          <>
            <div className="lg-t">
              <h1
                className={`${ProductSans7.className} text-center text-[25px] lg:text-[30px] 2xl:text-[35px]`}
              >
                There are no favorites yet
              </h1>
            </div>
            <div className="btls-a flex items-center justify-center">
              <Link href="/">
                <Button
                  placeholder={""}
                  className="mt-10 bg-[#404040] rounded-[4px] normal-case font-bold tracking-wider w-full max-w-[185px] lg:max-w-[240px] 2xl:max-w-[300px]"
                >
                  Return to home
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="cards-content flex flex-wrap justify-center gap-6 lg:gap-8">
            {data.map((c, lc) => (
              <LikedCard key={lc} dats={c} onl={removeProduct} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
