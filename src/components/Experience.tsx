import React, { useMemo } from "react";
import { motion } from "motion/react";
import { EXPERIENCES } from "../data";
import { Calendar, MapPin, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { CompanyLogo, TechIcon } from "./TechIcons";
import { getRandomBlobStyle } from "../utils/blobStyles";

export default function Experience() {
  const blobStyles = useMemo(
    () => [getRandomBlobStyle(), getRandomBlobStyle()],
    []
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 bg-white border-t border-slate-200"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob section-blob" style={blobStyles[0]} />
        <div className="blob section-blob" style={blobStyles[1]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
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

        {/* Timeline */}
        <div className="relative border-l border-slate-200 pl-6 sm:pl-10 space-y-10 max-w-4xl">

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">

              {/* Timeline dot + logo */}
              <div className="absolute -left-[34px] top-2">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 transition-all hover:border-emerald-200 hover:shadow-sm">

                {/* Top row */}
                <div className="flex flex-wrap justify-between gap-3 mb-3">

                  <div>
                    <span className="inline-flex px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-100 rounded">
                      {exp.company}
                    </span>

                    <h3 className="mt-1 text-sm sm:text-base font-bold text-slate-900 uppercase tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-[10px] font-mono text-slate-500 space-y-1 text-left sm:text-right">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                  </div>

                </div>

                {/* Duration */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    {exp.duration}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 text-xs text-slate-600">
                  {exp.bulletPoints.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase mr-2">
                    Tech:
                  </span>

                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-slate-50 border border-slate-200 text-slate-600 rounded"
                    >
                      <TechIcon name={tech} className="w-3 h-3" />
                      {tech}
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
