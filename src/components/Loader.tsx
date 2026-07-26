"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Trigger exit animation
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            onComplete();
          }
        });

        tl.to(textRef.current, { y: -50, opacity: 0, duration: 0.5, ease: "power2.in" })
          .to(numberRef.current, { y: -50, opacity: 0, duration: 0.5, ease: "power2.in" }, "-=0.4")
          .to(containerRef.current, { 
            yPercent: -100, 
            duration: 1, 
            ease: "expo.inOut" 
          }, "+=0.2");
      }
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center text-white"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="display-text text-[40vw] font-bold select-none tracking-tighter">AP</span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden mb-8">
          <div ref={textRef} className="display-text text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase flex items-center gap-4">
            Amit <span className="w-2 h-2 bg-white rounded-full"></span> Parihar
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div ref={numberRef} className="text-2xl md:text-4xl font-light text-gray-400 font-mono">
            {progress.toString().padStart(3, '0')}%
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10">
          <div 
            className="h-full bg-white transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
