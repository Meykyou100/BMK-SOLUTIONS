import { describe, expect, it } from "vitest";

import { createQuoteMessageUrl } from "@/lib/quote-message";

const details = {
  name: "Younes Mekki",
  company: "BMK SARL",
  phone: "+212 662 133 371",
  email: "younes@example.ma",
  service: "Vidéosurveillance",
  projectType: "Équipement d'un commerce",
  description: "Deux caméras pour l'entrée principale.",
};

describe("demande de devis WhatsApp", () => {
  it("adresse le message au numéro BMK exact indiqué dans le brief", () => {
    expect(createQuoteMessageUrl(details).split("?")[0]).toBe("https://wa.me/212662133371");
  });

  it("encode toutes les informations du devis dans le message", () => {
    const url = new URL(createQuoteMessageUrl(details));
    const message = url.searchParams.get("text");

    expect(url.searchParams.has("text")).toBe(true);
    expect(message).toContain("Nom et prénom : Younes Mekki");
    expect(message).toContain("Service souhaité : Vidéosurveillance");
    expect(message).toContain("Équipement d'un commerce");
    expect(message).toContain("Deux caméras pour l'entrée principale.");
  });
});