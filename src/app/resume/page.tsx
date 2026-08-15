import React from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import Spotlight from "@/components/Spotlight";

export const metadata = {
  title: "Resume | Amit Parihar",
  description: "Resume of Amit Parihar",
};

export default function Resume() {
  return (
    <div className="relative group/spotlight min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300/30 selection:text-teal-300 print:bg-white print:text-slate-700 print:selection:bg-blue-200 print:selection:text-blue-900 font-sans">
      <Spotlight />
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          @page { margin: 0; }
          body { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
            background-color: white !important; 
          }
        }
      `}} />

      {/* Hide on print, show buttons on web */}
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-16 lg:px-24 print:hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <Link href="/" className="group inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
        </Link>
        <a
          href="/resume.pdf"
          download="Amit_Parihar_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-4 py-2 text-sm font-medium leading-5 text-teal-300 hover:bg-teal-400/20 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Main Resume Content */}
      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-12 lg:px-24 print:max-w-4xl print:px-10 print:py-6 print:pb-6 print:shadow-none print:ring-0">

        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start border-b border-slate-700 pb-12 mb-12 print:flex-row print:justify-between print:items-start print:border-none print:pb-0 print:mb-4">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-200 tracking-tight print:text-[42px] print:text-[#1d4ed8] print:leading-none print:mb-1.5">
              Amit Parihar
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-400 leading-snug print:text-[12px] print:text-slate-700 print:mt-0 print:pr-4">
              Fullstack Engineer with a focus on building scalable web architectures and engaging digital experiences
            </p>
          </div>

          <div className="mt-8 md:mt-0 text-sm text-slate-400 space-y-2 text-left md:text-right print:text-[10px] print:text-slate-700 print:space-y-0.5 print:mt-2 print:text-right print:font-medium">
            <p>amitparihar.dev</p>
            <p>pariharamit9676@gmail.com</p>
            <p>(+91) 96859-12333</p>
            <p>github.com/pariharamit9676</p>
            <p>linkedin.com/in/amit-parihar-8807a533a</p>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 print:grid-cols-12 print:gap-8">

          {/* Left Column - Experience */}
          <div className="md:col-span-8 print:col-span-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200 mb-8 print:text-[16px] print:text-[#1d4ed8] print:normal-case print:tracking-normal print:mb-3">Relevant Experience</h2>

            {/* Experience 1 */}
            <div className="mb-12 print:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 print:mb-1 print:justify-start">
                <h3 className="font-medium leading-snug text-slate-200 print:text-[14px] print:text-slate-800">
                  Frontend Developer &middot; <span className="font-bold text-white print:text-slate-900">Nerotix Pvt. Ltd.</span>
                </h3>
                <span className="mt-1 sm:mt-0 text-xs font-semibold uppercase tracking-wide text-slate-500 print:text-[11px] print:text-slate-500 print:font-bold print:normal-case print:tracking-normal print:ml-2.5 print:mt-0">2025 &mdash; PRESENT</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-normal text-slate-400 print:space-y-1 print:text-[11px] print:text-slate-700 print:leading-relaxed print:marker:text-slate-500">
                <li>Architect scalable web applications utilizing React.js and modern state management ecosystems like Redux Toolkit and RTK Query</li>
                <li>Drive the development of enterprise-grade products including real-time chat architectures and visual flow builders</li>
                <li>Develop comprehensive school management systems while collaborating closely with backend engineers and designers to deliver high-performance user interfaces</li>
                <li>Implement responsive UI designs ensuring cross-browser compatibility and optimized web performance scores</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="mb-12 print:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 print:mb-1 print:justify-start">
                <h3 className="font-medium leading-snug text-slate-200 print:text-[14px] print:text-slate-800">
                  QA Engineer &middot; <span className="font-bold text-white print:text-slate-900">Magic Software</span>
                </h3>
                <span className="mt-1 sm:mt-0 text-xs font-semibold uppercase tracking-wide text-slate-500 print:text-[11px] print:text-slate-500 print:font-bold print:normal-case print:tracking-normal print:ml-2.5 print:mt-0">2022 &mdash; 2024</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-normal text-slate-400 print:space-y-1 print:text-[11px] print:text-slate-700 print:leading-relaxed print:marker:text-slate-500">
                <li>Conducted comprehensive testing of educational technology tools and platforms to ensure high-quality software delivery</li>
                <li>Rigorously tested features and identified bugs across multiple applications to guarantee optimal functionality</li>
                <li>Actively wrote code across the stack to resolve complex issues, optimize performance, and implement robust bug fixes</li>
                <li>Collaborated closely with cross-functional teams to establish QA workflows and automated test scripts for critical user flows</li>
              </ul>
            </div>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200 mt-16 mb-8 print:text-[16px] print:text-[#1d4ed8] print:normal-case print:tracking-normal print:mt-0 print:mb-3">Selected Projects</h2>

            <div className="mb-12 print:mb-6">
              <div className="mb-4 print:mb-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-medium leading-snug text-slate-200 print:text-[14px] print:text-slate-800 font-bold">
                    <a href="https://notifyhub-rose.vercel.app/login" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors focus-visible:text-teal-300">NotifyHub</a> <span className="font-normal text-slate-400 print:text-slate-600">&middot; Multi-Channel Bulk Notification Service</span>
                  </h3>
                </div>
                <div className="mt-1.5 text-xs font-medium text-slate-500 print:text-[10px] print:text-slate-500 print:mt-0.5">
                  (React, TypeScript, Node.js, Express, MongoDB, Redis, BullMQ, Socket.IO)
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-normal text-slate-400 print:space-y-1 print:text-[11px] print:text-slate-700 print:leading-relaxed print:marker:text-slate-500">
                <li>Engineered a highly scalable notification infrastructure supporting Email, SMS, and FCM push notifications via a queue-based architecture powered by Node.js, Redis, and BullMQ.</li>
                <li>Architected a robust email provider failover system (MailBluster &rarr; SendGrid &rarr; Nodemailer) incorporating exponential backoff, retry logic, and circuit breakers to guarantee delivery.</li>
                <li>Developed a Live Queue Manager utilizing Socket.IO for real-time tracking of notification lifecycles, SendGrid webhooks, template scheduling, and priority-based dispatching.</li>
              </ul>
            </div>

            <div className="mb-12 print:mb-6">
              <div className="mb-4 print:mb-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-medium leading-snug text-slate-200 print:text-[14px] print:text-slate-800 font-bold">
                    AI Financial Agent <span className="font-normal text-slate-400 print:text-slate-600">&middot; Intelligent Telegram Bot</span>
                  </h3>
                </div>
                <div className="mt-1.5 text-xs font-medium text-slate-500 print:text-[10px] print:text-slate-500 print:mt-0.5">
                  (Node.js, TypeScript, PostgreSQL, Prisma, Groq LLM, Express, Zod)
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-normal text-slate-400 print:space-y-1 print:text-[11px] print:text-slate-700 print:leading-relaxed print:marker:text-slate-500">
                <li>Engineered an advanced AI orchestrator utilizing Node.js, TypeScript, and Express, implementing a robust multi-stage pipeline (NLU &rarr; Planner &rarr; Tool Executor) for processing webhooks.</li>
                <li>Architected an anti-hallucination framework integrating Groq LLMs with deterministic database mutations via PostgreSQL and Prisma.</li>
                <li>Integrated financial APIs and Document Intelligence, enabling real-time company research, watchlist management, and context-aware conversational memory.</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills & Projects */}
          <div className="md:col-span-4 print:col-span-4">

            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200 mb-8 print:text-[16px] print:text-[#1d4ed8] print:normal-case print:tracking-normal print:mb-3">Skills</h2>

            <div className="mb-6 print:mb-3">
              <h3 className="font-medium leading-snug text-slate-200 mb-2 print:text-[13px] print:text-slate-900 print:mb-0.5">Languages</h3>
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-relaxed">
                JavaScript, TypeScript, C, C++, HTML, CSS
              </p>
            </div>

            <div className="mb-6 print:mb-3">
              <h3 className="font-medium leading-snug text-slate-200 mb-2 print:text-[13px] print:text-slate-900 print:mb-0.5">Frameworks & Libraries</h3>
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-relaxed">
                React.js, Next.js, Node.js, Express.js, TanStack, MUI, Tailwind CSS, Redux
              </p>
            </div>

            <div className="mb-6 print:mb-3">
              <h3 className="font-medium leading-snug text-slate-200 mb-2 print:text-[13px] print:text-slate-900 print:mb-0.5">Developer Tools</h3>
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-relaxed">
                VS Code, Postman, Git, GitHub, Vite
              </p>
            </div>

            <div className="mb-12 print:mb-5">
              <h3 className="font-medium leading-snug text-slate-200 mb-2 print:text-[13px] print:text-slate-900 print:mb-0.5">Databases</h3>
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-relaxed">
                MySQL, MongoDB
              </p>
            </div>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200 mb-8 print:text-[16px] print:text-[#1d4ed8] print:normal-case print:tracking-normal print:mb-3">Education</h2>

            <div className="mb-6 print:mb-3">
              <h3 className="font-medium leading-snug text-slate-200 mb-1 print:text-[13px] print:text-slate-900 print:font-bold">
                Master's in Computer Application
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1 print:text-[10px] print:text-slate-500 print:font-bold print:normal-case print:tracking-normal">2023 &mdash; 2025</p>
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-relaxed">
                Institute of Technology Management College
              </p>
            </div>

            <div className="mb-12 print:mb-5">
              <h3 className="font-medium leading-snug text-slate-200 mb-1 print:text-[13px] print:text-slate-900 print:font-bold">
                Bachelor of Computer Application
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1 print:text-[10px] print:text-slate-500 print:font-bold print:normal-case print:tracking-normal">2019 &mdash; 2022</p>
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-relaxed">
                Maharana Pratap College of Technology
              </p>
            </div>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200 mb-8 print:text-[16px] print:text-[#1d4ed8] print:normal-case print:tracking-normal print:mb-2">Interests</h2>

            <div className="mb-2">
              <p className="text-sm leading-normal text-slate-400 print:text-[11px] print:text-slate-700 print:leading-snug print:pr-2">
                Web accessibility, science fiction & fantasy novels, The Legend of Zelda: Breath of the Wild & Tears of the Kingdom
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
