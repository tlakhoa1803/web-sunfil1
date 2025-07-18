import { products } from "../../data/mockProducts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FeaturedProducts({ bgColor = "#fff" }) {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  const featuredProducts = products.filter((product) =>
    product.tags.includes("Best Seller") || product.tags.includes("Cực Hot")
  );

  const total = featuredProducts.length;

  const handleNext = () => {
    const nextIndex = index + itemsPerPage;
    setIndex(nextIndex >= total ? 0 : nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = index - itemsPerPage;
    setIndex(prevIndex < 0 ? Math.max(0, total - itemsPerPage) : prevIndex);
  };

  const displayedProducts = featuredProducts.slice(index, index + itemsPerPage);

  // Nếu đến cuối và còn dư 1–2 sp, thì nối thêm từ đầu để đủ 4 item
  const filledProducts =
    displayedProducts.length < itemsPerPage
      ? [...displayedProducts, ...featuredProducts.slice(0, itemsPerPage - displayedProducts.length)]
      : displayedProducts;

  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full max-w-[calc(1280px-30px)] px-4 py-6 rounded-md"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="text-white transition hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            {filledProducts.map((product, i) => (
              <div
                key={`${product.id}-${i}`}
                className="bg-white p-2 rounded shadow text-center cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-2"
                />
                <div className="flex flex-col justify-between h-[100px]">
                  <div className="text-sm text-gray-800 font-extrabold min-h-[40px]">
                    {product.name}
                  </div>
                  <div className="text-sm text-gray-800 font-extrabold">
                    {product.price.toLocaleString("vi-VN")}đ
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-white transition hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
