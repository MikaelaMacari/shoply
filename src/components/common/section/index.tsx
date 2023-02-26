"use client";

import React from "react";

type Props = {
  children?: React.ReactNode;
  // className?: string;
};

const Section = ({ children }: Props) => {
  return <section className="px-20 py-10">{children}</section>;
};
export default Section;
