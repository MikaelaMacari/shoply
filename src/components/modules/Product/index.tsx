"use client";

import Image from "next/image";
import AddToCart from "./AddToCart";
import Gallery from "./Gallery";
import { ProductPropsType } from "src/ts/types/product";
import Details from "./Details";
import React, { useState } from "react";

const ProductCard = ({ product }: ProductPropsType) => {
  const [imageSrc, setImageSrc] = useState<string>(product.images[0]);
  return (
    <div className="mt-8 shadow-md shadow-grey-500 rounded-xl gap-20 grid 2xl:grid-cols-2 p-10 ">
      <div className=" flex justify-center items-center relative w-600 h-600">
        <Image src={imageSrc} alt={"Image"} fill className="object-contain" />
      </div>
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-5">
          <Details product={product} />
          <AddToCart product={product} />
        </div>
        <Gallery images={product.images} setImageSrc={setImageSrc} />
      </div>
    </div>
  );
};
export default ProductCard;
