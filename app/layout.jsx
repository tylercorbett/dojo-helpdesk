import "./globals.css";
import { Inter } from "next/font/google";
import Background from "../public/background.png";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// components
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HYTOPIA | Settings",
  description: "Hytopia settings page",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="absolute inset-0 z-[-1] bg-black">
          <Image
            src={Background}
            alt="Background logo"
            layout="fill"
            objectFit="cover"
            className="w-full"
            draggable={false}
          />
        </div>
        <Navbar />
        <Settings />
        <div className="relative flex gap-2 items-center">
          <h3 className="main-header">Display</h3>
          <div className="group relative">
            <InformationCircleIcon className="w-6 h-6 hover:cursor-pointer hover:text-white" />
            <div className="absolute left-0 bottom-full mb-2 w-32 bg-white text-gray-950 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Adjust display settings here
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
