import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { id: "leistungen", label: "Leistungen" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "ablauf", label: "Ablauf" },
  { id: "branchen", label: "Branchen" },
  { id: "galerie", label: "Galerie" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[96px] flex items-center justify-between">
        <a href="#top" data-testid="navbar-logo" className="flex items-center">
          <img
            src="/logo.png"
            alt="Bright Clean Gebäudereinigungs GmbH"
            className="h-24 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              href={`#${l.id}`}
              className="text-sm text-[#1A1A1A]/75 hover:text-[#0F4C81] px-3 py-2 rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            data-testid="navbar-call-button"
            href="tel:+4923187801141"
            className="hidden md:inline-flex items-center gap-2 text-sm text-[#0F4C81] px-3 py-2 rounded-full hover:bg-[#F7F9FC]"
          >
            <Phone className="w-4 h-4" /> +49 231 8780141
          </a>
          <a
            data-testid="navbar-cta-button"
            href="#kontakt"
            className="hidden md:inline-flex bc-btn-primary !py-2.5 !px-5 text-sm"
          >
            Angebot anfordern
          </a>
          <button
            data-testid="navbar-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200"
            aria-label="Menü öffnen"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="navbar-mobile-menu" className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 grid gap-1">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl hover:bg-[#F7F9FC] text-[15px]"
              >
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="bc-btn-primary mt-2 justify-center">
              Kostenloses Angebot anfordern
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
