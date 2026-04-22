import NosotrosPage from "@/components/nosotros/nosotros-page";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Nosotros | Sicentre",
  description:
    "Somos Sicentre. Nacimos en Asunción para cambiar cómo los negocios latinoamericanos crecen online.",
};

export default function Nosotros() {
  return (
    <main>
      <NosotrosPage />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
