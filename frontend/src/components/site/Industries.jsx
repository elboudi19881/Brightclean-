import { INDUSTRIES } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Industries() {
  const r = useReveal();
  return (
    <section id="branchen" data-testid="industries-section" className="py-24 md:py-32 bg-white">
      <div ref={r} className="reveal max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Branchen</span>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
              Vertrauen aus den unterschiedlichsten Branchen.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed">
            Ob Büro, Klinik, Hotel oder Bildungseinrichtung – wir kennen die
            spezifischen Anforderungen und liefern passgenaue Reinigungskonzepte.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.label}
                data-testid={`industry-card-${i}`}
                className="group relative bc-card p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#2A7DE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#EBF4FF] grid place-items-center group-hover:bg-white/15 transition-colors">
                    <Icon className="w-5 h-5 text-[#2A7DE1] group-hover:text-white" strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 font-display font-semibold text-[#0F1F33] group-hover:text-white transition-colors">
                    {it.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
