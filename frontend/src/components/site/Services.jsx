import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Services() {
  const r = useReveal();
  return (
    <section id="leistungen" data-testid="services-section" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div ref={r} className="reveal max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Unsere Leistungen</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            Alles aus einer Hand –<br className="hidden sm:block" /> präzise. zuverlässig. hochwertig.
          </h2>
          <p className="mt-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed">
            Von der täglichen Unterhaltsreinigung bis zur Spezialreinigung – wir
            decken das komplette Spektrum moderner Gebäudereinigung ab.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                data-testid={`service-card-${i}`}
                className="bc-card group p-7 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#EBF4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F4C81] to-[#2A7DE1] grid place-items-center shadow-md shadow-[#0F4C81]/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-5.5 h-5.5 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-[20px] font-semibold text-[#0F1F33] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-[#1A1A1A]/65 leading-relaxed">
                    {s.desc}
                  </p>
                  <Link
                    to={`/leistungen/${s.slug}`}
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-[#0F4C81] group-hover:gap-2.5 transition-all"
                  >
                    Mehr erfahren
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
