import Image from "next/image";
import NavBar from ".//components/NavBar";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between ">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <NavBar />
      </div>
    </main>
  );
}
