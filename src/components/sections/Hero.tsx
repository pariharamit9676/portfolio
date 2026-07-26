"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the entire hero section so the next section scrolls over it
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false, // Allows the next section to overlay this one
      });

      // Fade out the text heavily as we scroll down
      gsap.to(textRef.current, {
        opacity: 0,
        y: -150,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headingText = "AMIT PARIHAR".split("");

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-end pb-20 px-4 md:px-12 overflow-hidden bg-black z-0"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#050505] z-10" />
        <Image 
          src="/hero_bg.png" 
          alt="Abstract Background"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 w-full flex flex-col items-start" ref={textRef}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6 ml-1"
        >
          Creative Developer & Engineer
        </motion.p>
        
        <h1 className="display-text text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter text-white overflow-hidden flex">
          {headingText.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 * index,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8 border-t border-white/20 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-gray-300 max-w-sm text-lg font-light leading-relaxed"
          >
            Crafting world-class digital experiences and enterprise architectures with uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-[1px] h-12 bg-white/30 hidden md:block" />
            <span className="text-xs text-gray-500 uppercase tracking-widest rotate-0 md:-rotate-90 origin-left">Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
