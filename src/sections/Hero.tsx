import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import myPhoto from "../assets/myPhoto.jpeg";

const orbitTags = [
  { label: "UX",    top: "4%",  left: "2%"  },
  { label: "CSS",   top: "0%",  left: "38%" },
  { label: "HTML",  top: "10%", left: "78%" },
  { label: "REACT", top: "46%", left: "-6%" },
  { label: "SEO",   top: "50%", left: "92%" },
  { label: "TS",    top: "88%", left: "0%"  },
  { label: "UI",    top: "94%", left: "40%" },
  { label: "API",   top: "84%", left: "82%" },
];

// Reusable fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0  },
};

// Stagger container
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="px-4 sm:px-6 pt-10 sm:pt-14 pb-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* ── Left: copy ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Eyebrow>Full Stack Developer</Eyebrow>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight mb-5"
          >
            Building things that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">matter.</span>
              {/* Highlight bar animates in after text */}
              <motion.span
                className="absolute left-0 bottom-1 h-3 bg-zap -z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.85, duration: 0.45, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg max-w-md mb-7 leading-relaxed"
          >
            I'm Samarth, a Full Stack Developer passionate about building modern,
            scalable web applications with the MERN stack. Currently pursuing my
            engineering degree at KLE Tech University, Hubballi.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              variant="primary"
              icon={<ArrowRight size={18} strokeWidth={3} />}
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </Button>
          </motion.div>

          {/* Available badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex items-center gap-3 font-mono text-xs font-bold uppercase"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-zap border-2 border-ink animate-pulse" />
            Available for new projects
          </motion.div>
        </motion.div>

        {/* ── Right: portrait + orbit tags ── */}
        <motion.div
          className="relative mx-auto w-full max-w-sm aspect-square"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
        >
          {/* Orbit tags — each floats independently */}
          {orbitTags.map((t, i) => (
            <motion.span
              key={t.label}
              style={{ top: t.top, left: t.left }}
              className="absolute font-mono text-[10px] sm:text-xs font-bold uppercase
                bg-paper border-2 border-ink rounded-full px-2.5 py-1 shadow-brut-sm
                rotate-[-4deg] hidden sm:block"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, i % 2 === 0 ? -5 : 5, 0],   // alternating float direction
              }}
              transition={{
                opacity:  { delay: 0.4 + i * 0.07, duration: 0.4 },
                scale:    { delay: 0.4 + i * 0.07, duration: 0.4 },
                y: {
                  delay: 0.8 + i * 0.07,
                  duration: 2.6 + i * 0.2,           // slightly different speed per tag
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            >
              {t.label}
            </motion.span>
          ))}

          {/* Portrait card */}
          {/* Portrait card */}
<motion.div
  className="absolute inset-[12%] rounded-[2.5rem] border-[3px] border-ink bg-zap shadow-brut-lg overflow-hidden"
  whileHover={{ scale: 1.03, rotate: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 18 }}
>
  <img
    src={myPhoto}
    alt="Samarth — Full Stack Developer"
    className="w-full h-full object-cover object-top"
  />

  <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-ink/70" />
  <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-ink/70" />
</motion.div>

          {/* Name badge — springs in from below */}
          <motion.div
            className="absolute -bottom-4 -right-2 sm:right-2 bg-paper border-[2.5px] border-ink rounded-full px-4 py-2 shadow-brut-sm rotate-[-3deg]"
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0,  rotate: -3 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 220, damping: 16 }}
            whileHover={{ scale: 1.08, rotate: 0 }}
          >
            <span className="font-mono text-xs font-bold uppercase">
              Hey, I'm Samarth 👋
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}