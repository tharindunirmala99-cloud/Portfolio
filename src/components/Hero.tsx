import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";
import { PERSONAL_INFO, CORE_STATS } from "../data";
import resumePdf from "../assets/Documents/Tharindu_Godage___Resume.pdf";

const heroImages = Object.values(
  import.meta.glob("../assets/images/Hero/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
) as string[];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOrder, setImageOrder] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...heroImages].sort(() => Math.random() - 0.5);
    setImageOrder(shuffled.length ? shuffled : heroImages);
  }, []);

  useEffect(() => {
    if (imageOrder.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageOrder.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [imageOrder]);

  const activeImage = imageOrder[currentImageIndex] ?? heroImages[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Tharindu_Godage___Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <div className="blob blob-d" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Credentials & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 mt-36">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
              >
                Hi, I'm <span className="text-emerald-600">{PERSONAL_INFO.name}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl font-semibold text-slate-700 tracking-wide"
              >
                {PERSONAL_INFO.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed"
              >
                {PERSONAL_INFO.shortBio}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollToSection("projects")}
                className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-850 rounded shadow-sm transition-all flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-download-cv-btn"
                onClick={handleDownloadResume}
                className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded shadow-sm transition-all flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                Download Resume
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-700 transition-all cursor-pointer focus:outline-none"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Top skills shortcuts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="pt-4 flex flex-wrap gap-2 text-[10px] font-bold text-slate-500 font-mono"
            >
              <span className="bg-slate-50 px-2.5 py-1 rounded text-[10px] text-slate-700 border border-slate-200 transition-colors uppercase tracking-wider">AWS Specialization</span>
              <span className="bg-slate-50 px-2.5 py-1 rounded text-[10px] text-slate-700 border border-slate-200 transition-colors uppercase tracking-wider">Docker / Kubernetes</span>
              <span className="bg-slate-50 px-2.5 py-1 rounded text-[10px] text-slate-700 border border-slate-200 transition-colors uppercase tracking-wider">SRE Automation</span>
              <span className="bg-slate-50 px-2.5 py-1 rounded text-[10px] text-slate-700 border border-slate-200 transition-colors uppercase tracking-wider">Observability</span>
            </motion.div>
          </div>

          {/* Hero Artwork */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm"
            >
              {activeImage ? (
                <img
                  key={activeImage}
                  src={activeImage}
                  alt="Tharindu Godage SRE Illustration"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover select-none transition duration-700 ease-out"
                />
              ) : null}

              {imageOrder.length > 1 ? (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/30 px-2 py-1 backdrop-blur-sm">
                  {imageOrder.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show hero image ${index + 1}`}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 w-1.5 rounded-full transition ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>

        {/* Minimalist Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-200"
        >
          {CORE_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/30 transition-all duration-300"
            >
              <div>
                <span className="text-2xl md:text-3xl font-bold font-mono tracking-tighter text-emerald-600">
                  {stat.value}
                </span>
                <p className="font-bold text-xs uppercase tracking-wide text-slate-800 font-mono mt-2">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-1 lines-clamp-2 leading-relaxed">
                  {stat.metricDetails}
                </p>
              </div>
              <div className="mt-3.5 pt-3.5 border-t border-slate-100">
                <p className="text-[10px] text-emerald-600 font-mono font-bold uppercase tracking-wider">
                  Impact: {stat.impact}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none" onClick={() => scrollToSection("about")}>
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5 text-slate-400 animate-bounce" />
      </div>
    </section>
  );
}
