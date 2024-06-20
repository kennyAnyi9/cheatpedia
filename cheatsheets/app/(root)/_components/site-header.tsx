import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center pt-20 px-5 w-screen lg:w-full h-20 ">
        <div className="font-bold text-3xl flex justify-center items-center gap-2">
          <span>{"<⌘/>"}</span>
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-500 text-secondary-foreground hover:bg-red-500/90">
            Beta
          </div>
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
