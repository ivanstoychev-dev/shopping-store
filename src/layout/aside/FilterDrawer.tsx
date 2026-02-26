import { useAppDispatch, useAppSelector } from "../../app/hooks";
import FiltersContainer from "./FiltersContainer";
import CheckBox from "../../_shared/components/CheckBox";
import { toggleColor } from "../../sections/products/slices/productsSlice";

import Drawer from "@mui/material/Drawer";
import PriceRange from "./PriceRange";

function FilterDrawer({
  mobileOpen,
  handleDrawerToggle,
}: {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((s) => s.products);
  const colors = ["black", "red", "brown", "white"];

  const drawerWidth = 240;

  const drawerContent = (
    <div className="flex flex-col gap-5  p-6 pt-12 bg-gray-50 h-full">
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
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      className="xl:hidden"
      sx={{
        "& .MuiDrawer-paper": { width: drawerWidth },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

export default FilterDrawer;
