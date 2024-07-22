import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./HYTOPIA.svg";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4">
      <Image
        src={Logo}
        alt="Hytopia logo"
        width={130}
        quality={100}
        className="mr-5"
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
    </nav>
  );
}
