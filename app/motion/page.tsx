import { MotionHero, MotionTypes, MotionProcess, MotionGallery, MotionTools, MotionPricing, MotionFaq } from "@/components/motion";
import PageFooter from "@/components/shared/page-footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Motion & Content | Sicentre",
  description:
    "Video cinematográfico, fotografía IA y content mensual para redes. Producción de nivel internacional para marcas latinoamericanas.",
};

export default function MotionPage() {
  return (
    <main>
      <MotionHero />
      <MotionTypes />
      <MotionProcess />
      <MotionGallery />
      <MotionTools />
      <MotionPricing />
      <MotionFaq />
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
