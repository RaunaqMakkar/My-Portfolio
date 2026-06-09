import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Thanks for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative z-20">
      {/* Background glow orb */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary/5 bottom-0 left-[-100px] pointer-events-none" />

      <div
        ref={sectionRef}
        className={`max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 transition-all duration-800 ${isVisible ? "animate-fadeInUp opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Column */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md">
              I'm currently looking for new opportunities and interesting AI projects to contribute to. Let's talk about tech and building extraordinary architectures together.
            </p>

            <div className="space-y-3.5 max-w-sm">
              {/* Mail / Gmail */}
              <a
                className="flex items-center gap-3.5 group cursor-pointer"
                href={`mailto:${personalInfo.email}`}
              >
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-[#ea4335]/15 group-hover:border-[#ea4335]/40 transition-all duration-300">
                  <svg className="w-4.5 h-4.5 text-[#ea4335]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.733 1.635-1.636 1.635h-3.819V11.73L12 16.64l-6.545-4.91v9.27H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.356 1.478-2.194 2.633-1.493L12 9.93l9.367-6.249c1.155-.7 2.633.137 2.633 1.493z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base font-semibold group-hover:text-[#ea4335] transition-colors text-on-surface">
                  {personalInfo.email}
                </span>
              </a>

              {/* LinkedIn */}
              <a
                className="flex items-center gap-3.5 group cursor-pointer"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-[#0a66c2]/15 group-hover:border-[#0a66c2]/40 transition-all duration-300">
                  <svg className="w-4.5 h-4.5 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base font-semibold group-hover:text-[#0a66c2] transition-colors text-on-surface">
                  LinkedIn Profile
                </span>
              </a>

              {/* GitHub */}
              <a
                className="flex items-center gap-3.5 group cursor-pointer"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                  <svg className="w-4.5 h-4.5 text-[#2A1B10]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <span className="text-sm md:text-base font-semibold group-hover:text-[#2A1B10] transition-colors text-on-surface">
                  GitHub Profile
                </span>
              </a>

              {/* Fiverr */}
              <a
                className="flex items-center gap-3.5 group cursor-pointer"
                href={personalInfo.fiverr || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-[#1dbf73]/15 group-hover:border-[#1dbf73]/40 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#1dbf73]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.123 6.942H16.48v-2.07c0-1.118.895-2.028 1.996-2.028h.648V0h-1.69c-2.483 0-4.5 2.046-4.5 4.566v2.376h-2.146V9.6h2.146v14.4h3.542V9.6h2.646l.487-2.658zM4.773 8.358c-1.802 0-3.266 1.482-3.266 3.313 0 1.83 1.464 3.312 3.266 3.312s3.265-1.482 3.265-3.312c0-1.83-1.463-3.313-3.265-3.313z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base font-semibold group-hover:text-[#1dbf73] transition-colors text-on-surface">
                  Fiverr Profile
                </span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 rounded-[1.5rem] space-y-5 relative overflow-hidden w-full"
            >
              {/* Internal ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full pointer-events-none" />

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-4">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface border border-outline/50 rounded-full px-5 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-[inset_0_2px_4px_rgba(42,27,16,0.05)] text-xs md:text-sm placeholder-on-surface-variant/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-surface border border-outline/50 rounded-full px-5 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-[inset_0_2px_4px_rgba(42,27,16,0.05)] text-xs md:text-sm placeholder-on-surface-variant/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-4">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we work together?"
                  className="w-full bg-surface border border-outline/50 rounded-[1.25rem] px-5 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-[inset_0_2px_4px_rgba(42,27,16,0.05)] resize-none text-xs md:text-sm placeholder-on-surface-variant/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-full font-bold text-sm md:text-base hover:bg-accent transition-all shadow-[0_0_20px_rgba(166,124,26,0.2)] hover:shadow-[0_0_30px_rgba(166,124,26,0.3)] flex justify-center items-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Contact };
