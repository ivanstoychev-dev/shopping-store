import type { RootState } from "../../app/store";
import { filterProducts } from "../../utils/filtering";
import { sortProducts } from "../../utils/sorting";

export const selectVisibleProducts = (state: RootState) => {
  const { products, category, filters, sort } = state.products;

  const byCategory = products.filter((p) => p.category === category);
  const filtered = filterProducts(byCategory, filters);
  return sortProducts(filtered, sort);
};
