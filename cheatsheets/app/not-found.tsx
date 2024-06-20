import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center gap-2 flex-col items-center h-screen w-screen">
      <h1 className="inline-block font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-b from-blue-600 via-pink-600 to-yellow-400">
        404
      </h1>
      <p>Looks like you visited a non-existent route</p>

      <Link
        href="/"
        className="rounded-full bg-gray-200 dark:bg-[#212121]  w-fit h-fit px-3 py-1"
      >
        Home sweet home
      </Link>
    </div>
  );
};

export default NotFound;
