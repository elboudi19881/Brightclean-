import { Mail, MapPin, Phone, Clock, Printer } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import useReveal from "@/lib/useReveal";

export default function Contact() {
  const r = useReveal();

  const infos = [
    { icon: Phone, label: "Telefon", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Printer, label: "Fax", value: COMPANY.fax, href: null },
    { icon: Mail, label: "E-Mail", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: "Adresse", value: COMPANY.address, href: null },
    { icon: Clock, label: "Öffnungszeiten", value: COMPANY.hours, href: null },
  ];

  return (
    <section id="kontakt" data-testid="contact-section" className="py-24 md:py-32 bg-white">
      <div ref={r} className="reveal max-w-5xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#2A7DE1]">Kontakt</span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0F1F33] leading-[1.1]">
            Sprechen Sie uns an.
          </h2>
          <p className="mt-5 text-[17px] text-[#1A1A1A]/70 leading-relaxed max-w-xl mx-auto">
            Wir sind persönlich für Sie erreichbar – rufen Sie uns an oder schreiben Sie uns eine E-Mail.
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {infos.map((it, i) =>
            it.href ? (
              <a
                key={i}
                href={it.href}
                data-testid={`contact-info-${i}`}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#2A7DE1]/40 hover:shadow-md transition-all group"
              >
                <span className="w-12 h-12 rounded-xl bg-[#EBF4FF] group-hover:bg-[#2A7DE1] transition-colors grid place-items-center flex-shrink-0">
                  <it.icon className="w-5 h-5 text-[#2A7DE1] group-hover:text-white transition-colors" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#64748B] mb-0.5">{it.label}</div>
                  <div className="font-display font-semibold text-[#0F1F33] text-[15px]">{it.value}</div>
                </div>
              </a>
            ) : (
              <div
                key={i}
                data-testid={`contact-info-${i}`}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100"
              >
                <span className="w-12 h-12 rounded-xl bg-[#EBF4FF] grid place-items-center flex-shrink-0">
                  <it.icon className="w-5 h-5 text-[#2A7DE1]" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#64748B] mb-0.5">{it.label}</div>
                  <div className="font-display font-semibold text-[#0F1F33] text-[15px]">{it.value}</div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            title="Bright Clean Dortmund – Wellinghofer Str. 54"
            src="https://www.google.com/maps?q=Wellinghofer+Str.+54,+44263+Dortmund&output=embed"
            className="w-full h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
