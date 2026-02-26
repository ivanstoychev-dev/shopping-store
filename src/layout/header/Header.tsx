import { setCategory } from "../../sections/products/slices/productsSlice";
import HeaderButton from "./HeaderButton";
import { useAppDispatch } from "../../app/hooks";
import { handleScrollTo } from "../../utils/scrollIntoView";
import type { Category } from "../../sections/products/types";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import FilterDrawer from "../aside/FilterDrawer";
import { categories } from "../../utils/constants";

export default function Header() {
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleCategory = (type: Category) => {
    handleScrollTo("products");
    dispatch(setCategory(type));
  };

  return (
    <header className="sticky px-6 grid grid-cols-3 py-2 shadow-lg w-full top-0 bg-white  z-50  justify-between">
      <>
        <button
          className="cursor-pointer  xl:flex hidden"
          onClick={() => handleScrollTo("hero")}
        >
          <img src="/images/logo.png" className="lg:w-20 lg:h-18 " />
        </button>
        <button className="w-fit xl:hidden" onClick={() => setMobileOpen(true)}>
          <MenuIcon />
        </button>
        <FilterDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </>

      <nav className="lg:gap-8 gap-4  flex items-center justify-center">
        {categories.map((category: Category) => (
          <HeaderButton key={category} onClick={() => handleCategory(category)}>
            {category[0].toUpperCase() + category.slice(1)}
          </HeaderButton>
        ))}
      </nav>
    </header>
  );
}
