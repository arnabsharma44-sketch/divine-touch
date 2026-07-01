import { CONTACT } from "./constants";

const WHATSAPP_NUMBER = CONTACT.whatsapp.number;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string): string {
  return getWhatsAppUrl(
    `Hi, I am interested in the ${productName}. Please share more details and your catalogue.`
  );
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I am interested in buying your products and would like to see your catalogue.";

export function getDefaultWhatsAppUrl(): string {
  return getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);
}
