import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const r = useReveal();

  return (
    <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div ref={r} className="reveal max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">FAQ</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            Häufig gestellte Fragen.
          </h2>
        </div>

        <div className="mt-14 rounded-[24px] bg-white border border-gray-100 shadow-[0_20px_50px_-30px_rgba(15,76,129,0.18)] divide-y divide-gray-100">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-testid={`faq-item-${i}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left flex items-start justify-between gap-6 px-6 md:px-8 py-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[17px] md:text-[19px] font-medium text-[#0F1F33]">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 mt-0.5 w-9 h-9 rounded-full border border-gray-200 grid place-items-center transition-all ${
                      isOpen ? "bg-[#0F4C81] border-[#0F4C81] rotate-45" : "bg-white group-hover:border-[#2A7DE1]"
                    }`}
                  >
                    <Plus className={`w-4 h-4 ${isOpen ? "text-white" : "text-[#0F4C81]"}`} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-7 text-[15.5px] text-[#1A1A1A]/70 leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
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
