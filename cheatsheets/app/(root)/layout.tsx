import { ReactNode } from "react";
import Navbar from "./_components/site-header";
import { Footer } from "./_components/site-footer";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-screen lg:max-w-6xl mx-auto flex flex-col gap-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
