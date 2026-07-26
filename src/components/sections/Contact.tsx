"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-4 md:px-12 bg-[var(--background)] max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-text text-5xl md:text-[6rem] font-bold leading-none tracking-tighter mb-8"
          >
            LET&apos;S <br/>
            <span className="text-gray-600">TALK.</span>
          </motion.h2>
          <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
            Ready to push boundaries? Reach out to discuss your next ambitious project.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <div className="relative group hover-target">
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b border-gray-800 py-6 text-2xl md:text-4xl text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors"
                placeholder="What's your name?"
              />
            </div>
            
            <div className="relative group hover-target">
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b border-gray-800 py-6 text-2xl md:text-4xl text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors"
                placeholder="Your email address?"
              />
            </div>
            
            <div className="relative group hover-target">
              <textarea
                id="message"
                rows={3}
                className="w-full bg-transparent border-b border-gray-800 py-6 text-2xl md:text-4xl text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Tell me about your vision..."
              />
            </div>

            <button
              type="button"
              className="group self-start hover-target flex items-center gap-6 mt-8"
            >
              <span className="display-text text-3xl font-bold text-white uppercase tracking-widest">Send Request</span>
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-all duration-500 overflow-hidden">
                <span className="group-hover:text-black group-hover:translate-x-2 transition-transform duration-500">→</span>
              </div>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
