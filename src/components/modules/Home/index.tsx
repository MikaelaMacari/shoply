"use client";

import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Products from "./Products";

const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Products />
    </>
  );
};
export default HomeContent;
