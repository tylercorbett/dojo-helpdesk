import React from "react";

// components
import RangeSelector from "../RangeSelector/RangeSelector";

export default function MinMapLevelSettings() {
  return (
    <div>
      <RangeSelector
        label={"Minmap Levels"}
        startRangeAt={1}
        endRangeAt={4}
        defaultValue={4}
      />
    </div>
  );
}
