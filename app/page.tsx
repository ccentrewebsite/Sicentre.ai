import HeroSection from "@/components/hero-section";
import SectorTicker from "@/components/sector-ticker";
import ServicesSection from "@/components/services-section";
import ServiceVoiceDetail from "@/components/service-voice-detail";
import ServiceWebDetail from "@/components/service-web-detail";
import ServiceStudioDetail from "@/components/service-studio-detail";
import PricingSection from "@/components/pricing-section";
import PortfolioSection from "@/components/portfolio-section";
import CTASection from "@/components/cta-section";
import FooterSection from "@/components/footer-section";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectorTicker />
      <ServicesSection />
      <ServiceVoiceDetail />
      <ServiceWebDetail />
      <ServiceStudioDetail />
      <PricingSection />
      <PortfolioSection />
      <CTASection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
}
