import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { GALLERY } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Gallery() {
  const r = useReveal();
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galerie" data-testid="gallery-section" className="py-24 md:py-32 bg-white">
      <div ref={r} className="reveal max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Galerie</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            Ergebnisse, die für sich sprechen.
          </h2>
          <p className="mt-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed">
            Ein Auszug aus unseren Projekten – aus Büros, Praxen, Wohnanlagen
            und mehr.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 [grid-auto-flow:dense]">
          {GALLERY.map((src, i) => (
            <button
              key={src + i}
              data-testid={`gallery-item-${i}`}
              onClick={() => setActive(src)}
              className={`relative group overflow-hidden rounded-[20px] border border-gray-100 bc-card !p-0 ${
                i % 5 === 0 ? "md:row-span-2 md:col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Bright Clean Projekt ${i + 1}`}
                loading="lazy"
                className={`w-full ${
                  i % 5 === 0 ? "h-full min-h-[260px] md:min-h-[520px]" : "h-[220px] md:h-[260px]"
                } object-cover transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F33]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#0F4C81]" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          data-testid="gallery-lightbox"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md grid place-items-center p-4"
        >
          <button
            data-testid="gallery-close"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/90 grid place-items-center hover:bg-white"
            aria-label="Schließen"
          >
            <X className="w-5 h-5 text-[#0F1F33]" />
          </button>
          <img src={active} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
