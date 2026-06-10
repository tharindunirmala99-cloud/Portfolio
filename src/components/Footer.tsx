import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div 
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black text-sm cursor-pointer font-mono"
              >
                G
              </div>
              <span className="font-extrabold text-slate-900 text-base tracking-wider uppercase font-mono">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono mt-2 uppercase tracking-widest leading-none">
              Systems Architect &amp; Software Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all border border-slate-200"
              title="Mail to Tharindu"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all border border-slate-250 border-slate-200"
              title="Call Tharindu"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all border border-slate-200"
              title="Linked-In Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all border border-slate-200"
              title="GitHub Respository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Disclaimer / Notice */}
        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-slate-800 transition-colors cursor-pointer flex items-center gap-1 uppercase"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
