"use client";

import React from "react";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./card.css";
import { ProductInterface } from "src/ts/interfaces/product";
import Link from "next/link";

type CardPropsType = {
  item: ProductInterface;
};

const Card = ({ item }: CardPropsType) => {
  console.log(item.id);
  return (
    <Link href={`/products/${item.id}`} key={item.id} className="card">
      <Image
        src={item.images[0]}
        alt={item.name}
        fill
        className="object-contain"
      />
      <div className="buttons-container">
        <Link href={`/products/${item.id}`} key={item.id}>
          <button className="details-btn">Detail</button>
        </Link>
        <button className="cart-btn">
          <ShoppingCartOutlinedIcon className="text-secondaryMain text-2xl" />
        </button>
      </div>
    </Link>
  );
};
export default Card;
