import React, { useState } from "react";

export default function CarouselButton({
  values,
  onChange,
  label,
  isToggle = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleValues = ["Off", "On"];
  const displayValues = isToggle ? toggleValues : values;

  const handlePrevious = () => {
    const newIndex =
      currentIndex === 0 ? displayValues.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onChange(displayValues[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === displayValues.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onChange(displayValues[newIndex]);
  };

  return (
    <div className="flex w-full items-center gap-4 p-3 bg-gray-600 bg-opacity-50 rounded-lg overflow-hidden">
      <p className="font-bold text-white w-96">{label}</p>
      <div className="flex items-center justify-between justify-self-end w-full">
        <button onClick={handlePrevious} className="carousel-button-control">
          &lt;
        </button>
        <div
          className={`font-bold text-center w-3/4 mx-2 rounded-lg py-2 ${
            isToggle && displayValues[currentIndex] === "Off"
              ? "bg-black"
              : "text-black bg-white"
          }`}
        >
          {displayValues[currentIndex]}
        </div>
        <button onClick={handleNext} className="carousel-button-control">
          &gt;
        </button>
      </div>
    </div>
  );
}
