import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center pt-5 lg:pt-20 px-5 w-screen lg:w-full h-20 ">
        <div className="font-bold text-2xl lg:text-3xl flex justify-center items-center gap-2">
          <span>⌘</span>
        </div>
        <Link
          href="/docs"
          className="rounded-full bg-gray-200 dark:bg-[#212121]  w-fit h-fit px-2 py-1"
        >
          cheatsheets
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
