import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./HYTOPIA.svg";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Hytopia logo" width={100} quality={100} />
      <Link href="/">Play</Link>
      <Link href="/">Marketplace</Link>
      <Link href="/">Locker</Link>
    </nav>
  );
}
