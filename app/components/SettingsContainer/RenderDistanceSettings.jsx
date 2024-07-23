import React from "react";

// components
import RangeSelector from "../RangeSelector/RangeSelector";

export default function RenderDistanceSettings() {
  return (
    <div>
      <RangeSelector
        label={"Render distance"}
        units={"Chunks"}
        startRangeAt={1}
        endRangeAt={40}
        defaultValue={20}
      />
    </div>
  );
}
