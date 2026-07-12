import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft, CheckCircle2, Phone, Mail, ArrowRight, ChevronRight
} from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/site-data";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  // 404-Fallback
  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center justify-center gap-5 text-center px-6">
        <div className="text-6xl font-bold text-[#0F4C81]">404</div>
        <p className="text-xl text-gray-600">Leistung nicht gefunden.</p>
        <Link to="/" className="bc-btn-primary">
          <ArrowLeft className="w-4 h-4" /> Zur Startseite
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  // Other services (excluding current)
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Hero */}
      <div className="bg-[#0B1A2C] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2A7DE1]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-12 w-64 h-64 rounded-full bg-[#4CC9F0]/10 blur-2xl" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-10">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{service.title}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2A7DE1] to-[#4CC9F0] grid place-items-center flex-shrink-0 shadow-lg shadow-[#2A7DE1]/30">
              <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#4CC9F0]">
                Unsere Leistungen
              </span>
              <h1 className="font-display mt-2 text-4xl sm:text-5xl font-bold text-white leading-tight">
                {service.title}
              </h1>
              <p className="mt-3 text-white/60 text-lg max-w-2xl leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${COMPANY.phone}`} className="bc-btn-primary text-sm">
              <Phone className="w-4 h-4" /> Jetzt anrufen
            </a>
            <a href="/#kontakt" className="bc-btn-secondary text-sm bg-transparent border-white/20 text-white hover:border-white hover:text-white">
              Kostenloses Angebot
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 grid lg:grid-cols-3 gap-10">

        {/* Left column: intro + leistungen */}
        <div className="lg:col-span-2 space-y-8">

          {/* Intro */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold font-display text-[#0F1F33] mb-4">Über diese Leistung</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed">{service.intro}</p>
          </section>

          {/* Leistungsumfang */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold font-display text-[#0F1F33] mb-6">Was wir für Sie tun</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.leistungen.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2A7DE1] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Vorteile */}
          <section className="bg-gradient-to-br from-[#0F4C81] to-[#2A7DE1] rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-display text-white mb-6">Ihre Vorteile</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.vorteile.map((v, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4CC9F0] flex-shrink-0" />
                  <span className="text-white font-medium text-[15px]">{v}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">

          {/* Contact card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
            <h3 className="text-lg font-bold font-display text-[#0F1F33] mb-4">Angebot anfordern</h3>
            <p className="text-[14px] text-gray-600 mb-5 leading-relaxed">
              Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot zu „{service.title}".
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 w-full bg-[#0F4C81] text-white rounded-xl px-4 py-3.5 hover:bg-[#0A365D] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>
                  <div className="text-[11px] opacity-70 uppercase tracking-wider">Telefon</div>
                  <div className="font-semibold text-sm">{COMPANY.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 w-full bg-[#EBF4FF] text-[#0F4C81] rounded-xl px-4 py-3.5 hover:bg-[#DCEEFF] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <div>
                  <div className="text-[11px] opacity-60 uppercase tracking-wider">E-Mail</div>
                  <div className="font-semibold text-sm">{COMPANY.email}</div>
                </div>
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-[12.5px] text-gray-500 text-center">
              Antwort in der Regel innerhalb von 24 Stunden
            </div>
          </div>

          {/* Other services */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-[13px] uppercase tracking-wider font-semibold text-gray-400 mb-4">Weitere Leistungen</h3>
            <ul className="space-y-1">
              {otherServices.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <li key={s.slug}>
                    <Link
                      to={`/leistungen/${s.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F0F6FF] transition-colors group"
                    >
                      <OtherIcon className="w-4 h-4 text-[#2A7DE1] flex-shrink-0" strokeWidth={1.75} />
                      <span className="text-[14px] text-[#0F1F33] group-hover:text-[#0F4C81] font-medium">{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#2A7DE1] ml-auto transition-colors" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/#leistungen"
              className="mt-3 block text-center text-sm text-[#2A7DE1] hover:underline"
            >
              Alle Leistungen ansehen →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#0B1A2C] text-white/50 text-sm py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/logo.png" alt="Bright Clean" className="h-10 w-auto object-contain" />
          <span>© {new Date().getFullYear()} {COMPANY.name} · Wellinghofer Str. 54, 44263 Dortmund</span>
        </div>
      </div>
    </div>
  );
}
