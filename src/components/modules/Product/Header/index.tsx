"use client";

import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="flex gap-5 py-5 px-4 shadow-md shadow-grey-500 rounded-xl">
      <p className="text">Home</p>
      <p className="text"> {">"}</p>
      <p className="text">Products</p>
      <p className="text"> {">"}</p>
      <p className="text">Mouse</p>
    </div>
  );
};
export default Header;
