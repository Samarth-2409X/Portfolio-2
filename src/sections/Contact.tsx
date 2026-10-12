import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";


const SERVICE_ID = "service_krpoaoc";
const TEMPLATE_ID = "template_00z3cz9";
const PUBLIC_KEY = "jTgXPEB77m8RhR5Sg";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    const form = e.currentTarget;

    try {
      // Send the form through EmailJS
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      // Show success only when EmailJS accepts the request
      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);

      const emailError = err as {
        status?: number;
        text?: string;
        message?: string;
      };

      setError(
        emailError.text ||
          emailError.message ||
          "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left Section */}
        <div>
          <Eyebrow>Let's connect</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-5">
            Got an idea?
            <br />
            Let's make it real.
          </h2>

          <p className="text-base leading-relaxed mb-8 max-w-sm opacity-80">
            Whether you're looking to collaborate, have a question,
            or just want to discuss development, feel free to reach out.
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

        {/* Right Section: Contact Form */}
        <form
          onSubmit={handleSubmit}
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
                Thanks for reaching out. I'll get back to you soon.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
                className="mt-5 text-sm font-bold underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid gap-4">

              {/* First and Last Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="First name"
                  name="first_name"
                  placeholder="Jane"
                />

                <Field
                  label="Last name"
                  name="last_name"
                  placeholder="Doe"
                />
              </div>

              {/* Email */}
              <Field
                label="Email"
                name="from_email"
                placeholder="jane@email.com"
                type="email"
              />

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs font-bold uppercase block mb-2"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={5}
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

              {/* Error Message */}
              {error && (
                <p
                  className="text-sm text-red-600"
                  role="alert"
                >
                  Failed to send: {error}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="primary"
                icon={<Send size={16} strokeWidth={3} />}
                className="w-full mt-1"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>

              <p className="text-xs text-center opacity-60">
                Your message will be sent directly to my email.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: FieldProps) {
  const id = `contact-${name}`;

  const autoComplete =
    name === "first_name"
      ? "given-name"
      : name === "last_name"
        ? "family-name"
        : type === "email"
          ? "email"
          : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-xs font-bold uppercase block mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        required
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
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