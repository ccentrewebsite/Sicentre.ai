import ContactoPage from "@/components/contacto/contacto-page";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Contacto | Sicentre",
  description: "Hablemos. Respondemos en menos de 2 horas.",
};

export default function Contacto() {
  return (
    <main>
      <ContactoPage />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
