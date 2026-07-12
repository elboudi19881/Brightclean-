import { PROCESS } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Process() {
  const r = useReveal();
  return (
    <section id="ablauf" data-testid="process-section" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div ref={r} className="reveal max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Ablauf</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            In 5 Schritten zur professionellen Reinigung.
          </h2>
          <p className="mt-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed">
            Transparent, planbar und ohne Überraschungen – so arbeiten wir mit
            Ihnen zusammen.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#2A7DE1]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <div key={p.step} data-testid={`process-step-${i}`} className="relative">
                <div className="bc-card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] grid place-items-center font-display font-semibold text-[#0F4C81]">
                      {p.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#4CC9F0]" />
                  </div>
                  <h3 className="mt-5 font-display text-[18px] font-semibold text-[#0F1F33]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[#1A1A1A]/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
