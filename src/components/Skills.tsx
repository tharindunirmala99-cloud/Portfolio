import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Cloud, Wrench, Layout, Database, CheckCircle, Terminal } from "lucide-react";
import { TechIcon } from "./TechIcons";
import { getRandomBlobStyle } from "../utils/blobStyles";
import StackIcon from "tech-stack-icons";


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const blobStyles = useMemo(() => [getRandomBlobStyle(), getRandomBlobStyle()], []);

  const categoryIcons = [
    <Cloud className="w-5 h-5 text-blue-500" />,
    <Layout className="w-5 h-5 text-amber-500" />,
    <Database className="w-5 h-5 text-emerald-500" />,
    <Wrench className="w-5 h-5 text-indigo-500" />
  ];

  const iconStyles = [
    "bg-gradient-to-br from-emerald-100 via-white to-emerald-50 text-emerald-600 border-emerald-100",
    "bg-gradient-to-br from-sky-100 via-white to-sky-50 text-sky-600 border-sky-100",
    "bg-gradient-to-br from-violet-100 via-white to-violet-50 text-violet-600 border-violet-100",
    "bg-gradient-to-br from-amber-100 via-white to-amber-50 text-amber-600 border-amber-100",
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-24 bg-slate-50 border-t border-slate-200">
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
          className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
            <div
              key={skill.name}
              className="pt-5 mt-5 aspect-square rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex h-50% flex-col gap-y-1.5 justify-center">
                <div className="flex items-center justify-center mb-3 mt-6">
                  <StackIcon
                    name={skill.name
                      .toLowerCase()
                      .replace(/\s|\.|\/|&/g, "")
                      .replace("ci/cd", "githubactions")
                      .replace("awslambda&kinesis", "aws")
                      .replace("azurevirtualmachines", "azure")
                    }
                    className="w-10 h-10"
                  />
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono text-center">
                    {skill.name}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
