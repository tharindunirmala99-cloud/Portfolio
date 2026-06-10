import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { ExternalLink, Github, Monitor, Flame, Layers, Target, Terminal, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../types";
import { TechIcon } from "./TechIcons";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter((prj) => {
    if (filter === "all") return true;
    if (filter === "sre") return prj.category === "Site Reliability Engineering" || prj.category === "Automation" || prj.category === "DevOps & Cloud";
    if (filter === "web") return prj.category === "Full-Stack Development" || prj.category === "Automation";
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
                04 / Engineering Showcase
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Products Engineered for Impact
            </h2>
            <p className="text-xs text-slate-500 font-mono leading-relaxed">
              Selected operations & software solutions focused on measurable cloud performance, uptime metrics, and custom workflows.
            </p>
            <div className="h-[1px] w-full bg-slate-200 mt-2" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-50 rounded border border-slate-200 self-start md:self-end">
            {[
              { id: "all", label: "All Projects" },
              { id: "sre", label: "DevOps / SRE" },
              { id: "web", label: "Full-Stack Web" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-[10px] font-bold font-mono uppercase tracking-wider rounded transition-all cursor-pointer focus:outline-none ${
                  filter === tab.id
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-grid">
          {filteredProjects.map((project: Project, idx: number) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Project Graphic Frame */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-50 group border-b border-slate-200">
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 select-none animate-fade-in"
                    />
                    
                    {/* Featured Stamp */}
                    {project.isFeatured && (
                      <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 font-mono text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded shadow">
                        MAJOR FOCUS
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 bg-slate-900/90 text-emerald-450 font-mono text-[9px] tracking-widest uppercase font-bold px-2.5 py-1 rounded">
                      Role: {project.role}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 sm:p-6 space-y-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold font-mono tracking-wider bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-200 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold uppercase font-mono text-slate-900 tracking-tight leading-none">
                      {project.name}
                    </h3>

                    <p className="font-mono text-[10px] font-bold text-emerald-650 leading-snug">
                      &gt; {project.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stat Metrics Impact Bar */}
                    <div className="p-3 bg-emerald-50/55 border border-emerald-100 text-emerald-800 text-xs rounded-lg font-mono select-none">
                      <div className="flex items-start gap-2">
                        <Target className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold uppercase tracking-wider text-[9px] text-emerald-650">Measured Operations Impact</strong>
                          <p className="font-sans mt-0.5 leading-relaxed text-slate-705 text-[11px] font-bold">{project.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Integrated Case Analysis Accordion */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="w-full py-2 border-y border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 hover:text-slate-900 cursor-pointer focus:outline-none uppercase tracking-wider"
                      >
                        <span>{isExpanded ? "Hide details" : "Show challenge & solution"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-slate-50 rounded border border-slate-200 text-[11px] p-4 space-y-3.5 mt-2 transition-all font-mono"
                          >
                            {project.challenge && (
                              <div className="space-y-1">
                                <span className="font-bold text-red-500 uppercase tracking-widest text-[8px] flex items-center gap-1">
                                  <Flame className="w-3 h-3" /> THE SRE CHALLENGE
                                </span>
                                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-xs">
                                  {project.challenge}
                                </p>
                              </div>
                            )}

                            {project.solution && (
                              <div className="space-y-1">
                                <span className="font-bold text-emerald-500 uppercase tracking-widest text-[8px] flex items-center gap-1">
                                  <Layers className="w-3 h-3" /> TECHNICAL ARCHITECTURE
                                </span>
                                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-xs">
                                  {project.solution}
                                </p>
                              </div>
                            )}

                            {project.longDescription && (
                              <div className="space-y-1">
                                <span className="font-bold text-sky-500 uppercase tracking-widest text-[8px] flex items-center gap-1">
                                  <Terminal className="w-3 h-3" /> SYSTEM SETUP COMPONENT
                                </span>
                                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-xs">
                                  {project.longDescription}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                </div>

                {/* Footer Section */}
                <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between gap-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-white text-[9px] font-bold font-mono text-slate-500 rounded border border-slate-200 uppercase"
                      >
                        <TechIcon name={tech} className="w-2.5 h-2.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[9px] font-bold font-mono text-slate-400 flex items-center">
                        +{project.stack.length - 4} MORE
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Credentials case studies requested.");
                      }}
                      className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                      title="Request System Credentials Case"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Co-Founders / Sub-Projects Footer banner */}
        <div className="mt-16 p-5 sm:p-6 rounded-lg border border-slate-200 bg-slate-50 text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 md:max-w-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-900">Currently Researching & Building</h4>
            <p className="text-xs text-slate-500 leading-normal">
              Exploring AI-assisted engineering workflow optimizations, cloud-native SaaS services, automated LLM-based test architectures, and Kuddy Baba indoor operations.
            </p>
          </div>
          <button
            id="projects-cta-contact"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-[10px] font-mono tracking-wider uppercase rounded transition-all border border-slate-250 whitespace-nowrap self-start md:self-center"
          >
            Request Joint Research
          </button>
        </div>

      </div>
    </section>
  );
}
