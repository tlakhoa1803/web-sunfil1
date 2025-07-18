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
## 📁 Cấu trúc thư mục
├── components/ <br>
│ ├── cart/ # Các component liên quan đến giỏ hàng <br>
│ │ └── Cart.jsx <br>
│ ├──filter/ # Các component liên quan đến lọc <br>
│ │ └── FilterPanel.jsx <br>
│ ├──banner/ # Các component liên quan đến banner <br>
│ │ └── BannerCarousel.jsx / # Xử lý hiển thị banner <br>
│ │ └── FeaturesProducts.jsx / # Xử lý các sản phẩm phổ biển <br>
│ ├──Gridcard/ # Các component liên quan đến hiển thị sản phẩm <br>
│ │ └── ProductCard.jsx / # Xử lý các sản phẩm hiển thụ (mua hàng) <br>
│ │ └── SortBar.jsx / # Xử lý sắp xếp các sản phẩm <br>
│ ├──header/ # Các component liên quan header <br>
│ │ └── CategoryMenu.jsx / # Xử lý pop up danh mục sản phẩm <br>
│ │ └── headbar.jsx / # Xử lý header <br>
│ ├──footer/ # Các component liên quan footer <br>
│ │ └── footerbar.jsx / # Xử lý các hiển thị footer <br>
├── context/ <br>
│ └── CartContext.jsx # Quản lý giỏ hàng với Context API <br>
├── data/ <br>
│ └── mockCart.js # Dữ liệu đơn hàng mẫu <br>
│ └── mockBanner.js # Dữ liệu banner mẫu <br>
│ └── mockProducts.js # Dữ liệu sản phẩm mẫu <br>
├── hooks/ <br>
│ └── useProductFilter.jsx/ #Xử lý lọc sản phẩm quá các điều kiện <br>
├── pages/ <br>
│ └── ProductCategoryPage.jsx/ # Trang chủ hiển thị các component <br>
├── utils/ <br>
│ └── sortUtils.js/ # Xử lý sort sản phẩm <br>
├── App.jsx # Trang chính <br>
└── main.jsx # Điểm khởi động ứng dụng <br>

## ⚙️ Cài đặt và chạy dự án

```bash
# Clone project
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Cài đặt gói
npm install

# Chạy project
npm run dev
