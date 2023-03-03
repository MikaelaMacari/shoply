"use client";

import React from "react";
import Title from "src/components/common/section-title";
import Section from "src/components/common/section";
import useProducts from "src/hooks/useProducts";
import { ProductInterface } from "src/ts/interfaces/product";
import Card from "src/components/common/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const Products = () => {
  const { products, isLoading } = useProducts();

  return (
    <Section className="bg-backgroundPaper py-3 flex flex-col items-center">
      <Title title={"Products"} />
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 place-items-center gap-10">
        {!isLoading &&
          products
            .slice(0, 8)
            .map((item: ProductInterface) => <Card item={item} />)}
      </div>
      <Link href={"/products/"}>
        <button className="bg-primaryDark my-7 py-2 px-5 text-secondaryLight text-lg rounded-sm text-center">
          All Products <ArrowForwardIcon />
        </button>
      </Link>
    </Section>
  );
};
export default Products;
