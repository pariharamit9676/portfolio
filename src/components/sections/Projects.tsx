import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "NotifyHub",
    description: "A highly scalable, multi-channel notification infrastructure built to reliably deliver Email, SMS, and Push notifications. It features a robust queue-based architecture using Redis and BullMQ, complex email provider failover logic, and a real-time Live Queue Manager.",
    skills: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Socket.IO"],
    link: "https://notifyhub-rose.vercel.app/login",
    image: "/notifyhub.png"
  },
  {
    title: "Nerochat",
    description: "A comprehensive WhatsApp marketing and customer support platform. I spearheaded the frontend development, building complex interfaces including a visual drag-and-drop chatbot flow builder, a real-time shared team inbox, and dynamic campaign dashboards.",
    skills: ["React.js", "Socket.io", "Redux Toolkit", "Tailwind CSS"],
    link: "https://nerochat.in/features",
    image: "/nerochat-app.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Image Thumbnail Column */}
                <div className="z-10 sm:order-1 sm:col-span-2 sm:mt-1 pt-1">
                  <div className="relative h-16 w-32 sm:h-20 sm:w-full rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 overflow-hidden bg-slate-800/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>{project.title}</span>
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <li key={skill} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                View Full Project
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                  {" "}Archive
                </span>
                <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-2" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
