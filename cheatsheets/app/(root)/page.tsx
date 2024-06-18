import Link from "next/link";
import HeroCard, { HeroCardProps } from "./_components/hero-card";

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
    <main className="flex h-screen gap-10 flex-col">
      <section>
        <h1 className="mb-4 text-7xl font-bold">Cheatsheets.fyi</h1>
        <p className="text-muted-foreground text-xl max-w-xl">
          Cheatsheets keeps you on top of your game, all in a user-friendly and
          organized format.
        </p>
      </section>
      <section className="flex flex-row flex-wrap gap-5">
        {cheats.map((cheat) => (
          <HeroCard link={cheat.link} title={cheat.title} />
        ))}
      </section>
    </main>
  );
}
