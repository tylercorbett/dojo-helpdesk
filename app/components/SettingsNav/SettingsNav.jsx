import React from "react";

export default function SettingsNav() {
  return (
    <nav className="flex items-center w-full gap-4 flex-wrap my-8 border-b pb-8 border-opacity-50 border-gray-600">
      <h2 className="main-header mr-20">Settings</h2>
      <button className="active-wide-btn">Video</button>
      <button className="wide-btn">Game</button>
      <button className="wide-btn">Interface</button>
      <button className="wide-btn">Keyboard</button>
      <button className="wide-btn">Mouse</button>
      <button className="wide-btn">Audio</button>
      <button className="wide-btn">Chat</button>
      <button className="wide-btn">Privacy</button>
    </nav>
  );
}
