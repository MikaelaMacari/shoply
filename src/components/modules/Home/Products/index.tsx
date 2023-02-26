"use client";

import React from "react";
import Title from "src/components/common/section-title";
import Section from "src/components/common/section";
import Image from "next/image";
import useProducts from "src/hooks/useProducts";
import { ProductInterface } from "src/ts/interfaces/product";

const Products: React.FC = () => {
  const { products, isLoading } = useProducts();

  return (
    <Section>
      <Title title={"Products"} />
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
        {!isLoading &&
          products.map((item: ProductInterface) => (
            <Image
              src={item.images[0]}
              alt={item.name}
              width={200}
              height={300}
            />
          ))}
      </div>
    </Section>
  );
};
export default Products;
