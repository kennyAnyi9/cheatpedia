import { Glow } from "@/components/ui/glow";
import Link from "next/link";
import React from "react";
export interface HeroCardProps {
  title: string;
  link: string;
}
const HeroCard = ({ title, link }: HeroCardProps) => {
  return (
    <div>
      <Glow className="rounded-md w-full h-full max-w-sm flex justify-center items-center bg-[#212121]">
        <Link href={link}>
          <span className="m-auto">{title}</span>
        </Link>
      </Glow>
    </div>
  );
};

export default HeroCard;
