export default function Footer() {
  return (
    <footer className="bg-[var(--background)] pt-32 pb-8 overflow-hidden">
      <div className="px-4 md:px-12 flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="w-full md:w-1/2">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-[0.2em] text-sm">Navigation</h4>
          <ul className="flex flex-col gap-4 text-xl">
            <li><a href="#about" className="text-gray-500 hover:text-white transition-colors hover-target">About Studio</a></li>
            <li><a href="#projects" className="text-gray-500 hover:text-white transition-colors hover-target">Selected Works</a></li>
            <li><a href="#contact" className="text-gray-500 hover:text-white transition-colors hover-target">Get in Touch</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 md:text-right flex flex-col md:items-end">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-[0.2em] text-sm">Socials</h4>
          <ul className="flex flex-col gap-4 text-xl">
            <li><a href="https://linkedin.com" className="text-gray-500 hover:text-white transition-colors hover-target">LinkedIn</a></li>
            <li><a href="https://github.com" className="text-gray-500 hover:text-white transition-colors hover-target">GitHub</a></li>
            <li><a href="https://twitter.com" className="text-gray-500 hover:text-white transition-colors hover-target">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Massive Typographic Footer Logo */}
      <div className="w-full border-t border-white/10 pt-12">
        <h1 className="display-text text-[15vw] leading-none text-center font-bold text-white tracking-tighter mix-blend-difference select-none">
          AMIT PARIHAR
        </h1>
      </div>

      <div className="px-4 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-8">
        <p>© {new Date().getFullYear()} Amit Parihar.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="uppercase tracking-widest">All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
