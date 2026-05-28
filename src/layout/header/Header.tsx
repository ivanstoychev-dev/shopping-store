import { setCategory } from "../../sections/products/slices/productsSlice";
import HeaderButton from "./HeaderButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { handleScrollTo } from "../../utils/scrollIntoView";
import type { Category } from "../../sections/products/types";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import FilterDrawer from "../aside/FilterDrawer";
import { categories } from "../../utils/constants";
import { ShoppingCart } from "@mui/icons-material";
import { setCartOpen } from "../cart/slices/cartSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items } = useAppSelector((state) => state.cart);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const productsQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleCategory = (type: Category) => {
    handleScrollTo("products");
    dispatch(setCategory(type));
  };

  return (
    <header className="sticky  px-20 grid grid-cols-3 py-2 shadow-lg w-full top-0 bg-white  z-50  justify-between">
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
      <button
        onClick={() => dispatch(setCartOpen(true))}
        className="relative cursor-pointer flex items-center justify-end w-full"
      >
        <ShoppingCart fontSize="large" />
        <span className="flex items-center justify-center w-6 h-6 translate-x-1/2 -translate-y-1/2 text-xs text-center bg-orange-500 text-white rounded-full absolute bottom-0 right-0">
          {productsQuantity}
        </span>
      </button>
    </header>
  );
}
