import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="bg-[#0B1A2C] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <a href="#top" className="flex items-center">
            <img
              src="/logo.png"
              alt="Bright Clean Gebäudereinigungs GmbH"
              className="h-14 w-auto object-contain"
            />
          </a>
          <p className="mt-6 text-[14.5px] text-white/60 leading-relaxed max-w-sm">
            Premium-Gebäudereinigung in Dortmund, Bochum, Witten und Umgebung.
            Verlässlich. Modern. Mit höchstem Anspruch an Qualität.
          </p>
          <div className="mt-6 grid gap-3 text-[14px]">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-white/80 hover:text-white">
              <Phone className="w-4 h-4 text-[#4CC9F0]" /> {COMPANY.phone}
            </a>
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 text-[#4CC9F0]" /> Fax: {COMPANY.fax}
            </div>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-white/80 hover:text-white">
              <Mail className="w-4 h-4 text-[#4CC9F0]" /> {COMPANY.email}
            </a>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="w-4 h-4 text-[#4CC9F0]" /> {COMPANY.address}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[12px] uppercase tracking-wider text-white/45 font-semibold">Unternehmen</div>
          <ul className="mt-5 grid gap-3 text-[14.5px] text-white/75">
            <li><a href="#ueber-uns" className="hover:text-white">Über uns</a></li>
            <li><a href="#ablauf" className="hover:text-white">Ablauf</a></li>
            <li><a href="#branchen" className="hover:text-white">Branchen</a></li>
            <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[12px] uppercase tracking-wider text-white/45 font-semibold">Leistungen</div>
          <ul className="mt-5 grid gap-3 text-[14.5px] text-white/75">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.title}><a href="#leistungen" className="hover:text-white">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[12px] uppercase tracking-wider text-white/45 font-semibold">Rechtliches</div>
          <ul className="mt-5 grid gap-3 text-[14.5px] text-white/75">
            <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
            <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
            <li><Link to="/agb" className="hover:text-white">AGB</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/55">
          <p>© {year} {COMPANY.name}. Alle Rechte vorbehalten.</p>
          <p>Mit Präzision gemacht in Dortmund.</p>
        </div>
      </div>
    </footer>
  );
}
