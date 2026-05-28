import { useAppDispatch } from "../../../app/hooks";
import { addItem } from "../../../layout/cart/slices/cartSlice";
import type { Product } from "../types";
import Color from "./Color";
import Price from "./Price";
import Rating from "./Rating";

function ProductCard({ product }: { product: Product }) {
  const { name, description, price, discountedPrice } = product;
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col  rounded-md overflow-hidden shadow-lg">
      <img src={product.image} className=" object-cover" />

      <div className="flex flex-col gap-2 p-4 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-bold font-montserrat text-2xl">{name}</h3>
          <Color color={product.color} />
        </div>

        <Rating value={product.rating} />
        <p className="text-gray-400 text">{description}</p>
        <Price price={price} discountedPrice={discountedPrice} />

        <button
          className="bg-black text-white px-3 font-montserrat font-bold hover:bg-black/80 cursor-pointer rounded-md py-2 mt-2"
          onClick={() => dispatch(addItem(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
