"use client";

import React, { useState } from "react";

export default function RangeSelector({
  label,
  startRangeAt,
  endRangeAt,
  defaultValue,
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex w-full items-center gap-4 p-3 border border-gray-600 border-opacity-50 bg-opacity-50 rounded-lg overflow-hidden bg:transparent hover:bg-gray-600 hover:bg-opacity-50 hover:cursor-pointer">
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
            className="w-full mt-2"
          />
        </div>
      </div>
    </div>
  );
}
