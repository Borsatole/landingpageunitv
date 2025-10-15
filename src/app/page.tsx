import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlanosSection from "@/components/PlanosSection";
import RecursosSection from "@/components/RecursosSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a0a0a] text-white">
      <Header />
      <HeroSection />
      <PlanosSection />
      <RecursosSection />
      <ComoFuncionaSection />
      <DepoimentosSection />
      
      {/* CTA Final */}
      <CtaFinal />
      
      
      {/* Footer */}
      <Footer />
      <WhatsappButton 
        phone="5514998409433"
        message="Olá, gostaria de recarregar meu UniTv!"
       />
    </main>
  );
}
