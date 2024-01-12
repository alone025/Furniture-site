"use client";
import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

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
              (actived && "top-[76px]") || "top-[-1000px]"
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
            {/* <Link href="/blog">
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
            </Link> */}
          </ul>
        </div>
      </div>
      <div className="right-tab flex flex-row xl:gap-[40px] lg:gap-[30px] md:gap-[20px] gap-[15px]">
        <div className="btn-n1 cursor-pointer">
          {pathname === "/" ? (
            <Image src={search2} alt="" />
          ) : (
            <Image src={search} alt="" />
          )}
        </div>
        <Link href="/korzina">
          <div className="btn-n2 cursor-pointer">
            {pathname === "/" ? (
              <Image src={shop2} alt="" />
            ) : (
              <Image src={shop} alt="" />
            )}
          </div>
        </Link>
        <div className="btn-n3 md:hidden" onClick={handleOpen}>
          {(actived && <Image src={close} alt="" />) ||
            (pathname === "/" ? (
              <Image src={menuBtn2} alt="" />
            ) : (
              <Image src={menuBtn} alt="" />
            ))}
        </div>
        {/* <div className="btn-n3 hidden md:block cursor-pointer">
          {pathname === "/" ? (
            <Image src={menuBtn2} alt="" />
          ) : (
            <Image src={menuBtn} alt="" />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
