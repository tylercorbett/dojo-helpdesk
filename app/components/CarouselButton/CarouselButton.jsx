import React, { useState } from "react";

export default function CarouselButton({ values, onChange, label }) {
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
    <div className="flex w-full items-center gap-4 p-3 bg-gray-600 bg-opacity-50 rounded-lg overflow-hidden">
      <p className="font-bold text-white w-96">{label}</p>
      <div className="flex items-center justify-between justify-self-end w-full">
        <button onClick={handlePrevious} className="carousel-button-control">
          &lt;
        </button>
        <div className="text-black font-bold text-center w-3/4 mx-2 rounded-lg bg-white py-2">
          {values[currentIndex]}
        </div>
        <button onClick={handleNext} className="carousel-button-control">
          &gt;
        </button>
      </div>
    </div>
  );
}
