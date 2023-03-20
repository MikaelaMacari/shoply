"use client";

import React from "react";
import "./testimonials.css";
import Title from "src/components/common/section-title";
import Section from "src/components/common/section";
import Image from "next/image";
import TestimonialImage from "public/assets/images/customer_1.png";

const Testimonials = () => {
  return (
    <Section className="bg-backgroundPaper px-20 py-10  flex flex-col items-center">
      <Title title={"What Our Costumers Are Saying"} />
      <div className="grid sm:grid-cols-1  md:grid-cols-2 place-items-center gap-5">
        <Image
          src={TestimonialImage}
          width={320}
          height={440}
          alt={"Costumer Image"}
        />
        <div className="flex flex-col gap-8">
          <p className="text-4xl font-lato font-medium text-primaryDark capitalize">
            Help us Improve our productivity
          </p>
          <p className="description">
            <span className="span">“ </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, purus id tincidunt feugiat, metus orci sagittis elit,
            quis tempor orci elit id arcu. Proin egestas bibendum efficitur.
            <span className="span"> “</span>
          </p>
          <div>
            <p className="text-2xl font-bold text-secondaryMain">
              Adriana Lopez
            </p>
            <p className="description">Client</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Testimonials;
