import { MotionHero, MotionTypes, MotionProcess, MotionSimulator, MotionGallery, MotionTools, MotionPricing, MotionFaq } from "@/components/motion";
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
      <div className="service-block"><MotionTypes /></div>
      <div className="service-block"><MotionProcess /></div>
      <div className="service-block"><MotionSimulator /></div>
      <div className="service-block"><MotionGallery /></div>
      <div className="service-block"><MotionTools /></div>
      <div className="service-block"><MotionPricing /></div>
      <div className="service-block"><MotionFaq /></div>
      <PageFooter />
      <WhatsAppButton />
    </main>
  );
}
