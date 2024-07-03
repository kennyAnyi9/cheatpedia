"use client";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const githubRepo = "https://github.com/kennyAnyi9/cheatsheets";

export function StarOnGithub() {
  const handleClick = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <Link href={githubRepo} className="relative z-20 mx-auto mt-5">
      <Button onClick={handleClick} className="rounded-full">
        ✨ Star on Github
      </Button>
    </Link>
  );
}
