import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { promises } from "@/lib/site-data";
import heroImage from "@/assets/bmk-security-hero.jpg";

export const Route = createFileRoute("/apropos")({
  head: () => ({
    meta: [
      { title: "À propos | BMK SOLUTIONS" },
      {
        name: "description",
        content:
          "Découvrez BMK SOLUTIONS, spécialiste des solutions de sécurité et équipements professionnels au Maroc, et nos engagements envers nos clients.",
      },
      { property: "og:title", content: "À propos | BMK SOLUTIONS" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
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
            <Link className="text-link about-link" to="/devis">Échangeons sur vos besoins <ArrowRight aria-hidden="true" size={16} /></Link>
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
    </SiteShell>
  );
}
