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
      <div className="service-block"><WebProcess /></div>
      <div className="service-block"><WebIncludes /></div>
      <div className="service-block"><WebSimulator /></div>
      <div className="service-block"><WebPortfolio /></div>
      <div className="service-block"><WebPricing /></div>
      <div className="service-block"><WebFaq /></div>
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
