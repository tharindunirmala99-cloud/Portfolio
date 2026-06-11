import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Cloud, Wrench, Layout, Database } from "lucide-react";
import { TechIcon } from "./TechIcons";
import StackIcon from "tech-stack-icons"
import { getRandomBlobStyle } from "../utils/blobStyles";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ... TOP SECTION UNCHANGED ... */}

        {/* Active Category Skills Grid (UNCHANGED) */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
            <div
              key={skill.name}
              className="aspect-square rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:shadow-md group"
            >
              <div className="flex h-full flex-col justify-between">

                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-sm ${iconStyles[sIdx % iconStyles.length]}`}>
                    <TechIcon name={skill.name} className="w-5 h-5" />
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700 font-mono">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600 font-mono">
                    Stack Skill
                  </p>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 font-mono leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Practical capability with production-ready tooling and deployment patterns.
                  </p>
                </div>

                <div className="w-full rounded-full bg-slate-100 h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400"
                  />
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* ✅ UPDATED CLOUD & PIPELINE ECOSYSTEM */}
        <div className="mt-16 p-4 sm:p-5 rounded-lg border border-slate-200 bg-white text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <h3 className="text-xs uppercase font-extrabold tracking-widest font-mono text-slate-900">
              Cloud & Pipeline Ecosystem
            </h3>
          </div>

          <p className="text-xs text-slate-500 mb-4 font-mono leading-relaxed">
            Deployment, orchestration, and infrastructure tooling stack.
          </p>

          {/* 🔻 Compact Tech Tiles (50% smaller) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              "Docker",
              "Kubernetes",
              "Jenkins CI/CD",
              "GitHub Actions",
              "Azure Virtual Machines",
              "AWS Lambda & Kinesis",
              "Terraform IaC",
              "Bash scripting",
              "Amazon CloudWatch",
              "Django Restful Modules",
              "Angular Modules",
              "Nginx",
              "OAuth2",
              "Linux"
            ].map((stack, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-2 py-1 rounded-md border border-slate-200 bg-slate-50 hover:border-emerald-400/30 transition-all"
              >
                {/* ✅ STACK ICON */}
                <StackIcon name={stack} className="w-4 h-4 text-slate-500" />

                {/* NAME ONLY */}
                <span className="text-[10px] font-mono font-semibold uppercase text-slate-600 truncate">
                  {stack}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}