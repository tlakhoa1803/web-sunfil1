export default function DotNavigation({ total, activeIndex, onDotClick }) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === activeIndex ? "bg-gray-800" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
