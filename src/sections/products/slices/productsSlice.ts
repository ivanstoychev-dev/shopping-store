import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import productsData from "../../../data/products.json";
import type { Product, Category } from "../types";

export type Sort = "LOW" | "HIGH" | "AZ" | "ZA";

export type Filters = {
  colors: string[];
  priceRange: [number, number];
};

type ProductsState = {
  products: Product[];
  category: Category;
  sort: Sort;
  filters: Filters;
};

const initialState: ProductsState = {
  products: productsData as Product[],
  category: "bags",
  sort: "AZ",
  filters: {
    colors: [],
    priceRange: [0, 1000],
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<Category>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    toggleColor(state, action: PayloadAction<string>) {
      const color = action.payload;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.filters.colors.includes(color)
        ? (state.filters.colors = state.filters.colors.filter(
            (c) => c !== color,
          ))
        : state.filters.colors.push(color);
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.filters.priceRange = action.payload;
    },
  },
});

export const { setCategory, setSort, toggleColor, setPriceRange } =
  productsSlice.actions;

export default productsSlice.reducer;
