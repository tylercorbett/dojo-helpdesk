import React from "react";
import CarouselButton from "../CarouselButton/CarouselButton";

export const grahpicsOptions = ["Fancy", "Simple", "Normal", "Wild", "Epic"];

const graphicsDescriptionMap = {
  Fancy:
    "Fancy Graphics is a setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default.",
  Simple:
    "Simple Graphics is a setting in which Blocks and Mobs, by default, have simple textures.",
  Normal:
    "Normal Graphics is a setting in which Blocks and Mobs, by default, have average textures.",
  Wild: "Wild Graphics is a setting in which Blocks and Mobs, by default, have more crazy textures.",
  Epic: "Epic Graphics is a setting in which Blocks and Mobs, by default, have the coolest textures.",
};

export const GraphicsSettingsDescription = ({ graphicsKey }) => {
  return (
    <div className="my-7">
      <p>{graphicsDescriptionMap[graphicsKey]}</p>
      <p className="my-7">The other options are: </p>
      <ul className="pl-5">
        {grahpicsOptions.map((graphicsOption) => {
          return (
            <li key={grahpicsOptions} className="list-disc">
              {graphicsOption}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function GraphicsSettings({ onChange }) {
  const handleValueChange = (newValue) => {
    onChange({ value: newValue, settingsType: "graphics" });
  };

  return (
    <div>
      <CarouselButton
        values={grahpicsOptions}
        onChange={handleValueChange}
        label={"Graphics"}
      />
    </div>
  );
}
