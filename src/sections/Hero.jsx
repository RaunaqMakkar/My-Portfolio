import { useState, useEffect, useRef, useCallback } from "react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = [
  "Web Developer",
  "AI Engineer",
  "ML Enthusiast",
  "WordPress Developer",
  "Freelancer",
];

export default function Hero() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [roleIndex, setRoleIndex] = useState(0);
  const portraitRef = useRef(null);
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Subtle parallax on mouse move
  const handleMouseMove = useCallback((e) => {
    if (!parallaxRef.current) return;
    const rect = parallaxRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setParallax({ x: dx * 12, y: dy * 8 });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Vertical rolling title index loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);



  return (
    <section
      id="hero"
      ref={(el) => { heroRef.current = el; parallaxRef.current = el; }}
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Ambient Grid */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

      {/* Subtle Grain Texture Overlay */}
      <div className="hero-grain absolute inset-0 z-[1] pointer-events-none" />

      {/* Editorial Accent Elements — subtle parallax shapes */}
      <div
        className="absolute top-[12%] left-[8%] w-40 h-40 rounded-full opacity-[0.07] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, var(--color-primary), transparent 70%)",
          transform: `translate(${parallax.x * 1.5}px, ${parallax.y * 1.5}px)`,
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      />
      <div
        className="absolute bottom-[18%] right-[12%] w-56 h-56 rounded-full opacity-[0.05] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
          transform: `translate(${parallax.x * -1}px, ${parallax.y * -1}px)`,
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      />
      <div
        className="absolute top-[55%] right-[35%] w-24 h-[1px] opacity-[0.12] pointer-events-none z-[1]"
        style={{
          background: "var(--color-primary)",
          transform: `translateX(${parallax.x * 2}px) rotate(-15deg)`,
          transition: "transform 0.8s cubic-bezier(0.23,1,0.32,1)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left column */}
        <div
          className={`space-y-5 transition-all duration-1000 ${heroVisible
            ? "animate-fadeInLeft opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-40px]"
            }`}
        >
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Hello, I'm
            </span>

            <h1 className="font-display text-5xl md:text-[5.25rem] font-extrabold tracking-tighter leading-[0.95] text-on-surface">
              {personalInfo.name}
              <br />
              <span className="gradient-text">{personalInfo.lastName}</span>
            </h1>

            {/* Rotating Role title container */}
            <div className="h-[36px] overflow-hidden relative">
              <div
                className="transition-transform duration-700 ease-in-out flex flex-col"
                style={{
                  transform: `translateY(-${roleIndex * 36}px)`,
                }}
              >
                {roles.map((role, idx) => (
                  <p
                    key={idx}
                    className="font-display text-xl md:text-2xl font-semibold text-accent h-[36px] flex items-center"
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base text-on-surface-variant max-w-lg leading-relaxed">
              {personalInfo.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="group bg-[#2A1B10] text-[#F8F4EE] px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="/resume"
                className="glass-card px-6 py-3 rounded-full font-bold text-on-surface text-sm hover:text-primary transition-all flex items-center gap-2"
              >
                View Resume
                <span className="material-symbols-outlined text-lg">description</span>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0a66c2] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(10,102,194,0.4)]"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#2A1B10] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(42,27,16,0.2)]"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href={personalInfo.fiverr || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#1dbf73] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(29,191,115,0.4)]"
                title="Fiverr"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.123 6.942H16.48v-2.07c0-1.118.895-2.028 1.996-2.028h.648V0h-1.69c-2.483 0-4.5 2.046-4.5 4.566v2.376h-2.146V9.6h2.146v14.4h3.542V9.6h2.646l.487-2.658zM4.773 8.358c-1.802 0-3.266 1.482-3.266 3.313 0 1.83 1.464 3.312 3.266 3.312s3.265-1.482 3.265-3.312c0-1.83-1.463-3.313-3.265-3.313z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right column (Portrait Card) */}
        <div
          className={`relative hidden lg:block z-10 transition-all duration-1000 delay-200 ${heroVisible
            ? "animate-fadeInRight opacity-100 translate-x-0"
            : "opacity-0 translate-x-[40px]"
            }`}
        >
          <div
            ref={portraitRef}
            className={`float-anim hero-img-container rounded-3xl ${personalInfo.avatar ? "" : "animated-gradient-border"
              }`}
          >
            <div className={`w-full h-[460px] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden ${personalInfo.avatar ? "bg-transparent" : "bg-surface-variant/30 border border-outline/30"
              }`}>
              {personalInfo.avatar ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="h-full w-auto object-contain object-bottom scale-[1.5] origin-bottom"
                />
              ) : (
                <>
                  {/* Interior glow for cinematic effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        account_circle
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-lg font-bold text-on-surface">Your Portrait Here</p>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                        Cinematic Backdrop
                      </p>
                    </div>
                  </div>

                  {/* Decorative scanline effect */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px)",
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Hero };
