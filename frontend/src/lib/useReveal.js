import { useEffect, useRef } from "react";

/**
 * Adds .in class when element scrolls into viewport. Pair with .reveal in CSS.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
