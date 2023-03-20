"use client";

import React from "react";
import { ProductPropsType } from "src/ts/types/product";

const Details = ({ product }: ProductPropsType) => {
  return (
    <>
      <p className="text-secondaryMain text-4xl">{product.name}</p>
      <p className="text-grey-700 text-sm">{product.description}</p>
      <p className="text-primaryMain text-sm">{product.categoryId}</p>
      <p className="text-secondaryMain text-sm">Stock: {product.stock}</p>
      <p className="text-secondaryMain text-sm">
        Price:{" "}
        <span className="text-grey-A200 font-medium text-sm">
          ${product.price}
        </span>
      </p>
    </>
  );
};
export default Details;
