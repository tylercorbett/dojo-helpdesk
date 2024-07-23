"use client";

import React, { useState, useEffect, useRef } from "react";
import "./RangeSelector.css";

export default function RangeSelector({
  label,
  startRangeAt,
  endRangeAt,
  defaultValue,
  units,
}) {
  const [value, setValue] = useState(defaultValue);
  const rangeRef = useRef(null);

  useEffect(() => {
    updateBackground(defaultValue);
  }, [defaultValue]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    updateBackground(newValue);
  };

  const updateBackground = (value) => {
    const percentage =
      ((value - startRangeAt) / (endRangeAt - startRangeAt)) * 100;
    const background = `linear-gradient(to right, rgba(255, 255, 255, 0.5) ${percentage}%, black ${percentage}%)`;
    if (rangeRef.current) {
      rangeRef.current.style.background = background;
    }
  };

  return (
    <div className="flex w-full items-center gap-4 p-3 border border-gray-600 border-opacity-50 bg-opacity-50 rounded-lg overflow-hidden bg:transparent hover:bg-gray-600 hover:bg-opacity-50 hover:cursor-pointer">
      <p className="font-bold text-white w-96">{label}</p>
      <div className="flex items-center justify-between justify-self-end w-full">
        <div className="relative font-bold text-center w-full rounded-lg py-2 text-white">
          <input
            ref={rangeRef}
            type="range"
            min={startRangeAt}
            max={endRangeAt}
            value={value}
            onChange={handleChange}
            className="w-full mt-2 range-input"
            style={{
              background: `linear-gradient(to right, rgba(255, 255, 255, 0.5) ${
                ((defaultValue - startRangeAt) / (endRangeAt - startRangeAt)) *
                100
              }%, black ${
                ((defaultValue - startRangeAt) / (endRangeAt - startRangeAt)) *
                100
              }%)`,
            }}
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            {value} {units}
          </div>
        </div>
      </div>
    </div>
  );
}
