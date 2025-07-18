import { useState } from "react";
import { products } from "../../data/mockProducts";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

export default function FilterPanel({
  selectedBrands,
  selectedOrigins,
  toggleBrand,
  toggleOrigin,
  selectedCategories,
  toggleCategory,
  selectedPriceRange,
  setPriceRange,
  selectedYears,
  toggleYear,
  resetFilters,
}) {
  const brands = [...new Set(products.map((p) => p.brand))];
  const origins = [...new Set(products.map((p) => p.origin))];
  const categories = [...new Set(products.map((p) => p.category))];
  const years = [...new Set(products.map((p) => p.year))].sort((a, b) => b - a);

  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    brand: true,
    origin: true,
    year: true,
  });

  const toggleSection = (section) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

  const priceOptions = [
    { label: "Dưới 100,000 ₫", min: 0, max: 100000 },
    { label: "100,000 ₫ – 300,000 ₫", min: 100000, max: 300000 },
    { label: "300,000 ₫ – 500,000 ₫", min: 300000, max: 500000 },
    { label: "Trên 500,000 ₫", min: 500000, max: Infinity },
  ];

  const handlePriceChange = (range) => {
    // Nếu người dùng nhấn lại cùng 1 mức giá => bỏ chọn
    if (
      selectedPriceRange?.min === range.min &&
      selectedPriceRange?.max === range.max
    ) {
      setPriceRange(null);
    } else {
      setPriceRange(range);
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 space-y-4">
      <div className="flex items-center gap-2 text-blue-600 font-bold text-lg">
        <Filter size={20} />
        <span>Bộ Lọc</span>
      </div>

      <button
        className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        onClick={resetFilters}
      >
        Reset bộ lọc
      </button>

      {/* Danh mục */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("category")}
        >
          <span>Danh mục sản phẩm</span>
          {openSections.category ? <ChevronUp /> : <ChevronDown />}
        </div>
        {openSections.category && (
          <div className="mt-2 space-y-1 text-sm">
            {categories.map((cat) => (
              <div key={cat} className="cursor-pointer">
                <input
                  type="checkbox"
                  id={`cat-${cat}`}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <label htmlFor={`cat-${cat}`} className="ml-2 cursor-pointer">
                  {cat}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Giá */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("price")}
        >
          <span>Khoảng giá</span>
          {openSections.price ? <ChevronUp /> : <ChevronDown />}
        </div>
        {openSections.price && (
          <div className="mt-2 space-y-2 text-sm">
            {priceOptions.map((range, idx) => {
              const isSelected =
                selectedPriceRange?.min === range.min &&
                selectedPriceRange?.max === range.max;
              return (
                <div key={idx} className="cursor-pointer">
                  <input
                    type="checkbox"
                    id={`price-${idx}`}
                    checked={isSelected}
                    onChange={() => handlePriceChange(range)}
                  />
                  <label htmlFor={`price-${idx}`} className="ml-2 cursor-pointer">
                    {range.label}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Thương hiệu */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("brand")}
        >
          <span>Thương hiệu</span>
          {openSections.brand ? <ChevronUp /> : <ChevronDown />}
        </div>
        {openSections.brand && (
          <div className="mt-2 space-y-1 text-sm">
            {brands.map((brand) => (
              <div key={brand} className="cursor-pointer">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <label htmlFor={`brand-${brand}`} className="ml-2 cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Xuất xứ */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("origin")}
        >
          <span>Xuất xứ</span>
          {openSections.origin ? <ChevronUp /> : <ChevronDown />}
        </div>
        {openSections.origin && (
          <div className="mt-2 space-y-1 text-sm">
            {origins.map((origin) => (
              <div key={origin} className="cursor-pointer">
                <input
                  type="checkbox"
                  id={`origin-${origin}`}
                  checked={selectedOrigins.includes(origin)}
                  onChange={() => toggleOrigin(origin)}
                />
                <label htmlFor={`origin-${origin}`} className="ml-2 cursor-pointer">
                  {origin}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Năm sản xuất */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("year")}
        >
          <span>Năm sản xuất</span>
          {openSections.year ? <ChevronUp /> : <ChevronDown />}
        </div>
        {openSections.year && (
          <div className="mt-2 space-y-1 text-sm">
            {years.map((year) => (
              <div key={year} className="cursor-pointer">
                <input
                  type="checkbox"
                  id={`year-${year}`}
                  checked={selectedYears.includes(year)}
                  onChange={() => toggleYear(year)}
                />
                <label htmlFor={`year-${year}`} className="ml-2 cursor-pointer">
                  {year}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
