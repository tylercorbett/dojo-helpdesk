"use client";

import React, { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function LabelToolTip({ labelText, toolTipText }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className="relative flex gap-2 items-center">
      <h3 className="main-header">{labelText}</h3>
      <div className="relative">
        <InformationCircleIcon
          onClick={toggleTooltip}
          className="w-6 h-6 hover:cursor-pointer hover:text-white"
        />
        {isTooltipVisible && (
          <div className="absolute left-7 -bottom-4 mb-2 w-40 bg-white text-gray-950 text-xs rounded py-1 px-2 opacity-100 transition-opacity duration-300">
            {toolTipText}
          </div>
        )}
      </div>
    </div>
  );
}
