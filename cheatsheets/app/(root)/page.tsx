import Link from "next/link";
import HeroCard, { HeroCardProps } from "./_components/hero-card";
import { HeroImage } from "./_components/hero-image";
import { tags } from "@/lib/tags";
import { Badge } from "@/components/ui/badge";
import AnimatedShinyText from "@/components/ui/anounce";
import { EarthIcon } from "../(cheetsheets)/_components/icons";

const githubRepo = "https://github.com/kennyAnyi9/cheatsheets";
export default function HomePage() {
  return (
    <main className="flex min-h-screen gap-5 lg:gap-10 flex-col px-5 max-w-screen">
      <section className="flex flex-col">
        <div className="mx-auto" data-aos="fade-down">
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
              Introducing TypeScript cheatsheet{" "}
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
        <div className="flex flex-row gap-2 mx-auto flex-wrap">
          {tags.map((tag) => (
            <div key={tag.id}>
              <Badge className="dark:bg-[#141414] dark:text-white bg-neutral-300 text-black">
                {tag.name}
              </Badge>
            </div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 lg:flex flex-row flex-wrap gap-5 justify-center overflow-x-hidden">
        <HeroImage />
        <div className=" relative py-16 sm:py-24 flex flex-col ">
          <h2 className="bg-gradient-to-b from-primary to-foreground/40 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
            Fully open-source.
          </h2>
          <p className="mx-auto mt-2 lg:max-w-2xl text-wrap text-center text-muted-foreground text-lg md:text-xl">
            Cheatpedia is open source, available on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
              href={githubRepo}
            >
              GitHub
            </a>
            .
          </p>

          <EarthIcon className="-my-8 mx-auto h-auto w-44 lg:w-96 opacity-40" />
        </div>
      </section>
    </main>
  );
}
