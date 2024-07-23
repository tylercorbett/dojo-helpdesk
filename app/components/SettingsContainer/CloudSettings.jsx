import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export const CloudSettingsDescription = ({ value }) => {
  return (
    <p className="my-7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, velit
      possimus qui, est consectetur dolore placeat dolorem provident facere
      dolores, maxime repellat! Debitis molestias quis blanditiis odit ullam
      mollitia doloremque!
    </p>
  );
};

export default function CloudSettings({ onChange }) {
  const handleValueChange = (newValue) => {
    onChange({ value: newValue, settingsType: "clouds" });
  };

  return (
    <div>
      <CarouselButton isToggle onChange={handleValueChange} label={"Clouds"} />
    </div>
  );
}
