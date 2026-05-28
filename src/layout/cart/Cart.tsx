import { useAppSelector } from "../../app/hooks";
import CartFooter from "./components/CartFooter";
import CartItem from "./components/CartItem";

type CartProps = {
  open: boolean;
  onClose: () => void;
};

function Cart({ open, onClose }: CartProps) {
  const { items } = useAppSelector((state) => state.cart);

  const subtotal = items.reduce((acc, item) => {
    const price = item.discountedPrice || item.price;

    return acc + price * item.quantity;
  }, 0);

  const productsQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 z-50 flex h-screen w-90 flex-col bg-white shadow-2xl transition-transform duration-500"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>

            <p className="text-sm text-gray-500">
              {productsQuantity} item
              {productsQuantity !== 1 && "s"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            ✕
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Add some products to get started.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <CartFooter subtotal={subtotal} onClose={onClose} />
        )}
      </aside>
    </>
  );
}

export default Cart;
