"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "YEARS OF EXCELLENCE", target: 5, prefix: "0", suffix: "+" },
  { label: "PROJECTS DELIVERED", target: 50, prefix: "", suffix: "+" },
  { label: "CLIENT SATISFACTION", target: 100, prefix: "", suffix: "%" },
  { label: "LINES OF CODE", target: 1, prefix: "", suffix: "M+" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        
        const targetValue = stats[i].target;
        
        gsap.fromTo(counter, 
          { innerHTML: 0 }, 
          {
            innerHTML: targetValue,
            duration: 2,
            ease: "power3.out",
            snap: { innerHTML: 1 }, // Snap to integer values
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
            onUpdate: function() {
              // Re-add prefix and suffix during update since innerHTML overwrites them
              counter.innerHTML = `${stats[i].prefix}${Math.round(Number(this.targets()[0].innerHTML))}${stats[i].suffix}`;
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-[var(--background)] relative border-y border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">04 // The Impact</h2>
          <h3 className="display-text text-5xl md:text-[6rem] font-bold text-white tracking-tighter">
            BY THE NUMBERS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div 
                ref={el => { countersRef.current[idx] = el; }}
                className="display-text text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-500"
              >
                0
              </div>
              <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:w-24 group-hover:bg-white transition-all duration-500" />
              <span className="text-sm tracking-[0.2em] uppercase text-gray-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
