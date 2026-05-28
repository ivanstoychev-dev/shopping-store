import Header from "./layout/header/Header";
import Filters from "./layout/aside/Filters";
import ProductGrid from "./sections/products/components/ProductGrid";
import SortDropdown from "./sections/products/components/SortDropdown";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import HeroSection from "./sections/hero/HeroSection";
import Footer from "./layout/footer/Footer";
import Cart from "./layout/cart/Cart";
import { setCartOpen } from "./layout/cart/slices/cartSlice";

export default function App() {
  const { category } = useAppSelector((state) => state.products);
  const { open } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Cart open={open} onClose={() => dispatch(setCartOpen(false))} />
      <HeroSection />
      <main className="flex-1 flex overflow-auto ">
        <Filters />
        <div id="products" className="flex-1 p-4  lg:px-6 pt-9 bg-gray-50">
          <div className="flex justify-between items-center mb-4 ">
            <div>
              <h1 className="text-5xl font-bold capitalize">{category}</h1>
              <p className="text-gray-600 font-montserrat font-bold text-lg">
                Explore our collection
              </p>
            </div>
            <SortDropdown />
          </div>
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
