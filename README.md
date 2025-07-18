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

<pre><code>## 📁 Cấu trúc thư mục ```text ├── components/ │ ├── cart/ # Các component liên quan đến giỏ hàng │ │ └── Cart.jsx │ ├── filter/ # Các component liên quan đến lọc │ │ └── FilterPanel.jsx │ ├── banner/ # Các component liên quan đến banner │ │ ├── BannerCarousel.jsx # Hiển thị banner │ │ └── FeaturesProducts.jsx # Sản phẩm phổ biến │ ├── Gridcard/ # Hiển thị sản phẩm │ │ ├── ProductCard.jsx # Mua hàng │ │ └── SortBar.jsx # Sắp xếp │ ├── header/ # Header │ │ ├── CategoryMenu.jsx # Popup danh mục │ │ └── Headbar.jsx # Header │ ├── footer/ # Footer │ │ └── FooterBar.jsx # Hiển thị footer ├── context/ │ └── CartContext.jsx # Context giỏ hàng ├── data/ │ ├── mockCart.js # Dữ liệu đơn hàng │ ├── mockBanner.js # Dữ liệu banner │ └── mockProducts.js # Dữ liệu sản phẩm ├── hooks/ │ └── useProductFilter.jsx # Lọc sản phẩm ├── pages/ │ └── ProductCategoryPage.jsx # Trang chủ ├── utils/ │ └── sortUtils.js # Sắp xếp sản phẩm ├── App.jsx # Trang chính └── main.jsx # Khởi động ứng dụng ``` </code></pre>
## ⚙️ Cài đặt và chạy dự án

```bash
# Clone project
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Cài đặt gói
npm install

# Chạy project
npm run dev
