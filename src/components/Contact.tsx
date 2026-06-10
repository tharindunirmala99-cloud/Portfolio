import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, MessageSquare, MapPin, Copy, Star } from "lucide-react";
import { PERSONAL_INFO, TESTIMONIALS } from "../data";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please check all mandatory inputs.");
      return;
    }
    // Simulate high-fidelity submission pipeline (Offline/Local Storage logging)
    const contacts = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
    contacts.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem("portfolio_messages", JSON.stringify(contacts));

    setFormSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Peer Feedback Testimonials segment */}
        <div className="mb-24 pb-16 border-b border-slate-250">
          <div className="text-center space-y-3 mb-10">
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
                05B / Professional References
              </span>
            </div>
            <h3 className="text-2xl sm:text-2xl font-extrabold text-slate-900 uppercase">
              Endorsements & SRE Feedback
            </h3>
            <p className="text-xs text-slate-500 max-w-lg mx-auto font-mono leading-relaxed">
              Direct recommendations from SRE peers, senior release managers, and platform clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-4" id="testimonials-block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-slate-200 bg-white text-left flex flex-col justify-between hover:border-emerald-500/20 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1 text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed font-mono">
                      "{t.comment}"
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100">
                    <p className="font-extrabold text-slate-900 font-mono text-xs uppercase">
                      {t.name}
                    </p>
                    <p className="font-mono text-[9px] text-slate-400 uppercase mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Contact Header */}
        <div className="text-left space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono tracking-widest uppercase">
              06 / Connect SRE Pipeline
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
            Get In Touch
          </h2>
          <p className="text-xs text-slate-500 font-mono">
            Open for Site Reliability Engineering, Senior Full-Stack Architecture, and Team Collaboration parameters.
          </p>
          <div className="h-[1px] w-full bg-slate-200 mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-panel">
          
          {/* Left Column: Direct Links & Info cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Tag */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-emerald-600 border border-slate-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-bold font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                  Deployment Base
                </h4>
                <p className="text-xs font-semibold text-slate-800 mt-1 uppercase font-mono">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            {/* Email contact */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white flex items-center gap-4 justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-emerald-600 border border-slate-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                    Operational Mail
                  </h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs font-mono font-bold text-slate-800 mt-1 hover:text-emerald-600 block transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                className="p-1.5 rounded border border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-slate-800 cursor-pointer focus:outline-none"
              >
                {copiedText === "email" ? <span className="text-[9px] font-mono text-emerald-500 font-bold">COPIED</span> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone contact */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white flex items-center gap-4 justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-emerald-600 border border-slate-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                    Operational Hotline
                  </h4>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs font-mono font-bold text-slate-800 mt-1 hover:text-emerald-600 block transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                className="p-1.5 rounded border border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-slate-800 cursor-pointer focus:outline-none"
              >
                {copiedText === "phone" ? <span className="text-[9px] font-mono text-emerald-500 font-bold">COPIED</span> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Social Network Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/20 transition-all flex flex-col items-start gap-3 group text-left"
              >
                <div className="w-9 h-9 bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold font-mono text-[10px] text-slate-700 uppercase">LinkedIn Profile</p>
                  <p className="text-[9px] font-mono text-slate-400">tharindu-godage</p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg border border-slate-200 bg-white hover:border-emerald-500/20 transition-all flex flex-col items-start gap-3 group text-left"
              >
                <div className="w-9 h-9 bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold font-mono text-[10px] text-slate-700 uppercase">GitHub Source</p>
                  <p className="text-[9px] font-mono text-slate-400">tharindug99</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Form submissions */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-6 text-left font-mono">
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              Operational Message Terminal
            </h3>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto border border-emerald-100 rounded-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase font-mono">
                    Message Queued Successfully!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-mono">
                    Thank you. Tharindu will trace and reply to your operational dispatch as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left font-mono text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-205 bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      Operational Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="SRE Role / Collaboration Proposal"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-205 bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      Operational Message *
                    </label>
                    <textarea
                      name="message"
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Discuss parameters, goals, and setup timelines explicitly..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-205 bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase font-mono rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Dispatch Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
