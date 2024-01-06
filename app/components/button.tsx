"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import localFont from "next/font/local";

// Images
import nexti from "@/public/arrow-right.svg";
import nexti2 from "@/public/arrow-right2.svg";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

interface ButtonProps {
  black: boolean;
}

const Butto: React.FC<ButtonProps> = ({ black }) => {
  return (
    <Button
      placeholder={""}
      variant="outlined"
      className={`flex items-center gap-[6px] md:gap-2 xl:gap-3  ${
        ProductSans4.className
      } text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[20px] ${
        black ? "text-[#252525]" : "text-[#fff]"
      } px-[16px] py-[9px] md:px-[18px] md:py-[9px] xl:px-[25px] xl:py-[12px] 2xl:px-[45px] 2xl:py-[20px] border-[1px] border-blue-gray-50 font-normal normal-case`}
    >
      View more
      {black ? (
        <Image src={nexti2} alt="" className="md:w-[20px] xl:w-auto w-[18px]" />
      ) : (
        <Image src={nexti} alt="" className="md:w-[20px] xl:w-auto w-[18px]" />
      )}
    </Button>
  );
};

export default Butto;
