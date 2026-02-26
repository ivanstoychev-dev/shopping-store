import type { Sort } from "../sections/products/slices/productsSlice";
import type { Product } from "../sections/products/types";
import { getEffectivePrice } from "./productPricing";

export const sortProducts = (products: Product[], sort: Sort) => {
  switch (sort) {
    case "LOW":
      return [...products].sort(
        (a, b) => getEffectivePrice(a) - getEffectivePrice(b),
      );
    case "HIGH":
      return [...products].sort(
        (a, b) => getEffectivePrice(b) - getEffectivePrice(a),
      );
    case "AZ":
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case "ZA":
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    default:
      return products;
  }
};
