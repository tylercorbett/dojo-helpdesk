"use client";

import React, { useState } from "react";
import "./RangeSelector.css";

export default function RangeSelector({
  label,
  startRangeAt,
  endRangeAt,
  defaultValue,
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    updateBackground(newValue);
  };

  const updateBackground = (value) => {
    const percentage =
      ((value - startRangeAt) / (endRangeAt - startRangeAt)) * 100;
    const background = `linear-gradient(to right, rgba(255, 255, 255, 0.2) ${percentage}%, black ${percentage}%)`;
    document.querySelector(".range-input").style.background = background;
  };

  React.useEffect(() => {
    updateBackground(defaultValue);
  }, [defaultValue]);

  return (
    <div className="flex w-full items-center gap-4 p-3 border border-gray-600 border-opacity-50 bg-opacity-50 rounded-lg overflow-hidden bg:transparent hover:cursor-pointer">
      <p className="font-bold text-white w-96">{label}</p>
      <div className="flex items-center justify-between justify-self-end w-full">
        <div className="font-bold text-center w-full rounded-lg py-2 text-white">
          {value}
          <input
            type="range"
            min={startRangeAt}
            max={endRangeAt}
            value={value}
            onChange={handleChange}
            className="w-full mt-2 range-input"
          />
        </div>
      </div>
    </div>
  );
}
