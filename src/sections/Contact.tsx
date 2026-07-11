import { useState } from "react";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Samarth-2409X",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samarth-shirahatti/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/samarth__7777_/",
    label: "Instagram",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left */}
        <div>
          <Eyebrow>Let's connect</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-5">
            Got an idea?
            <br />
            Let's make it real.
          </h2>

          <p className="text-base leading-relaxed mb-8 max-w-sm opacity-80">
            Whether you're looking to collaborate, have a question, or just
            want to discuss development, feel free to reach out.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    w-12 h-12
                    rounded-full
                    border-[2.5px] border-ink
                    bg-paper
                    shadow-brut-sm
                    flex items-center justify-center
                    transition-all duration-150
                    hover:bg-zap
                    hover:-translate-x-0.5
                    hover:-translate-y-0.5
                    hover:shadow-brut
                    active:translate-x-0.5
                    active:translate-y-0.5
                    active:shadow-brut-press
                  "
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-3xl border-[2.5px] border-ink bg-paper p-6 sm:p-8 shadow-brut"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-zap border-2 border-ink mx-auto mb-4 flex items-center justify-center">
                <Send size={22} strokeWidth={2.5} />
              </div>

              <p className="font-display text-lg">
                Message sent!
              </p>

              <p className="text-sm opacity-70 mt-1">
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="First name"
                  placeholder="Jane"
                />

                <Field
                  label="Last name"
                  placeholder="Doe"
                />
              </div>

              <Field
                label="Email"
                placeholder="jane@email.com"
                type="email"
              />

              <div>
                <label className="font-mono text-xs font-bold uppercase block mb-2">
                  Message
                </label>

                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    rounded-2xl
                    border-2 border-ink
                    px-4 py-3
                    text-sm
                    resize-none
                    focus:outline-none
                    focus:bg-zap/20
                  "
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="primary"
                icon={<Send size={16} strokeWidth={3} />}
                className="w-full mt-1"
              >
                Submit
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs font-bold uppercase block mb-2">
        {label}
      </label>

      <input
        required
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-full
          border-2 border-ink
          px-4 py-2.5
          text-sm
          focus:outline-none
          focus:bg-zap/20
        "
      />
    </div>
  );
}