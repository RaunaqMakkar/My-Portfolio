import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom hook for staggered reveal animations on a list of children.
 * Each child fades in sequentially with an incremental delay once the
 * parent container enters the viewport.
 *
 * @param {number} itemCount - Number of child items to stagger
 * @param {Object} options
 * @param {number} options.staggerDelay - Delay between each child (ms)
 * @param {number} options.threshold - IntersectionObserver threshold
 * @param {string} options.rootMargin - IntersectionObserver rootMargin
 * @returns {{ containerRef: React.RefObject, isContainerVisible: boolean, getItemProps: (index: number) => object }}
 */
export function useStaggerReveal(
  itemCount,
  { staggerDelay = 100, threshold = 0.1, rootMargin = "0px 0px -40px 0px" } = {}
) {
  const containerRef = useRef(null);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [revealedItems, setRevealedItems] = useState(new Set());
  const timersRef = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainerVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Stagger items once container becomes visible
  useEffect(() => {
    if (!isContainerVisible) return;

    // Clear any existing timers
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setRevealedItems((prev) => new Set([...prev, i]));
      }, i * staggerDelay);
      timersRef.current.push(timer);
    }

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [isContainerVisible, itemCount, staggerDelay]);

  /**
   * Returns style + className props for each staggered child.
   * @param {number} index
   */
  const getItemProps = useCallback(
    (index) => {
      const isRevealed = revealedItems.has(index);
      return {
        style: {
          transitionDelay: `${index * staggerDelay}ms`,
        },
        className: isRevealed
          ? "stagger-item stagger-item--visible"
          : "stagger-item",
        "data-stagger-index": index,
      };
    },
    [revealedItems, staggerDelay]
  );

  return { containerRef, isContainerVisible, getItemProps };
}
