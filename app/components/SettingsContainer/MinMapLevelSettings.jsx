import React from "react";

// components
import RangeSelector from "../RangeSelector/RangeSelector";

export const MinMapLevelSettingsDescription = () => {
  return (
    <p className="my-7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, velit
      possimus qui, est consectetur dolore placeat dolorem provident facere
      dolores, maxime repellat! Debitis molestias quis blanditiis odit ullam
      mollitia doloremque!
    </p>
  );
};

export default function MinMapLevelSettings({ onChange }) {
  const handleValueChange = (newValue) => {
    onChange({ value: newValue, settingsType: "minmap levels" });
  };

  return (
    <div>
      <RangeSelector
        label={"Minmap Levels"}
        startRangeAt={1}
        endRangeAt={4}
        defaultValue={4}
        onChange={handleValueChange}
      />
    </div>
  );
}
