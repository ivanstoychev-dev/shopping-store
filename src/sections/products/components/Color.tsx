function Color({ color }: { color: string }) {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-gray-900 font-bold">Color</p>
      <div className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center">
        <div
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default Color;
