import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectVisibleProducts } from "../selectors";
import type { Product } from "../types";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 20;

export default function ProductGrid() {
  const products = useAppSelector(selectVisibleProducts);
  const [page, setPage] = useState(1);

  const visible = products.slice(0, PAGE_SIZE * page);

  return (
    <div className="flex-1 flex flex-col items-center">
      <p className="w-full text-xl text-gray-500 lg:text-3xl text-left mb-4">
        {visible.length} out of {products.length} products displayed
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6">
        {visible.length > 0 ? (
          visible.map((p: Product) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className=" text-2xl p-5">No products found.</p>
        )}
      </div>

      {visible.length < products.length && (
        <button
          className="mt-4 w-50 cursor-pointer font-bold text-xl px-4 py-3 uppercase border-b"
          onClick={() => setPage((p) => p + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
}
