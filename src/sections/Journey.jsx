import { journeyData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function TimelineItem({ item, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative pl-6 md:pl-10 transition-all duration-700 ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-[30px]"
        }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Circle Dot on the line */}
      <div
        className={`absolute top-[6px] w-3.5 h-3.5 rounded-full border-2 bg-surface z-10 transition-all duration-300 ${item.highlight
          ? "border-primary bg-primary"
          : "border-primary/50"
          }`}
        style={{ left: "calc(var(--tl-axis) - var(--tl-pad) - 0.4375rem)" }}
      />

      {/* Year Badge above Card */}
      <div className="mb-2">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
          {item.year}
        </span>
      </div>

      {/* Card */}
      <TimelineCard item={item} />
    </div>
  );
}

function TimelineCard({ item }) {
  const hasMilestones = item.milestones && item.milestones.length > 0;

  return (
    <div
      className={`group rounded-2xl p-6 md:p-8 transition-all duration-400 ease-out cursor-default ${item.highlight
        ? "glass-card border-primary/30 shadow-[0_0_20px_rgba(166,124,26,0.06)]"
        : "glass-card hover:border-outline/60 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(42,27,16,0.06)]"
        }`}
    >
      {hasMilestones ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left Side: University Info */}
          <div className="md:col-span-7 pr-0 md:pr-8 border-b border-outline/20 pb-6 md:pb-0 md:border-b-0 md:border-r border-outline/20 space-y-3">
            <h4 className="font-display text-lg md:text-xl font-bold text-on-surface">
              {item.title}
            </h4>
            {item.subtitle && (
              <p className="text-sm md:text-base text-primary font-bold">
                {item.subtitle}
              </p>
            )}
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Right Side: Milestones */}
          <div className="md:col-span-5 pt-2 md:pt-0 pl-0 md:pl-2 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
              NOTABLE MILESTONES
            </h5>
            <div className="space-y-4">
              {item.milestones.map((milestone, idx) => (
                <div key={idx} className="space-y-1">
                  <h6 className="text-xs md:text-sm font-bold text-on-surface">
                    {milestone.title}
                  </h6>
                  <p className="text-[10px] md:text-[11px] text-on-surface-variant/90 leading-relaxed">
                    {milestone.description}
                  </p>
                  {milestone.tags && milestone.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-medium text-on-surface-variant/70 border border-outline/30 px-2 py-0.5 rounded-full bg-surface/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Standard Card Layout
        <div className="space-y-3">
          <h4 className={`font-display text-base md:text-lg font-bold text-on-surface ${item.highlight ? "text-primary animate-pulse-glow" : ""}`}>
            {item.title}
          </h4>
          {item.subtitle && (
            <p className="text-sm md:text-base text-on-surface-variant font-semibold">
              {item.subtitle}
            </p>
          )}
          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
            {item.description}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-medium text-on-surface-variant/70 border border-outline/30 px-2 py-0.5 rounded-full bg-surface/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {item.button && (
            <a
              href={item.button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors duration-300 pt-1"
            >
              {item.button.label}
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Journey() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="journey" className="py-16 md:py-20 bg-surface/30 relative z-20">
      <div
        ref={sectionRef}
        className={`max-w-[1000px] mx-auto px-6 md:px-12 transition-all duration-800 ${isVisible
          ? "animate-fadeInUp opacity-100 translate-y-0"
          : "opacity-0 translate-y-[40px]"
          }`}
      >
        {/* Title */}
        <div className="text-left mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
            My <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative mt-12 pl-8 md:pl-12" style={{ "--tl-axis": "8px", "--tl-pad": "2rem" }}>
          {/* Vertical line on the left */}
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              left: "calc(var(--tl-axis) - 1px)",
              background:
                "linear-gradient(to bottom, rgba(166,124,26,0.03) 0%, rgba(166,124,26,0.3) 10%, rgba(166,124,26,0.3) 90%, rgba(166,124,26,0.03) 100%)",
            }}
          />

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Journey };
