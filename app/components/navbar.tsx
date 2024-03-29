"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { Badge, IconButton } from "@material-tailwind/react";

// Images
import shop from "@/public/korzina2.svg";
import search from "@/public/search2.svg";
import menuBtn from "@/public/menuBtn2.svg";
import shop2 from "@/public/korzina.svg";
import search2 from "@/public/search.svg";
import menuBtn2 from "@/public/menuBtn.svg";
import close from "@/public/close.svg";
import Link from "next/link";

// Fonts
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

const Navbar = () => {
  const [actived, setActived] = useState<boolean>(false);

  const handleOpen = () => {
    setActived((setact) => !setact);
  };

  const handleClose = () => {
    setActived(false);
  };

  const pathname = usePathname();

  return (
    <div
      className={`navbar flex fixed left-0 w-full justify-between px-6 2xl:px-14 pt-[35px] pb-[25px] z-50 ${
        pathname === "/" ? "bg-[#303030]" : " bg-[#fff] "
      } `}
    >
      <div className="left-tab flex flex-row xl:gap-[85px] lg:gap-[50px] md:gap-[30px]">
        <div className="logo-sec">
          <Link href="/">
            <h3
              className={`text-xl relative ${
                pathname === "/" ? "text-[#fff]" : "text-[#303030]"
              } ${ProductSans7.className} cursor-pointer`}
            >
              soudemy
            </h3>
          </Link>
        </div>
        <div className="nav-sec">
          <ul
            className={`flex md:flex-row md:justify-between xl:gap-[45px] lg:gap-[35px] md:gap-[20px] md:h-auto md:pt-0 md:relative md:top-0 md:left-0  ${
              (actived && "top-[76px]") || "top-[-3000px]"
            } ${
              (actived && pathname === "/" && "bg-[#303030]") ||
              (actived && "bg-[#fff]") ||
              "bg-transparent"
            }  absolute  w-full left-0 flex-col gap-[40px] text-center justify-start pt-[60px] h-[93vh] `}
          >
            <Link href="/">
              <li
                onClick={handleClose}
                className={`text-xl relative transition duration-700 ease-in-out ${
                  pathname === "/"
                    ? "text-[#fff]"
                    : actived && pathname === "/"
                    ? "text-[#fff]"
                    : "text-[#303030]"
                } ${
                  ProductSans7.className
                } cursor-pointer before-content_started ${
                  pathname === "/" ? "before:opacity-100" : "before:opacity-0"
                } md:before:content-[''] md:before:w-[18px] md:before:h-[4px] before:rounded-[9px] before:bg-[#E2E2E2] before:block before:absolute before:top-[30px] before:left-[15px] hover:before:opacity-100`}
              >
                Home
              </li>
            </Link>
            <Link href="/shop">
              <li
                onClick={handleClose}
                className={`text-xl relative transition duration-700 ease-in-out ${
                  pathname === "/" ? "text-[#fff]" : "text-[#303030]"
                } ${
                  ProductSans7.className
                } cursor-pointer before-content_started ${
                  pathname === "/shop"
                    ? "before:opacity-100"
                    : "before:opacity-0"
                } md:before:content-[''] md:before:w-[18px] md:before:h-[4px] before:rounded-[9px] before:bg-[#E2E2E2] before:block before:absolute before:top-[30px] before:left-[15px] hover:before:opacity-100`}
              >
                Shop
              </li>
            </Link>
            <Link href="/aboutUs">
              <li
                onClick={handleClose}
                className={`text-xl relative transition duration-700 ease-in-out ${
                  pathname === "/" ? "text-[#fff]" : "text-[#303030]"
                } ${
                  ProductSans7.className
                } cursor-pointer before-content_started ${
                  pathname === "/aboutUs"
                    ? "before:opacity-100"
                    : "before:opacity-0"
                } md:before:content-[''] md:before:w-[18px] md:before:h-[4px] before:rounded-[9px] before:bg-[#E2E2E2] before:block before:absolute before:top-[30px] before:left-[35px] hover:before:opacity-100`}
              >
                About us
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={handleClose}
                className={`text-xl relative transition duration-700 ease-in-out ${
                  pathname === "/" ? "text-[#fff]" : "text-[#303030]"
                } ${
                  ProductSans7.className
                } cursor-pointer before-content_started ${
                  pathname === "/blog"
                    ? "before:opacity-100"
                    : "before:opacity-0"
                } md:before:content-[''] md:before:w-[18px] md:before:h-[4px] before:rounded-[9px] before:bg-[#E2E2E2] before:block before:absolute before:top-[30px] before:left-[10px] hover:before:opacity-100`}
              >
                Blog
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="right-tab flex flex-row xl:gap-[40px] lg:gap-[30px] md:gap-[20px] gap-[15px]">
        {/* <div className="btn-n1 cursor-pointer">
          {pathname === "/" ? (
            <Image src={search2} alt="" />
          ) : (
            <Image src={search} alt="" />
          )}
        </div> */}
        <Link href="/liked">
          <IconButton
            placeholder={""}
            size="sm"
            color={pathname === "/" ? "white" : "black"}
            variant="text"
            className="rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
        </Link>
        <Link href="/korzina">
          <div className="btn-n2 cursor-pointer">
            {pathname === "/" ? (
              <Image src={shop2} alt="" />
            ) : (
              <Image src={shop} alt="" />
            )}
          </div>
        </Link>
        <div className="btn-n3 md:hidden cursor-pointer" onClick={handleOpen}>
          {(actived && <Image src={close} alt="" />) ||
            (pathname === "/" ? (
              <Image src={menuBtn2} alt="" />
            ) : (
              <Image src={menuBtn} alt="" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
