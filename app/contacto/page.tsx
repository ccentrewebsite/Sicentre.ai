import CTASection from "@/components/cta-section";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Contacto | Sicentre",
  description: "Hablemos. Respondemos en menos de 24 horas.",
};

export default function Contacto() {
  return (
    <main>
      <div className="pt-20">
        <CTASection />
      </div>
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
