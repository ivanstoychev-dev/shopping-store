import Slider from "@mui/material/Slider";
import PriceInput from "./PriceInput";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPriceRange } from "../../sections/products/slices/productsSlice";

export default function PriceRange() {
  const { filters } = useAppSelector((s) => s.products);
  const dispatch = useAppDispatch();

  const selectedRange = filters.priceRange;

  function valuetext(value: number) {
    return `${value}$`;
  }

  const minDistance = 10;

  const handleChange = (
    event: Event,
    newValue: number[],
    activeThumb: number,
  ) => {
    if (activeThumb === 0) {
      dispatch(
        setPriceRange([
          Math.min(newValue[0], selectedRange[1] - minDistance),
          selectedRange[1],
        ]),
      );
    } else {
      dispatch(
        setPriceRange([
          selectedRange[0],
          Math.max(newValue[1], selectedRange[0] + minDistance),
        ]),
      );
    }
  };

  const handleInputChange = (type: string, value: number) => {
    if (type === "min") {
      dispatch(setPriceRange([value, selectedRange[1]]));
    }
    if (type === "max") {
      if (value > 1000 || value < selectedRange[0] + 10) return;
      dispatch(setPriceRange([selectedRange[0], value]));
    }
  };

  return (
    <Stack direction="column" gap={2} width={"full"}>
      <Slider
        className="mt-6"
        getAriaLabel={() => "Minimum Price"}
        value={selectedRange}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
        max={1000}
        min={0}
      />
      <Stack direction="row" gap={2}>
        <PriceInput
          label="From:"
          value={selectedRange[0]}
          onChange={(e) => handleInputChange("min", Number(e.target.value))}
        />

        <PriceInput
          label="To:"
          value={selectedRange[1]}
          onChange={(e) => handleInputChange("max", Number(e.target.value))}
        />
      </Stack>
    </Stack>
  );
}
