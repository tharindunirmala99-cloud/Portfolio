import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, ChevronRight, Minimize, Eye, Zap } from "lucide-react";
import { PERSONAL_INFO, PHILOSOPHY } from "../data";

export default function About() {
  const philosophyIcons = [
    <Shield className="w-4 h-4 text-emerald-500" />,
    <Zap className="w-4 h-4 text-emerald-500" />,
    <Minimize className="w-4 h-4 text-emerald-500" />,
    <Eye className="w-4 h-4 text-emerald-500" />
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              01 / Professional Background
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Engineering with Intent & Observability
          </h2>
          <div className="h-[1px] w-full bg-slate-200" />
        </div>

        {/* Biography Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              I code resilient cloud setups and high-availability systems from Sri Lanka, bridging active Software Engineering with systematic DevOps automation.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.longBio}
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              My core SRE training was fortified at <strong className="text-slate-900 font-semibold">IFS</strong> inside their centralized Build, Deployment, and SRE team, where I actively supported Azure resources, verified daily build stability targets, and authored automation micro-utilities that alleviated manual operational delay traps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-mono">
              <div className="p-4 rounded-lg bg-white border border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-650 font-bold font-sans text-xs">
                  SUSL
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-[9px] font-bold">Academic</p>
                  <p className="text-slate-900 font-sans font-semibold mt-0.5">SUSL Honours Degree</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-emerald-55/10 border border-emerald-100 flex items-center justify-center text-emerald-650 font-bold font-sans text-xs">
                  CO
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wide text-[9px] font-bold">Specialization</p>
                  <p className="text-slate-900 font-sans font-semibold mt-0.5">SRE & Web Architecture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Strengths Highlights Card */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-lg border border-slate-200 bg-slate-50">
            <h3 className="text-xs uppercase font-extrabold tracking-widest font-mono text-slate-900 flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Core Competencies
            </h3>

            <div className="space-y-4">
              {[
                { title: "Infrastructure as Code", desc: "Automating AWS & Azure networks with Terraform & Yaml schemas." },
                { title: "SRE CLI Automation", desc: "Crafting customized Bash/Node.js scripting CLI tools to skip manual checks." },
                { title: "Full-Stack Integrations", desc: "Connecting modern Angular or React clients with Django REST endpoints." },
                { title: "Modern Containerization", desc: "Deploying standardized Docker containers to isolated cloud spaces." },
                { title: "Continuous Observability", desc: "Configuring CloudWatch tracking alerts to catch errors instantly." }
              ].map((strength, sIndex) => (
                <div key={sIndex} className="flex gap-2.5 text-left">
                  <ChevronRight className="w-4 h-4 text-emerald-555 flex-shrink-0 mt-0.5" />
                   <div>
                    <h4 className="text-xs font-bold uppercase font-mono text-slate-800">{strength.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{strength.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-left space-y-3 mb-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <h3 className="text-xs uppercase font-extrabold tracking-widest font-mono text-slate-800">
                Core Engineering Philosophy
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-xl font-mono leading-relaxed">
              Guiding parameters I program and audit when structuring scalable pipelines.
            </p>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY.map((phil, pIndex) => (
              <div 
                key={pIndex}
                className="p-5 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/20 transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {philosophyIcons[pIndex % philosophyIcons.length]}
                  </div>
                  <h4 className="font-bold text-xs uppercase tracking-wide font-mono text-slate-900">
                    {phil.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {phil.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
