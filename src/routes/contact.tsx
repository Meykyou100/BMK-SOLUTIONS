import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { phoneNumber, whatsappUrl } from "@/lib/site-data";
import { WHATSAPP_NUMBER } from "@/lib/quote-message";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | BMK SOLUTIONS" },
      {
        name: "description",
        content: "Contactez BMK SOLUTIONS par téléphone ou WhatsApp, ou retrouvez-nous à Bine Lamdoune, Maroc.",
      },
      { property: "og:title", content: "Contact | BMK SOLUTIONS" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="site-container contact-layout">
          <div className="contact-heading"><p className="eyebrow"><span /> Toujours là pour vous</p><h2 id="contact-title">Restons <span>en contact.</span></h2></div>
          <a className="contact-detail" href={`tel:${WHATSAPP_NUMBER}`}><span className="contact-icon"><Phone size={18} aria-hidden="true" /></span><span><small>Appelez-nous</small><strong>{phoneNumber}</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="contact-detail" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={19} aria-hidden="true" /></span><span><small>WhatsApp</small><strong>Écrivez-nous directement</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <div className="contact-detail contact-location"><span className="contact-icon"><MapPin size={18} aria-hidden="true" /></span><span><small>Retrouvez-nous</small><strong>Bine Lamdoune, Rue 45, N°12, Maroc</strong></span></div>
        </div>
      </section>
    </SiteShell>
  );
}
