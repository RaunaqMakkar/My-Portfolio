import { skillsCategories } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

export default function Skills() {
  const [headingRef, headingVisible] = useScrollReveal();
  const { containerRef, getItemProps } = useStaggerReveal(
    skillsCategories.length,
    { staggerDelay: 120, threshold: 0.05 }
  );

  return (
    <section id="skills" className="py-16 md:py-20 bg-surface/30 relative z-20">
      {/* Subtle background glow */}
      <div className="glow-orb w-[350px] h-[350px] bg-accent/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div
          ref={headingRef}
          className={`text-left mb-10 md:mb-12 transition-all duration-700 ${headingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[30px]"
            }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3 text-on-surface">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-10 h-1 bg-primary mb-4" />
          <p className="text-on-surface-variant max-w-2xl text-sm md:text-base">
            My technical toolkit across AI, Web Development, Databases, and Modern Software Engineering.
          </p>
        </div>

        {/* Categories Grid — staggered */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, index) => {
            const isAI = cat.title === "AI & Machine Learning";
            const itemProps = getItemProps(index);
            return (
              <div
                key={cat.title}
                className={`glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col hover:shadow-[0_20px_40px_rgba(42,27,16,0.08),_0_0_25px_rgba(166,124,26,0.08)] ${isAI
                    ? "border-primary/40 bg-surface/80 shadow-[0_0_20px_rgba(166,124,26,0.06)]"
                    : "border-outline/30"
                  } ${itemProps.className}`}
                style={itemProps.style}
                data-stagger-index={itemProps["data-stagger-index"]}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5 text-primary font-bold uppercase tracking-widest text-xs md:text-sm">
                    <span className={`material-symbols-outlined text-base skill-icon ${isAI ? "animate-pulse text-accent drop-shadow-[0_0_8px_rgba(166,124,26,0.6)]" : ""}`}>
                      {cat.icon}
                    </span>
                    <h3 className={isAI ? "text-accent" : "text-primary"}>{cat.title}</h3>
                  </div>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface/60 rounded-lg text-xs md:text-sm text-on-surface font-semibold border border-outline/30 hover:border-primary/45 hover:bg-primary/5 hover:text-on-surface transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { Skills };
