import RadialGradient from "@/components/ui/radial-gradient";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Gabarito } from "next/font/google";
import type { ReactNode } from "react";
import { Metadata } from "next";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "Cheatpedia",
  description:
    "Cheatsheets keeps you on top of your game, all in a user-friendly and organized format.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.className} max-w-screen`}>
        <RootProvider>
          <RadialGradient className="opacity-50" />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
