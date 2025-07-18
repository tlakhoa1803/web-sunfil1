import { User, Search } from 'lucide-react';
import { useState } from 'react';
import CategoryMenu from '../header/CategoryMenu';
import CartPreview from '../cart/Cart';

export default function Headerbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Banner khuyến mãi */}
      <div className="bg-[#2958a3] text-white text-xs text-center py-1">
        🎉 Nhập mã <b>NEWBIE</b> giảm ngay 10% cho đơn đầu tiên!
      </div>

      <header className="sticky w-full top-0 z-50 bg-white text-gray-800 shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/">
            <img src="/images/logo.png" alt="Sunfil Logo" className="h-12 cursor-pointer" />
          </a>

          {/* Thanh tìm kiếm */}
          <div className="flex-1 mx-6">
            <div className="flex border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
              <input
                type="text"
                placeholder="Tìm sản phẩm"
                className="flex-1 px-4 py-2 text-sm outline-none cursor-pointer"
              />
              <button className="bg-[#2958a3] px-4 text-white hover:bg-[#5377b5]">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Ngôn ngữ, Giỏ hàng, Tài khoản */}
          <div className="flex items-center gap-6 text-sm">
            {/* Ngôn ngữ */}
            <div className="flex items-center gap-1 cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/864417828/vi/vec-to/c%E1%BB%9D-vi%E1%BB%87t-nam.jpg?s=612x612&w=0&k=20&c=4wqSdySA6JkSO6Xw6m4255maL3mqQx4m0tTH3Q14u_U="
                className="h-[25px] w-auto object-contain"
              />
              <span>VI</span>
            </div>

            {/* Giỏ hàng */}
            <CartPreview />

            {/* Tài khoản */}
            <div className="flex items-center gap-1 cursor-pointer">
              <User size={20} />
              <span>Tài khoản</span>
            </div>
          </div>
        </div>

        {/* Thanh điều hướng */}
        <nav className="border-t border-gray-200 text-sm bg-white">
          <div className="container mx-auto flex items-center justify-center gap-x-8 py-2 px-4">
            {/* Danh mục */}
            <div className="relative">
              <div
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <button className="bg-[#2958a3] text-white px-4 py-2 rounded font-semibold text-sm">
                  ☰ Danh Mục Sản Phẩm
                </button>
                {showMenu && <CategoryMenu />}
              </div>
            </div>

            {/* Liên kết điều hướng */}
            <div className="flex gap-6 text-gray-800 font-medium">
              <a href="#" className="hover:text-blue-600">Về Chúng Tôi</a>
              <a href="#" className="hover:text-blue-600">Bài Viết</a>
              <a href="#" className="hover:text-blue-600">Catalog</a>
              <a href="#" className="hover:text-blue-600">Liên Hệ</a>
            </div>

            {/* Chính sách */}
            <div className="flex gap-4 text-[#2958a3] text-xs font-medium ml-6">
              <span>📞 Hỗ trợ 24/7</span>
              <span>🚚 Miễn Phí Vận Chuyển</span>
              <span>⏱️ Giao Hàng Nhanh 2h</span>
              <span>🔁 30 Ngày Đổi Trả</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
