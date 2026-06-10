import { useState, useEffect, useRef, useCallback } from "react";
import { projectsData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

/* Themed gradient + icon mappings for each project */
const projectThemes = {
  RoadNetAI: {
    icon: "road",
    accent: "rgba(16, 185, 129, 0.3)",
  },
  "Career Edge": {
    icon: "school",
    accent: "rgba(139, 92, 246, 0.3)",
  },
  "Youth Network Foundation Website": {
    icon: "public",
    accent: "rgba(166, 124, 26, 0.3)",
  },
  "AI Surveillance System": {
    icon: "security",
    accent: "rgba(239, 68, 68, 0.3)",
  },
  "Image Classification using CNN": {
    icon: "hub",
    accent: "rgba(245, 158, 11, 0.3)",
  },
  "Tetris Game": {
    icon: "stadia_controller",
    accent: "rgba(217, 70, 239, 0.3)",
  },
  "Amazon Clone": {
    icon: "shopping_cart",
    accent: "rgba(249, 115, 22, 0.3)",
  },
};

/* ===== Image Slider Component ===== */
function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [validImages, setValidImages] = useState(Array.isArray(images) ? images : []);
  const timerRef = useRef(null);

  // Filter out broken images on mount
  useEffect(() => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      setValidImages([]);
      return;
    }
    let mounted = true;
    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((results) => {
      if (mounted) {
        const loaded = results.filter(Boolean);
        setValidImages(loaded.length > 0 ? loaded : []);
      }
    });
    return () => { mounted = false; };
  }, [images]);

  // Auto-advance every 3.5 seconds
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (validImages.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % validImages.length);
    }, 3000);
  }, [validImages.length]);

  useEffect(() => {
    if (!isPaused) startTimer();
    return () => clearInterval(timerRef.current);
  }, [isPaused, startTimer]);

  if (!validImages || validImages.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/30 select-none gap-2">
        <span className="material-symbols-outlined text-4xl">image</span>
        <span className="text-xs font-semibold tracking-wider uppercase">
          Project Thumbnail
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images with crossfade */}
      {validImages.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${title} screenshot ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100" : "opacity-0"
            }`}
          loading="lazy"
        />
      ))}

      {/* Dot Indicators */}
      {validImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {validImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === current
                  ? "bg-primary w-4"
                  : "bg-on-surface/25 hover:bg-on-surface/40"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, staggerProps }) {
  const theme = projectThemes[project.title] || {
    icon: "terminal",
    accent: "rgba(16, 186, 129, 0.3)",
  };

  return (
    <div
      className={`h-full ${staggerProps.className}`}
      style={staggerProps.style}
      data-stagger-index={staggerProps["data-stagger-index"]}
    >
      <div
        className="group relative overflow-hidden rounded-[2rem] glass-card cursor-pointer flex flex-col h-full border-primary/20 shadow-[0_0_25px_rgba(166,124,26,0.04)]"
      >
        {/* Thumbnail Image Slider */}
        <div className="relative w-full h-[200px] overflow-hidden bg-surface-variant/30 border-b border-outline/30 z-10">
          <ImageSlider images={project.images} title={project.title} />
        </div>

        {/* Animated Glow on hover */}
        <div
          className="absolute top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-[1]"
          style={{ background: theme.accent }}
        />

        {/* Glowing Border Hover State */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-[2rem] z-20 transition-all duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(166,124,26,0)] group-hover:shadow-[inset_0_0_40px_rgba(166,124,26,0.08)]" />

        {/* Content Area */}
        <div className="relative z-30 flex flex-col flex-grow p-6 justify-between">
          <div>
            {/* Category */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-on-surface-variant/70 border border-outline/40 px-3 py-1 rounded-full bg-surface/50 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link Buttons */}
            <div className="flex gap-3">
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 text-on-surface-variant"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              {project.link && (
                <a
                  className="h-10 px-4 rounded-full glass-card flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 text-xs font-bold text-on-surface"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <span>Live Demo</span>
                  <span className="material-symbols-outlined text-xs">
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headingRef, headingVisible] = useScrollReveal();
  const { containerRef, getItemProps } = useStaggerReveal(
    projectsData.length,
    { staggerDelay: 150, threshold: 0.05 }
  );

  return (
    <section id="portfolio" className="py-16 md:py-20 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div
          ref={headingRef}
          className={`flex flex-col md:flex-row justify-between items-end mb-10 gap-6 transition-all duration-700 ${headingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[30px]"
            }`}
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
              Projects
            </h2>
            <p className="text-sm md:text-base text-primary font-bold tracking-widest uppercase">
              Featured Works
            </p>
          </div>
          <p className="text-on-surface-variant max-w-md text-xs md:text-sm">
            A curated collection of AI-powered systems, intelligent
            applications, and modern web solutions built to solve real-world
            challenges.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} staggerProps={getItemProps(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { Projects };
