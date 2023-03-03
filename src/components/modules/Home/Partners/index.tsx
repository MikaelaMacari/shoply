"use client";

import React from "react";
import Title from "src/components/common/section-title";
import Section from "src/components/common/section";
import Image from "next/image";
import { partners } from "src/assets/static/data/partners";

const Partners: React.FC = () => {
  return (
    <Section>
      <Title title={"Our Partners"} />
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
        {partners.map((item, index) => (
          <Image key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </Section>
  );
};
export default Partners;
