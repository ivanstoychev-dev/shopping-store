import { handleScrollTo } from "../../utils/scrollIntoView";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative justify-center xl:justify-normal min-h-[85vh] lg:pl-20 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/hero/hero.jpg')] bg-cover bg-right lg:bg-top scale-110" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl lg:text-6xl md:text-8xl font-black uppercase tracking-tight">
          NOT FOR EVERYONE.
        </h1>

        <p className="mt-2 lg:mt-6 text-gray-400 text-sm lg:text-xl max-w-xl mx-auto">
          Designed for the obsessed. Crafted for the elite.
        </p>

        <button
          onClick={() => handleScrollTo("products")}
          className="lg:mt-10 mt-5 px-10 cursor-pointer py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
        >
          View Collection
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
