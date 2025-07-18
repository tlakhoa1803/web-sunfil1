import { useState, useEffect } from "react";
import { products } from "../data/mockProducts";

export default function useProductFilter() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const createToggle = (setter) => (value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleBrand = createToggle(setSelectedBrands);
  const toggleOrigin = createToggle(setSelectedOrigins);
  const toggleCategory = createToggle(setSelectedCategories);
  const toggleYear = createToggle(setSelectedYears);

  const setPriceRange = (rangeObj) => {
    const newRange = {
      min: Number(rangeObj.min),
      max: Number(rangeObj.max),
    };

    if (
      selectedPriceRange &&
      selectedPriceRange.min === newRange.min &&
      selectedPriceRange.max === newRange.max
    ) {
      setSelectedPriceRange(null); // Gỡ lọc khi click lại
    } else {
      setSelectedPriceRange(newRange);
    }
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedOrigins([]);
    setSelectedCategories([]);
    setSelectedYears([]);
    setSelectedPriceRange(null);
  };

  useEffect(() => {
    const result = products.filter((p) => {
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      const matchOrigin =
        selectedOrigins.length === 0 || selectedOrigins.includes(p.origin);
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category);
      const matchYear =
        selectedYears.length === 0 || selectedYears.includes(p.year);
      const matchPrice =
        !selectedPriceRange ||
        (typeof p.price === "number" &&
          p.price >= selectedPriceRange.min &&
          p.price <= selectedPriceRange.max);

      return (
        matchBrand &&
        matchOrigin &&
        matchCategory &&
        matchYear &&
        matchPrice
      );
    });

    setFilteredProducts(result);
  }, [
    selectedBrands,
    selectedOrigins,
    selectedCategories,
    selectedYears,
    selectedPriceRange,
  ]);

  return {
    filteredProducts,
    selectedBrands,
    selectedOrigins,
    selectedCategories,
    selectedYears,
    selectedPriceRange,
    toggleBrand,
    toggleOrigin,
    toggleCategory,
    toggleYear,
    setPriceRange,
    resetFilters,
  };
}
