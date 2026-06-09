import { navLinks } from "../data/portfolioData";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-outline/30 py-4 shadow-lg shadow-[#2A1B10]/5"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between md:justify-center items-center">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">
          {navLinks.map((link) => {
            const sectionName = link.href.substring(1);
            const isActive = activeSection === sectionName;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 relative py-1 ${
                  isActive
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary animate-scaleIn" />
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
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-background/95 backdrop-blur-md border-b border-outline/30">
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
  );
}
