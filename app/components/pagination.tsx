import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { IconButton, Typography } from "@material-tailwind/react";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});

// Images
import nextI from "@/public/arrow-right2.svg";
import prevI from "@/public/arrow-left.svg";

type Props = {
  data: any;
  set: any;
};

function Pagination({ data, set }: Props) {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === data.total_pages) return;

    setActive(active + 1);
    set(data.current_page + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    set(data.current_page - 1);
  };

  return (
    <div className="pagination flex justify-center items-center gap-8">
      {data.total_pages ? (
        <>
          <IconButton
            placeholder={""}
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={active === 1}
          >
            <Image
              src={prevI}
              alt=""
              loading="lazy"
              className="w-[18px] md:w-[20px] lg:w-[24px] cursor-pointer"
            />
          </IconButton>
          <Typography placeholder={""} color="gray" className="font-normal">
            Page <strong className="text-gray-900">{active}</strong> of{" "}
            <strong className="text-gray-900">{data.total_pages}</strong>
          </Typography>
          <IconButton
            placeholder={""}
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === data.total_pages}
          >
            <Image
              src={nextI}
              alt=""
              loading="lazy"
              className="w-[18px] md:w-[20px] lg:w-[24px] cursor-pointer"
            />
          </IconButton>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Pagination;
