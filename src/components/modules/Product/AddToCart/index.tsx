"use client";

import React from "react";
import "./addToCart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "store/slices/cartSlice";
import { ProductPropsType } from "src/ts/types/product";

const AddToCart = ({ product }: ProductPropsType) => {
  const quantity = useSelector((state: any) => state.cart.quantity);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(increaseQuantity());
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity());
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity());
  };
  return (
    <div className="flex  items-center gap-5">
      <button className="btn" onClick={handleDecreaseQuantity}>
        -
      </button>
      <button className="btn">{quantity}</button>
      <button className="btn" onClick={handleIncreaseQuantity}>
        +
      </button>
      <button className="add-btn" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};
export default AddToCart;
