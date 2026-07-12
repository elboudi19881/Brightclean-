import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site-data";

function Counter({ end, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * end));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section data-testid="stats-section" className="relative -mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rounded-[28px] border border-gray-100 bg-white shadow-[0_30px_60px_-30px_rgba(15,76,129,0.18)] px-6 md:px-12 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} data-testid={`stat-card-${i}`} className="text-center md:text-left">
              <div className="font-display text-[44px] md:text-[56px] leading-none font-semibold text-[#0F4C81] tracking-tight">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm md:text-[15px] text-[#64748B]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
