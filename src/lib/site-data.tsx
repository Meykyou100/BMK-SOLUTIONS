import { Camera, Headset, LockKeyhole, Printer, ShieldAlert, ShieldCheck, Wrench, Zap } from "lucide-react";

import heroImage from "@/assets/bmk-security-hero.jpg";
import alarmImage from "@/assets/bmk-services-security.jpg";
import equipmentImage from "@/assets/bmk-services-professional.jpg";
import chargingImage from "@/assets/bmk-services-ev.jpg";
import { WHATSAPP_NUMBER } from "@/lib/quote-message";

export const phoneNumber = "+212 662 133 371";
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
export { WHATSAPP_NUMBER };

export const navigation = [
  { to: "/", hash: "services", label: "Nos services" },
  { to: "/apropos", hash: undefined, label: "À propos" },
  { to: "/apropos", hash: "engagements", label: "Nos engagements" },
  { to: "/contact", hash: undefined, label: "Contact" },
] as const;

export const services = [
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

export const promises = [
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
