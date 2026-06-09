import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isResume = window.location.pathname === "/resume";

  return (
    <footer className="py-6 border-t border-outline/30 relative z-10 bg-surface/60">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Social Link Cards */}
        <div className="flex gap-4">
          {/* Gmail */}
          <a
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-[#ea4335]/15 hover:border-[#ea4335]/40 text-[#ea4335] transition-all duration-300"
            href={`mailto:${personalInfo.email}`}
            title="Email"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.733 1.635-1.636 1.635h-3.819V11.73L12 16.64l-6.545-4.91v9.27H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.356 1.478-2.194 2.633-1.493L12 9.93l9.367-6.249c1.155-.7 2.633.137 2.633 1.493z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-[#0a66c2]/15 hover:border-[#0a66c2]/40 text-[#0a66c2] transition-all duration-300"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-on-surface/10 hover:border-on-surface/30 text-on-surface transition-all duration-300"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          {/* Fiverr */}
          <a
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-[#1dbf73]/15 hover:border-[#1dbf73]/40 text-[#1dbf73] transition-all duration-300"
            href={personalInfo.fiverr || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="Fiverr"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.123 6.942H16.48v-2.07c0-1.118.895-2.028 1.996-2.028h.648V0h-1.69c-2.483 0-4.5 2.046-4.5 4.566v2.376h-2.146V9.6h2.146v14.4h3.542V9.6h2.646l.487-2.658zM4.773 8.358c-1.802 0-3.266 1.482-3.266 3.313 0 1.83 1.464 3.312 3.266 3.312s3.265-1.482 3.265-3.312c0-1.83-1.463-3.313-3.265-3.313z" />
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        {isResume ? (
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/50 select-none">
            <span>AI Engineer • Web Developer • ML Enthusiast • Freelancer</span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/80">
            <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
            <span className="text-on-surface-variant/30 select-none font-normal">•</span>
            <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
            <span className="text-on-surface-variant/30 select-none font-normal">•</span>
            <a href="#portfolio" className="hover:text-primary transition-colors duration-300">Projects</a>
            <span className="text-on-surface-variant/30 select-none font-normal">•</span>
            <a href="#journey" className="hover:text-primary transition-colors duration-300">Journey</a>
            <span className="text-on-surface-variant/30 select-none font-normal">•</span>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          </div>
        )}

        {/* Copyright */}
        <p className="text-xs font-medium text-on-surface-variant/80">
          © {currentYear} {personalInfo.name} {personalInfo.lastName}
        </p>
      </div>
    </footer>
  );
}
export { Footer };
