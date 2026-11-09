import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronRight,
  Headset,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bmk-security-hero.jpg";
import alarmImage from "@/assets/bmk-services-security.jpg";
import equipmentImage from "@/assets/bmk-services-professional.jpg";
import chargingImage from "@/assets/bmk-services-ev.jpg";
import logo from "@/assets/bmk-solutions-logo.png.asset.json";
import { createQuoteMessageUrl, WHATSAPP_NUMBER } from "@/lib/quote-message";

const phoneNumber = "+212 662 133 371";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

const navigation = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Nos services" },
  { href: "#apropos", label: "À propos" },
  { href: "#engagements", label: "Nos engagements" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    number: "01",
    title: "Vidéosurveillance",
    description:
      "Des caméras haute définition et une installation pensée pour protéger vos espaces.",
    image: heroImage,
    alt: "Caméra de vidéosurveillance installée dans des bureaux modernes",
    icon: Camera,
  },
  {
    number: "02",
    title: "Systèmes anti-intrusion",
    description:
      "Alarmes et dispositifs de détection adaptés à votre habitation ou votre activité.",
    image: alarmImage,
    alt: "Technicien configurant un système d'alarme professionnel",
    icon: ShieldAlert,
  },
  {
    number: "03",
    title: "Serrures intelligentes",
    description:
      "Un contrôle d'accès moderne pour gérer les entrées simplement et en toute confiance.",
    image: null,
    alt: "",
    icon: LockKeyhole,
  },
  {
    number: "04",
    title: "Matériel bureautique",
    description:
      "Imprimantes et équipements essentiels pour le fonctionnement de votre bureau.",
    image: equipmentImage,
    alt: "Imprimante multifonction installée dans un bureau professionnel",
    icon: Printer,
  },
  {
    number: "05",
    title: "Bornes de recharge",
    description:
      "Des solutions de recharge de véhicules électriques pour les particuliers et les professionnels.",
    image: chargingImage,
    alt: "Borne de recharge électrique installée devant des bureaux",
    icon: Zap,
  },
];

