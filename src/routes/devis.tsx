import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { createQuoteMessageUrl, WHATSAPP_NUMBER } from "@/lib/quote-message";
import { phoneNumber, services } from "@/lib/site-data";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demande de devis | BMK SOLUTIONS" },
      {
        name: "description",
        content:
          "Demandez un devis personnalisé à BMK SOLUTIONS pour vos projets de vidéosurveillance, alarmes, serrures intelligentes, matériel bureautique ou bornes de recharge.",
      },
      { property: "og:title", content: "Demande de devis | BMK SOLUTIONS" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
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
    <SiteShell>
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
    </SiteShell>
  );
}
