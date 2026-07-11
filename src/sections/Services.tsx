import { ArrowRight, Globe2, LayoutTemplate, Mail } from "lucide-react";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";

const services = [
  {
    icon: <Globe2 size={24} strokeWidth={2.5} />,
    title: "Web Development",
    copy: "Building fast, responsive, and scalable web applications using modern technologies like React, Next.js, Node.js, and MongoDB.",
  },
  {
    icon: <LayoutTemplate size={24} strokeWidth={2.5} />,
    title: "Frontend Development",
    copy: "Creating beautiful, interactive, and user-friendly interfaces with React, Tailwind CSS, and responsive design principles.",
  },
  {
    icon: <Mail size={24} strokeWidth={2.5} />,
    title: "Backend Development",
    copy: "Developing secure REST APIs, authentication systems, and scalable backend services using Node.js and Express.",
  },
];

export default function Services() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="services" className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Services</Eyebrow>

        <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-3">
          What I Can Do For You
        </h2>

        <p className="text-paper/60 max-w-2xl mb-10">
          I build modern, scalable, and user-friendly web applications from
          concept to deployment.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border-[2.5px] border-ink bg-paper p-6 shadow-brut-sm flex flex-col transition-all hover:-translate-y-1 hover:shadow-brut"
            >
              <div className="w-14 h-14 rounded-2xl border-2 border-ink bg-zap flex items-center justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="font-display text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed opacity-80 flex-1 mb-6">
                {service.copy}
              </p>

              <Button
                variant="dark"
                size="md"
                className="self-start"
                icon={<ArrowRight size={15} strokeWidth={3} />}
                onClick={handleContactClick}
              >
                Get In Touch
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}