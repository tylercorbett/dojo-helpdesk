import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export default function GraphicsSettings() {
  const options = ["Fancy", "Simple", "Normal", "Wild", "Epic"];

  const handleValueChange = (newValue) => {
    console.log("Selected Value:", newValue);
  };

  return (
    <div className="flex items-center gap-4">
      <CarouselButton values={options} onChange={handleValueChange} />
    </div>
  );
}
