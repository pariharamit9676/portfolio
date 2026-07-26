"use client";

import Spotlight from "@/components/Spotlight";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative group/spotlight">
      <Spotlight />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Column (Sticky Header & Nav) */}
          <Header />
          
          {/* Right Column (Scrolling Content) */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Coded in Visual Studio Code. Built with Next.js and Tailwind CSS, deployed with Vercel. 
                All text is set in the Inter typeface.
              </p>
            </footer>
          </main>

        </div>
      </div>
    </div>
  );
}
