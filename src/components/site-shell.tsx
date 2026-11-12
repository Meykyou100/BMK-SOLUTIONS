import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/bmk-solutions-logo.png.asset.json";
import { WHATSAPP_NUMBER } from "@/lib/quote-message";
import { navigation, phoneNumber, services, whatsappUrl } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        Votre partenaire sécurité & équipements professionnels au Maroc
        <a href={`tel:${WHATSAPP_NUMBER}`} className="announcement-phone">
          <Phone aria-hidden="true" size={13} /> {phoneNumber}
        </a>
      </div>

      <header className="site-header">
        <Link to="/" className="brand-link" aria-label="BMK SOLUTIONS — Accueil">
          <img className="brand-image" src={logo.url} alt="BMK SOLUTIONS — Sécurité, Électricité, Énergie" width={144} height={72} />
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <nav id="main-navigation" className={`main-navigation${menuOpen ? " main-navigation-open" : ""}`} aria-label="Navigation principale">
          <Link to="/" onClick={closeMenu}>Accueil</Link>
          {navigation.map((item) => (
            <Link key={item.label} to={item.to} {...(item.hash ? { hash: item.hash } : {})} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Button asChild className="header-cta">
            <Link to="/devis" onClick={closeMenu}>
              Demander un devis <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <div className="footer-brand">
            <Link to="/" aria-label="Retour à l'accueil">
              <img src={logo.url} alt="BMK SOLUTIONS — Sécurité, Électricité, Énergie" width={156} height={78} loading="lazy" />
            </Link>
            <p>Spécialiste en solutions de sécurité et équipements professionnels.</p>
          </div>
          <div className="footer-links">
            <h2>Navigation</h2>
            <Link to="/">Accueil</Link>
            {navigation.map(({ to, hash, label }) => (
              <Link key={label} to={to} {...(hash ? { hash } : {})}>{label}</Link>
            ))}
          </div>
          <div className="footer-links footer-services">
            <h2>Nos services</h2>
            {services.map(({ number, title }) => (
              <Link key={number} to="/" hash="services">{title}</Link>
            ))}
          </div>
          <div className="footer-contact">
            <h2>Parlons de votre projet</h2>
            <a href={`tel:${WHATSAPP_NUMBER}`}>{phoneNumber}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Un message sur WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a>
            <Link to="/contact">Bine Lamdoune, Rue 45, N°12, Maroc</Link>
            <Button asChild size="sm" className="footer-cta">
              <Link to="/devis">Demander un devis <ArrowRight size={14} aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© 2026 BMK SOLUTIONS. Tous droits réservés.</span>
          <Link to="/">Sécurité · Électricité · Énergie <ArrowRight size={13} aria-hidden="true" /></Link>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter BMK SOLUTIONS sur WhatsApp"><MessageCircle aria-hidden="true" size={22} /><span>WhatsApp</span></a>
    </>
  );
}
