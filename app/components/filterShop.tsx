"use client";
import { Button, Input, Slider } from "@material-tailwind/react";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

// Svg images
import searchIcon from "@/public/search2.svg";
import closeIcon from "@/public/close.svg";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  set: any;
  setColor: any;
  setPrice: any;
  flt: any;
  setSearch: any;
  loading: any;
};

const FilterShop = ({
  set,
  setColor,
  setPrice,
  flt,
  setSearch,
  loading,
}: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [val, setVal] = React.useState(50);
  const [vlSer, setValSer] = React.useState("");

  const setTrue = () => {
    setOpen((open) => !open);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(parseInt(event.target.value));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value > 100) {
        setVal(100);
      } else {
        setVal(value);
      }
    }
  };

  const SearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValSer(value);
    if (value == "") {
      setSearch(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearch(vlSer);
    }
  };

  const handleSearchClick = () => {
    setSearch(vlSer);
  };

  return (
    <div
      style={loading ? { opacity: 0.5 } : { opacity: 1 }}
      className={`shopFilter pt-[30px] sm:pt-[50px] lg:pt-[60px] px-3 sm:px-5 md:px-6  2xl:px-14 ${
        open ? "absolute bg-[#fff]" : "relative bg-transparent"
      } lg:relative left-0 w-full lg:w-auto h-full lg:h-auto flex flex-col items-center lg:items-start`}
    >
      <div className="btn-close-sec flex justify-end w-full">
        <Button
          placeholder=""
          variant="outlined"
          onClick={setTrue}
          className={`${
            ProductSans4.className
          } normal-case font-normal text-[11px] md:text-[13px] px-4 md:px-[3] py-2 tracking-wider ${
            open ? "hidden" : "block"
          } lg:hidden `}
        >
          Filter
        </Button>
        <Button
          placeholder=""
          variant="text"
          size="sm"
          onClick={setTrue}
          className={`${
            ProductSans4.className
          }  normal-case font-normal tracking-wider ${
            open ? "block" : "hidden"
          } lg:hidden mb-5`}
        >
          <Image src={closeIcon} alt="" className=" max-w-[20px] md:max-w-6" />
        </Button>
      </div>
      <div
        className={`search-bar max-w-[270px] md:max-w-[320px] w-full mb-[35px] md:mb-[50px] ${
          open ? "flex" : "hidden"
        } lg:block`}
      >
        <Input
          crossOrigin=""
          label="Search . . ."
          size="lg"
          onKeyDown={handleKeyDown}
          color="blue-gray"
          onChange={(e) => {
            SearchChange(e);
          }}
          className={`${ProductSans4.className} text-[18px] text-[#A9A3A3] rounded-none !pt-[20px]`}
          icon={
            <Image
              src={searchIcon}
              alt=""
              onClick={() => {
                setOpen(false);
                handleSearchClick();
              }}
            />
          }
        />
      </div>
      <div className="section-bar mb-6 md:mb-8 lg:mb-10 flex flex-row lg:flex-col gap-14 lg:gap-10">
        <div
          className={`category-bar  ${
            open ? "flex" : "hidden"
          } lg:flex flex-col gap-4 md:gap-5 lg:gap-8 items-start`}
        >
          <h5
            className={`${ProductSans7.className} text-[#2D2D2D] text-[18px] md:text-[21px] lg:text-[23px] cursor-pointer`}
            onClick={() => {
              set("");
              setOpen(false);
            }}
          >
            Category
          </h5>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
            onClick={() => {
              set("table");
              setOpen(false);
            }}
          >
            Table
          </p>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
            onClick={() => {
              set("chair");
              setOpen(false);
            }}
          >
            Chair
          </p>
          {/* <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
          >
            Led (25)
          </p>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
          >
            Modern (25)
          </p>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
          >
            Retro (25)
          </p>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
          >
            Wood (25)
          </p> */}
        </div>
        <div
          className={`color-bar  ${
            open ? "flex" : "hidden"
          } lg:flex flex-col gap-4 md:gap-5 lg:gap-8 items-start`}
        >
          <h5
            className={`${ProductSans7.className} text-[#2D2D2D] text-[18px] md:text-[21px] lg:text-[23px] cursor-pointer`}
            onClick={() => {
              setColor("");
              setOpen(false);
            }}
          >
            Color
          </h5>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
            onClick={() => {
              setColor("grey");
              setOpen(false);
            }}
          >
            Grey (25)
          </p>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
            onClick={() => {
              setColor("blue");
              setOpen(false);
            }}
          >
            Blue (25)
          </p>
          <p
            className={`${ProductSans4.className} text-[#7E7E7E] text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer`}
            onClick={() => {
              setColor("yellow");
              setOpen(false);
            }}
          >
            Yellow (25)
          </p>
        </div>
      </div>
      <div
        className={`slider-bar mt-8 md:mt-10 lg:mt-12  ${
          open ? "flex" : "hidden"
        } lg:flex flex-col gap-8`}
      >
        <div className="slider-sec max-w-[420px] w-full">
          <Slider
            placeholder=""
            min={1}
            max={100}
            value={val}
            onChange={handleSliderChange}
          />
        </div>
        <div className="bottom flex flex-wrap gap-11 items-center">
          <div className="output-sec flex flex-col">
            <p
              className={`${ProductSans4.className} text-[#7E7E7E] text-[17px] md:text-[19px]`}
            >
              Price $0 -
            </p>
            <div className="input-sec flex gap-[2px]">
              <span
                className={`${ProductSans4.className} text-[#7E7E7E] text-[17px] md:text-[19px]`}
              >
                $
              </span>
              <input
                type="number"
                min={0}
                max={100}
                className={`${ProductSans4.className} text-[#7E7E7E] text-[17px] md:text-[19px] outline-blue-gray-300`}
                value={val}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="btn-sec">
            <Button
              placeholder=""
              size="md"
              onClick={() => {
                setPrice(val);
                setOpen(false);
              }}
              className={`${ProductSans4.className} text-[17px] md:text-[19px] text-[#F4F4F4] normal-case font-normal rounded-none`}
            >
              Filter
            </Button>
          </div>
          <div className="cancel-sec">
            {flt > 0 ? (
              <Button
                placeholder=""
                size="md"
                onClick={() => {
                  setPrice(0);
                  setOpen(false);
                }}
                className={`${ProductSans4.className} text-[15px] md:text-[17px] text-[#F4F4F4] normal-case font-normal rounded-none`}
              >
                Cancel Filter
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
