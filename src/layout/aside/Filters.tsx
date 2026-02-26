import CheckBox from "../../_shared/components/CheckBox";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleColor } from "../../sections/products/slices/productsSlice";
import FiltersContainer from "./FiltersContainer";
import PriceRange from "./PriceRange";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Filters() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((s) => s.products);
  const colors = ["black", "red", "brown", "white"];

  if (isMobile) return;

  return (
    <aside className="w-64 bg-gray-50 p-6 pt-12 flex flex-col gap-5">
      <FiltersContainer title="Colors" className="pl-4">
        {colors.map((c) => (
          <CheckBox
            key={c}
            checked={filters.colors.includes(c)}
            onChange={() => dispatch(toggleColor(c))}
            label={c}
          />
        ))}
      </FiltersContainer>
      <FiltersContainer title="Price">
        <PriceRange />
      </FiltersContainer>
    </aside>
  );
}
