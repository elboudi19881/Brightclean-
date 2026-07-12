import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

function Section({ icon: Icon, title, children }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A7DE1] to-[#4CC9F0] grid place-items-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-[#0B1A2C]">{title}</h2>
      </div>
      <div className="text-[15px] text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function Datenschutz() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-display">Datenschutzerklärung</h1>
          <p className="mt-3 text-white/60 text-lg">Informationen gemäß Art. 13 DSGVO</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-8">

        {/* Verantwortlicher */}
        <Section icon={UserCheck} title="Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler
            Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
          </p>
          <div className="bg-[#F0F6FF] rounded-xl p-5 mt-3 space-y-1">
            <p className="font-semibold text-[#0B1A2C]">{COMPANY.name}</p>
            <p>Wellinghofer Str. 54, 44263 Dortmund</p>
            <p>
              Telefon:{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-[#2A7DE1] hover:underline">
                {COMPANY.phone}
              </a>{" "}
              ·{" "}
              <a href={`tel:${COMPANY.phone2}`} className="text-[#2A7DE1] hover:underline">
                {COMPANY.phone2}
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-[#2A7DE1] hover:underline">
                {COMPANY.email}
              </a>
            </p>
            <p>Vertreten durch: {COMPANY.geschaeftsfuehrer}</p>
          </div>
        </Section>

        {/* Allgemeine Hinweise */}
        <Section icon={Shield} title="Allgemeine Hinweise">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
            Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
            Sie persönlich identifiziert werden können.
          </p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch Eingabe in
            ein Kontaktformular. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
            Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </Section>

        {/* Datenerfassung */}
        <Section icon={Database} title="Datenerfassung auf unserer Website">
          <p className="font-semibold text-[#0B1A2C]">Hosting</p>
          <p>
            Unsere Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
            die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
            es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
            handeln.
          </p>
          <p className="font-semibold text-[#0B1A2C] mt-4">Server-Log-Dateien</p>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
            dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </Section>

        {/* Kontaktformular */}
        <Section icon={Mail} title="Kontaktformular">
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
            Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
            oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
            – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </Section>

        {/* Rechte */}
        <Section icon={Eye} title="Ihre Rechte">
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li><span className="font-semibold">Auskunftsrecht</span> – Art. 15 DSGVO</li>
            <li><span className="font-semibold">Recht auf Berichtigung</span> – Art. 16 DSGVO</li>
            <li><span className="font-semibold">Recht auf Löschung</span> – Art. 17 DSGVO</li>
            <li><span className="font-semibold">Recht auf Einschränkung der Verarbeitung</span> – Art. 18 DSGVO</li>
            <li><span className="font-semibold">Recht auf Datenübertragbarkeit</span> – Art. 20 DSGVO</li>
            <li><span className="font-semibold">Widerspruchsrecht</span> – Art. 21 DSGVO</li>
            <li><span className="font-semibold">Recht auf Widerruf</span> der datenschutzrechtlichen Einwilligungserklärung</li>
          </ul>
          <p className="mt-2">
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
            Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständig ist die Datenschutzbehörde des
            Bundeslandes Nordrhein-Westfalen.
          </p>
        </Section>

        {/* SSL */}
        <Section icon={Lock} title="SSL- bzw. TLS-Verschlüsselung">
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie
            zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
            Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
            nicht von Dritten mitgelesen werden.
          </p>
        </Section>

        <p className="text-sm text-gray-500 text-center">
          Stand: Januar 2025 · {COMPANY.name}
        </p>
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
