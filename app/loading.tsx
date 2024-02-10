import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div
      id="loader"
      className="w-full h-[100vh] bg-black overflow-hidden"
    ></div>
  );
}
