import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between py-10 w-full h-20 ">
        <div className="font-bold text-2xl">{"{cheat}"}</div>
        <Link href="/docs">explore</Link>
      </nav>
    </header>
  );
};

export default Navbar;
