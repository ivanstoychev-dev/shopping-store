import type { Filters } from "../sections/products/slices/productsSlice";
import type { Product } from "../sections/products/types";
import { getEffectivePrice } from "./productPricing";

export const filterProducts = (products: Product[], filters: Filters) => {
  return products.filter((p) => {
    const colorMatch =
      filters.colors.length === 0 || filters.colors.includes(p.color);

    const price = getEffectivePrice(p);
    const priceMatch =
      price <= filters.priceRange[1] && price >= filters.priceRange[0];

    return colorMatch && priceMatch;
  });
};
