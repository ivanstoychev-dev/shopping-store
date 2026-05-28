import type { Product } from "../../sections/products/types";

export type CartItemProps = Product & {
  quantity: number;
};
