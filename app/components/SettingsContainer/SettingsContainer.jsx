"use client";

import React from "react";

// components
import LabelToolTip from "../../components/LabelToolTip/LabelToolTip";


export default function SettingsContainer() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <LabelToolTip
          labelText={"Display"}
          toolTipText={"Adjust display settings here"}
        />
      </div>
      <div>
        <p className="text-center">Extra settings here</p>
      </div>
    </div>
  );
}
