import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Searchbar() {
  return (
    <div className="relative inline-block opacity-50">
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 text-lightGray -translate-y-1/2 w-4 h-4" />
      <input
        type="text"
        className="bg-transparent border border-lightGray p-2 rounded-lg pl-8"
      />
    </div>
  );
}
