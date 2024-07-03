"use client";

import { HeroImage } from "./_components/hero-image";
import { EarthIcon } from "../(cheetsheets)/_components/icons";
import { StarOnGithub } from "@/components/star-on-github";
import Hero from "./_components/hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen gap-5 lg:gap-10 flex-col px-5 max-w-screen">
      <section className="flex flex-col">
        <Hero />
      </section>
      <section className="grid grid-cols-1 lg:flex flex-row flex-wrap gap-5 justify-center overflow-x-hidden">
        <HeroImage />
        <div className=" relative py-16 sm:py-24 flex flex-col ">
          <h2 className="bg-gradient-to-b from-primary to-foreground/40 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
            Fully open-source.
          </h2>
          <p className="mx-auto mt-2 lg:max-w-2xl text-wrap text-center text-muted-foreground text-lg md:text-xl">
            Cheatpedia is open source, available on GitHub.
          </p>

          <StarOnGithub />

          <EarthIcon className="-my-8 mx-auto h-auto w-44 lg:w-96 opacity-40" />
        </div>
      </section>
    </main>
  );
}
