import { useEffect, useRef, useCallback } from "react";

/**
 * CursorSpotlight — a soft ambient light that follows the cursor.
 *
 * Uses requestAnimationFrame + lerp interpolation for GPU-accelerated,
 * silky-smooth trailing. Disabled on touch / mobile devices.
 */
export default function CursorSpotlight() {
  const spotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const isTouch = useRef(false);

  /* ---- detect touch devices and hide ---- */
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    isTouch.current = mq.matches;
    if (spotRef.current) {
      spotRef.current.style.display = mq.matches ? "none" : "";
    }
    const onChange = (e) => {
      isTouch.current = e.matches;
      if (spotRef.current) {
        spotRef.current.style.display = e.matches ? "none" : "";
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* ---- track mouse position ---- */
  const handleMouseMove = useCallback((e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  /* ---- animation loop: lerp toward mouse ---- */
  useEffect(() => {
    const EASE = 0.06; // lower = more trailing delay

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * EASE;
      pos.current.y += (mouse.current.y - pos.current.y) * EASE;

      if (spotRef.current && !isTouch.current) {
        spotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "480px",
        height: "480px",
        marginLeft: "-240px",
        marginTop: "-240px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(214,176,100,0.18) 0%, rgba(166,124,26,0.06) 40%, transparent 70%)",
        filter: "blur(180px)",
        opacity: 0.07,
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
    />
  );
}
