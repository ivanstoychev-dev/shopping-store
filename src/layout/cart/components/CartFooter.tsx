function CartFooter({
  subtotal,
  onClose,
}: {
  subtotal: number;
  onClose: () => void;
}) {
  return (
    <footer className="border-t border-gray-200 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-600">Subtotal</span>

        <span className="text-2xl font-bold text-gray-900">${subtotal}</span>
      </div>

      <button className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
        Checkout
      </button>

      <button
        onClick={onClose}
        className="mt-3 w-full rounded-xl border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Continue Shopping
      </button>
    </footer>
  );
}

export default CartFooter;
