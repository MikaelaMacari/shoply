"use client";

import React from "react";
import Image from "next/image";
import { BenefitsInterface } from "src/ts/interfaces/benefits";

type CardPropsType = {
  item: BenefitsInterface;
};

const Card = ({ item }: CardPropsType) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={item.src} width={60} height={60} alt={item.alt} />
      <p className="text-3xl text-primaryDark font-roboto">{item.title}</p>
      <p className="text-lg text-secondaryMain text-center">
        {item.description}
      </p>
    </div>
  );
};
export default Card;
