import { useState } from "react";
import { ExternalLink, Award, X } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";

const certs = [
  {
    emoji: "🏆",
    title: "Tech Vision 2026 — National Level Project Expo",
    issuer: "CMR Institute of Technology, Bengaluru",
    date: "Feb 2026",
    description:
      "Participated in a national-level project expo organized by the Department of Electronics and Communication Engineering. Presented an engineering project and competed with teams from various institutions across India.",
    credentialUrl: "",
    image: "/certificate-1.jpg",
    verified: true,
  },
  {
    emoji: "💻",
    title: "Web Development Cohort (100xDevs)",
    issuer: "100xDevs",
    date: "July 2025",
    description:
      "Completed a web development cohort focused on building full-stack applications. Learned core concepts of frontend and backend development, worked on real-world projects, and gained practical experience in modern web technologies.",
    credentialUrl: "",
    image: "/certificate-2.jpg",
    verified: true,
  },
  {
    emoji: "☁️",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "October 22, 2025",
    description:
      "Demonstrated foundational knowledge of Oracle Cloud Infrastructure (OCI) public cloud services including Compute, Storage, Networking, Database, Developer, Analytics, AI, Observability, and Hybrid services.",
    credentialUrl: "https://catalog-education.oracle.com/",
    image: "/certificate-3.jpg",
    verified: true,
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section
        id="certifications"
        className="px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Achievements</Eyebrow>

          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-10">
            Certifications
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="group rounded-3xl border-[2.5px] border-ink bg-paper shadow-brut-sm overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-brut"
              >
                {/* Image */}
                <div
                  className="relative h-44 overflow-hidden border-b-[2.5px] border-ink cursor-pointer"
                  onClick={() => setLightbox(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs font-bold uppercase bg-zap border-2 border-ink rounded-full px-3 py-1.5">
                      View Photo
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{cert.emoji}</span>

                    {cert.verified && (
                      <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase bg-zap border-2 border-ink rounded-full px-2.5 py-1">
                        <Award size={10} strokeWidth={3} />
                        Verified
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-base leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide">
                    <span className="text-ink/60">{cert.issuer}</span>
                    <span className="font-bold">{cert.date}</span>
                  </div>

                  <p className="text-sm leading-relaxed opacity-70 flex-1">
                    {cert.description}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <Button
                      variant="secondary"
                      onClick={() => setLightbox(cert.image)}
                    >
                      View Photo
                    </Button>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-[2.5px] border-ink bg-ink text-paper px-5 py-2.5 font-mono font-bold uppercase tracking-tight shadow-brut-sm transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-zap hover:text-ink hover:shadow-brut active:translate-x-0.5 active:translate-y-0.5 active:shadow-brut-press"
                      >
                        Credential
                        <ExternalLink size={13} strokeWidth={3} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-paper border-2 border-ink flex items-center justify-center hover:bg-zap transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} strokeWidth={3} />
          </button>

          <img
            src={lightbox}
            alt="Certificate"
            className="max-w-4xl w-full max-h-[90vh] object-contain rounded-2xl border-[3px] border-paper"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}