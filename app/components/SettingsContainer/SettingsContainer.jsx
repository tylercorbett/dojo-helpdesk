"use client";

import React from "react";

// components
import LabelToolTip from "../../components/LabelToolTip/LabelToolTip";
import GraphicsSettings from "./GraphicsSettings";
import AnaglyphSettings from "./AnaglyphSettings";
import GUISettings from "./GUISettings";
import CloudSettings from "./CloudSettings";

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
        <div className="flex flex-col gap-2 mb-8">
          <GraphicsSettings />
          <AnaglyphSettings />
          <GUISettings />
        </div>
        <div className="mb-4">
          <LabelToolTip
            labelText={"Graphics"}
            toolTipText={"Adjust graphics settings here"}
          />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <CloudSettings />
          <GUISettings />
        </div>
      </div>
      <div>
        <p className="text-center">Extra settings here</p>
      </div>
    </div>
  );
}
