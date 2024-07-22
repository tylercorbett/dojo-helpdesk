import "./globals.css";
import { Inter } from "next/font/google";
import Background from "../public/background.png";

// components
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import LabelToolTip from "./components/LabelToolTip/LabelToolTip";
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
        <div className="grid grid-cols-2 gap-2">
          <div>
            <LabelToolTip
              labelText={"Display"}
              toolTipText={"Adjust display settings here"}
            />
          </div>
          <div>
            <p className="text-center">Extra settings here</p>
          </div>
        </div>
      </body>
    </html>
  );
}
