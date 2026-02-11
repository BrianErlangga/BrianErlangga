import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - ref to attach to element and visibility state
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (animation plays once)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

/**
 * Hook for multiple elements with staggered animations
 * @param {number} count - Number of elements to observe
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} - Array of [ref, isVisible] pairs
 */
export function useStaggeredAnimation(count, options = {}) {
  const refs = useRef([]);
  const [visibleStates, setVisibleStates] = useState(Array(count).fill(false));

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleStates((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100); // Stagger delay
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -30px 0px",
          ...options,
        },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs.current[index]) {
          observer.unobserve(refs.current[index]);
        }
      });
    };
  }, [count, options]);

  return [refs, visibleStates];
}

export default useScrollAnimation;
