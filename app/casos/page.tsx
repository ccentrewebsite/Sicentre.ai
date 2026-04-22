import CasosPage from "@/components/casos/casos-page";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Casos de Éxito | Sicentre",
  description:
    "Resultados reales de negocios que transformaron su operación digital con Sicentre.",
};

export default function Casos() {
  return (
    <main>
      <CasosPage />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
