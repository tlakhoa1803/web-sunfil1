import { useState } from "react";
import FilterPanel from "../components/filter/FilterPanel";
import ProductCard from "../components/Gridcard/ProductCard";
import BannerCarousel from "../components/banner/BannerCarousel";
import FeaturedProducts from "../components/banner/FeaturesProducts";
import useProductFilter from "../hooks/useProductFilter";
import SortBar from "../components/Gridcard/SortBar";
import { sortProducts } from "../utils/sortUtils"; 

export default function ProductCategoryPage() {
  const [bannerColor, setBannerColor] = useState("#ffffff");
  const [sortOption, setSortOption] = useState("liên quan");

  const {
    filteredProducts,
    selectedBrands,
    selectedOrigins,
    selectedCategories,
    selectedPriceRange,
    selectedYears,
    toggleBrand,
    toggleOrigin,
    toggleCategory,
    toggleYear,
    setPriceRange,
    resetFilters,
  } = useProductFilter();

  // 👉 Sort product list theo lựa chọn hiện tại
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return (
    <div>
      <BannerCarousel onBannerChangeColor={setBannerColor} />
      <FeaturedProducts bgColor={bannerColor} />

      <div className="max-w-screen-xl mx-auto flex gap-4 pt-6 px-4">
        <aside className="w-1/5">
          <FilterPanel
            selectedBrands={selectedBrands}
            selectedOrigins={selectedOrigins}
            toggleBrand={toggleBrand}
            toggleOrigin={toggleOrigin}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            selectedPriceRange={selectedPriceRange}
            setPriceRange={setPriceRange}
            selectedYears={selectedYears}
            toggleYear={toggleYear}
            resetFilters={resetFilters}
          />
        </aside>

        <main className="flex-1">
          <SortBar sortOption={sortOption} setSortOption={setSortOption} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sortedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
