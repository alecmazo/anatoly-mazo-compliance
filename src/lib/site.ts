export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const EMAIL = "anatolymazo@gmail.com";
export const CONSULT_SUBJECT = "Consultation request";
export const LINKEDIN_URL = "https://www.linkedin.com/in/anatoly-mazo-9949a85";
export const SITE_NAME = "Anatoly Mazo";
export const SITE_TITLE =
  "Anatoly Mazo — Financial & Technology Consulting";
export const SITE_DESCRIPTION =
  "Simple, practical financial and technology consulting for individuals and business owners from Anatoly Mazo, with 30+ years of experience at Wells Fargo.";

export const SITE_KEYWORDS = [
  "Anatoly Mazo",
  "financial consulting",
  "technology consulting",
  "consulting for individuals",
  "small business consulting",
  "business owners",
];

export const PAY_URL = "https://buy.stripe.com/aFadR91w7d3t4YoeJZ7EQ01";
export const consultMailto = `mailto:${EMAIL}?subject=${encodeURIComponent(CONSULT_SUBJECT)}`;

export const NAV_LINKS = [
  { href: "/#about", hash: "#about", label: "About" },
  { href: "/#services", hash: "#services", label: "Services" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
  { href: "/#pay", hash: "#pay", label: "Pay" },
] as const;

export function buildConsultMailto(fields: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone?.trim() ? fields.phone.trim() : "Not provided"}`,
    "",
    "Message:",
    fields.message.trim(),
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(CONSULT_SUBJECT)}&body=${encodeURIComponent(body)}`;
}
