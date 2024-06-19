import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between py-10 px-5 w-screen lg:w-full h-20 ">
        <div className="font-bold text-3xl">{"<⌘/>"}</div>
        <Link
          href="/docs"
          className="rounded-full bg-[#212121] w-fit h-fit px-2 py-1"
        >
          cheatsheets
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
