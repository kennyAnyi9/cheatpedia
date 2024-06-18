import { ReactNode } from "react";
import Navbar from "./_components/site-header";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-3xl mx-auto flex flex-col gap-20">
        <Navbar />
        {children}
      </div>
    </>
  );
}
