import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export const AnaglyphSettingsDescription = ({ value }) => {
  return (
    <p className="my-7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, velit
      possimus qui, est consectetur dolore placeat dolorem provident facere
      dolores, maxime repellat! Debitis molestias quis blanditiis odit ullam
      mollitia doloremque!
    </p>
  );
};

export default function AnaglyphSettings({ onChange }) {
  const handleValueChange = (newValue) => {
    onChange({ value: newValue, settingsType: "3d anaglyph" });
  };

  return (
    <div>
      <CarouselButton
        isToggle
        onChange={handleValueChange}
        label={"3d Anaglyph"}
      />
    </div>
  );
}
