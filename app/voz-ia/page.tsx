import { VozHero, VozProblem, VozFeatures, VozSimulator, VozHow, VozDemo, VozUsecases, VozPricing, VozFaq } from "@/components/voz-ia";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Agente de Voz IA | Sicentre",
  description:
    "Tu negocio atiende solo. Agente de voz con IA que responde llamadas, califica leads y agenda turnos. Disponible 24/7.",
};

export default function VozIAPage() {
  return (
    <main>
      <VozHero />
      <div className="service-block"><VozProblem /></div>
      <div className="service-block"><VozFeatures /></div>
      <div className="service-block"><VozSimulator /></div>
      <div className="service-block"><VozHow /></div>
      <div className="service-block"><VozDemo /></div>
      <div className="service-block"><VozUsecases /></div>
      <div className="service-block"><VozPricing /></div>
      <div className="service-block"><VozFaq /></div>
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
