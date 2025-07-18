const sortOptions = [
  { value: "liên quan", label: "Liên quan" },
  { value: "bán chạy", label: "Bán chạy" },
  { value: "mới nhất", label: "Mới nhất" },
  { value: "nổi bật", label: "Nổi bật" },
  { value: "giá tăng", label: "Giá: Thấp → Cao" },
  { value: "giá giảm", label: "Giá: Cao → Thấp" },
];

export default function SortBar({ sortOption, setSortOption }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">Danh sách sản phẩm</h2>
      <div className="flex items-center gap-2">
        <span className="text-gray-500 mr-2">Sắp xếp theo</span>
        {sortOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`px-3 py-1 rounded-md text-sm border 
              ${sortOption === option.value
                ? "bg-blue-500 text-white border-blue-500"
                : "text-gray-600 bg-white border-gray-300 hover:bg-gray-100"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
