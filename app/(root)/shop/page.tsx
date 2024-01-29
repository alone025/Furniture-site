"use client";
import FilterShop from "@/app/components/filterShop";
import ShopCardCont from "@/app/components/shopCardCont";
import React from "react";

type Props = {};

const Shop = (props: Props) => {
  const [cate, setCategory] = React.useState<string>("");
  const [color, setColor] = React.useState<string>("");
  const [filterPrice, setFilterPrice] = React.useState<number>(0);
  const [search, setSearch] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="shop-main pt-[86px] pb-12 md:pb-24 flex flex-col-reverse lg:flex-row gap-0 lg:gap-[40px] xl:gap-[60px] justify-around">
      <div className="left-content w-full">
        <ShopCardCont
          lka={cate}
          color={color}
          filterprice={filterPrice}
          searchValue={search}
          load={loading}
          setload={setLoading}
        />
      </div>
      <div className="right-content">
        <FilterShop
          loading={loading}
          set={setCategory}
          setColor={setColor}
          setPrice={setFilterPrice}
          flt={filterPrice}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default Shop;
