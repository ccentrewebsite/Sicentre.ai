import HeroSection from "@/components/hero-section";
import SectorTicker from "@/components/sector-ticker";
import ServiceIntroBlock from "@/components/service-intro-block";
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

      <div className="service-block">
      <ServiceIntroBlock
        id="servicios"
        imageSide="right"
        imageSrc="/images/service-voz.jpg"
        imageAlt="Agente de voz IA Sicentre, disponible 24/7"
        serviceTitle={
          <>
            Agentes de{" "}
            <span style={{ color: "#EA580C", textShadow: "0 4px 22px rgba(234,88,12,0.45)" }}>
              Voz
            </span>
          </>
        }
        title="Su negocio responde."
        titleAccent="Siempre."
        titleAccentColor="#EA580C"
        hook="Un agente de voz que nunca cierra los ojos."
        description="Atiende cada llamada, califica leads y agenda turnos las 24 horas, los 7 días, en perfecto castellano. Configurado para hablar como su marca habla, sin formularios ni colas de espera. El primer empleado que no se enferma, no pide vacaciones y no deja a nadie esperando."
        accentColor="#EA580C"
        accentColorSoft="rgba(234,88,12,0.18)"
      />
      <ServiceVoiceDetail />
      </div>

      <div className="service-block">
      <ServiceIntroBlock
        imageSide="left"
        imageSrc="/images/service-web.jpg"
        imageAlt="Sitio web a medida, diseñado desde cero para su empresa"
        serviceTitle={
          <>
            Sitios Web{" "}
            <span
              className="gradient-text"
              style={{ filter: "drop-shadow(0 4px 22px rgba(124,58,237,0.45))" }}
            >
              a Medida
            </span>
          </>
        }
        title="Un sitio hecho"
        titleAccent="exactamente para usted."
        titleAccentColor="#A78BFA"
        hook="Sin templates. Sin estética genérica. Sin atajos."
        description="Diseñamos cada pieza desde cero, para reflejar quién es su empresa, qué vende y a quién atiende. Hosting, dominio, certificado SSL y modificaciones instantáneas vía WhatsApp incluidos. Su sitio queda suyo, sin suscripciones ni dependencias eternas."
        accentColor="#7C3AED"
        accentColorSoft="rgba(124,58,237,0.18)"
      />
      <ServiceWebDetail />
      </div>

      <div className="service-block">
      <ServiceIntroBlock
        imageSide="right"
        imageSrc="/images/service-studio.jpg"
        imageAlt="Creación visual surrealista, fotografía editorial y video IA"
        serviceTitle={
          <>
            Creación{" "}
            <span
              className="gradient-text"
              style={{ filter: "drop-shadow(0 4px 22px rgba(234,88,12,0.45))" }}
            >
              Visual
            </span>
          </>
        }
        title="Imágenes y videos que"
        titleAccent="detienen el scroll."
        titleAccentColor="#EA580C"
        hook="Producción cinematográfica, sin presupuesto de rodaje."
        description="Fotografía editorial, video IA de nivel internacional y contenido mensual para sus redes. Cada pieza pensada para que su marca se vea exactamente como debe verse, desde la concept hasta los archivos listos para publicar. Lo imposible de filmar, nosotros lo producimos."
        accentColor="#7C3AED"
        accentColorSoft="rgba(124,58,237,0.18)"
      />
      <ServiceStudioDetail />
      </div>

      <PricingSection />
      <PortfolioSection />
      <CTASection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
}
