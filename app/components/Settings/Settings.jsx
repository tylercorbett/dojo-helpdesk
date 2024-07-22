import React from "react";

export default function Settings() {
  return (
    <div className="flex items-center w-full gap-4">
      <h2 className="font-bold text-lg text-white mr-20 my-8">Settings</h2>
      <button className="active-wide-btn">Video</button>
      <button className="wide-btn">Game</button>
      <button className="wide-btn">Interface</button>
    </div>
  );
}
