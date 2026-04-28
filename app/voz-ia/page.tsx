import { VozHero, VozProblem, VozSimulator, VozHow, VozDemo, VozUsecases, VozPricing, VozFaq } from "@/components/voz-ia";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Agente de Voz IA | Sicentre",
  description:
    "Tu negocio atiende solo. Agente de voz con IA que responde llamadas, califica leads y agenda turnos — disponible 24/7.",
};

export default function VozIAPage() {
  return (
    <main>
      <VozHero />
      <VozProblem />
      <VozSimulator />
      <VozHow />
      <VozDemo />
      <VozUsecases />
      <VozPricing />
      <VozFaq />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
