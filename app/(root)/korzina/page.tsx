"use client";
import { Button } from "@material-tailwind/react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Rightcontbasket } from "@/app/components/rightcontbasket";
import FormControl from "@/app/components/formControl";
import KorzinaCard from "@/app/components/korzinaCard";
import { ProductType } from "@/app/interface/interface";
import Dialo from "@/app/components/dialog";

// Fonts
const ProductSans4 = localFont({
  src: "../../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../../public/Fonts/Product Sans Bold.ttf",
});

// Images
import bgKorzina from "@/public/bg-korzina.svg";

type Props = {};

const Page = (props: Props) => {
  const [data, setData] = React.useState<ProductType[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carts") as string) || []
      : []
  );
  const [open, setOpen] = React.useState<boolean>(false);

  const removeProduct = (id: number) => {
    const updatedCart = data.filter((product: any) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setData(updatedCart);
  };

  const pluse = (id: number) => {
    const updatedCart = data.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quanity: product.quanity + 1,
        };
      }

      return product;
    });

    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setData(updatedCart);
  };

  const minuse = (id: number) => {
    const existProduct = data.find((product) => product.id === id);

    if (existProduct?.quanity === 1) {
      null;
    } else {
      const updatedCart = data.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quanity: product.quanity - 1,
          };
        }

        return product;
      });

      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setData(updatedCart);
    }
  };

  const edite = (id: number, num: number) => {
    const updatedCart = data.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quanity: num,
        };
      }

      return product;
    });

    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setData(updatedCart);
  };

  return (
    <div className="korzina-page pt-[86px] pb-[65px] px-6 2xl:px-14">
      <div className="route-tab pt-[10px] md:pt-3 lg:pt-5">
        <p
          className={`${ProductSans4.className} text-[16px] md:text-[18px] text-[#7E7E7E]`}
        >
          <Link href="/shop" className="cursor-pointer">
            shop
          </Link>{" "}
          / Basket
        </p>
      </div>
      <div className="content-tab mt-[10px] ">
        {data.length === 0 ? (
          <div className="error-tab flex flex-col text-center bg-[#f5f3f1] py-[20px] px-[15px]">
            <h3
              className={`${ProductSans7.className} text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] mt-1 md:mt-2`}
            >
              Placing an order
            </h3>
            <h3
              className={`${ProductSans4.className} text-[14px] md:text-[16px] lg:text-[18px] mt-[7px] md:mt-[8px] lg:mt-[10px]`}
            >
              There are no items in your cart yet
            </h3>
            <Link href="/shop" className="mt-[18px] md:mt-[25px] lg:mt-[30px]">
              <Button
                placeholder={""}
                className={`${ProductSans7.className} py-2 md:py-3 px-3 md:px-6 bg-[#404040] rounded-[4px] normal-case font-bold tracking-wider  max-w-[150px] md:max-w-[180px] lg:max-w-[220px] w-full`}
              >
                Go to shopping
              </Button>
            </Link>
            <div className="img-tab mt-[60px] flex justify-center">
              <Image
                src={bgKorzina}
                alt=""
                className="h-[130px] md:h-[150px] lg:h-[180px] xl:h-[200px] 2xl:h-auto"
              />
            </div>
          </div>
        ) : (
          <div className="korzina-content-cards mt-[30px] flex flex-col-reverse lg:flex-row gap-10 2xl:gap-20 justify-between">
            <div className="left-content min-w-full md:min-w-[610px]">
              <div className="top-sec border-b-2 border-b-[#C8C9CB] flex justify-between pb-6 md:pb-8">
                <h4>Your basket</h4>
                <p>({data.length})</p>
              </div>
              <div className="btm-content mt-6 md:mt-8 flex flex-col gap-8">
                {data.map((c: any, lc: any) => (
                  <KorzinaCard
                    key={lc}
                    dataProduct={c}
                    removeProduct={removeProduct}
                    minuse={minuse}
                    pluse={pluse}
                    edite={edite}
                  />
                ))}
              </div>
              <div className="oformileniya-section mt-[60px] p-7 md:p-10 rounded-[4px] shadow-lg">
                <h2
                  className={`${ProductSans7.className}  text-[22px] md:text-[25px] xl:text-[25px] 2xl:text-[30px]`}
                >
                  Fill in your&nbsp;information
                </h2>
                <FormControl setOpen={setOpen} open={open} />
              </div>
            </div>
            <div className="right-content max-w-full lg:max-w-[450px] w-full">
              <Rightcontbasket priceData={data} />
            </div>
          </div>
        )}
      </div>
      <Dialo open={open} setOpen={setOpen} />
    </div>
  );
};

export default Page;
