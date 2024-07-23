import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export default function GUISettings() {
  const options = ["Auto", "50%", "75%", "100%", "150%"];

  const handleValueChange = (newValue) => {
    console.log("Selected Value:", newValue);
  };

  return (
    <div className="flex items-center gap-4">
      <CarouselButton
        values={options}
        onChange={handleValueChange}
        label={"GUI Scale"}
      />
    </div>
  );
}
