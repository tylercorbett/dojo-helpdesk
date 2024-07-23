import React from "react";

// components
import RangeSelector from "../RangeSelector/RangeSelector";

export const RenderDistanceSettingsDescription = () => {
  return (
    <p className="my-7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, velit
      possimus qui, est consectetur dolore placeat dolorem provident facere
      dolores, maxime repellat! Debitis molestias quis blanditiis odit ullam
      mollitia doloremque!
    </p>
  );
};

export default function RenderDistanceSettings({ onChange }) {
  const handleValueChange = (newValue) => {
    onChange({ value: newValue, settingsType: "render distance" });
  };

  return (
    <div>
      <RangeSelector
        label={"Render distance"}
        units={"Chunks"}
        startRangeAt={1}
        endRangeAt={40}
        defaultValue={20}
        onChange={handleValueChange}
      />
    </div>
  );
}
