"use client";

import React, { useState } from "react";
import { grahpicsOptions } from "./GraphicsSettings";

// components
import LabelToolTip from "../../components/LabelToolTip/LabelToolTip";
import GraphicsSettings, {
  GraphicsSettingsDescription,
} from "./GraphicsSettings";
import AnaglyphSettings from "./AnaglyphSettings";
import GUISettings from "./GUISettings";
import CloudSettings from "./CloudSettings";
import MinMapLevelSettings from "./MinMapLevelSettings";
import RenderDistanceSettings from "./RenderDistanceSettings";

export default function SettingsContainer() {
  const [activeSetting, setActiveSetting] = useState({
    value: grahpicsOptions[0],
    settingsType: "graphics",
  });

  const handleSettingChanged = (newActiveSetting) => {
    setActiveSetting(newActiveSetting);
  };

  const settingsDescriptionMap = {
    graphics: <GraphicsSettingsDescription graphicsKey={activeSetting.value} />,
  };

  return (
    <div className="grid grid-cols-2 gap-3 mb-20">
      <div>
        <div className="mb-4">
          <LabelToolTip
            labelText={"Display"}
            toolTipText={"Adjust display settings here"}
          />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <GraphicsSettings onChange={handleSettingChanged} />
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
          <MinMapLevelSettings />
          <RenderDistanceSettings />
          <GUISettings />
        </div>
      </div>
      <div className="my-11 rounded-lg h-fit p-5 border border-opacity-50 border-gray-600">
        <h4 className="text-white font-semibold text-lg">
          <span className="capitalize">{activeSetting.settingsType}: </span>
          {activeSetting.value}
        </h4>
        {settingsDescriptionMap[activeSetting.settingsType]}
      </div>
    </div>
  );
}
