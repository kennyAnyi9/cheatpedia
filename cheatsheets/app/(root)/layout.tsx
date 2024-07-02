import { ReactNode } from "react";
import Navbar from "./_components/site-header";
import { Footer } from "./_components/site-footer";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-screen lg:max-w-4xl mx-auto flex flex-col gap-20">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
