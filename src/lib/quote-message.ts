export const WHATSAPP_NUMBER = "212662133371";

export interface QuoteDetails {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  projectType: string;
  description: string;
}

export function createQuoteMessageUrl(details: QuoteDetails) {
  const message = [
    "Bonjour BMK SOLUTIONS, je souhaite demander un devis.",
    "",
    `Nom et prénom : ${details.name}`,
    `Entreprise : ${details.company || "Non renseigné"}`,
    `Téléphone : ${details.phone}`,
    `E-mail : ${details.email}`,
    `Service souhaité : ${details.service}`,
    `Type de projet : ${details.projectType}`,
    `Description : ${details.description}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}