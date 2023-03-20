"use client";

import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const Partners = dynamic(() => import("./Partners"));
const Products = dynamic(() => import("./Products"));
const Benefits = dynamic(() => import("./Benefits"));
const Testimonials = dynamic(() => import("./Testimonials"));

const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Products />
      <Benefits />
      <Testimonials />
    </>
  );
};
export default HomeContent;
