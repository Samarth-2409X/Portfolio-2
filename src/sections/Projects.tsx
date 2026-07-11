import ProjectCard from "../components/ProjectCard";
import Eyebrow from "../components/Eyebrow";

import secondBrain from "../assets/second_brain.png";
import pocketMoney from "../assets/pocket_money.png";
import hero from "../assets/hero.png";
// Add more screenshots when available
// import pocketMoney from "../assets/pocket_money.png";
// import codingBattle from "../assets/coding_battle.png";

export default function Projects() {
  return (
    <section id="work" className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Case studies</Eyebrow>

        <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-10">
          Selected Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          <ProjectCard
            title="Second Brain — Full Stack Knowledge App"
            tag="Full Stack"
            bg="#0E3B36"
            image={secondBrain}
            large
            href="https://github.com/Samarth-2409X/BrainlyFrontend"
          />

          <ProjectCard
            title="Pocket Money — FinTech Web App"
            tag="Full Stack"
            bg="#1A1A1A"
            image={pocketMoney} // Replace with pocketMoney image
            href="https://github.com/Samarth-2409X/Pocket_Money"
          />

          <ProjectCard
            title="Multiplayer Coding Battle Platform"
            tag="Full Stack"
            bg="#10204A"
            image={hero} // Replace with codingBattle image
            href="https://github.com/Samarth-2409X/coding-battle-frontend"
          />
        </div>
      </div>
    </section>
  );
}