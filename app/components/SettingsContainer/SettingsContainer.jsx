"use client";

import React, { useState } from "react";
import { grahpicsOptions } from "./GraphicsSettings";

// components
import LabelToolTip from "../../components/LabelToolTip/LabelToolTip";
import GraphicsSettings, {
  GraphicsSettingsDescription,
} from "./GraphicsSettings";
import AnaglyphSettings, {
  AnaglyphSettingsDescription,
} from "./AnaglyphSettings";
import GUISettings, { GUISettingsDescription } from "./GUISettings";
import CloudSettings, { CloudSettingsDescription } from "./CloudSettings";
import MinMapLevelSettings, {
  MinMapLevelSettingsDescription,
} from "./MinMapLevelSettings";
import RenderDistanceSettings, {
  RenderDistanceSettingsDescription,
} from "./RenderDistanceSettings";

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
    "3d anaglyph": (
      <AnaglyphSettingsDescription graphicsKey={activeSetting.value} />
    ),
    "GUI scale": <GUISettingsDescription graphicsKey={activeSetting.value} />,
    clouds: <CloudSettingsDescription graphicsKey={activeSetting.value} />,
    "minmap levels": (
      <MinMapLevelSettingsDescription graphicsKey={activeSetting.value} />
    ),
    "render distance": (
      <RenderDistanceSettingsDescription graphicsKey={activeSetting.value} />
    ),
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
          <AnaglyphSettings onChange={handleSettingChanged} />
          <GUISettings onChange={handleSettingChanged} />
        </div>
        <div className="mb-4">
          <LabelToolTip
            labelText={"Graphics"}
            toolTipText={"Adjust graphics settings here"}
          />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <CloudSettings onChange={handleSettingChanged} />
          <MinMapLevelSettings onChange={handleSettingChanged} />
          <RenderDistanceSettings onChange={handleSettingChanged} />
          <GUISettings onChange={handleSettingChanged} />
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
