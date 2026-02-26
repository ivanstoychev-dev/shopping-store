import { readdirSync, writeFileSync } from "fs";
import path from "path";

const OUTPUT_FILE = "./src/data/products.json";
const IMAGE_BASE_PATH = "./public/images/products";
const TOTAL_PRODUCTS = 120;

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRating() {
  return Number((Math.random() * 3 + 2).toFixed(1)); // 2.0 - 5.0
}

function loadImageMap() {
  const categories = readdirSync(IMAGE_BASE_PATH);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageMap: any = {};

  for (const category of categories) {
    const categoryPath = path.join(IMAGE_BASE_PATH, category);
    imageMap[category] = {};

    const colors = readdirSync(categoryPath);

    for (const color of colors) {
      const colorPath = path.join(categoryPath, color);
      const files = readdirSync(colorPath).filter((f) =>
        f.match(/\.(jpg|jpeg|png|webp)$/),
      );

      if (files.length > 0) {
        imageMap[category][color] = files;
      }
    }
  }

  return imageMap;
}

const imageMap = loadImageMap();

// Product name arrays
const bagNames = ["Leather Bag", "Mini Purse", "Luxury Bag"];
const shoeNames = [
  "Running Shoes",
  "Leather Boots",
  "Sneakers",
  "Formal Shoes",
];
const watchNames = ["Classic Watch", "Sport Watch", "Luxury Watch"];

// Category list
const categories = ["bags", "shoes", "watches"];

const products = [];

for (let i = 1; i <= TOTAL_PRODUCTS; i++) {
  // Select category randomly from all three
  const category = randomItem(categories);

  // Select name based on category
  let name: string = "";
  switch (category) {
    case "bags":
      name = randomItem(bagNames);
      break;
    case "shoes":
      name = randomItem(shoeNames);
      break;
    case "watches":
      name = randomItem(watchNames);
      break;
  }

  // Select random color available for the category
  const availableColors = Object.keys(imageMap[category]);
  const color = randomItem(availableColors);

  // Select random image
  const images = imageMap[category][color];
  const imageFile = randomItem(images);

  // Pricing
  const price = randomPrice(50, 300);
  const hasDiscount = Math.random() > 0.6;
  const discountedPrice = hasDiscount ? price - randomPrice(10, 50) : undefined;

  // Product object
  const product = {
    id: i.toString(),
    sku: `${category.toUpperCase()}-${i.toString().padStart(5, "0")}`,
    name: `${name} ${i}`,
    description: "Premium quality product designed for everyday use.",
    price,
    discountedPrice,
    rating: randomRating(),
    color,
    category,
    stock: randomPrice(0, 50),
    image: `/images/products/${category}/${color}/${imageFile}`,
  };

  products.push(product);
}

writeFileSync(OUTPUT_FILE, JSON.stringify(products, null, 2));
console.log(`Generated ${products.length} products → ${OUTPUT_FILE}`);
