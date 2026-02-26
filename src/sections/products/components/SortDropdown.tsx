import { useAppDispatch } from "../../../app/hooks";
import { setSort, type Sort } from "../slices/productsSlice";

export default function SortDropdown() {
  const dispatch = useAppDispatch();

  return (
    <select
      className="border border-gray-300 h-14 p-2 bg-white rounded-md"
      onChange={(e) => dispatch(setSort(e.target.value as Sort))}
    >
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
      <option value="LOW">Price Low → High</option>
      <option value="HIGH">Price High → Low</option>
    </select>
  );
}
