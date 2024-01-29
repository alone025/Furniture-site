import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { ProductType } from "../interface/interface";

// Images
import previcon from "@/public/arrow-left.svg";
import nexticon from "@/public/arr-right.svg";
import imagess from "@/public/Rectangle26.png";
import x from "@/public/x.svg";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  dataProduct: ProductType;
  removeProduct: any;
  pluse: any;
  minuse: any;
  edite: any;
};

export default function KorzinaCard({
  dataProduct,
  removeProduct,
  minuse,
  pluse,
  edite,
}: Props) {
  const [index, setIndex] = React.useState(dataProduct.quanity);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value >= 100) {
        edite(dataProduct.id, 100);
      } else if (value <= 1) {
        edite(dataProduct.id, 1);
      } else {
        edite(dataProduct.id, value);
      }
    }
  };

  React.useEffect(() => {
    setIndex(dataProduct.quanity);
  }, [dataProduct]);

  return (
    <div className="korzina-card flex flex-col md:flex-row w-full shadow-lg rounded-[10px]">
      <div className="left-cont-img flex justify-between items-start p-5 gap-3 md:p-0">
        <Image
          src={dataProduct.images[0].img}
          width={290}
          height={180}
          alt=""
          loading="lazy"
          className="rounded-[10px] w-full max-w-[180px] md:w-[290px] md:max-w-full 2xl:w-[350px]"
        />
        <span
          className={`flex md:hidden gap-[5px] items-center text-[#989898] pr-2 pt-2`}
          onClick={() => {
            removeProduct(dataProduct.id);
          }}
        >
          <Image
            src={x}
            alt=""
            id="animation2"
            className="cursor-pointer w-4"
          />
        </span>
      </div>
      <div className="right-cont-text ml-0 md:ml-5 w-full p-5 md:pl-0">
        <div className="top-logo">
          <h3
            className={`${ProductSans7.className}  text-[16px] md:text-[18px] flex justify-between`}
          >
            {dataProduct.title}
            <span
              className={`hidden md:flex gap-[5px] items-center text-[#989898]`}
              onClick={() => {
                removeProduct(dataProduct.id);
              }}
            >
              <Image
                src={x}
                alt=""
                id="animation2"
                className="cursor-pointer w-4"
              />
            </span>
          </h3>
        </div>
        <div className="des-text mt-[14px] md:mt-[18px]">
          <ul className="flex flex-col gap-[3px] md:gap-[5px]">
            <li>
              <p
                className={`${ProductSans4.className} text-[13px] md:text-[15px]`}
              >
                Color: {dataProduct.color}
              </p>
            </li>
            <li>
              <p
                className={`${ProductSans4.className} text-[13px] md:text-[15px]`}
              >
                Category: {dataProduct.category}
              </p>
            </li>
            <li>
              <p
                className={`${ProductSans4.className} text-[13px] md:text-[15px]`}
              >
                Tags: {dataProduct.tags}
              </p>
            </li>
          </ul>
        </div>
        <div className="price-sec mt-[15px] flex justify-between items-center w-full gap-2 flex-wrap">
          <div className="input-tab relative flex items-center max-w-[80px] md:max-w-[100px] w-full">
            <input
              type="phone"
              value={index}
              onChange={handleInputChange}
              className={`${ProductSans4.className} text-[#8D8D8D] text-[14px] text-center py-[5px] min-w-[72px] max-w-[100px] w-full rounded-[4px] border-[1px] border-solid border-[#c4c4c4] outline-black`}
            />
            <span
              className="absolute w-[16px] cursor-pointer"
              onClick={() => {
                index == 1 ? null : minuse(dataProduct.id);
              }}
            >
              <Image
                src={previcon}
                alt=""
                className="w-[19px] h-[19px]"
                loading="lazy"
              />
            </span>
            <span
              className="absolute w-[16px] right-0 cursor-pointer"
              onClick={() => {
                index == 100 ? null : pluse(dataProduct.id);
              }}
            >
              <Image
                src={nexticon}
                alt=""
                className="w-[19px] h-[19px]"
                loading="lazy"
              />
            </span>
          </div>

          <div
            className={`${ProductSans7.className} price-tab text-[14px] md:text-[16px] flex flex-row flex-wrap items-center`}
          >
            <p>${dataProduct.price}.00</p>
            <span className="text-[12px] md:text-[14px] line-through ml-2 md:ml-4 text-[#989898]">
              ${dataProduct.lastprice}.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
