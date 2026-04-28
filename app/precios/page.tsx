import PricingPage from "@/components/precios/pricing-page";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Planes y Precios | Sicentre",
  description:
    "Sitios web desde $500 USD pago único. Voz IA y Motion desde $500/mes. Plan ULTRA completo desde $3.000/mes.",
};

export default function PreciosPage() {
  return (
    <main>
      <PricingPage />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
