import type { CartItemProps } from "../types";
import Price from "../../../sections/products/components/Price";
import { useAppDispatch } from "../../../app/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../slices/cartSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem({ item }: { item: CartItemProps }) {
  const dispatch = useAppDispatch();

  return (
    <div
      key={item.id}
      className="rounded-md border border-gray-200 bg-gray-50 p-2.5 shadow-sm"
    >
      <div className="flex gap-4">
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-xl object-cover"
        />

        {/* Info */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="line-clamp-1 font-bold font-montserrat text-gray-900">
              {item.name}
            </h3>

            <div className="mt-2">
              <Price
                price={item.price}
                discountedPrice={item.discountedPrice}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            {/* Quantity */}
            <div className="flex items-center overflow-hidden rounded-full border border-gray-200 bg-white">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="flex cursor-pointer h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
              >
                <RemoveIcon sx={{ fontSize: 18 }} />
              </button>

              <span className="min-w-[32px] text-center text-sm font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="flex cursor-pointer h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
              >
                <AddIcon sx={{ fontSize: 18 }} />
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="flex cursor-pointer items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-600"
            >
              <DeleteOutlineIcon sx={{ fontSize: 18 }} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
