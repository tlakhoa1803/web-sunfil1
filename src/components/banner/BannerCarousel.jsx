import { useState, useEffect } from "react";
import { banners } from "../../data/mockBanners";

export default function BannerCarousel({ onBannerChangeColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const color = banners[currentIndex].color || "#ffffff";
    if (typeof onBannerChangeColor === "function") {
      onBannerChangeColor(color);
    }
  }, [currentIndex]);

  const currentBanner = banners[currentIndex];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl h-[320px] md:h-[400px] px-4">
          <img
            src={currentBanner.image}
            alt={currentBanner.alt}
            className="w-full h-full object-fill rounded-md shadow-md"
          />
      </div>
    </div>
  );
}
