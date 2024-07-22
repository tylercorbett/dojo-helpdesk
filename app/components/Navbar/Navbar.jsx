import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./HYTOPIA.svg";
import Searchbar from "../Searchbar/Searchbar";
import UserSettingsIcon from "../UserSettingsIcon/UserSettingsIcon";
import { UsersIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 border-b border-opacity-50 border-gray-600 pb-5">
      <Image
        src={Logo}
        alt="Hytopia logo"
        width={130}
        quality={100}
        className="mr-5 mt-1"
        draggable={false}
      />
      <Link
        href="/"
        className="text-lightGray font-bold opacity-50 hover:opacity-100"
      >
        Play
      </Link>
      <Link
        href="/"
        className="text-lightGray font-bold opacity-50 hover:opacity-100"
      >
        Marketplace
      </Link>
      <Link
        href="/"
        className="text-lightGray font-bold opacity-50 hover:opacity-100"
      >
        Locker
      </Link>
      <span className="ml-12">
        <Searchbar />
      </span>
      <div className="ml-auto gap-2 flex items-center">
        <button className="btn font-bold text-sm">$18,391</button>
        <button className="btn text-sm">
          <UsersIcon className="w-5 h-5 opacity-50" />
        </button>
        <button className="btn">
          <UserSettingsIcon />
        </button>
      </div>
    </nav>
  );
}
