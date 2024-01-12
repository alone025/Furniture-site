import React from "react";
import localFont from "next/font/local";
import { ProductType } from "../interface/interface";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  priceData: ProductType[];
};

const getTotalPrice = (products: ProductType[]) => {
  return products.reduce(
    (total, product) => total + product.price * product.quanity,
    0
  );
};
const getLastTotalPrice = (products: ProductType[]) => {
  return products.reduce(
    (total, product) => total + product.lastprice * product.quanity,
    0
  );
};

const getTotalLengthProducts = (products: ProductType[]) => {
  return products.reduce((total, product) => total + product.quanity, 0);
};

export const Rightcontbasket = ({ priceData }: Props) => {
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [lasttotalprices, setLastTotalPrice] = React.useState<number>(0);
  const [totalProductLength, setTotalProductLength] = React.useState<number>(0);

  // const array = [1, 1, 1, 1];
  // const testnomer1 = array.reduce((a, b) => a + b);
  // console.log(testnomer1);

  React.useEffect(() => {
    const totalPrice = getTotalPrice(priceData);
    const lasttotalprices = getLastTotalPrice(priceData);
    const totalProductsLength = getTotalLengthProducts(priceData);
    setLastTotalPrice(lasttotalprices);
    setTotalPrice(totalPrice);
    setTotalProductLength(totalProductsLength);
  }, [priceData]);

  return (
    <div className="right-cont-basket min-w-0 sm:min-w-[215px] max-w-full lg:max-w-[450px] w-full sticky top-[100px]">
      <div className="sticky-content">
        <div className="skid-content border-b-[1px] border-[#c4c4c4] mt-8 md:mt-10 pb-3 md:pb-5">
          <div className="skidka">
            <p
              className={`${ProductSans4.className} text-[12px] md:text-[14px] 2xl:text-[18px]`}
            >
              Discount:{" "}
              <span
                className={`${ProductSans4.className} font-medium text-[14px] md:text-[16px] 2xl:text-[20px] ml-[8px] md:ml-[10px]`}
              >
                {lasttotalprices - totalPrice}.00 USD
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="itogo-price mt-[15px] md:mt-[20px]">
          <p
            className={`${ProductSans4.className} text-[12px] md:text-[14px] 2xl:text-[18px] text-[#989898] mb-[5px]`}
          >
            Total {priceData.length * totalProductLength} items worth
          </p>
          <div className="oferta-qismi">
            <span
              className={`new-sprice ${ProductSans4.className} font-medium text-[20px] sm:text-[22px] md:text-[25px] 2xl:text-[30px]`}
            >
              {totalPrice}.00 USD
            </span>
            <span
              className={`lastsprice ${ProductSans4.className} text-[15px] sm:text-[17px] md:text-[18px] 2xl:text-[22px] line-through  text-[#989898] ml-[15px]`}
            >
              {lasttotalprices}.00 USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
