import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tag: string;
  bg: string;
  image?: string;
  textColor?: string;
  large?: boolean;
  href?: string;
}

export default function ProjectCard({
  title,
  tag,
  bg,
  image,
  textColor = "text-paper",
  large,
  href = "#",
}: ProjectCardProps) {
  const isExternal = href !== "#";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative overflow-hidden rounded-3xl border-[2.5px] border-ink shadow-brut-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brut ${
        large ? "sm:col-span-2 h-64 sm:h-80" : "h-64"
      }`}
      style={{ backgroundColor: bg }}
    >
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

      {/* Tag */}
      <div className="absolute top-4 left-4 z-10 font-mono text-[10px] font-bold uppercase bg-paper border-2 border-ink rounded-full px-3 py-1">
        {tag}
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border-2 border-ink bg-zap flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={16} strokeWidth={3} />
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className={`font-display text-xl ${textColor}`}>
          {title}
        </h3>
      </div>
    </a>
  );
}