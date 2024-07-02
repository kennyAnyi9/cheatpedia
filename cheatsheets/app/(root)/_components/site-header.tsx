import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center pt-5 lg:pt-10 px-5 w-screen lg:w-full h-20 ">
        <div className="font-bold text-2xl lg:text-4xl flex justify-center items-center gap-2">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-600 via-pink-600 to-yellow-400">
            ⌘
          </span>
        </div>
        <Link
          href="/docs"
          className="inline-flex rounded-full  gap-2   text-sm w-fit h-fit px-3 py-1"
        >
          {" "}
          <div className="rounded-full h-2 w-2 bg-blue-600 m-auto animate-pulse">
            <div className="rounded-full h-2 w-2 bg-blue-600 m-auto animate-ping"></div>
          </div>
          <span>cheatsheets</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
