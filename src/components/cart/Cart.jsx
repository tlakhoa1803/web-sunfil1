  // src/components/cart/CartPreview.jsx
  'use client';

  import { useState, useEffect, useRef } from 'react';
  import { ShoppingCart } from 'lucide-react';
  import { useCart } from '../../context/CartContext';

  export default function CartPreview() {
    const { cartItem, decreaseQuantity, increaseQuantity } = useCart(); // 🟢 thêm increaseQuantity
    const [isOpen, setIsOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const wrapperRef = useRef(null);

    const totalItems = cartItem.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
          if (!isPinned) {
            setIsOpen(false);
          }
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isPinned]);

    const handleToggle = () => {
      setIsPinned((prev) => !prev);
      setIsOpen(true);
    };

    const handleMouseEnter = () => {
      if (!isPinned) setIsOpen(true);
    };

    const handleMouseLeave = () => {
      if (!isPinned) setIsOpen(false);
    };

    return (
      <div
        ref={wrapperRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={handleToggle}
          className="cursor-pointer flex items-center gap-2 relative"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-white shadow">
              {totalItems}
            </span>
          )}
        </div>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-xl rounded-lg border z-50">
            <div className="p-3 max-h-96 overflow-y-auto">
              {cartItem.length === 0 ? (
                <p className="text-center text-gray-500">Giỏ hàng trống</p>
              ) : (
                cartItem.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 border-b pb-2 mb-2 last:mb-0 last:border-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <div className="text-xs text-gray-600 flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-100"
                        >
                          +
                        </button>
                        <span>x {item.price.toLocaleString()}₫</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItem.length > 0 && (
              <div className="p-3 border-t font-bold text-right text-green-600">
                Tổng: {totalPrice.toLocaleString()}₫
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
