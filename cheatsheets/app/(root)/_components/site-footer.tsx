import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="mx-4 flex items-center justify-center md:h-24">
        <div className="flex items-center gap-4 px-8 md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose">
            Built with ❤️ by{" "}
            <Link
              href="https://kennyanyi.me"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              kennyAnyi9
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
