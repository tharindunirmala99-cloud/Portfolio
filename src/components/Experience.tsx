import React, { useMemo } from "react";
import { motion } from "motion/react";
import { EXPERIENCES } from "../data";
import { Calendar, MapPin, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { CompanyLogo, TechIcon } from "./TechIcons";
import { getRandomBlobStyle } from "../utils/blobStyles";

export default function Experience() {
  const blobStyles = useMemo(() => [getRandomBlobStyle(), getRandomBlobStyle()], []);

  const getBadgeColors = (type: string) => {
    return "bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-650 dark:text-emerald-400 border-emerald-500/25";
  };

  return (
    <section id="experience" className="relative overflow-hidden py-24 bg-white border-t border-slate-200">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob section-blob" style={blobStyles[0]} />
        <div className="blob section-blob" style={blobStyles[1]} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              03 / Career Timeline
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Professional Experience & Achievements
          </h2>
          <p className="text-xs text-slate-500 font-mono leading-relaxed">
            Historical sequence of functional SRE & DevOps allocations.
          </p>
          <div className="h-[1px] w-full bg-slate-200" />
        </div>

        {/* Real Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-10 space-y-12 max-w-4xl text-left" id="experience-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Pulsing Timeline Dot */}
              <div className="absolute -left-12 sm:-left-16 top-1.5 w-6 h-6 rounded bg-white border-2 border-slate-300 flex items-center justify-center shadow-sm z-10 transition-colors group-hover:border-emerald-500/50">
                <CompanyLogo type={exp.logoType} className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card wrapper */}
              <div className="p-5 sm:p-6 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/20 transition-all">
                
                {/* Heading details */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="space-y-1">
                    <span className="inline-flex px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wide uppercase rounded border bg-emerald-50 text-emerald-700 border-emerald-100">
                      {exp.company}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold uppercase font-mono text-slate-900 mt-1.5">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start sm:items-end text-[10px] font-mono text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Duration Tag */}
                <p className="text-[10px] font-mono font-bold text-emerald-650 mb-4 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded inline-block uppercase">
                  Duration: {exp.duration}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2.5 mb-6 text-slate-600 text-xs leading-relaxed">
                  {exp.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Trainee Trainings completed if available */}
                {exp.trainings && exp.trainings.length > 0 && (
                  <div className="mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-650 font-mono flex items-center gap-1.5 mb-2">
                      <Award className="w-3.5 h-3.5" />
                      Completed Trainings & Key Areas:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-slate-500">
                      {exp.trainings.map((train, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-1">
                          <ChevronRight className="w-3 h-3 text-emerald-500" />
                          <span>{train}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Badge Deck */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mr-2 font-mono">
                    Technologies:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 hover:bg-slate-100 rounded text-[10px] font-bold font-mono text-slate-600 border border-slate-200 uppercase transition-colors"
                    >
                      <TechIcon name={tech} className="w-3 h-3 text-slate-500" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
