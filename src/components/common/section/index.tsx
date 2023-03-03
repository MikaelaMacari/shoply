"use client";

import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ children, className = "px-20 py-10" }: Props) => {
  return <section className={className}>{children}</section>;
};
export default Section;
