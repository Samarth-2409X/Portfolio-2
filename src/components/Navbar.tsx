import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#certifications", label: "Certs" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHello = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-full border-[2.5px] border-ink bg-paper px-4 sm:px-6 py-3 transition-shadow ${
          scrolled ? "shadow-brut-sm" : ""
        }`}
      >
        <a
          href="#home"
          className="font-display text-sm sm:text-base tracking-tight"
        >
          SAMARTH
          <span
            className="text-zap"
            style={{ WebkitTextStroke: "1px black" }}
          >
            .
          </span>
          DEV
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-sm font-bold uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-zap hover:[text-shadow:1px_1px_0_#000] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="md"
            variant="primary"
            onClick={handleHello}
          >
            Say Hello →
          </Button>
        </div>

        <button
          className="md:hidden w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden max-w-6xl mx-auto mt-3 rounded-3xl border-[2.5px] border-ink bg-paper shadow-brut p-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm font-bold uppercase"
            >
              {l.label}
            </a>
          ))}

          <Button
            size="md"
            variant="primary"
            className="w-full"
            onClick={() => {
              setOpen(false);
              handleHello();
            }}
          >
            Say Hello →
          </Button>
        </div>
      )}
    </header>
  );
}