"use client";

import React from "react";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./card.css";
import { ProductInterface } from "src/ts/interfaces/product";

type CardPropsType = {
  item: ProductInterface;
};

const Card = ({ item }: CardPropsType) => {
  return (
    <div key={item.id} className="card">
      <Image
        src={item.images[0]}
        alt={item.name}
        fill
        className="object-contain"
      />
      <div className="buttons-container">
        <button className="details-btn">Detail</button>
        <button className="cart-btn">
          <ShoppingCartOutlinedIcon className="text-secondaryMain text-2xl" />
        </button>
      </div>
    </div>
  );
};
export default Card;
