"use client";

import React, { useState } from "react";

// components
import LabelToolTip from "../../components/LabelToolTip/LabelToolTip";
import GraphicsSettings from "./GraphicsSettings";

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
        <GraphicsSettings />
      </div>
      <div>
        <p className="text-center">Extra settings here</p>
      </div>
    </div>
  );
}
