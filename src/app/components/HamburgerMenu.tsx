"use client";
import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
          <Link href="/">
            <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
              About
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
