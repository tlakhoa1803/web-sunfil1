export default function FooterBar() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-800 pt-10 px-4 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div>
          <h4 className="font-bold text-blue-900 mb-2 uppercase">
            Viet Hung Auto Production Trading Joint Stock Company
          </h4>
          <p>MST: <span className="font-medium text-blue-600">0305094228</span></p>
          <p>Địa chỉ: 13 Nghĩa Thục, P.5, Q.5, TP.HCM</p>
          <p>SĐT: <span className="text-blue-600 font-medium">0283 760 7607</span></p>
          <p>Giờ mở cửa: <b>09:00 – 22:00</b> (Thứ 2 - Thứ 6)</p>
          <img src="https://webmedia.com.vn/images/2021/09/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png" alt="Bộ Công Thương" className="mt-3 h-[80px]" />
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-[50px]">
        <div>
          <h4 className="text-lg text-[#1f2f53] font-bold mb-3">Sitemap</h4>
          <ul className="space-y-1">
            <li><a href="#">About</a></li>
            <li><a href="#">Article</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg text-[#1f2f53] font-bold mb-3">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Delivery Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg text-[#1f2f53] font-bold mb-3">Download App </h4>
          <div className="space-y-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10 cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1280px-Download_on_the_App_Store_RGB_blk.svg.png " alt="App Store" className="h-[45px] cursor-pointer"  />
          </div>
          <div className="mt-3 flex items-center gap-1 ml-[90px]">
              <img
                src="https://media.istockphoto.com/id/864417828/vi/vec-to/c%E1%BB%9D-vi%E1%BB%87t-nam.jpg?s=612x612&w=0&k=20&c=4wqSdySA6JkSO6Xw6m4255maL3mqQx4m0tTH3Q14u_U="
                className="h-[25px] w-auto object-contain cursor-pointer"
              />
            <span>VI</span>
          </div>
        </div>
      </div>
      </div>
      <div className="text-center py-4 text-gray-500 mt-6 border-t">
        © 2025 Sunfil. All rights reserved.
      </div>
    </footer>
  );
}
