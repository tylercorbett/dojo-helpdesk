"use client";

import React from "react";

// components
import LabelToolTip from "../../components/LabelToolTip/LabelToolTip";
import GraphicsSettings from "./GraphicsSettings";
import AnaglyphSettings from "./AnaglyphSettings";

export default function SettingsContainer() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <div className="mb-4">
          <LabelToolTip
            labelText={"Display"}
            toolTipText={"Adjust display settings here"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <GraphicsSettings />
          <AnaglyphSettings />
        </div>
      </div>
      <div>
        <p className="text-center">Extra settings here</p>
      </div>
    </div>
  );
}
