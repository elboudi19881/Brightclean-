import { Check } from "lucide-react";
import { ABOUT_IMG } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

const POINTS = [
  "über 10 Jahre Erfahrung",
  "geschultes & freundliches Fachpersonal",
  "modernste Reinigungstechnik & Maschinen",
  "umweltfreundliche Reinigungsprodukte",
  "flexible Termine – auch abends & am Wochenende",
  "verlässlicher Service & fester Ansprechpartner",
  "faire, transparente Festpreise",
];

export default function About() {
  const r = useReveal();
  return (
    <section id="ueber-uns" data-testid="about-section" className="py-24 md:py-32 bg-white">
      <div ref={r} className="reveal max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative rounded-[24px] overflow-hidden border border-gray-100 shadow-xl">
            <img
              src={ABOUT_IMG}
              alt="Professionelles Reinigungspersonal von Bright Clean"
              className="w-full h-[420px] md:h-[520px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute hidden md:block" />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Über Bright Clean</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            Ihr verlässlicher Partner für professionelle Gebäudereinigung.
          </h2>
          <p className="mt-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed">
            Die Bright Clean Gebäudereinigungs GmbH aus Dortmund bietet seit über
            10 Jahren maßgeschneiderte Reinigungs- und Facility-Lösungen für
            Unternehmen, Praxen, Wohnanlagen und öffentliche Einrichtungen. Wir
            verbinden handwerkliche Präzision mit modernster Technik – und
            sorgen so jeden Tag für ein Plus an Hygiene, Werterhalt und
            Wohlbefinden.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {POINTS.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-[#1A1A1A]/85">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#EBF4FF] grid place-items-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#2A7DE1]" strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#kontakt" className="bc-btn-primary">Jetzt Angebot anfordern</a>
            <a href="#leistungen" className="bc-btn-secondary">Leistungen entdecken</a>
          </div>
        </div>
      </div>
    </section>
  );
}
