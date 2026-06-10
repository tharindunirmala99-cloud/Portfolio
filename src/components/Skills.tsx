import React, { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Cloud, Wrench, Layout, Database, CheckCircle, Terminal } from "lucide-react";
import { TechIcon } from "./TechIcons";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoryIcons = [
    <Cloud className="w-5 h-5 text-blue-500" />,
    <Layout className="w-5 h-5 text-amber-500" />,
    <Database className="w-5 h-5 text-emerald-500" />,
    <Wrench className="w-5 h-5 text-indigo-500" />
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              02 / Tools and Engineering Stack
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Comprehensive Skills & Technologies
          </h2>
          <p className="text-xs text-slate-500 font-mono">
            Practical competencies backed by hands-on development and production deployments.
          </p>
          <div className="h-[1px] w-full bg-slate-200" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-200" id="skills-tabs">
          {SKILL_CATEGORIES.map((cat, index) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer focus:outline-none ${
                activeCategory === index
                  ? "bg-slate-900 text-white border border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="opacity-70">
                {categoryIcons[index % categoryIcons.length]}
              </div>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg border border-slate-200 bg-white flex flex-col justify-between hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <TechIcon name={skill.name} className="w-4 h-4 text-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-bold font-mono text-xs uppercase tracking-wide text-slate-800">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {skill.level}% Proficiency
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-slate-100 h-1 rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                  className="bg-emerald-500 h-full rounded"
                />
              </div>

              {/* Detail snippet */}
              <div className="mt-3 flex items-center gap-1.5 text-[9px] text-slate-550 font-mono uppercase tracking-wider font-bold">
                <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                <span>Verified Stack Capability</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cloud-Native Tools Badges */}
        <div className="mt-16 p-5 sm:p-6 rounded-lg border border-slate-200 bg-white text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <h3 className="text-xs uppercase font-extrabold tracking-widest font-mono text-slate-900">
              Cloud & Pipeline Ecosystem
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-6 font-mono leading-relaxed">
            Standard parameters, protocols, and deployment partners synchronized inside active system loops:
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Docker", "Kubernetes", "Jenkins CI/CD", 
              "GitHub Actions", "Azure Virtual Machines", "AWS Lambda & Kinesis", 
              "Terraform IaC", "Bash scripting", "Amazon CloudWatch", 
              "Django Restful Modules", "Angular Modules", "Nginx web servers", 
              "OAuth2 Protocols", "Linux Administration"
            ].map((ecosystem, eIdx) => (
              <span
                key={eIdx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold bg-slate-50 border border-slate-200 text-slate-650 hover:border-emerald-500/20 transition-all font-mono uppercase rounded group"
              >
                <TechIcon name={ecosystem} className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                <span>{ecosystem}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
