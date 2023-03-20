"use client";

import useProduct from "src/hooks/useProduct";
import Header from "src/components/modules/Product/Header";
import Section from "src/components/common/section";
import ProductCard from "src/components/modules/Product";

type ProductDetailPropsType = {
  params: {
    id: number;
  };
};

const ProductDetailPage = ({ params }: ProductDetailPropsType) => {
  const { id } = params;
  const { product, isLoading } = useProduct(id);
  return (
    !isLoading && (
      <Section>
        <Header />
        <ProductCard product={product} />
      </Section>
    )
  );
};

export default ProductDetailPage;
