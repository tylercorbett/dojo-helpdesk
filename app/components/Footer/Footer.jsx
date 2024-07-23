import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-[#151616] fixed bottom-0 left-0 w-screen py-4 px-8 flex justify-between">
      <button className="footer-button text-gray-600 border-gray-600 border-opacity-50 bg-transparent hover:bg-gray-600 hover:text-white hover:bg-opacity-50">
        Restore Defaults
      </button>
      <button className="footer-button bg-white text-black hover:bg-transparent hover:border-gray-600 hover:text-white">
        Save Settings
      </button>
    </footer>
  );
}
