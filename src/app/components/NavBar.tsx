import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const NavBar = () => {
  return (
    <div className="w-full h-24 pt-0 bg-slate-500 z-10 flex items-center ">
      <div className="w-full max-w-6xl mx-auto flex items-center">
        <Image
          src="/NOLAgtrcoLogo.png"
          alt="NOLA GTR"
          width={160}
          height={160}
          className="pl-10 justify-start"
        />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
