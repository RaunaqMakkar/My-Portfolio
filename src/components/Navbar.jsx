import { navLinks } from "../data/portfolioData";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if we've scrolled past the hero section
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setPastHero(heroBottom < 80); // 80px threshold (navbar height)
      }

      // Active section calculation
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar-wrapper"
      className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "md:pt-4 pt-0" : "pt-0"
      }`}
    >
      <nav
        id="navbar"
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
          scrolled
            ? "md:max-w-fit md:rounded-full md:px-4 md:py-3.5 md:shadow-[0_8px_32px_rgba(26,18,11,0.15),0_2px_12px_rgba(166,124,26,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] w-full bg-background/60 backdrop-blur-2xl border-primary/15 py-3 md:border-primary/15"
            : "w-full bg-transparent border-transparent py-5 md:max-w-full md:rounded-none md:px-0"
        }`}
        style={{
          willChange: "max-width, border-radius, padding, box-shadow",
        }}
      >
        <div
          className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "md:px-6 px-6 justify-between md:justify-center md:gap-8"
              : "max-w-[1200px] mx-auto px-6 md:px-12 justify-between md:justify-center"
          }`}
        >
          {/* Mobile: Name shown after scrolling past hero */}
          <div className={`md:hidden flex items-center transition-all duration-500 ${pastHero ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3 pointer-events-none"}`}>
            <a href="#hero" className="text-sm font-bold text-on-surface tracking-tight">
              Raunaq Makkar
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className={`hidden md:flex items-center text-xs font-bold tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "gap-6" : "gap-10"
          }`}>
            {navLinks.map((link) => {
              const sectionName = link.href.substring(1);
              const isActive = activeSection === sectionName;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-300 relative py-1 ${
                    scrolled
                      ? isActive
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-on-surface"
                      : isActive
                        ? "text-on-surface"
                        : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute left-0 right-0 h-[2px] bg-primary animate-scaleIn transition-all duration-300 ${
                        scrolled ? "-bottom-1" : "bottom-0"
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-on-surface p-2 ml-auto"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-background/95 backdrop-blur-md border-t border-outline/30 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-on-surface-variant hover:text-on-surface py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
