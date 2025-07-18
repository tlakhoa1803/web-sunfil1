'use client';
import { useState } from 'react';
import { products } from '../../data/mockProducts';

export default function CategoryMenu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Array.from(new Set(products.map(p => p.category)));
  const productsByCategory = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : [];

  const recommendedProducts = selectedCategory
    ? products
        .filter(p => p.category !== selectedCategory)
        .slice(0, 3)
    : [];

  return (
    <div className="absolute top-full left-0 w-[800px] flex z-40 shadow-md border-t bg-white">
      {/* Cột 1: Danh mục */}
      <div className="w-1/2 border-r p-4">
        <h3 className="font-bold mb-2 text-[#2958a3]">Danh mục</h3>
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-3 py-2 rounded hover:bg-blue-50 ${
                selectedCategory === cat ? 'bg-blue-100 font-semibold' : ''
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Cột 2: Sản phẩm + Gợi ý */}
      <div className="w-1/2 p-4 overflow-y-auto max-h-[500px]">
        {selectedCategory ? (
          <>
            <h3 className="font-bold mb-3 text-[#2958a3]">
              Sản phẩm: {selectedCategory}
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {productsByCategory.map((prod) => (
                <div key={prod.id} className="border rounded p-2 text-sm hover:shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <div className="font-medium truncate">{prod.name}</div>
                  <div className="text-red-600 font-semibold">
                    {prod.price.toLocaleString()}₫
                  </div>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-[#2958a3] mb-2">Gợi ý cho bạn</h4>
            <div className="grid grid-cols-3 gap-4">
              {recommendedProducts.map((prod) => (
                <div key={prod.id} className="border rounded p-2 text-sm hover:shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <div className="font-medium truncate">{prod.name}</div>
                  <div className="text-red-600 font-semibold">
                    {prod.price.toLocaleString()}₫
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-gray-500 italic">Chọn danh mục để xem sản phẩm</div>
        )}
      </div>
    </div>
  );
}
