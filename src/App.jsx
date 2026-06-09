import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import CursorSpotlight from "./components/CursorSpotlight";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Resume from "./sections/Resume";

function App() {
  const progressBarRef = useRef(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Router listener + click interceptor for local SPA navigation
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);

    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      // Intercept local links (start with / but not double // or download links)
      if (
        href &&
        (href.startsWith("/") || href === "") &&
        !href.startsWith("//") &&
        !target.hasAttribute("download") &&
        target.getAttribute("target") !== "_blank"
      ) {
        e.preventDefault();
        window.history.pushState({}, "", href === "" ? "/" : href);
        window.dispatchEvent(new Event("popstate"));
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    // Scroll Progress bar (only active on home page sections)
    if (currentPath === "/resume") return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${scrolled}%`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentPath]);

  return (
    <div className="relative bg-background text-on-surface min-h-screen">
      {/* Scroll Progress Bar (Home only) */}
      {currentPath !== "/resume" && (
        <div
          id="scroll-progress"
          ref={progressBarRef}
          className="fixed top-0 left-0 h-[2px] bg-primary z-50 transition-[width] duration-75"
          style={{ width: "0%" }}
        />
      )}

      {/* Background Ambient Orbs */}
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Cursor-follow ambient spotlight */}
      <CursorSpotlight />

      {currentPath === "/resume" ? (
        <main className="relative z-10">
          <Resume />
        </main>
      ) : (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
          </main>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
export { App };
