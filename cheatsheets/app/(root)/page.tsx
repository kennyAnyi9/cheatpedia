import Link from "next/link";
import HeroCard, { HeroCardProps } from "./_components/hero-card";
import { HeroImage } from "./_components/hero-image";

const cheats: HeroCardProps[] = [
  {
    title: "Git cheatsheet",
    link: "#",
  },
  {
    title: "React cheatsheet",
    link: "#",
  },
  {
    title: "Python cheatsheet",
    link: "#",
  },
  {
    title: "JavaScript cheatsheet",
    link: "#",
  },
  {
    title: "CSS cheatsheet",
    link: "#",
  },
];
export default function HomePage() {
  return (
    <main className="flex min-h-screen gap-20 flex-col px-5">
      <section className="flex flex-col gap-3">
        <Link
          href="https://github.com/kennyAnyi9/cheatsheets"
          target="_blank"
          rel="norel"
          className="rounded-full border px-2 py-1 z-10 w-fit"
        >
          ✨ Star on GitHub
        </Link>
        <h1 className="mt-2 mb-4 text-3xl lg:text-7xl font-bold">
          Cheat⿳
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-600 via-pink-600 to-yellow-400">
            ⌘
          </span>
          pedia.fyi
        </h1>
        <p className="text-muted-foreground text-xl max-w-xl">
          Cheatsheets keeps you on top of your game, all in a user-friendly and
          organized format.
        </p>
      </section>
      <section className="grid grid-cols-1 lg:flex flex-row flex-wrap gap-5 justify-center">
        {cheats.map((cheat) => (
          <HeroCard link={cheat.link} title={cheat.title} />
        ))}
        <HeroImage />
      </section>
      <section>
        <div className="">
          <div className="mx-auto max-w-6xl px-6 text-gray-500">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-950 dark:text-white sm:text-3xl">
                Proudly Open Source
              </h2>

              <p className="mx-auto mt-2 max-w-3xl text-wraptext-muted-foreground text-xl sm:mt-4">
                Cheat⿳⌘pedia.fyi is open source and powered by open source
                software.
                <br /> The code is available on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                  href={"#"}
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
