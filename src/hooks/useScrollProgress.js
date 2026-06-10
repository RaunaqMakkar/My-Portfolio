import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom hook that tracks how far a container has been scrolled through.
 * Returns a progress value from 0 to 1 representing the scroll position
 * through the element — useful for scroll-linked animations like a
 * self-drawing timeline line.
 *
 * @param {Object} options
 * @param {number} options.offset - Offset from the top of the viewport (0-1, fraction of viewport height)
 * @returns {{ containerRef: React.RefObject, progress: number }}
 */
export function useScrollProgress({ offset = 0.35 } = {}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportTrigger = window.innerHeight * offset;

      // How far the trigger point has traveled through the element
      const traveled = viewportTrigger - rect.top;
      const totalHeight = rect.height;

      if (traveled <= 0) {
        setProgress(0);
      } else if (traveled >= totalHeight) {
        setProgress(1);
      } else {
        setProgress(traveled / totalHeight);
      }
    });
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return { containerRef, progress };
}
