import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export const guiOptions = ["Auto", "50%", "75%", "100%", "150%"];

export const GUISettingsDescription = ({ graphicsKey }) => {
  return (
    <div className="my-7">
      <p>{guiOptions[graphicsKey]}</p>
      <p className="my-7">The other options are: </p>
      <ul className="pl-5">
        {guiOptions.map((guiOption) => {
          return (
            <li key={guiOption} className="list-disc">
              {guiOption}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function GUISettings({ onChange }) {
  const handleValueChange = (newValue) => {
    console.log("Selected Value:", newValue);
    onChange({ value: newValue, settingsType: "GUI scale" });
  };

  return (
    <div>
      <CarouselButton
        values={guiOptions}
        onChange={handleValueChange}
        label={"GUI Scale"}
      />
    </div>
  );
}
