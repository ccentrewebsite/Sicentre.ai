import PricingPage from "@/components/precios/pricing-page";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Planes y Precios | Sicentre",
  description:
    "Sitios web desde $499 USD pago único. Voz IA y Motion desde $299/mes. Plan ULTRA 360 completo desde $2.990/mes.",
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
