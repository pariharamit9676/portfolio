import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Nerotix Pvt. Ltd.",
    period: "2025 — PRESENT",
    description: "Architecting scalable web applications utilizing React.js and modern state management ecosystems (Redux Toolkit, RTK Query). Driving the development of enterprise-grade products including real-time chat architectures, visual flow builders, and comprehensive school management systems. Collaborating closely with backend engineers and designers to deliver high-performance, accessible user interfaces.",
    skills: ["React.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Socket.io"],
    link: "https://www.nerotix.in/"
  },
  {
    role: "QA Engineer",
    company: "Magic Software",
    period: "2022 — 2024",
    description: "Conducted comprehensive testing of educational technology tools and platforms. Ensured high-quality software delivery by rigorously testing features, identifying bugs, and actively writing code to resolve issues, guaranteeing optimal functionality for educational applications.",
    skills: ["JavaScript", "HTML", "CSS", "Manual Testing", "Bug Fixing"],
    link: "https://www.magicsoftware.com/"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.role} · <span className="inline-block">{exp.company}</span>
                        </span>
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {exp.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap text-center gap-2">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors"
            aria-label="View Full Résumé"
            href="/resume"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                View Full
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                  {" "}Résumé
                </span>
                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
