# 🛒 Simple E-commerce Website

Một dự án web bán hàng đơn giản được xây dựng bằng **React** nhằm mô phỏng các tính năng cơ bản như:

- Hiển thị danh sách sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Tăng/giảm số lượng sản phẩm trong giỏ
- Hiệu ứng hover/click để xem giỏ hàng
- Tính tổng số lượng và tổng giá trị đơn hàng

---
![alt text](image.png)
![alt text](image-1.png)
---

## 🛠️ Công nghệ sử dụng

- ⚛️ ReactJS + Vite
- 🧠 Context API (quản lý trạng thái giỏ hàng)
- 🧪 Mock data (sản phẩm)
- 🎨 Tailwind CSS (giao diện)
- 🛍️ Lucide Icons (biểu tượng giỏ hàng)

---
graph TD
  A1[components]:::folder
  A1 --> B1[cart/Cart.jsx<br/><i>Component giỏ hàng</i>]
  A1 --> B2[filter/FilterPanel.jsx<br/><i>Bộ lọc sản phẩm</i>]
  A1 --> B3[banner]:::folder
  B3 --> C1[BannerCarousel.jsx<br/><i>Hiển thị banner</i>]
  B3 --> C2[FeaturesProducts.jsx<br/><i>Sản phẩm phổ biến</i>]
  A1 --> B4[Gridcard]:::folder
  B4 --> C3[ProductCard.jsx<br/><i>Thẻ sản phẩm</i>]
  B4 --> C4[SortBar.jsx<br/><i>Sắp xếp sản phẩm</i>]
  A1 --> B5[header]:::folder
  B5 --> C5[CategoryMenu.jsx<br/><i>Popup danh mục</i>]
  B5 --> C6[Headbar.jsx<br/><i>Thanh header</i>]
  A1 --> B6[footer/Footerbar.jsx<br/><i>Footer website</i>]

  D1[context]:::folder --> D2[CartContext.jsx<br/><i>Quản lý giỏ hàng bằng Context API</i>]
  E1[data]:::folder
  E1 --> E2[mockCart.js<br/><i>Dữ liệu giỏ hàng mẫu</i>]
  E1 --> E3[mockBanner.js<br/><i>Dữ liệu banner mẫu</i>]
  E1 --> E4[mockProducts.js<br/><i>Dữ liệu sản phẩm mẫu</i>]

  F1[hooks]:::folder --> F2[useProductFilter.jsx<br/><i>Hook lọc sản phẩm</i>]
  G1[pages]:::folder --> G2[ProductCategoryPage.jsx<br/><i>Trang chính</i>]
  H1[utils]:::folder --> H2[sortUtils.js<br/><i>Hàm sắp xếp sản phẩm</i>]
  I1[App.jsx<br/><i>Giao diện tổng</i>]
  I2[main.jsx<br/><i>Khởi động ứng dụng</i>]

  classDef folder fill:#f5f5f5,stroke:#888,stroke-width:1px;

## ⚙️ Cài đặt và chạy dự án

```bash
# Clone project
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Cài đặt gói
npm install

# Chạy project
npm run dev
