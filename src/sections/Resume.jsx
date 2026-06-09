import { useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Resume() {
  const [ctaRevealRef, ctaVisible] = useScrollReveal({ threshold: 0.1 });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col relative overflow-hidden pt-6 pb-8">
      {/* Background Ambient Grid */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
      <div className="hero-grain absolute inset-0 z-[1] pointer-events-none" />

      {/* Top Custom Navigation Header */}
      <header className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center mb-3 animate-fadeInDown">
        <a
          href="/"
          className="glass-card px-5 py-2.5 rounded-full font-bold text-on-surface text-xs md:text-sm hover:text-primary transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(42,27,16,0.04)]"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span>Back to Portfolio</span>
        </a>

        <a
          href="/Raunaq_Makkar_Resume.pdf"
          download="Raunaq_Makkar_Resume.pdf"
          className="bg-[#2A1B10] text-[#F8F4EE] px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-[0_4px_12px_rgba(42,27,16,0.15)] hover:shadow-[0_6px_16px_rgba(42,27,16,0.25)]"
        >
          <span>Download Resume</span>
          <span className="material-symbols-outlined text-lg">download</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full text-center mb-2 space-y-2 animate-fadeInUp">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
          <span className="gradient-text">Resume</span>
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          A detailed overview of my education, experience, projects, technical skills, and achievements.
        </p>
      </section>

      {/* Quick Contact Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-2 mb-4 animate-fadeInUp delay-75">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-4 py-2 rounded-full font-bold text-xs md:text-sm text-on-surface hover:text-primary transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(42,27,16,0.02)]"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>LinkedIn</span>
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-4 py-2 rounded-full font-bold text-xs md:text-sm text-on-surface hover:text-primary transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(42,27,16,0.02)]"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="glass-card px-4 py-2 rounded-full font-bold text-xs md:text-sm text-on-surface hover:text-primary transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(42,27,16,0.02)]"
        >
          <span className="material-symbols-outlined text-sm font-bold leading-none">mail</span>
          <span>Email Me</span>
        </a>
      </div>

      {/* Resume Information Strip */}
      <div className="relative z-10 flex items-center justify-center gap-4 text-[10px] font-semibold tracking-widest text-on-surface-variant/50 uppercase select-none w-full max-w-xs mx-auto mb-4 animate-fadeInUp delay-100">
        <span className="h-[1px] flex-grow bg-outline/25" />
        <span>Last Updated: June 2026</span>
        <span className="h-[1px] flex-grow bg-outline/25" />
      </div>

      {/* PDF Viewer Container */}
      <section className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 mb-4 flex-grow flex flex-col items-center animate-fadeInUp delay-150">
        <div className="w-full glass-card rounded-[2rem] p-4 md:p-6 border border-outline/30 shadow-[0_12px_40px_rgba(42,27,16,0.06)] overflow-hidden flex flex-col h-[70vh] min-h-[600px] md:h-[80vh] md:min-h-[750px]">
          <iframe
            src="/Raunaq_Makkar_Resume.pdf#toolbar=0&navpanes=0"
            className="w-full h-full rounded-2xl border border-outline/20 bg-surface/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)]"
            title="Raunaq Makkar Resume"
            loading="lazy"
          />
        </div>

        {/* Mobile helper view text */}
        <div className="block md:hidden text-center mt-4 text-xs text-on-surface-variant/70 px-4">
          <span>Using a mobile device? If the PDF doesn't display or scroll correctly, you can </span>
          <a
            href="/Raunaq_Makkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold underline hover:text-primary-dark transition-colors"
          >
            view it in full screen
          </a>
          <span> or download it directly.</span>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        ref={ctaRevealRef}
        className={`relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full text-center mt-12 mb-6 space-y-4 transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
          }`}
      >
        <div className="h-[1px] w-12 bg-primary/20 mx-auto mb-6" />
        <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Interested in Working Together?
        </h2>
        <p className="text-xs md:text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Feel free to reach out for opportunities, collaborations, freelance projects, or discussions around AI, Machine Learning, and Web Development.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a
            href="/#contact"
            className="bg-[#2A1B10] text-[#F8F4EE] px-6 py-3 rounded-full font-bold text-xs md:text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-[0_4px_12px_rgba(42,27,16,0.15)] hover:shadow-[0_6px_16px_rgba(42,27,16,0.25)]"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
          <a
            href="/#hero"
            className="glass-card px-6 py-3 rounded-full font-bold text-xs md:text-sm text-on-surface hover:text-primary transition-all flex items-center gap-2"
          >
            <span>Back to Portfolio</span>
          </a>
        </div>
      </section>
    </div>
  );
}
