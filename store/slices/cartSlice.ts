import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "src/ts/interfaces/product";

export interface CartState {
  cart: Array<ProductInterface>;
  quantity: number;
}

const initialState: CartState = {
  cart: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
      return void state;
    },
    removeFromCart: (state, { payload }) => {
      const index = state.cart.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        return void state.cart.splice(index, 1);
      }
      return void state;
    },
    increaseQuantity: (state) => {
      state.quantity += 1;
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
