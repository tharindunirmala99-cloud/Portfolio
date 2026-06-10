import React from "react";
import { motion } from "motion/react";
import { CERTIFICATIONS, AWARDS, PUBLICATIONS, EDUCATION } from "../data";
import { GraduationCap, Award, BookOpen, CheckCircle, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              04B / Academic Credentials
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Education, Certifications & Achievements
          </h2>
          <p className="text-xs text-slate-500 font-mono leading-relaxed">
            Professional badges, design victories, publications, and official academic degrees.
          </p>
          <div className="h-[1px] w-full bg-slate-200 mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education & Publications */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Education Sub-Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-2 font-mono">
                <GraduationCap className="w-4.5 h-4.5 text-emerald-500" />
                Education History
              </h3>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg border border-slate-200 bg-white text-left space-y-2 hover:border-emerald-500/20 transition-all"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h4 className="font-extrabold text-slate-900 uppercase font-mono text-sm leading-none">
                        {edu.institution}
                      </h4>
                      <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="font-bold text-[10px] text-emerald-650 font-mono uppercase">
                      &gt; {edu.degree}
                    </p>
                    <p className="text-[10px] font-mono text-slate-400">
                      Specialization: {edu.specialization}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1.5 border-t border-slate-100 font-sans">
                      {edu.achievements}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Sub-Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 font-mono">
                <BookOpen className="w-4.5 h-4.5 text-emerald-500" />
                Publications & Research
              </h3>

              {PUBLICATIONS.map((pub) => (
                <div
                  key={pub.id}
                  className="p-5 rounded-lg border border-slate-200 bg-white text-left space-y-3 hover:border-emerald-500/20 transition-all"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-xs leading-normal uppercase font-mono">
                      "{pub.title}"
                    </h4>
                    <span className="px-2 py-0.5 rounded-none bg-emerald-50 text-[9px] font-mono text-emerald-600 border border-emerald-100 font-semibold uppercase tracking-wider">
                      Year {pub.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-mono">
                    {pub.overview}
                  </p>
                  <div className="pt-2 text-[9px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Peer Review Reference Standard verified</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Certifications & Honors-Awards */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Certifications Card Deck */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-2 font-mono">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                Professional Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-lg border border-slate-200 bg-white text-left hover:border-emerald-500/20 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs leading-snug uppercase font-mono">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] text-slate-450 font-mono mt-1">
                        Issuer: {cert.organization}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-emerald-600 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                      <span className="text-slate-400">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors/Awards Sub-Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 font-mono">
                <Trophy className="w-4.5 h-4.5 text-emerald-500" />
                Honors & Design Awards
              </h3>

              <div className="space-y-3.5">
                {AWARDS.map((award) => (
                  <div
                    key={award.id}
                    className="p-4 rounded-lg border border-slate-200 bg-white text-left flex items-start gap-4 hover:border-emerald-500/20 transition-all"
                  >
                    <div className="w-8 h-8 bg-slate-50 flex-shrink-0 flex items-center justify-center border border-slate-200 text-emerald-600">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-xs leading-normal uppercase font-mono">
                        {award.title}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-450 uppercase tracking-widest mt-1">
                        Scope: {award.categoryName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
