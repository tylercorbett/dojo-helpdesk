import Image from "next/image";
import React from "react";
import UserIcon from "../../../public/user-icon.png";

export default function UserSettingsIcon() {
  return (
    <div className="relative">
      <Image src={UserIcon} draggable={false} alt="User icon" height={22} />
      <div className="w-3 h-3  bg-[#2D333A] rounded-full absolute right-[-0.188rem] bottom-[-0.188rem]" />
      <div className="w-[0.563rem] h-[0.563rem] rounded-full absolute bg-[#4F4F4F] right-[-0.188rem] bottom-[-0.188rem]" />
    </div>
  );
}
