import React, { useState } from "react";

export default function CarouselButton({ values, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? values.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onChange(values[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === values.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onChange(values[newIndex]);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handlePrevious}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        &lt;
      </button>
      <div className="text-white font-bold">{values[currentIndex]}</div>
      <button
        onClick={handleNext}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        &gt;
      </button>
    </div>
  );
}
