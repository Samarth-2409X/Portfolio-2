import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-6">
      <div className="max-w-6xl mx-auto rounded-3xl border-[2.5px] border-ink bg-ink text-paper px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-zap border-2 border-paper flex items-center justify-center font-display text-ink text-xs">
            S
          </span>

          <p className="font-mono text-xs opacity-80">
            © 2026 Samarth Shirahatti — built with React, fuelled by chai.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 font-mono text-xs font-bold uppercase">
          <a href="#home" className="hover:text-zap transition-colors">
            Home
          </a>

          <a href="#about" className="hover:text-zap transition-colors">
            About
          </a>

          <a href="#work" className="hover:text-zap transition-colors">
            Projects
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/Samarth-2409X"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border-2 border-paper flex items-center justify-center transition-all duration-150 hover:bg-zap hover:text-ink hover:border-ink hover:-translate-y-1"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/samarth-shirahatti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border-2 border-paper flex items-center justify-center transition-all duration-150 hover:bg-zap hover:text-ink hover:border-ink hover:-translate-y-1"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/samarth__7777_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border-2 border-paper flex items-center justify-center transition-all duration-150 hover:bg-zap hover:text-ink hover:border-ink hover:-translate-y-1"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}