import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

export const metadata = {
  title: "Archive | Amit Parihar",
  description: "A full list of projects built by Amit Parihar.",
};

const archiveProjects = [
  {
    year: "2026",
    title: "AI Financial Agent",
    madeAt: "Personal",
    builtWith: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Groq LLM", "Zod"],
    link: "https://t.me/MeetAtlasBot",
    linkText: "@MeetAtlasBot"
  },
  {
    year: "2026",
    title: "NotifyHub",
    madeAt: "Personal",
    builtWith: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Socket.IO"],
    link: "https://notifyhub-rose.vercel.app/login",
    linkText: "notifyhub-rose.vercel.app"
  },
  {
    year: "2025",
    title: "Nerochat",
    madeAt: "Nerotix Pvt. Ltd.",
    builtWith: ["React.js", "Socket.io", "Redux Toolkit", "Tailwind CSS"],
    link: "https://nerochat.in/features",
    linkText: "nerochat.in/features"
  },
  {
    year: "2025",
    title: "Fullstack Social Media",
    madeAt: "Personal",
    builtWith: ["React.js", "Socket.io", "Node.js", "Encryption", "Tailwind CSS"],
    link: "https://github.com/pariharamit9676/fullstack-social-network",
    linkText: "github.com/fullstack-social-network"
  }
];

export default function Archive() {
  return (
    <div className="relative group/spotlight">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <Link
        href="/"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 opacity-0 animate-fade-in-up"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Amit Parihar
      </Link>
      
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-12 lg:mb-20 opacity-0 animate-fade-in-up [animation-delay:100ms]">
        All Projects
      </h1>

      <table className="w-full border-collapse text-left opacity-0 animate-fade-in-up [animation-delay:200ms]">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {archiveProjects.map((project, index) => (
            <tr key={index} className="border-b border-slate-300/10 last:border-none hover:bg-slate-800/50 transition-all duration-300 ease-in-out group">
              <td className="py-4 pr-4 align-top text-sm text-slate-400">
                <div className="translate-y-px">{project.year}</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                {/* For mobile link wrapping if the desktop link column is hidden */}
                <div className="block sm:hidden">
                  {project.link ? (
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.link} target="_blank" rel="noreferrer">
                      <span>{project.title}</span>
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                    </a>
                  ) : (
                    project.title
                  )}
                </div>
                <div className="hidden sm:block">{project.title}</div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm text-slate-400 lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">{project.madeAt}</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap gap-2">
                  {project.builtWith.map((tech, idx) => (
                    <li key={idx} className="my-1 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                {project.link && (
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm" href={project.link} target="_blank" rel="noreferrer">
                        <span>{project.linkText}</span>
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                      </a>
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
