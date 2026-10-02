import HeroCarousel from "../components/HeroCarousel";
import ProductGrid from "../components/ProductGrid";
import Gallery from "../components/Gallery";
import BrandStory from "../components/BrandStory";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-6 py-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a className="text-xl font-bold tracking-tight flex-shrink-0" href="#">
            Holy Hoodies
          </a>
          <nav className="hidden md:flex gap-3 text-sm items-center flex-1 justify-center">
            <a href="#drops" className="px-4 py-2 bg-white border border-black rounded-sm font-bold text-black hover:bg-black hover:text-white transition-colors">Shop</a>
            <a href="#story" className="px-4 py-2 bg-white border border-black rounded-sm font-bold text-black hover:bg-black hover:text-white transition-colors">Story</a>
            <a href="#collections" className="px-4 py-2 bg-white border border-black rounded-sm font-bold text-black hover:bg-black hover:text-white transition-colors">Collections</a>
          </nav>
          <div className="flex-shrink-0"></div>
        </div>
      </header>

      <main className="flex-1">
        <HeroCarousel />
        <ProductGrid title="Featured Drop" />
        <Gallery />
        <div id="story">
          <BrandStory />
        </div>
      </main>

      <Footer />
    </div>
  );
}
