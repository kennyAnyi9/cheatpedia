import RadialGradient from "@/components/ui/radial-gradient";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import type { ReactNode } from "react";

const inter = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-condensed",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`{inter.className}`} suppressHydrationWarning>
      <body>
        <RootProvider>
          {" "}
          <RadialGradient className="opacity-50" />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
