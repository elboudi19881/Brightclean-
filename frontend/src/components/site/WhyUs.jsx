import { Check } from "lucide-react";
import { ADVANTAGES } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function WhyUs() {
  const r = useReveal();
  return (
    <section data-testid="why-us-section" className="py-24 md:py-32 bg-white">
      <div ref={r} className="reveal max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Warum Bright Clean</span>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
              Premium-Qualität, der Unternehmen seit Jahren vertrauen.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed">
            Wir verbinden geschultes Fachpersonal mit modernster Technik und
            klaren Prozessen – damit Sie sich entspannt auf Ihr Kerngeschäft
            konzentrieren können.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADVANTAGES.map((a, i) => (
            <div
              key={i}
              data-testid={`advantage-card-${i}`}
              className="bc-card p-6 flex items-start gap-4"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#2A7DE1] grid place-items-center flex-shrink-0">
                <Check className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-display text-[17px] font-semibold text-[#0F1F33] capitalize-first">
                  {a.charAt(0).toUpperCase() + a.slice(1)}
                </div>
                <div className="text-[13.5px] text-[#64748B] mt-1">
                  Garantierte Qualität in jedem Detail.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
