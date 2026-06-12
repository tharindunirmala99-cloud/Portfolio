import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Calendar, ChevronRight, Award } from "lucide-react";
import { VOLUNTEER_EXPERIENCES } from "../data";
import { getRandomBlobStyle } from "../utils/blobStyles";

export default function VolunteerExperience() {
  const blobStyles = useMemo(
    () => [getRandomBlobStyle(), getRandomBlobStyle()],
    []
  );

  return (
    <section
      id="volunteering"
      className="relative overflow-hidden py-24 bg-white border-t border-slate-200"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="blob section-blob" style={blobStyles[0]} />
        <div className="blob section-blob" style={blobStyles[1]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              04 / Leadership Timeline
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Leadership & Volunteer Experience
          </h2>

          <p className="text-xs text-slate-500 font-mono leading-relaxed">
            Building leadership, communication, community engagement, and event
            management experience through professional and student organizations.
          </p>

          <div className="h-[1px] w-full bg-slate-200" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-10 space-y-12 max-w-4xl text-left">
          {VOLUNTEER_EXPERIENCES.map((vol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >


              {/* Card */}
              <div className="p-5 sm:p-6 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/20 transition-all">

                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-flex px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wide uppercase rounded border bg-emerald-50 text-emerald-700 border-emerald-100">
                      {vol.organization}
                    </span>

                    <h3 className="text-sm sm:text-base font-extrabold uppercase font-mono text-slate-900 mt-1.5">
                      {vol.role}
                    </h3>
                  </div>

                  <div className="text-[10px] font-mono text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {vol.duration}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className=" -right-12 sm:-right-16 top-1.5 w-20 h-20 rounded bg-white flex items-center justify-center z-10">
                    <img
                       src={vol.logo}
                      alt={vol.organization}
                      className="w-20 h-20 object-contain rounded-full"
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {vol.description}
                </p>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-650 font-mono flex items-center gap-1.5 mb-2">
                    <Award className="w-3.5 h-3.5" />
                    Focus Areas
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-slate-500">
                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-emerald-500" />
                      Leadership
                    </div>

                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-emerald-500" />
                      Community Building
                    </div>

                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-emerald-500" />
                      Event Management
                    </div>

                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-emerald-500" />
                      Team Collaboration
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}