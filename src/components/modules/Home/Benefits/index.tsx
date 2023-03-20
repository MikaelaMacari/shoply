"use client";

import React from "react";
import Title from "src/components/common/section-title";
import Section from "src/components/common/section";
import Card from "./Card";
import { benefits } from "src/assets/static/data/benefits";

const Benefits = () => {
  return (
    <Section className="px-20 py-10 flex flex-col items-center">
      <Title title={"Benefits Using Our Service"} />
      <div className="grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  place-items-center gap-10">
        {benefits.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};
export default Benefits;
