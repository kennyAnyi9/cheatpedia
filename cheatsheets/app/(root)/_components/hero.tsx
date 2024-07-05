import React from "react";
import Confetti from "@/components/ui/celebration";
import { useRef } from "react";
import type { ConfettiRef } from "@/components/ui/celebration";
import { tags } from "@/lib/tags";
import { Badge } from "@/components/ui/badge";
import AnimatedShinyText from "@/components/ui/anounce";

const Hero = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <>
      {" "}
      <div className="mx-auto" data-aos="fade-down">
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 h-full w-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="relative inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-megaphone mr-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            >
              <path d="m3 11 18-5v12L3 14v-3z"></path>
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
            </svg>{" "}
            Introducing Curl cheatsheet{" "}
            <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </span>
        </AnimatedShinyText>
      </div>
      <h1 className="bg-gradient-to-b from-primary  to-foreground/90 dark:to-foreground/50 bg-clip-text text-transparent mt-2 mb-4 text-5xl lg:text-8xl text-center font-bold mx-auto">
        Cheatpedia.xyz
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mx-auto text-center max-w-xl">
        Cheatsheets keeps you on top of your game, all in a user-friendly and
        organized format.
      </p>
      <div className="flex flex-row gap-2 mx-auto flex-wrap mt-3">
        {tags.map((tag) => (
          <div key={tag.id}>
            <Badge className="dark:bg-[#141414] dark:text-white bg-neutral-300 text-black">
              {tag.name}
            </Badge>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
