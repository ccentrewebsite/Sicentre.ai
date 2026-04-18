import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import PortfolioSection from "@/components/portfolio-section";
import CTASection from "@/components/cta-section";
import FooterSection from "@/components/footer-section";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <CTASection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
}
