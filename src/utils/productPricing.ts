import type { Product } from "../sections/products/types";

export const getEffectivePrice = (p: Product) => p.discountedPrice ?? p.price;
