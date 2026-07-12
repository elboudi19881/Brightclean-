import {
  Wrench, Sparkles, GlassWater, Building2, Briefcase, Bath,
  HardHat, HeartHandshake, Stethoscope, Scale, Layers, Trees,
  PackageOpen, Trash2, Star, Hotel, Store, Factory, GraduationCap, Baby,
  Home as HomeIcon
} from "lucide-react";

export const COMPANY = {
  name: "Bright-Clean-Gebäudereinigungs GmbH",
  short: "Bright Clean",
  phone: "+49 231 8780141",
  fax: "+49 231 8822481",
  email: "info@bright-clean.de",
  address: "Wellinghofer Str. 54, 44263 Dortmund",
  hrb: "HRB 25954",
  amtsgericht: "Amtsgericht Dortmund",
  euid: "DEDR2402.HRB25954",
  gruendung: "2013",
  geschaeftsfuehrer: "Khalid Zahote",
  stammkapital: "25.000 €",
  hours: "Mo – Fr: 08:00 – 18:00 Uhr",
  cities: ["Dortmund", "Bochum", "Witten", "Hagen", "Essen", "Hattingen"],
};

export const SERVICES = [
  {
    title: "Hausmeisterservice",
    slug: "hausmeisterservice",
    icon: Wrench,
    desc: "Zuverlässige Betreuung Ihrer Immobilie – von Kleinreparaturen bis Außenanlagenpflege.",
    heroImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop",
    intro: "Unser Hausmeisterservice übernimmt die komplette Betreuung Ihrer Immobilie – zuverlässig, flexibel und professionell. Von der regelmäßigen Wartung bis zu kurzfristigen Reparaturen sind wir Ihr verlässlicher Ansprechpartner vor Ort.",
    story: [
      {
        heading: "Ihre Immobilie in den besten Händen",
        text: "Eine gepflegte Immobilie braucht mehr als gelegentliche Reparaturen – sie braucht einen verlässlichen Partner, der täglich ein Auge darauf hat. Unser Hausmeisterservice ist genau das: ein erfahrenes Team, das Ihre Liegenschaft so betreut, als wäre es die eigene. Wir kennen jede Ecke, jeden Schaltkasten und jeden Wasserhahn – und handeln, bevor kleine Probleme zu großen werden.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&fit=crop",
      },
      {
        heading: "Rundum-Betreuung – von A bis Z",
        text: "Von der morgendlichen Kontrolle der Gemeinschaftsflächen über die Koordination von Handwerkern bis hin zum Winterdienst: Unser Hausmeister ist Ihr direkter Ansprechpartner vor Ort. Schnell, kompetent, mit einem Lächeln. Wir dokumentieren jeden Einsatz, damit Sie immer den vollen Überblick haben – transparent und nachvollziehbar.",
        img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Kleinreparaturen und Instandhaltung","Pflege von Außenanlagen","Winterdienst und Streupflicht","Überwachung haustechnischer Anlagen","Koordination von Handwerkern","Kontrolle der Gemeinschaftsflächen","Dokumentation und Protokollierung"],
    vorteile: ["Persönlicher Ansprechpartner","Flexible Einsatzzeiten","Schnelle Reaktionszeiten","Transparente Dokumentation"],
  },
  {
    title: "Unterhaltsreinigung",
    slug: "unterhaltsreinigung",
    icon: Sparkles,
    desc: "Tägliche, wöchentliche oder monatliche Reinigung für gleichbleibende Hygiene.",
    heroImg: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1400&q=85&fit=crop",
    intro: "Die Unterhaltsreinigung bildet das Fundament einer gepflegten Immobilie. Wir erstellen individuelle Reinigungspläne, die exakt auf Ihre Anforderungen abgestimmt sind – für dauerhaft hohe Sauberkeit.",
    story: [
      {
        heading: "Sauberkeit, die man spürt",
        text: "Stellen Sie sich vor, Sie kommen morgens ins Büro und alles glänzt. Die Böden sind frisch gewischt, die Oberflächen staubfrei, die Sanitäranlagen blitzen. Genau das leisten wir – jeden Tag, pünktlich und gründlich. Unsere Unterhaltsreinigung ist der unsichtbare Rückhalt, der dafür sorgt, dass Sie sich voll auf Ihr Geschäft konzentrieren können.",
        img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=900&q=85&fit=crop",
      },
      {
        heading: "Maßgeschneidert für Ihr Objekt",
        text: "Kein Objekt ist wie das andere. Deshalb entwickeln wir für jeden Kunden einen individuellen Reinigungsplan – mit den richtigen Intervallen, den richtigen Mitteln und dem richtigen Team. Ob täglich, wöchentlich oder nach Bedarf: Wir passen uns Ihrem Rhythmus an, nicht umgekehrt. Unsere Objektleiter überprüfen die Qualität regelmäßig.",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Tägliche, wöchentliche oder monatliche Intervalle","Reinigung aller Bodenbeläge","Staub- und Wischpflege","Sanitärreinigung","Küchen- und Pausenraumreinigung","Entleerung von Mülleimern","Qualitätskontrolle durch Objektleiter"],
    vorteile: ["Individuelle Reinigungspläne","Gleichbleibende Qualität","Zertifizierte Mittel","Fester Ansprechpartner"],
  },
  {
    title: "Glasreinigung",
    slug: "glasreinigung",
    icon: GlassWater,
    desc: "Streifenfreie Fenster, Glasfassaden und Lichtkuppeln – innen wie außen.",
    heroImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85&fit=crop",
    intro: "Saubere Glasflächen verbessern die Lichtverhältnisse und das Erscheinungsbild Ihrer Immobilie erheblich. Unser Team sorgt für streifenfreie Ergebnisse – von einzelnen Fenstern bis zur großen Glasfassade.",
    story: [
      {
        heading: "Wenn Licht durch saubere Scheiben fällt",
        text: "Schmutzige Fenster sind wie ein grauer Vorhang vor der Sonne. Saubere Glasflächen hingegen lassen mehr Licht herein, wirken einladend und heben das Wohlbefinden von Mitarbeitenden und Gästen spürbar. Unser Glasreinigungsteam arbeitet mit professionellen Heißwasser-Reinigungssystemen für ein streifenfreies Ergebnis, das überzeugt.",
        img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=85&fit=crop",
      },
      {
        heading: "Auch in großen Höhen sicher und professionell",
        text: "Glasfassaden, Lichtbänder und Lichtkuppeln stellen besondere Anforderungen an Ausrüstung und Know-how. Unsere Fachkräfte sind für Arbeiten in der Höhe ausgebildet und ausgestattet – sicher, versichert und mit dem richtigen Equipment. Wir kümmern uns um Objekte jeder Größenordnung.",
        img: "https://images.unsplash.com/photo-1565608087341-404b25492fee?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Fensterreinigung innen und außen","Glasfassaden und Strukturverglasung","Lichtkuppeln und Oberlichter","Schaufensteranlagen","Trennwände und Glasduschen","Wintergartenreinigung","Heißwasser-Reinigungssysteme"],
    vorteile: ["Streifenfreies Ergebnis","Auch in großer Höhe","Umweltfreundliche Mittel","Flexible Terminvereinbarung"],
  },
  {
    title: "Treppenhausreinigung",
    slug: "treppenhausreinigung",
    icon: Layers,
    desc: "Gepflegte Eingangsbereiche und Treppenhäuser für Wohn- und Geschäftsobjekte.",
    heroImg: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=85&fit=crop",
    intro: "Das Treppenhaus ist die Visitenkarte Ihres Gebäudes. Wir sorgen dafür, dass Eingangsbereiche, Flure und Treppenhäuser stets einen gepflegten und einladenden Eindruck hinterlassen.",
    story: [
      {
        heading: "Der erste Eindruck zählt – überall",
        text: "Schon beim Betreten eines Gebäudes entsteht der erste Eindruck. Ein sauberes, gepflegtes Treppenhaus signalisiert Qualität, Sorgfalt und Respekt gegenüber Bewohnern und Besuchern. Wir reinigen Treppenhäuser mit derselben Sorgfalt, die wir auch von uns selbst erwarten: gründlich, pünktlich und zuverlässig.",
        img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=85&fit=crop",
      },
      {
        heading: "Gemeinschaftsflächen, die wirklich sauber sind",
        text: "Handläufe, Briefkästen, Türgriffe – das sind die Flächen, die täglich von vielen Menschen berührt werden und deshalb besondere Aufmerksamkeit verdienen. Unser Team desinfiziert alle Kontaktflächen regelmäßig und protokolliert jeden Einsatz. Sie bekommen saubere Gemeinschaftsflächen und die Sicherheit, dass alles nach Plan läuft.",
        img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Reinigung aller Treppenstufen","Desinfektion von Handläufen","Reinigung von Türen und Briefkästen","Pflege aller Bodenbeläge","Reinigung der Fensterflächen","Entfernen von Spinnweben","Protokollierung der Einsätze"],
    vorteile: ["Feste Reinigungstermine","Hygienische Handläufe","Saubere Gemeinschaftsflächen","Transparente Kontrolle"],
  },
  {
    title: "Büroreinigung",
    slug: "buerorinigung",
    icon: Briefcase,
    desc: "Diskrete, gründliche Pflege Ihrer Büroflächen außerhalb der Arbeitszeiten.",
    heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&fit=crop",
    intro: "Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeitenden. Wir reinigen Ihre Büroflächen diskret und gründlich – meist nach Feierabend, damit der Betrieb nicht gestört wird.",
    story: [
      {
        heading: "Sauberkeit als Produktivitätsfaktor",
        text: "Studien zeigen: Mitarbeitende in sauberen, ordentlichen Büros sind produktiver, gesünder und zufriedener. Ein gepflegtes Arbeitsumfeld ist kein Luxus – es ist eine Investition in Ihr wichtigstes Kapital. Unser Team sorgt dafür, dass Ihr Büro jeden Morgen so aussieht, als wäre gerade erst eingezogen worden: frisch, sauber, einladend.",
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85&fit=crop",
      },
      {
        heading: "Diskret, pünktlich, unsichtbar",
        text: "Wir arbeiten, wenn Sie nicht da sind. Das schützt Ihre Betriebsabläufe und garantiert, dass Ihre Mitarbeitenden morgens ein frisch gereinigtes Büro vorfinden. Unsere Reinigungskräfte sind geschult, diskret und respektieren die Vertraulichkeit Ihres Arbeitsplatzes. Auf Wunsch können wir auch während der Öffnungszeiten arbeiten – leise und unauffällig.",
        img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Reinigung von Schreibtischen und Flächen","Boden- und Teppichpflege","Sanitärreinigung","Küchen- und Pausenräume","Mülleimer leeren","Glasreinigung von Trennwänden","Desinfektion von Türklinken und Tastaturen"],
    vorteile: ["Einsatz nach Feierabend","Diskretion garantiert","Qualitätskontrollen","Fester Ansprechpartner"],
  },
  {
    title: "Sanitärreinigung",
    slug: "sanitaerreinigung",
    icon: Bath,
    desc: "Hygienisch reine WC-Anlagen mit dokumentierten Kontrollintervallen.",
    heroImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=85&fit=crop",
    intro: "Hygienisch einwandfreie Sanitäranlagen sind ein Muss – für das Wohlbefinden Ihrer Mitarbeitenden und Gäste sowie zur Erfüllung gesetzlicher Hygienevorschriften.",
    story: [
      {
        heading: "Hygiene, die man riechen und sehen kann",
        text: "Nichts hinterlässt einen schlechteren Eindruck als vernachlässigte Sanitäranlagen. Unangenehme Gerüche, kalkige Armaturen und leere Seifenspender schaden dem Image und dem Wohlbefinden gleichermaßen. Unser Sanitärreinigungsteam sorgt dafür, dass Ihre WC-Anlagen nicht nur sauber sind – sie sollen makellos wirken und angenehm riechen.",
        img: "https://images.unsplash.com/photo-1620626011761-996317702b0e?w=900&q=85&fit=crop",
      },
      {
        heading: "Dokumentiert und nachvollziehbar",
        text: "Gerade in gewerblichen Einrichtungen, Restaurants oder Praxen sind Hygienenachweise Pflicht. Unser dokumentiertes Kontrollintervall-System gibt Ihnen jederzeit Sicherheit: Wer hat wann gereinigt? Was wurde verwendet? Wir protokollieren alles – für Sie und im Falle einer Kontrolle.",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Tiefenreinigung aller Sanitäreinrichtungen","Desinfektion von WC und Waschbecken","Armaturenpflege und Spiegelreinigung","Nachfüllung von Seifen- und Papierspendern","Geruchsneutralisierung","Dusch- und Umkleidereinigung","Dokumentierte Kontrollintervalle"],
    vorteile: ["Dokumentierte Reinigung","Keine Gerüche","Volle Hygieneeinhaltung","Flexible Intervalle"],
  },
  {
    title: "Bauendreinigung",
    slug: "bauendreinigung",
    icon: HardHat,
    desc: "Grundreinigung nach Bau- und Renovierungsarbeiten – bezugsfertig in Stunden.",
    heroImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&fit=crop",
    intro: "Nach Bau- oder Renovierungsarbeiten hinterlässt die Baustelle erhebliche Verunreinigungen. Unsere Bauendreinigung bringt Ihr Objekt schnell und gründlich in bezugsfertigen Zustand.",
    story: [
      {
        heading: "Von der Baustelle zum Traumobjekt",
        text: "Der Countdown läuft: Bauherren und Vermieter brauchen nach Abschluss der Bauarbeiten schnell ein bezugsfertig gereinigtes Objekt. Betonstaub, Klebebandreste, Silikonspritzer, Farbflecken – all das verschwindet durch unsere Bauendreinigung spurlos. Wir kennen die besonderen Herausforderungen von Baustellen und bringen das richtige Equipment mit.",
        img: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=900&q=85&fit=crop",
      },
      {
        heading: "Schnell, gründlich, übergabefertig",
        text: "Zeit ist Geld – besonders nach Bau- und Renovierungsprojekten. Deshalb arbeiten wir mit einem eingespielten Team und effizienten Methoden: In der Regel haben wir Ihr Objekt innerhalb weniger Stunden bezugsfertig. Auf Wunsch erstellen wir ein Übergabeprotokoll, das den Zustand des Objekts nach unserer Reinigung dokumentiert.",
        img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Entfernung von Staub und Bauschutt","Reinigung von Fenstern und Rahmen","Boden-, Wand- und Deckenreinigung","Entfernung von Klebebandresten","Sanitärreinigung","Abschlussreinigung","Übergabeprotokoll auf Wunsch"],
    vorteile: ["Bezugsfertig in Stunden","Erfahrenes Fachteam","Schnelle Einsatzbereitschaft","Protokoll auf Wunsch"],
  },
  {
    title: "Alten- & Pflegeheime",
    slug: "alten-pflegeheime",
    icon: HeartHandshake,
    desc: "Sensible Reinigung mit höchstem Hygienestandard für Pflegeeinrichtungen.",
    heroImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=85&fit=crop",
    intro: "In Pflegeeinrichtungen gelten besonders hohe Hygienestandards. Unser geschultes Team arbeitet sensibel, rücksichtsvoll und nach den Richtlinien des Robert Koch-Instituts (RKI).",
    story: [
      {
        heading: "Würde und Hygiene – beides zählt",
        text: "In Pflegeheimen und Alteneinrichtungen geht es nicht nur um Sauberkeit – es geht um Würde und Respekt. Unsere Reinigungskräfte sind speziell für die Arbeit in sensiblen Umgebungen geschult: rücksichtsvoll, leise und einfühlsam im Umgang mit Bewohnern. Gleichzeitig erfüllen wir höchste Hygieneanforderungen, um die Gesundheit aller zu schützen.",
        img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=85&fit=crop",
      },
      {
        heading: "RKI-konforme Reinigung, lückenlos dokumentiert",
        text: "Wir reinigen und desinfizieren nach den aktuellen Richtlinien des Robert Koch-Instituts. Alle Einsätze werden lückenlos protokolliert – damit bei Kontrollen durch Gesundheitsbehörden alles nachvollziehbar ist. Unsere Reinigungskräfte werden regelmäßig geschult und sind mit dem notwendigen Schutzequipment ausgestattet.",
        img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Reinigung nach RKI-Richtlinien","Zimmerreinigung mit Rücksicht auf Bewohner","Flur- und Gemeinschaftsreinigung","Sanitärhygiene und Desinfektion","Wäscheservice auf Anfrage","Hygieneprotokolle","Regelmäßige Schulungen"],
    vorteile: ["RKI-konforme Reinigung","Geschultes Personal","Sensibles Arbeiten","Lückenlose Dokumentation"],
  },
  {
    title: "Arztpraxen",
    slug: "arztpraxen",
    icon: Stethoscope,
    desc: "Praxisreinigung nach RKI-Richtlinien für Praxen, MVZ und Kliniken.",
    heroImg: "https://images.unsplash.com/photo-1631815588090-d4bfec5b7ccb?w=1400&q=85&fit=crop",
    intro: "Die Reinigung medizinischer Einrichtungen erfordert höchste Fachkompetenz und strikte Einhaltung der Hygienevorschriften – für maximale Patientensicherheit.",
    story: [
      {
        heading: "Patientensicherheit beginnt mit Sauberkeit",
        text: "In einer Arztpraxis ist Hygiene keine Option – sie ist gesetzliche Pflicht und moralische Verpflichtung. Krankheitserreger, Viren und Bakterien haben in einer sauberen Praxis keinen Platz. Unser Team reinigt und desinfiziert alle patientennahen Flächen nach den aktuellen RKI-Richtlinien – zuverlässig und mit dem richtigen Desinfektionsmittel für jeden Bereich.",
        img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&q=85&fit=crop",
      },
      {
        heading: "Diskret, fachgerecht und vollständig dokumentiert",
        text: "Wir wissen, dass in einer Praxis Datenschutz und Vertraulichkeit absolute Priorität haben. Unsere Reinigungskräfte sind entsprechend unterwiesen und arbeiten diskret. Alle Reinigungseinsätze werden schriftlich protokolliert – ein wichtiges Dokument für behördliche Kontrollen und die Qualitätssicherung Ihrer Praxis.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Desinfektion patientennaher Flächen","Wartezimmer- und Flurreinigung","Behandlungsraumreinigung","Sterilraumreinigung","Abfallentsorgung nach Recht","Schriftliche Hygieneprotokolle","Einhaltung aller Vorgaben"],
    vorteile: ["RKI-Zertifizierung","Fachgerechte Entsorgung","Datenschutzkonform","Erfahrenes Hygieneteam"],
  },
  {
    title: "Anwaltskanzleien",
    slug: "anwaltskanzleien",
    icon: Scale,
    desc: "Vertrauliche, leise Reinigung für Kanzleien und Beratungsbüros.",
    heroImg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=85&fit=crop",
    intro: "In Anwaltskanzleien zählen Vertraulichkeit und Diskretion absolut. Unser Team arbeitet leise, zuverlässig und ohne empfindliche Unterlagen zu berühren.",
    story: [
      {
        heading: "Vertrauen als Grundlage jedes Einsatzes",
        text: "In einer Anwaltskanzlei liegen Geheimnisse – Mandatenakten, Vertragsunterlagen, sensible Daten. Unser Reinigungsteam weiß das und verhält sich entsprechend. Wir berühren keine Akten, öffnen keine Schreibtischschubladen und stellen keine Fragen. Auf Wunsch unterzeichnen wir eine Verschwiegenheitsverpflichtung. Vertrauen ist die Basis unserer Arbeit.",
        img: "https://images.unsplash.com/photo-1521587765099-8835e7201186?w=900&q=85&fit=crop",
      },
      {
        heading: "Leise, gründlich, unsichtbar",
        text: "Wir reinigen Ihre Kanzlei vorzugsweise außerhalb der Bürozeiten – früh morgens, spät abends oder am Wochenende. So bleibt Ihr Kanzleibetrieb ungestört. Besprechungsräume werden besonders sorgfältig gepflegt – denn hier entscheidet der erste Eindruck im Mandantengespräch.",
        img: "https://images.unsplash.com/photo-1497366858526-0766adfd78a9?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Reinigung außerhalb der Bürozeiten","Keine Berührung vertraulicher Unterlagen","Besprechungsraumreinigung","Boden- und Flächenpflege","Sanitärreinigung","Glasreinigung","NDA auf Wunsch"],
    vorteile: ["Absolute Diskretion","Außerhalb der Öffnungszeiten","NDA auf Wunsch","Fachgerechte Pflege"],
  },
  {
    title: "Fassadenreinigung",
    slug: "fassadenreinigung",
    icon: Building2,
    desc: "Schonende Reinigung von Fassaden, Klinker, Glas und Metallpaneelen.",
    heroImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85&fit=crop",
    intro: "Eine saubere Fassade steigert den Wert und das Erscheinungsbild Ihrer Immobilie erheblich. Wir reinigen materialgerecht und schonend – egal ob Klinker, Putz, Glas oder Metall.",
    story: [
      {
        heading: "Das Gesicht Ihrer Immobilie verdient Pflege",
        text: "Die Fassade ist das Gesicht eines Gebäudes. Verschmutzungen, Algenbefall, Graffiti oder Verwitterungserscheinungen senden die falsche Botschaft. Professionelle Fassadenreinigung hingegen wertet jede Immobilie auf, verlängert die Lebensdauer des Materials und spart langfristig teure Sanierungskosten.",
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=85&fit=crop",
      },
      {
        heading: "Material kennen, schonend reinigen",
        text: "Klinker, Naturstein, Verputz, Glas, Metall – jedes Material hat andere Anforderungen. Wir kennen die Unterschiede und wählen das jeweils passende Verfahren: Niederdruckreinigung für empfindliche Flächen, Hochdruckreinigung für hartnäckige Verschmutzungen. Auf Wunsch bieten wir auch Imprägnierungen an, die Ihre Fassade langfristig schützen.",
        img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Niederdruck- und Hochdruckreinigung","Graffiti-Entfernung","Klinker- und Putzreinigung","Glas- und Metallfassaden","Algen- und Moosbeseitigung","Imprägnierung auf Wunsch","Dokumentation vor/nach"],
    vorteile: ["Materialschonend","Professionelles Equipment","Wertsteigerung","Nachhaltiger Schutz"],
  },
  {
    title: "Grünanlagenpflege",
    slug: "gruenaulagenpflege",
    icon: Trees,
    desc: "Rasen, Hecken, Wege und Winterdienst – Ihre Außenanlage in Topform.",
    heroImg: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=85&fit=crop",
    intro: "Gepflegte Außenanlagen schaffen Wohlbefinden und steigern die Attraktivität Ihrer Immobilie. Wir übernehmen die ganzjährige Pflege – von der Rasenpflege bis zum Winterdienst.",
    story: [
      {
        heading: "Grüne Oasen, die einladen",
        text: "Ein gepflegter Garten oder eine attraktive Außenanlage heben jede Immobilie auf ein neues Level. Ob Wohnanlage, Gewerbeobjekt oder öffentliche Einrichtung – grüne, gepflegte Außenbereiche sorgen für Wohlbefinden, laden zum Verweilen ein und steigern nachweislich den Wert der Liegenschaft. Unser Grünanlagenteam bringt das gärtnerische Know-how für alle Arten von Außenanlagen mit.",
        img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&q=85&fit=crop",
      },
      {
        heading: "Ganzjährig verlässlich – Sommer wie Winter",
        text: "Im Frühjahr setzen wir Ihren Garten in Szene, im Sommer halten wir alles in Topform, im Herbst sorgen wir für eine gründliche Laubentsorgung – und im Winter übernehmen wir den Winterdienst, damit Ihre Gehwege sicher und räumungspflichtig freigehalten werden. Ganzjährig, zuverlässig.",
        img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Rasenmähen und Kantenschnitt","Heckenschnitt und Baumpflege","Unkrautentfernung","Laubentsorgung","Winterdienst","Bewässerung und Düngen","Bepflanzung auf Wunsch"],
    vorteile: ["Ganzjährige Betreuung","Erfahrene Gärtner","Winterdienst inklusive","Individuelle Pflegepläne"],
  },
  {
    title: "Haushaltsauflösungen",
    slug: "haushaltsaufloesungen",
    icon: PackageOpen,
    desc: "Komplette Auflösung inkl. Entsorgung, Wertanrechnung und besenrein.",
    heroImg: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=85&fit=crop",
    intro: "Eine Haushaltsauflösung ist oft eine emotionale und organisatorische Herausforderung. Wir übernehmen den gesamten Prozess – professionell, diskret und mit Wertanrechnung.",
    story: [
      {
        heading: "Ein schwerer Schritt – wir machen ihn leichter",
        text: "Ob nach einem Todesfall, einem Umzug ins Pflegeheim oder einem Neuanfang: Die Auflösung eines Haushalts ist oft emotional belastend und logistisch komplex. Wir nehmen Ihnen diese Last ab – respektvoll, diskret und professionell. Unser Team sortiert, verwertet, entsorgt und hinterlässt die Wohnung besenrein. Alles aus einer Hand, ohne Stress für Sie.",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&fit=crop",
      },
      {
        heading: "Wertanrechnung: Das Gute kommt zu Geld",
        text: "Viele Gegenstände aus Haushaltsauflösungen haben noch echten Wert – Möbel, Elektronik, Schmuck oder Antiquitäten. Wir prüfen, was verwertbar ist und rechnen den Erlös direkt auf die Räumungskosten an. So sparen Sie bares Geld und Ihre Wertsachen landen nicht im Müll, sondern dort, wo sie wieder gebraucht werden.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Vollständige Wohnungsräumung","Sortierung von Verwertbarem","Fachgerechte Entsorgung","Wertanrechnung","Besenreine Übergabe","Endreinigung auf Wunsch","Diskrete Durchführung"],
    vorteile: ["Wertanrechnung möglich","Besenreine Übergabe","Diskrete Abwicklung","Umweltgerechte Entsorgung"],
  },
  {
    title: "Entrümpelung",
    slug: "entruempelung",
    icon: Trash2,
    desc: "Schnelle Entrümpelung von Keller, Dachboden, Garage oder Gewerbeobjekt.",
    heroImg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85&fit=crop",
    intro: "Ob Keller, Dachboden, Garage oder Gewerbefläche – wir entrümpeln schnell, gründlich und zuverlässig. Mit eigenem Fahrzeug und direktem Zugang zu Entsorgungsfachbetrieben.",
    story: [
      {
        heading: "Platz schaffen – schnell und gründlich",
        text: "Jahrelang angesammelte Dinge, die keiner mehr braucht: alter Hausrat im Keller, Gerümpel auf dem Dachboden, ausrangiertes Büromobiliar. Was einmal gebraucht wurde, belegt heute wertvollen Platz. Unser Entrümpelungsteam schafft in kürzester Zeit Ordnung – mit eigenem Transporter, dem nötigen Manpower und dem Wissen, was wohin gehört.",
        img: "https://images.unsplash.com/photo-1601760562234-9814eea6db90?w=900&q=85&fit=crop",
      },
      {
        heading: "Entsorgung mit Verantwortung",
        text: "Wir entsorgen fachgerecht – Sperrmüll, Elektroschrott, Sondermüll, alles nach den geltenden Vorschriften. Was recycelt werden kann, wird recycelt. Was noch funktioniert, wird wo immer möglich einer Wiederverwendung zugeführt. So schonen wir die Umwelt und Ihren Geldbeutel. Nach der Entrümpelung hinterlassen wir die Fläche besenrein.",
        img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Keller-, Dachboden- und Garagenentrümpelung","Räumung von Gewerbeobjekten","Abtransport mit eigenem Fahrzeug","Fachgerechte Entsorgung","Sondermüllentsorgung","Besenreine Übergabe","Terminvergabe oft innerhalb 24h"],
    vorteile: ["Schneller Einsatz","Eigenes Fahrzeug","Fachgerechte Entsorgung","Faire Preise"],
  },
  {
    title: "Sonderreinigungen",
    slug: "sonderreinigungen",
    icon: Star,
    desc: "Sonderaufträge nach Maß – Veranstaltungen, Notfälle, Spezialreinigung.",
    heroImg: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=1400&q=85&fit=crop",
    intro: "Manche Situationen erfordern sofortige, spezialisierte Reinigungsmaßnahmen. Ob nach einer Veranstaltung, bei einem Notfall oder für besondere Anforderungen – wir sind schnell vor Ort.",
    story: [
      {
        heading: "Wenn das Gewöhnliche nicht reicht",
        text: "Manche Reinigungsaufgaben sprengen den Rahmen des Alltäglichen. Eine Halle nach einer großen Veranstaltung, ein Büro nach einem Wasserschaden, ein Fahrzeug nach einem Unfall – für solche Situationen brauchen Sie ein Team, das sofort reagiert und das nötige Equipment mitbringt. Genau das sind wir: schnell, kompetent, mit dem richtigen Handwerkszeug.",
        img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=900&q=85&fit=crop",
      },
      {
        heading: "Individuell, flexibel, rund um die Uhr",
        text: "Sonderreinigungen folgen keinem festen Plan – sie folgen dem, was gerade gebraucht wird. Unser Bereitschaftsteam steht für Notfalleinsätze rund um die Uhr zur Verfügung. Wir entwickeln gemeinsam mit Ihnen die passende Lösung für jeden Sonderfall – transparent in der Preisgestaltung, verlässlich in der Durchführung und professionell im Ergebnis.",
        img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85&fit=crop",
      },
    ],
    leistungen: ["Veranstaltungsreinigung","Notfallreinigung bei Schäden","Reinigung nach Vandalismus","Industrie- und Maschinenreinigung","Geruchsbeseitigung","Reinigung nach Schädlingsbefall","Individuelle Sonderlösungen"],
    vorteile: ["24h-Notfalleinsatz","Spezialisiertes Equipment","Individuelle Lösungen","Schnelle Reaktionszeit"],
  },
];

export const ADVANTAGES = [
  "über 10 Jahre Erfahrung",
  "geschultes Fachpersonal",
  "modernste Reinigungstechnik",
  "faire Preise",
  "schnelle Reaktionszeiten",
  "individuelle Lösungen",
  "höchste Hygienestandards",
  "flexible Einsatzzeiten",
  "zuverlässiger Kundenservice",
];

export const PROCESS = [
  { step: "01", title: "Kontakt aufnehmen", desc: "Sie senden uns eine Anfrage – telefonisch, per E-Mail oder über das Formular." },
  { step: "02", title: "Kostenlose Besichtigung", desc: "Wir vereinbaren einen Termin vor Ort und nehmen Ihre Anforderungen auf." },
  { step: "03", title: "Individuelles Angebot", desc: "Sie erhalten ein transparentes, schriftliches Festpreisangebot." },
  { step: "04", title: "Professionelle Reinigung", desc: "Unser geschultes Team führt die Reinigung pünktlich und gründlich durch." },
  { step: "05", title: "Qualitätskontrolle", desc: "Regelmäßige Kontrollen sichern dauerhaft hohe Qualität." },
];

export const INDUSTRIES = [
  { label: "Büros", icon: Briefcase },
  { label: "Wohnanlagen", icon: HomeIcon },
  { label: "Arztpraxen", icon: Stethoscope },
  { label: "Pflegeheime", icon: HeartHandshake },
  { label: "Kanzleien", icon: Scale },
  { label: "Hotels", icon: Hotel },
  { label: "Einzelhandel", icon: Store },
  { label: "Industriehallen", icon: Factory },
  { label: "Schulen", icon: GraduationCap },
  { label: "Kindergärten", icon: Baby },
];

export const TESTIMONIALS = [
  { name: "Dr. M. Lehmann", role: "Praxisinhaber, Dortmund", text: "Sehr zuverlässig und professionelle Arbeit. Unsere Praxis ist seit Jahren bei Bright Clean in den besten Händen.", stars: 5 },
  { name: "S. Bergmann", role: "Hausverwaltung, Bochum", text: "Seit Jahren unser Reinigungspartner. Kommunikation, Pünktlichkeit und Ergebnis stimmen einfach.", stars: 5 },
  { name: "T. Wagner", role: "Geschäftsführer, Witten", text: "Pünktlich, sauber und freundlich. Genau so stellt man sich Gebäudereinigung vor.", stars: 5 },
  { name: "A. Köhler", role: "Office Manager, Hagen", text: "Ein Team, das mitdenkt. Unsere Büros wurden seit dem Wechsel zu Bright Clean spürbar besser gepflegt.", stars: 5 },
];

export const FAQS = [
  { q: "Wie schnell erhalten wir ein Angebot?", a: "In der Regel innerhalb von 24 Stunden nach Ihrer Anfrage. Bei größeren Objekten vereinbaren wir vorab eine kostenfreie Besichtigung." },
  { q: "In welchen Städten arbeiten Sie?", a: "Wir sind in Dortmund, Bochum, Witten, Hagen, Essen, Hattingen und Umgebung im Einsatz – Sondereinsätze deutschlandweit auf Anfrage." },
  { q: "Sind Ihre Mitarbeiter versichert?", a: "Ja. Alle Mitarbeitenden sind sozialversicherungspflichtig angestellt und über eine umfassende Betriebshaftpflicht abgesichert." },
  { q: "Welche Reinigungsmittel werden verwendet?", a: "Wir setzen auf zertifizierte, umweltfreundliche Mittel sowie professionelle Maschinen – schonend für Mensch, Material und Umwelt." },
  { q: "Bieten Sie regelmäßige Reinigung an?", a: "Selbstverständlich. Wir erstellen individuelle Reinigungspläne – täglich, wöchentlich, monatlich oder nach Bedarf." },
  { q: "Wie funktioniert die Qualitätskontrolle?", a: "Objektleiter führen regelmäßige Begehungen durch und dokumentieren Ergebnisse. Sie erhalten einen festen Ansprechpartner." },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGNsZWFufGVufDB8fHx8MTc4MjU0MDY4MHww&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/10567360/pexels-photo-10567360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNsaW5pYyUyMGludGVyaW9yfGVufDB8fHx8MTc4MjU0MDY5NHww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1549637642-90187f64f420?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZ3xlbnwwfHx8fDE3ODI1NDA2ODB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGNsZWFufGVufDB8fHx8MTc4MjU0MDY4MHww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHxjbGVhbiUjbGluaWMlMjBpbnRlcmlvcnxlbnwwfHx8fDE3ODI1NDA2OTR8MA&ixlib=rb-4.1.0&q=85",
];

export const HERO_IMG = "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZ3xlbnwwfHx8fDE3ODI1NDA2ODB8MA&ixlib=rb-4.1.0&q=85";

export const ABOUT_IMG = "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHN0YWZmfGVufDB8fHx8MTc4MjU0MDY4MHww&ixlib=rb-4.1.0&q=85";

export const STATS = [
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 500, suffix: "+", label: "Zufriedene Kunden" },
  { value: 2500, suffix: "+", label: "Abgeschlossene Projekte" },
  { value: 100, suffix: "%", label: "Qualitätsorientiert" },
];
