import { Link2, Send, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-6">
      <div className="max-w-6xl mx-auto rounded-3xl border-[2.5px] border-ink bg-ink text-paper px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-zap border-2 border-paper flex items-center justify-center font-display text-ink text-xs">
            S
          </span>
          <p className="font-mono text-xs opacity-80">
            © 2026 Samarth Shirahatti — built with React, fuelled by chai.
          </p>
        </div>

        <nav className="flex gap-6 font-mono text-xs font-bold uppercase">
          <a href="#home" className="hover:text-zap">Home</a>
          <a href="#about" className="hover:text-zap">About</a>
          <a href="#work" className="hover:text-zap">Work</a>
        </nav>

        <div className="flex gap-3">
          <a
            href="https://github.com/Samarth-2409X?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-paper flex items-center justify-center hover:bg-zap hover:text-ink hover:border-ink transition-colors"
          >
            <Link2 size={15} strokeWidth={2.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/samarth-shirahatti/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-paper flex items-center justify-center hover:bg-zap hover:text-ink hover:border-ink transition-colors"
          >
            <Send size={15} strokeWidth={2.5} />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border-2 border-paper flex items-center justify-center hover:bg-zap hover:text-ink hover:border-ink transition-colors"
          >
            <Mail size={15} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
