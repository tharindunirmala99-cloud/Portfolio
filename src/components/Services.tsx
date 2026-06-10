import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Cloud, Cpu, Globe, Activity, CircleCheck } from "lucide-react";

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Cloud":
        return <Cloud className="w-5 h-5 text-emerald-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-500" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-emerald-500" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-emerald-500" />;
      default:
        return <Cloud className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              05 / Services Provisioned
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
            Professional Cloud & Software Services
          </h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed font-mono">
            High-integrity engineering services targeting reliable software, fast deployments, and continuous observability.
          </p>
          <div className="h-[1px] w-full bg-slate-200 mt-2" />
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="p-6 sm:p-8 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/20 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-200">
                  {getIcon(srv.iconName)}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold uppercase font-mono text-slate-905 leading-none">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-mono">
                  {srv.description}
                </p>

                {/* Bullets */}
                <div className="pt-4 border-t border-slate-200 space-y-2.5">
                  <span className="text-[9px] font-bold font-mono tracking-widest uppercase text-slate-400">
                    Capabilities:
                  </span>
                  <ul className="space-y-2">
                    {srv.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-2 items-start text-[11px] text-slate-600 font-sans leading-normal">
                        <CircleCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
