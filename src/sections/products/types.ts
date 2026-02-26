export type Category = "bags" | "shoes" | "watches";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  color: string;
  category: Category;
  image: string;
};
