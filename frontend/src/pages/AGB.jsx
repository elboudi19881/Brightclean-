import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ShieldCheck, AlertCircle, Handshake, CreditCard, Scale } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

function Section({ icon: Icon, title, children, number }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A7DE1] to-[#4CC9F0] grid place-items-center text-white font-bold text-sm">
          {Icon ? <Icon className="w-5 h-5 text-white" /> : <span>§{number}</span>}
        </div>
        <h2 className="text-xl font-bold text-[#0B1A2C]">{title}</h2>
      </div>
      <div className="text-[15px] text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function AGB() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-display">Allgemeine Geschäftsbedingungen</h1>
          <p className="mt-3 text-white/60 text-lg">
            der {COMPANY.name}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-8">

        {/* Intro */}
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 text-[15px] text-[#1E40AF]">
          <p className="font-semibold mb-1">Geltungsbereich</p>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der{" "}
            <strong>{COMPANY.name}</strong>, Wellinghofer Str. 54, 44263 Dortmund (nachfolgend „Auftragnehmer")
            und dem Auftraggeber (nachfolgend „Kunde"), sofern nicht ausdrücklich etwas anderes schriftlich
            vereinbart wurde.
          </p>
        </div>

        {/* § 1 */}
        <Section icon={FileText} title="§ 1 Vertragsschluss">
          <p>
            Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als
            verbindlich bezeichnet werden. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung des
            Auftragnehmers oder durch Beginn der Leistungserbringung zustande.
          </p>
          <p>
            Mündliche Nebenabreden, Zusicherungen und Änderungen bedürfen zu ihrer Wirksamkeit der
            schriftlichen Bestätigung. Dies gilt auch für die Aufhebung des Schriftformerfordernisses selbst.
          </p>
        </Section>

        {/* § 2 */}
        <Section icon={Handshake} title="§ 2 Leistungsumfang">
          <p>
            Der Auftragnehmer erbringt Reinigungsleistungen in und an Gebäuden sowie Hausmeisterdienste gemäß
            dem vereinbarten Leistungsverzeichnis. Art, Umfang und Häufigkeit der Reinigungsarbeiten richten
            sich nach dem jeweiligen Einzelvertrag.
          </p>
          <p>
            Zusatzleistungen, die nicht im vereinbarten Leistungsumfang enthalten sind, werden gesondert
            berechnet. Änderungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
          </p>
          <p>
            Der Auftragnehmer ist berechtigt, Subunternehmer einzusetzen, bleibt jedoch gegenüber dem Kunden
            stets für die ordnungsgemäße Leistungserbringung verantwortlich.
          </p>
        </Section>

        {/* § 3 */}
        <Section icon={CreditCard} title="§ 3 Preise und Zahlung">
          <p>
            Die vereinbarten Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer. Rechnungen sind
            innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar, sofern nicht schriftlich anders
            vereinbart.
          </p>
          <p>
            Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu
            berechnen (§ 288 BGB). Darüber hinaus können Mahngebühren in Höhe von 5,00 € pro Mahnung erhoben
            werden.
          </p>
          <p>
            Preisanpassungen sind dem Auftraggeber mit einer Frist von 4 Wochen schriftlich mitzuteilen. Lehnt
            der Auftraggeber die Preiserhöhung ab, kann er den Vertrag zum Zeitpunkt des Wirksamwerdens der
            Preisänderung kündigen.
          </p>
        </Section>

        {/* § 4 */}
        <Section icon={AlertCircle} title="§ 4 Pflichten des Auftraggebers">
          <p>
            Der Auftraggeber stellt dem Auftragnehmer die zur Leistungserbringung notwendigen Zugänge,
            Räumlichkeiten sowie Strom und Wasser kostenlos zur Verfügung. Sperrzeiten und etwaige
            Sicherheitsvorschriften sind dem Auftragnehmer rechtzeitig mitzuteilen.
          </p>
          <p>
            Der Auftraggeber ist verpflichtet, Mängel unverzüglich, spätestens jedoch innerhalb von 3 Werktagen
            nach ihrer Feststellung, schriftlich anzuzeigen. Werden Mängel nicht rechtzeitig gerügt, gilt die
            Leistung als vertragsgemäß abgenommen.
          </p>
          <p>
            Wertgegenstände, Dokumente und sensible Materialien sind vom Auftraggeber vor Reinigungsbeginn
            zu sichern. Der Auftragnehmer übernimmt keine Haftung für ungesichert belassene Gegenstände.
          </p>
        </Section>

        {/* § 5 */}
        <Section icon={ShieldCheck} title="§ 5 Haftung und Gewährleistung">
          <p>
            Der Auftragnehmer haftet für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz seiner
            Mitarbeiter oder Erfüllungsgehilfen verursacht wurden. Bei leichter Fahrlässigkeit haftet der
            Auftragnehmer nur für die Verletzung wesentlicher Vertragspflichten.
          </p>
          <p>
            Die Haftung ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Eine Haftung für
            mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen, soweit gesetzlich
            zulässig.
          </p>
          <p>
            Der Auftragnehmer ist durch eine Betriebshaftpflichtversicherung abgesichert. Schadensersatzforderungen
            sind unverzüglich, spätestens jedoch innerhalb von 14 Tagen nach Schadensfeststellung, schriftlich
            beim Auftragnehmer anzumelden.
          </p>
        </Section>

        {/* § 6 */}
        <Section icon={null} number={6} title="§ 6 Vertragsdauer und Kündigung">
          <p>
            Dauerschuldverhältnisse werden für die vereinbarte Laufzeit abgeschlossen. Nach Ablauf der
            Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils weitere 12 Monate, wenn er nicht
            mit einer Frist von 3 Monaten zum Ende der Vertragsperiode schriftlich gekündigt wird.
          </p>
          <p>
            Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund
            liegt insbesondere vor, wenn der Auftraggeber mit mehr als zwei Monatszahlungen in Verzug gerät oder
            der andere Vertragteil wesentliche Vertragspflichten wiederholt verletzt.
          </p>
          <p>
            Einzelaufträge ohne vereinbarte Laufzeit können von beiden Parteien jederzeit mit sofortiger Wirkung
            storniert werden, bei Stornierung innerhalb von 24 Stunden vor dem vereinbarten Einsatz wird jedoch
            eine Ausfallgebühr in Höhe von 50 % des vereinbarten Auftragswertes fällig.
          </p>
        </Section>

        {/* § 7 */}
        <Section icon={Scale} title="§ 7 Gerichtsstand und anwendbares Recht">
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Erfüllungsort und ausschließlicher Gerichtsstand
            ist Dortmund, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder
            öffentlich-rechtliches Sondervermögen ist.
          </p>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so wird
            dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. An die Stelle der unwirksamen
            Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Regelung
            möglichst nahekommt.
          </p>
        </Section>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <p className="text-[15px] text-gray-700">
            Bei Fragen zu diesen AGB wenden Sie sich bitte an:
          </p>
          <p className="font-semibold text-[#0B1A2C] mt-2">{COMPANY.name}</p>
          <p className="text-gray-600">Wellinghofer Str. 54, 44263 Dortmund</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href={`tel:${COMPANY.phone}`} className="text-[#2A7DE1] hover:underline">{COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="text-[#2A7DE1] hover:underline">{COMPANY.email}</a>
          </div>
          <p className="text-sm text-gray-400 mt-4">Stand: Januar 2025</p>
        </div>
      </div>

      <div className="bg-[#0B1A2C] text-white/50 text-sm py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/logo.png" alt="Bright Clean" className="h-10 w-auto object-contain" />
          <span>© {new Date().getFullYear()} {COMPANY.name} · Wellinghofer Str. 54, 44263 Dortmund</span>
        </div>
      </div>
    </div>
  );
}
