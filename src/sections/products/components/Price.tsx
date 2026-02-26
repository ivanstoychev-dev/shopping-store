function Price({
  price,
  discountedPrice,
}: {
  price: number;
  discountedPrice?: number;
}) {
  return (
    <div className="flex gap-3 items-center">
      <p
        className={`font-bold text-xl font-montserrat ${discountedPrice ? "line-through text-gray-400" : ""}`}
      >
        {price}$
      </p>
      {discountedPrice && (
        <p className="font-bold text-xl font-montserrat text-red-500">
          {discountedPrice}$
        </p>
      )}
    </div>
  );
}

export default Price;
