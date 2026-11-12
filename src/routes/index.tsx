import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/bmk-security-hero.jpg";
import { services, whatsappUrl } from "@/lib/site-data";

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
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
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
              <Link to="/devis">Parlons de votre projet <ArrowRight aria-hidden="true" /></Link>
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
                <Link className={`service-visual${image ? "" : " service-visual-illustrated"}`} to="/devis" aria-label={`Demander un devis pour ${title}`}>
                  {image ? (
                    <img src={image} alt={alt} width={1024} height={1024} loading="lazy" />
                  ) : (
                    <div className="lock-illustration"><Icon size={58} strokeWidth={1.15} aria-hidden="true" /><span>SERRURES CONNECTÉES</span></div>
                  )}
                  <span className="service-number">{number}</span>
                  <span className="service-arrow"><ArrowUpRight aria-hidden="true" size={20} /></span>
                </Link>
                <div className="service-copy">
                  <div className="service-title-line"><Icon className="service-icon" aria-hidden="true" size={18} /><h3>{title}</h3></div>
                  <p>{description}</p>
                  <Link className="text-link" to="/devis">En savoir plus <ChevronRight aria-hidden="true" size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
