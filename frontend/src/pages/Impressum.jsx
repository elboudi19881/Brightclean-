import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Phone, Mail, MapPin, Scale } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-[#0B1A2C] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-display">Impressum</h1>
          <p className="mt-3 text-white/60 text-lg">Angaben gemäß § 5 TMG</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-10">

        {/* Unternehmensangaben */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A7DE1] to-[#4CC9F0] grid place-items-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#0B1A2C]">Unternehmensangaben</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-[15px] text-gray-700">
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Firmenname</p>
              <p>{COMPANY.name}</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Rechtsform</p>
              <p>Gesellschaft mit beschränkter Haftung (GmbH)</p>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-[#2A7DE1] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[#0B1A2C] mb-1">Anschrift</p>
                <p>Wellinghofer Str. 54</p>
                <p>44263 Dortmund</p>
                <p>Deutschland</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 mb-3">
                <Phone className="w-4 h-4 text-[#2A7DE1] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#0B1A2C] mb-1">Telefon</p>
                  <a href={`tel:${COMPANY.phone}`} className="text-[#2A7DE1] hover:underline block">
                    {COMPANY.phone}
                  </a>
                  <a href={`tel:${COMPANY.phone2}`} className="text-[#2A7DE1] hover:underline block">
                    {COMPANY.phone2}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-[#2A7DE1] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#0B1A2C] mb-1">E-Mail</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-[#2A7DE1] hover:underline">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handelsregister */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A7DE1] to-[#4CC9F0] grid place-items-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#0B1A2C]">Handelsregister</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-[15px] text-gray-700">
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Registergericht</p>
              <p>{COMPANY.amtsgericht}</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Registernummer</p>
              <p>{COMPANY.hrb}</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">EUID</p>
              <p>{COMPANY.euid}</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Stammkapital</p>
              <p>{COMPANY.stammkapital}</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Geschäftsführer</p>
              <p>{COMPANY.geschaeftsfuehrer}</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-1">Gegründet</p>
              <p>{COMPANY.gruendung}</p>
            </div>
          </div>
        </section>

        {/* Unternehmensgegenstand */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-[#0B1A2C] mb-4">Unternehmensgegenstand</h2>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            Umfassende Erbringung von Reinigungsleistungen in und an Gebäuden sowie Hausmeisterdienste,
            genehmigungsfreie Bau-Zu- und Bau-Hilfsarbeiten, sowie Handel mit Modeschmuck, Accessoires,
            Lederwaren, Haushaltselektronik (Kleinelektronik), Pflanzen, Textilien, Schuhen, Wohnaccessoires,
            Parfüme, verpackten Lebensmitteln sowie die Vornahme von Entrümpelungen und Umzügen.
          </p>
        </section>

        {/* Haftungsausschluss */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-[#0B1A2C] mb-4">Haftungsausschluss</h2>
          <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-2">Haftung für Inhalte</p>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-2">Haftung für Links</p>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1A2C] mb-2">Urheberrecht</p>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </section>

        {/* Streitbeilegung */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-[#0B1A2C] mb-4">Online-Streitbeilegung</h2>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A7DE1] hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>

      {/* Footer Mini */}
      <div className="bg-[#0B1A2C] text-white/50 text-sm py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/logo.png" alt="Bright Clean" className="h-10 w-auto object-contain" />
          <span>© {new Date().getFullYear()} {COMPANY.name} · Wellinghofer Str. 54, 44263 Dortmund</span>
        </div>
      </div>
    </div>
  );
}
