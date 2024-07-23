import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export default function AnaglyphSettings() {
  const options = ["Off", "On"];

  const handleValueChange = (newValue) => {
    console.log("Selected Value:", newValue);
  };

  return (
    <div className="flex items-center gap-4">
      <CarouselButton
        values={options}
        onChange={handleValueChange}
        label={"3d Anaglyph"}
      />
    </div>
  );
}
