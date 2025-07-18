import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded shadow hover:shadow-lg p-3 cursor-pointer transition-all flex flex-col justify-between min-h-[340px]">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain mb-2"
        />
        <h3 className="text-sm font-bold line-clamp-2 h-10">{product.name}</h3>
        <p className="text-red-500 font-bold mt-1">
          {product.price.toLocaleString()} đ
        </p>
        {product.oldPrice && (
          <p className="line-through text-gray-400 text-sm">
            {product.oldPrice.toLocaleString()} đ
          </p>
        )}
        <div className="mt-1 flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs bg-yellow-200 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        className="mt-3 w-full bg-blue-500 text-white text-sm py-1 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Mua ngay
      </button>
    </div>
  );
}
