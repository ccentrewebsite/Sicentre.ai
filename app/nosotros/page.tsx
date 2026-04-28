import NosotrosPage from "@/components/nosotros/nosotros-page";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Nosotros | Sicentre",
  description:
    "Construimos cada proyecto a medida, sin templates, sin atajos. La agencia digital con IA para empresas que se niegan a desaparecer.",
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
