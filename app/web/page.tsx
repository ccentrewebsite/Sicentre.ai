import { WebHero, WebProcess, WebIncludes, WebSimulator, WebPortfolio, WebPricing, WebFaq } from "@/components/web";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Sitios Web a Medida | Sicentre",
  description:
    "Diseño web 100% personalizado. Hosting, dominio y SSL incluidos. Sin templates, sin IA genérica.",
};

export default function WebPage() {
  return (
    <main>
      <WebHero />
      <WebProcess />
      <WebIncludes />
      <WebSimulator />
      <WebPortfolio />
      <WebPricing />
      <WebFaq />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
