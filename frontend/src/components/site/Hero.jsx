import { ArrowRight, ShieldCheck, Leaf, Clock } from "lucide-react";
import { HERO_IMG } from "@/lib/site-data";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bc-radial pointer-events-none" />
      <div className="absolute inset-0 bc-grid-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div data-testid="hero-eyebrow" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[12px] uppercase tracking-[0.14em] text-[#2A7DE1] font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0]" />
            Gebäudereinigung in Dortmund
          </div>

          <h1 data-testid="hero-headline" className="font-display mt-6 text-[44px] leading-[1.05] sm:text-[64px] lg:text-[72px] font-semibold tracking-tight text-[#0F1F33]">
            Sauberkeit auf <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#0F4C81] via-[#2A7DE1] to-[#4CC9F0] bg-clip-text text-transparent">höchstem Niveau.</span>
          </h1>

          <p data-testid="hero-subtitle" className="mt-6 text-[17px] md:text-lg text-[#1A1A1A]/70 max-w-xl leading-relaxed">
            Seit über 10 Jahren sorgt die Bright Clean Gebäudereinigungs GmbH für
            professionelle Reinigungslösungen in Dortmund, Bochum, Witten und
            Umgebung – verlässlich, gründlich und auf höchstem Qualitätsniveau.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a data-testid="hero-primary-cta" href="#kontakt" className="bc-btn-primary">
              Kostenloses Angebot anfordern
              <ArrowRight className="w-4 h-4" />
            </a>
            <a data-testid="hero-secondary-cta" href="#leistungen" className="bc-btn-secondary">
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: ShieldCheck, label: "Versichert & geprüft" },
              { icon: Leaf, label: "Ökologische Mittel" },
              { icon: Clock, label: "Flexible Einsatzzeiten" },
            ].map((b, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-9 h-9 rounded-full bg-[#EBF4FF] grid place-items-center">
                  <b.icon className="w-4.5 h-4.5 text-[#2A7DE1]" strokeWidth={2} />
                </div>
                <span className="text-[12.5px] text-[#1A1A1A]/70 leading-snug">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,76,129,0.35)] border border-white">
            <img
              data-testid="hero-image"
              src={HERO_IMG}
              alt="Modernes Bürogebäude – professionelle Reinigung"
              className="w-full h-[460px] md:h-[560px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81]/30 via-transparent to-transparent" />
          </div>

          {/* Floating glass cards */}
          <div className="bc-glass absolute -left-4 md:-left-10 top-10 rounded-2xl px-4 py-3 shadow-xl bc-float">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0F4C81] grid place-items-center">
                <ShieldCheck className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B]">Hygienestandard</div>
                <div className="font-medium text-sm">RKI-konform & geprüft</div>
              </div>
            </div>
          </div>

          <div className="bc-glass absolute -right-3 md:-right-6 bottom-8 rounded-2xl px-4 py-3 shadow-xl bc-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2A7DE1] to-[#4CC9F0] grid place-items-center text-white font-display font-semibold">
                4.9
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B]">Kundenbewertung</div>
                <div className="font-medium text-sm">★★★★★ aus 500+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
