export function sortProducts(products, sortOption) {
  const sorted = [...products];

  switch (sortOption) {
    case "bán chạy":
      return sorted.sort((a, b) => b.sold - a.sold);
    case "mới nhất":
      return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    case "giá tăng":
      return sorted.sort((a, b) => a.price - b.price);
    case "giá giảm":
      return sorted.sort((a, b) => b.price - a.price);
    case "nổi bật":
      return sorted.filter(p => p.tags.includes("Best Seller") || p.tags.includes("Cực Hot"));
    default:
      return sorted; // "liên quan" hoặc không xác định thì giữ nguyên
  }
}
