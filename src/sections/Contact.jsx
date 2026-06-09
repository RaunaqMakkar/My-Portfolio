import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-16 md:py-20 relative z-20">
      {/* Background glow orb */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary/5 bottom-0 left-[-100px] pointer-events-none" />

      <div
        ref={sectionRef}
        className={`max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 transition-all duration-800 ${
          isVisible ? "animate-fadeInUp opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Heading, Description, Availability & View Resume */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary block">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-on-surface leading-[1.15]">
                Let's Build Something <span className="gradient-text">Meaningful</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-md">
              Whether you're looking for an AI Developer, Web Developer, collaborator, or someone passionate about solving real-world problems through technology, I'd love to connect and discuss opportunities, projects, and innovative ideas.
            </p>

            {/* Availability Indicator */}
            <div className="flex items-center gap-3 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
                Open to Full-Time Roles & Collaborations
              </span>
            </div>

            {/* View Resume Action Button (Primary CTA) */}
            <div className="pt-2">
              <a
                href="/resume"
                className="inline-flex bg-[#2A1B10] text-[#F8F4EE] px-6 py-3 rounded-full font-bold text-xs md:text-sm transition-all hover:scale-105 items-center gap-2 shadow-[0_4px_12px_rgba(42,27,16,0.15)] hover:shadow-[0_6px_16px_rgba(42,27,16,0.25)] cursor-pointer"
              >
                <span>View Resume</span>
                <span className="material-symbols-outlined text-base">description</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clickable Contact Cards */}
          <div className="space-y-4">
            {/* Clickable Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group glass-card p-4 rounded-2xl flex items-center gap-4 border border-outline/30 shadow-[0_4px_12px_rgba(42,27,16,0.02)] hover:border-primary/40 hover:-translate-y-[3px] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#ea4335]/10 flex items-center justify-center border border-[#ea4335]/20 group-hover:bg-[#ea4335]/15 transition-all">
                <svg className="w-4.5 h-4.5 text-[#ea4335]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.733 1.635-1.636 1.635h-3.819V11.73L12 16.64l-6.545-4.91v9.27H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.356 1.478-2.194 2.633-1.493L12 9.93l9.367-6.249c1.155-.7 2.633.137 2.633 1.493z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest">
                  Email
                </h4>
                <span className="text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* Clickable LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-4 rounded-2xl flex items-center gap-4 border border-outline/30 shadow-[0_4px_12px_rgba(42,27,16,0.02)] hover:border-primary/40 hover:-translate-y-[3px] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#0a66c2]/10 flex items-center justify-center border border-[#0a66c2]/20 group-hover:bg-[#0a66c2]/15 transition-all">
                <svg className="w-4.5 h-4.5 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest">
                  LinkedIn
                </h4>
                <span className="text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                  linkedin.com/in/raunaq-makkar
                </span>
              </div>
            </a>

            {/* Clickable GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-4 rounded-2xl flex items-center gap-4 border border-outline/30 shadow-[0_4px_12px_rgba(42,27,16,0.02)] hover:border-primary/40 hover:-translate-y-[3px] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-on-surface/5 flex items-center justify-center border border-on-surface/10 group-hover:bg-on-surface/10 transition-all">
                <svg className="w-4.5 h-4.5 text-[#2A1B10]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest">
                  GitHub
                </h4>
                <span className="text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                  github.com/RaunaqMakkar
                </span>
              </div>
            </a>

            {/* Informational Location Card (Non-clickable) */}
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border border-outline/30 shadow-[0_4px_12px_rgba(42,27,16,0.02)] select-none">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest">
                  Location
                </h4>
                <span className="text-sm md:text-base font-bold text-on-surface">
                  Ghaziabad, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Contact };
