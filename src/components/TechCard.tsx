import type { ReactNode } from "react";

interface TechCardProps {
  label: string;
  category: string;
  icon: ReactNode;
}

export default function TechCard({
  label,
  category,
  icon,
}: TechCardProps) {
  return (
    <div
      className="
      group
      rounded-2xl
      border-2
      border-paper/15
      bg-paper/[0.04]
      p-6
      flex
      flex-col
      items-center
      gap-4
      transition-all
      duration-200
      hover:-translate-y-2
      hover:border-zap
      hover:bg-paper/[0.08]
      "
    >
      <div className="text-paper group-hover:text-zap transition-colors">
        {icon}
      </div>

      <h4 className="font-display text-paper text-lg text-center">
        {label}
      </h4>

      <span className="rounded-full bg-zap text-ink px-3 py-1 text-[10px] uppercase font-mono font-bold">
        {category}
      </span>
    </div>
  );
}