import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-100 bg-white/95 backdrop-blur shadow-xs"
          : "bg-white/90 border-b border-slate-100/50 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center font-bold text-white text-xs shadow-sm select-none">
              TG
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm tracking-tighter uppercase font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                Tharindu.dev
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6" id="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer relative py-1 focus:outline-none ${
                  activeSection === item.id
                    ? "text-emerald-600 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Print Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 transition hover:bg-slate-50 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button
              id="nav-cta-contact"
              onClick={() => window.print()}
              className="px-4 py-1.5 border border-slate-200 text-slate-700 text-[10px] uppercase font-bold rounded-lg font-mono hover:bg-slate-50 transition-all cursor-pointer focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Print CV
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-50 focus:outline-none dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-50 focus:outline-none dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Overlay) */}
      <div
        id="mobile-nav-panel"
        className={`fixed inset-x-0 top-18 bg-white border-b border-slate-200 p-6 shadow-md transition-all duration-350 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-3 font-mono">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.id)}
              className={`text-left font-bold text-[11px] uppercase tracking-wider py-1.5 border-b border-slate-100 cursor-pointer ${
                activeSection === item.id
                  ? "text-emerald-600"
                  : "text-slate-600"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-2 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase rounded-lg text-center"
          >
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  );
}
