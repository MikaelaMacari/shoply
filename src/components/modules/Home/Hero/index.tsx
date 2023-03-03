"use client";

import React from "react";
import Image from "next/image";
import Section from "src/components/common/section";
import HeroImage from "public/assets/images/home_1.png";

const Hero: React.FC = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-10">
        <div className="flex flex-col justify-center items-start gap-10 sm:order-2 lg:order-1">
          <p className="w-full text-left font-lato font-bold text-zinc-800 lg:text-7xl md:text-5xl sm:text-3xl text-primaryDark">
            Logitech G Pro X Superlight
          </p>
          <p className="w-full text-left text-2xl text-secondaryMain">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh erat
          </p>
          <button className="px-7 py-3 bg-primaryDark text-secondaryLight hover:bg-primaryMain text-2xl">
            Shop Now
          </button>
        </div>
        <div className="sm:order-1 lg:order-2">
          <Image src={HeroImage} alt={"Hero"} height={"450"} width={"600"} />
        </div>
      </div>
    </Section>
  );
};
export default Hero;
