import { useEffect, useState } from "react";

interface PreloaderProps {
  onDone: () => void;
}

export default function Preloader({ onDone }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(100);
      setExiting(true);
      const t = setTimeout(onDone, 50);
      return () => clearTimeout(t);
    }

    const start = performance.now();
    const duration = 1100; // ms to reach 100%

    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        // hold briefly at 100 before the panel exits
        setTimeout(() => setExiting(true), 220);
        setTimeout(onDone, 700);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-ink text-paper
        transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${exiting ? "-translate-y-full" : "translate-y-0"}`}
      aria-hidden={exiting}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
        <div className="relative">
          <span className="font-display text-3xl sm:text-4xl tracking-tight">
            SAM<span className="text-zap">.</span>DEV
          </span>
          <span className="absolute -top-2 -right-3 w-2.5 h-2.5 rounded-full bg-zap border-2 border-paper animate-pulse" />
        </div>

        <div className="w-56 sm:w-72 h-3 rounded-full border-2 border-paper/30 overflow-hidden">
          <div
            className="h-full bg-zap rounded-full transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="font-mono text-xs font-bold tracking-[0.2em] text-paper/60">
          LOADING — {progress}%
        </span>
      </div>

      <div className="flex justify-between px-5 sm:px-8 py-5 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-paper/30">
        <span>Designer / Dev</span>
        <span>Est. 2026</span>
      </div>
    </div>
  );
}
