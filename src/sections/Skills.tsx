import {
  Atom,
  Triangle,
  Hexagon,
  Zap,
  Database,
  Braces,
  FileCode2,
  Wind,
  GitBranch,
  Route,
  ShieldCheck,
  Code2,
  Binary,
  Monitor,
  Package,
} from "lucide-react";

import TechCard from "../components/TechCard";
import MarqueeStrip from "../components/MarqueeStrip";

const marqueeItems = [
  "JavaScript",
  "TypeScript",
  "C++",
  "C",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Tailwind CSS",
  "React Router",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Auth",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "NPM",
  "Vite",
  "VS Code",
];

const skillSections = [
  {
    title: "Languages",
    skills: [
      {
        label: "JavaScript",
        category: "Language",
        icon: <Braces size={26} />,
      },
      {
        label: "TypeScript",
        category: "Language",
        icon: <FileCode2 size={26} />,
      },
      {
        label: "C++",
        category: "Language",
        icon: <Code2 size={26} />,
      },
      {
        label: "C",
        category: "Language",
        icon: <Binary size={26} />,
      },
      {
        label: "HTML5",
        category: "Markup",
        icon: <Code2 size={26} />,
      },
      {
        label: "CSS3",
        category: "Styling",
        icon: <Wind size={26} />,
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        label: "React",
        category: "Library",
        icon: <Atom size={26} />,
      },
      {
        label: "Next.js",
        category: "Framework",
        icon: <Triangle size={26} />,
      },
      {
        label: "Tailwind CSS",
        category: "CSS",
        icon: <Wind size={26} />,
      },
      {
        label: "React Router",
        category: "Routing",
        icon: <Route size={26} />,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        label: "Node.js",
        category: "Runtime",
        icon: <Hexagon size={26} />,
      },
      {
        label: "Express.js",
        category: "Framework",
        icon: <Zap size={26} />,
      },
      {
        label: "REST APIs",
        category: "API",
        icon: <Zap size={26} />,
      },
      {
        label: "JWT Auth",
        category: "Security",
        icon: <ShieldCheck size={26} />,
      },
    ],
  },

  {
    title: "Databases",
    skills: [
      {
        label: "MongoDB",
        category: "NoSQL",
        icon: <Database size={26} />,
      },
      {
        label: "MySQL",
        category: "SQL",
        icon: <Database size={26} />,
      },
      {
        label: "PostgreSQL",
        category: "SQL",
        icon: <Database size={26} />,
      },
    ],
  },

  {
    title: "Tools & DevOps",
    skills: [
      {
        label: "Git",
        category: "VCS",
        icon: <GitBranch size={26} />,
      },
      {
        label: "GitHub",
        category: "Repository",
        icon: <GitBranch size={26} />,
      },
      {
        label: "NPM",
        category: "Package",
        icon: <Package size={26} />,
      },
      {
        label: "Vite",
        category: "Build Tool",
        icon: <Zap size={26} />,
      },
      {
        label: "VS Code",
        category: "Editor",
        icon: <Monitor size={26} />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] border-[2.5px] border-ink bg-ink overflow-hidden shadow-brut">
        <MarqueeStrip items={marqueeItems} />

        <div className="px-6 sm:px-10 py-10">
          <span className="inline-block font-mono text-[11px] font-bold uppercase bg-zap text-ink rounded-full px-3 py-1.5 mb-6 tracking-tight">
            Tech Stack
          </span>

          <h2 className="font-display text-3xl sm:text-5xl text-paper tracking-tight mb-3">
            Skills &
            <br />
            Technologies
          </h2>

          <p className="max-w-2xl text-paper/70 text-base sm:text-lg leading-relaxed">
            Technologies I use to build{" "}
            <span className="text-zap font-semibold">scalable</span>,{" "}
            <span className="text-zap font-semibold">high-performance</span> and{" "}
            <span className="text-zap font-semibold">modern</span> web applications.
          </p>

          <div className="space-y-12">
            {skillSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-display text-2xl text-paper mb-6">
                  {section.title}
                </h3>

                <div
                  className={`grid gap-5 ${
                    section.skills.length >= 5
                      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                      : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {section.skills.map((skill) => (
                    <TechCard
                      key={skill.label}
                      label={skill.label}
                      category={skill.category}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}