import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Testimonials() {
  const r = useReveal();
  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute inset-0 bc-radial opacity-70 pointer-events-none" />
      <div ref={r} className="reveal relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Kundenstimmen</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            Was Kunden über Bright Clean sagen.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="bc-card p-7 flex flex-col gap-4"
            >
              <Quote className="w-7 h-7 text-[#4CC9F0]" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FFB23F] text-[#FFB23F]" />
                ))}
              </div>
              <blockquote className="text-[15px] text-[#1A1A1A]/80 leading-relaxed">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-auto pt-2 border-t border-gray-100">
                <div className="font-display font-semibold text-[15px] text-[#0F1F33]">{t.name}</div>
                <div className="text-[13px] text-[#64748B]">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