const promises = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Selon vos besoins",
    text: "Chaque solution s'adapte à votre espace, à votre activité et à vos attentes.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Du matériel moderne",
    text: "Des équipements actuels sélectionnés pour leur utilité au quotidien.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installation soignée",
    text: "Un accompagnement professionnel, du choix du matériel à sa mise en place.",
  },
  {
    number: "04",
    icon: Headset,
    title: "À votre écoute",
    text: "Un interlocuteur disponible pour comprendre votre projet et vous conseiller.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BMK SOLUTIONS | Sécurité, vidéosurveillance et équipements professionnels" },
      {
        name: "description",
        content:
          "BMK SOLUTIONS vous accompagne au Maroc en vidéosurveillance, alarmes, serrures intelligentes, matériel bureautique et bornes de recharge.",
      },
      { property: "og:title", content: "BMK SOLUTIONS | Sécurité et équipements professionnels" },
      {
        property: "og:description",
        content:
          "Découvrez les solutions de sécurité, de vidéosurveillance et d'équipements professionnels proposées par BMK SOLUTIONS au Maroc.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState("");

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError("Veuillez saisir une adresse e-mail valide.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setFormError("Veuillez saisir un numéro de téléphone valide.");
      return;
    }

    setFormError("");
    const url = createQuoteMessageUrl({
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      phone,
      email,
      service: String(formData.get("service") ?? ""),
      projectType: String(formData.get("projectType") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

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
        <a href="#accueil" className="brand-link" aria-label="BMK SOLUTIONS — Accueil">
          <img className="brand-image" src={logo.url} alt="BMK SOLUTIONS — Sécurité, Électricité, Énergie" width={144} height={72} />
        </a>

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
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button asChild className="header-cta">
            <a href="#devis" onClick={() => setMenuOpen(false)}>
              Demander un devis <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="accueil" aria-labelledby="hero-title">
          <img className="hero-background" src={heroImage} alt="" width={1536} height={1024} fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content site-container">
            <p className="eyebrow hero-eyebrow"><span /> L'expertise BMK SOLUTIONS</p>
            <h1 id="hero-title">Votre sécurité et votre performance, <span>notre priorité.</span></h1>
            <p className="hero-description">
              Des solutions intelligentes de sécurité, de surveillance et d'équipements professionnels, adaptées à vos besoins.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="button-gold">
                <a href="#devis">Parlons de votre projet <ArrowRight aria-hidden="true" /></a>
              </Button>
              <a className="hero-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={18} /> Contacter sur WhatsApp
              </a>
            </div>
            <div className="hero-footnote"><span className="hero-footnote-line" /> Sécurité · Électricité · Énergie</div>
          </div>
          <a className="hero-scroll" href="#services" aria-label="Découvrir nos services"><ArrowDown size={19} aria-hidden="true" /></a>
          <div className="hero-index"><span>01</span><i /> 05</div>
        </section>

        <section className="services-section section-pad" id="services" aria-labelledby="services-title">
          <div className="site-container">
            <div className="section-heading services-heading">
              <div>
                <p className="eyebrow"><span /> Des solutions qui protègent et accompagnent</p>
                <h2 id="services-title">L'essentiel pour <span>aller plus loin.</span></h2>
              </div>
              <p className="section-intro">De la sécurité de vos locaux aux équipements de votre quotidien professionnel, nous vous aidons à trouver la solution qui vous convient.</p>
            </div>

            <div className="services-grid">
              {services.map(({ number, title, description, image, alt, icon: Icon }) => (
                <article className={`service-item${image ? "" : " service-item-no-image"}`} key={number}>
                  <a className={`service-visual${image ? "" : " service-visual-illustrated"}`} href="#devis" aria-label={`Demander un devis pour ${title}`}>
                    {image ? (
                      <img src={image} alt={alt} width={1024} height={1024} loading="lazy" />
                    ) : (
                      <div className="lock-illustration"><Icon size={58} strokeWidth={1.15} aria-hidden="true" /><span>SERRURES CONNECTÉES</span></div>
                    )}
                    <span className="service-number">{number}</span>
                    <span className="service-arrow"><ArrowUpRight aria-hidden="true" size={20} /></span>
                  </a>
                  <div className="service-copy">
                    <div className="service-title-line"><Icon className="service-icon" aria-hidden="true" size={18} /><h3>{title}</h3></div>
                    <p>{description}</p>
                    <a className="text-link" href="#devis">En savoir plus <ChevronRight aria-hidden="true" size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="apropos" aria-labelledby="about-title">
          <div className="about-layout">
            <div className="about-photo-wrap">
              <img src={heroImage} alt="Installation de vidéosurveillance dans des bureaux professionnels au Maroc" width={1536} height={1024} loading="lazy" />
              <div className="about-photo-caption"><span className="caption-icon"><ShieldCheck aria-hidden="true" size={19} /></span><span><strong>BMK SOLUTIONS</strong><small>Votre partenaire au quotidien</small></span></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span /> Une présence de confiance</p>
              <h2 id="about-title">Des solutions pensées <span>autour de vous.</span></h2>
              <p>BMK SOLUTIONS est une entreprise spécialisée dans les solutions de sécurité et les équipements professionnels. Nous proposons des produits et des installations adaptés aux besoins des particuliers, des entreprises et des professionnels.</p>
              <p>Notre objectif : vous accompagner avec des solutions fiables, modernes et performantes, à chaque étape de votre projet.</p>
              <a className="text-link about-link" href="#devis">Échangeons sur vos besoins <ArrowRight aria-hidden="true" size={16} /></a>
              <div className="about-rule"><span /> Sécurité&nbsp; · &nbsp;Électricité&nbsp; · &nbsp;Énergie</div>
            </div>
          </div>
        </section>

        <section className="promise-section section-pad" id="engagements" aria-labelledby="promise-title">
          <div className="site-container">
            <div className="promise-topline"><p className="eyebrow eyebrow-light"><span /> Le sens du service, tout simplement</p><span className="promise-outline">BMK / 2026</span></div>
            <div className="promise-heading"><h2 id="promise-title">La bonne solution,<br /> <span>au bon endroit.</span></h2><p>Un accompagnement clair, des équipements adaptés et une attention portée à chaque détail de votre projet.</p></div>
            <div className="promise-grid">
              {promises.map(({ number, icon: Icon, title, text }) => (
                <article className="promise-item" key={number}>
                  <span className="promise-index">{number}</span>
                  <Icon className="promise-icon" size={25} strokeWidth={1.55} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section section-pad" id="devis" aria-labelledby="quote-title">
          <div className="site-container quote-layout">
            <div className="quote-intro">
              <p className="eyebrow"><span /> Concrétisons votre projet</p>
              <h2 id="quote-title">Parlons de <span>vos besoins.</span></h2>
              <p>Décrivez-nous votre projet. Votre demande sera préparée dans un message WhatsApp pour notre équipe.</p>
              <a className="quote-phone" href={`tel:${WHATSAPP_NUMBER}`}><span><Phone size={18} aria-hidden="true" /></span><span><small>Appelez-nous directement</small><strong>{phoneNumber}</strong></span><ArrowUpRight size={17} aria-hidden="true" /></a>
              <div className="quote-privacy"><Check size={15} aria-hidden="true" /> Aucune demande ne sera envoyée sans votre accord.</div>
            </div>

            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <div className="form-topline"><div><span className="form-overline">DEMANDE DE DEVIS</span><p>Les champs marqués * sont obligatoires.</p></div><span className="form-reference">BMK — MA</span></div>

              <div className="form-grid">
                <label className="form-field" htmlFor="quote-name">Nom et prénom <span>*</span><input id="quote-name" name="name" type="text" autoComplete="name" placeholder="Votre nom" required /></label>
                <label className="form-field" htmlFor="quote-company">Entreprise <span className="optional-label">Facultatif</span><input id="quote-company" name="company" type="text" autoComplete="organization" placeholder="Nom de votre entreprise" /></label>
                <label className="form-field" htmlFor="quote-phone">Téléphone <span>*</span><input id="quote-phone" name="phone" type="tel" autoComplete="tel" placeholder="+212 6 00 00 00 00" minLength={8} required /></label>
                <label className="form-field" htmlFor="quote-email">Adresse e-mail <span>*</span><input id="quote-email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.ma" required /></label>
                <label className="form-field" htmlFor="quote-service">Service souhaité <span>*</span><select id="quote-service" name="service" defaultValue="" required><option value="" disabled>Choisir un service</option>{services.map(({ number, title }) => <option key={number} value={title}>{title}</option>)}</select></label>
                <label className="form-field" htmlFor="quote-project">Type de projet <span>*</span><input id="quote-project" name="projectType" type="text" placeholder="Ex. équipement d'un commerce" required /></label>
                <label className="form-field form-field-full" htmlFor="quote-description">Décrivez votre besoin <span>*</span><textarea id="quote-description" name="description" rows={4} placeholder="Quelques détails sur votre projet…" required /></label>
              </div>

              {formError && <p className="form-error" role="alert">{formError}</p>}
              <Button type="submit" size="lg" className="submit-button">Envoyer ma demande sur WhatsApp <ArrowRight aria-hidden="true" size={17} /></Button>
              <p className="form-note"><MessageCircle size={14} aria-hidden="true" /> Votre message s'ouvrira dans WhatsApp pour envoi.</p>
            </form>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-container contact-layout">
            <div className="contact-heading"><p className="eyebrow"><span /> Toujours là pour vous</p><h2 id="contact-title">Restons <span>en contact.</span></h2></div>
            <a className="contact-detail" href={`tel:${WHATSAPP_NUMBER}`}><span className="contact-icon"><Phone size={18} aria-hidden="true" /></span><span><small>Appelez-nous</small><strong>{phoneNumber}</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="contact-detail" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={19} aria-hidden="true" /></span><span><small>WhatsApp</small><strong>Écrivez-nous directement</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a>
            <div className="contact-detail contact-location"><span className="contact-icon"><MapPin size={18} aria-hidden="true" /></span><span><small>Retrouvez-nous</small><strong>Bine Lamdoune, Rue 45, N°12, Maroc</strong></span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <div className="footer-brand"><a href="#accueil" aria-label="Retour à l'accueil"><img src={logo.url} alt="BMK SOLUTIONS — Sécurité, Électricité, Énergie" width={156} height={78} loading="lazy" /></a><p>Spécialiste en solutions de sécurité et équipements professionnels.</p></div>
          <div className="footer-links"><h2>Navigation</h2>{navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}</div>
          <div className="footer-links footer-services"><h2>Nos services</h2>{services.map(({ number, title }) => <a href="#services" key={number}>{title}</a>)}</div>
          <div className="footer-contact"><h2>Parlons de votre projet</h2><a href={`tel:${WHATSAPP_NUMBER}`}>{phoneNumber}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Un message sur WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a><a href="#contact">Bine Lamdoune, Rue 45, N°12, Maroc</a><Button asChild size="sm" className="footer-cta"><a href="#devis">Demander un devis <ArrowRight size={14} aria-hidden="true" /></a></Button></div>
        </div>
        <div className="site-container footer-bottom"><span>© 2026 BMK SOLUTIONS. Tous droits réservés.</span><a href="#accueil">Sécurité · Électricité · Énergie <ArrowRight size={13} aria-hidden="true" /></a></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter BMK SOLUTIONS sur WhatsApp"><MessageCircle aria-hidden="true" size={22} /><span>WhatsApp</span></a>
    </>
  );
}