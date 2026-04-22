import { WebHero, WebProcess, WebIncludes, WebPortfolio, WebPricing, WebFaq } from "@/components/web";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Sitios Web en 72h | Sicentre",
  description:
    "Diseño web 100% personalizado. Hosting, dominio y SSL incluidos. Entrega garantizada en 72 horas.",
};

export default function WebPage() {
  return (
    <main>
      <WebHero />
      <WebProcess />
      <WebIncludes />
      <WebPortfolio />
      <WebPricing />
      <WebFaq />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
