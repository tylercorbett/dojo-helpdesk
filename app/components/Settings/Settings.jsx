import React from "react";

export default function Settings() {
  return (
    <div className="flex items-center w-full gap-4 flex-wrap my-8">
      <h2 className="font-bold text-lg text-white mr-20 ">Settings</h2>
      <button className="active-wide-btn">Video</button>
      <button className="wide-btn">Game</button>
      <button className="wide-btn">Interface</button>
      <button className="wide-btn">Keyboard</button>
      <button className="wide-btn">Mouse</button>
      <button className="wide-btn">Audio</button>
      <button className="wide-btn">Chat</button>
      <button className="wide-btn">Privacy</button>
    </div>
  );
}
