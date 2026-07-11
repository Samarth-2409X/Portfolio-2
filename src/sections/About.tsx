import { Link2, Send, Mail } from "lucide-react";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-16 sm:py-20 bg-ink text-paper rounded-[2.5rem] mx-3 sm:mx-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow>Nice to meet you</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-5">
            Hi, I'm Samarth.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 max-w-md opacity-90">
  I'm a Full Stack Developer and MERN Stack enthusiast pursuing my degree at
  KLE Tech University, Hubballi. I enjoy building fast, scalable web
  applications that solve real-world problems.
</p>

<p className="text-base sm:text-lg leading-relaxed mb-4 max-w-md opacity-90">
  I've solved 300+ LeetCode problems, strengthening my foundation in Data
  Structures & Algorithms while continuously improving my problem-solving
  skills.
</p>

<p className="text-base sm:text-lg leading-relaxed mb-7 max-w-md opacity-90">
  Currently, I'm building <span className="font-semibold">ExileDraw</span>, a
  real-time chat application with Next.js, focusing on scalable architecture,
  real-time communication, and seamless user experiences.
</p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="md"
              variant="primary"
              icon={<Link2 size={16} strokeWidth={3} />}
              onClick={() => window.open("https://github.com/Samarth-2409X?tab=repositories", "_blank")}
            >
              GitHub
            </Button>
            <Button
              size="md"
              variant="dark"
              icon={<Send size={16} strokeWidth={3} />}
              className="border-paper hover:bg-paper hover:text-ink"
              onClick={() => window.open("https://www.linkedin.com/in/samarth-shirahatti/", "_blank")}
            >
              LinkedIn
            </Button>
            <Button
              size="md"
              variant="dark"
              icon={<Mail size={16} strokeWidth={3} />}
              className="border-paper hover:bg-paper hover:text-ink"
            >
              Email
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border-[3px] border-zap bg-paper/5 p-6 sm:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "300+", l: "LeetCode solved" },
                { n: "15+", l: "Repositories" },
                { n: "MERN", l: "Stack focus" },
                
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border-2 border-zap bg-ink p-5 text-center">
                  <div className="font-display text-2xl sm:text-3xl text-zap mb-1">{s.n}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wide opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
