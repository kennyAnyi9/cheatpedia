import Link from "next/link";
import HeroCard, { HeroCardProps } from "./_components/hero-card";
import { HeroImage } from "./_components/hero-image";

const githubRepo = "https://github.com/kennyAnyi9/cheatsheets";
export default function HomePage() {
  return (
    <main className="flex min-h-screen gap-10 flex-col px-5 max-w-screen ">
      <section className="flex flex-col gap-3">
        <Link
          href={githubRepo}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border px-3 py-0.5 z-10 w-fit"
        >
          ✨ Star on GitHub
        </Link>
        <h1 className="mt-2 mb-4 text-4xl lg:text-7xl font-bold">
          Cheat⿳
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-600 via-pink-600 to-yellow-400">
            ⌘
          </span>
          pedia.xyz
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
          Cheatsheets keeps you on top of your game, all in a user-friendly and
          organized format.
        </p>
      </section>
      <section className="grid grid-cols-1 lg:flex flex-row flex-wrap gap-5 justify-center">
        <HeroImage />
      </section>
      <section>
        <div className="">
          <div className="mx-auto lg:max-w-6xl lg:px-6 text-gray-500">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-950 dark:text-white sm:text-3xl">
                Proudly Open Source
              </h2>

              <p className="mx-auto mt-2 lg:max-w-4xl text-wrap text-muted-foreground text-lg md:text-xl sm:mt-4">
                Cheat⿳⌘pedia.xyz is an open source software and the code is
                available on{" "}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
