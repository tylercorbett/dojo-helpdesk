import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export default function CloudSettings() {
  const handleValueChange = (newValue) => {
    console.log("Selected Value:", newValue);
  };

  return (
    <div>
      <CarouselButton isToggle onChange={handleValueChange} label={"Clouds"} />
    </div>
  );
}
