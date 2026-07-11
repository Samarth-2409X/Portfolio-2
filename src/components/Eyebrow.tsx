import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <span className="w-2.5 h-2.5 rounded-full bg-zap border-2 border-ink" />
      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}
