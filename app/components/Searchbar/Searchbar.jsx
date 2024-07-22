import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Searchbar() {
  return (
    <div className="relative inline-block focus-within:opacity-100 opacity-50 ">
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white" />
      <input
        type="text"
        className="bg-transparent border border-gray-400 p-2 rounded-lg pl-8 text-white focus:border-white focus:outline-none peer"
      />
    </div>
  );
}
