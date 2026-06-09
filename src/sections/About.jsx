import { aboutData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-20 relative z-20">
      <div
        ref={sectionRef}
        className={`max-w-[1200px] mx-auto px-6 md:px-12 transition-all duration-800 ${isVisible ? "animate-fadeInUp opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
          }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column - Heading */}
          <div className="md:col-span-4 md:pt-[15px]">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
              About Me
            </h2>
          </div>

          {/* Right Column - Card Content */}
          <div className="md:col-span-8">
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
              {/* Radial glows inside the card for premium depth */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

              {/* Description Paragraphs */}
              <div className="space-y-5 text-sm md:text-base text-on-surface-variant leading-relaxed relative z-10">
                {aboutData.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { About };
