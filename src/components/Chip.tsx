import type { ReactNode } from "react";

interface ChipProps {
  label: string;
  icon: ReactNode;
  tone?: "zap" | "ink" | "paper";
}

const toneClasses: Record<string, string> = {
  zap: "bg-zap text-ink",
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
};

export default function Chip({ label, icon, tone = "zap" }: ChipProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-[2.5px] border-ink
          shadow-brut-sm flex items-center justify-center
          transition-all duration-150 group-hover:-translate-y-1 group-hover:shadow-brut
          ${toneClasses[tone]}`}
      >
        {icon}
      </div>
      <span className="font-mono text-xs font-bold uppercase tracking-tight">{label}</span>
    </div>
  );
}
