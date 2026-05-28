import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemProps } from "../types";
import type { Product } from "../../../sections/products/types";

type CartState = {
  items: CartItemProps[];
  open: boolean;
};

const initialState: CartState = {
  items: [],
  open: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    clearCart(state) {
      state.items = [];
    },

    setCartItems(state, action: PayloadAction<CartItemProps[]>) {
      state.items = action.payload;
    },

    setCartOpen(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setCartItems,
  setCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
