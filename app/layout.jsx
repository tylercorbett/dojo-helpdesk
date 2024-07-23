import "./globals.css";
import { Inter } from "next/font/google";
import Background from "../public/background.png";

// components
import Navbar from "./components/Navbar/Navbar";
import SettingsNav from "./components/SettingsNav/SettingsNav";
import SettingsContainer from "./components/SettingsContainer/SettingsContainer";
import Image from "next/image";
import Footer from "./components/Footer/Footer";

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
        <SettingsNav />
        <SettingsContainer />
        <Footer />
      </body>
    </html>
  );
}
