import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const palavrasChave = [
    "Unitv Menor Preço", "UniTv Menor Valor", "Recarga Imediata", "Baixar Unitv",
    "Canais ao Vivo", "Filmes e Séries Online", "Assinatura Unitv",
    "Recarga Via E-mail", "Unitv Free", "Teste 3 dias",
    "Revendedor", "Recarga Imediata", "Promocao Unitv",
    "Unitv Anual", "Unitv Mensal", "Unitv Trimestral", "Unitv Semestral",
  ];

  return (
    <footer className="bg-[#0f0505] py-16 px-[5%] text-center text-gray-400">
      <div className="max-w-[1200px] mx-auto">
        {/* Links principais */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {["Sobre", "Planos", "Suporte", "Termos de Uso", "Privacidade", "Contato"].map((item, index) => (
            <a
              title={item}
              key={index}
              href="#"
              className="no-underline transition-colors duration-300 hover:text-[#c13030]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center gap-5 my-8">
          {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#c13030] hover:-translate-y-1"
            >
              <Icon className="text-white text-lg" />
            </div>
          ))}
        </div>

        {/* Texto institucional */}
        <p className="text-gray-500 mt-6 text-sm">
          © 2025 UniTv. Todos os direitos reservados. Assista com qualidade, segurança e a melhor estabilidade do Brasil.
        </p>

        {/* Bloco de SEO invisível (sem parecer spam) */}
        <div className="mt-10 text-xs text-gray-600 max-w-[900px] mx-auto leading-relaxed">
          <p>
            A UniTv oferece <strong>IPTV com recarga imediata</strong>, acesso a <strong>filmes, séries, esportes ao vivo</strong> e
            muito mais. Experimente uma <strong>assinatura IPTV segura e confiável</strong> com qualidade HD e suporte 24h.
            Nossos planos incluem opções mensais e anuais com excelente custo-benefício.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {palavrasChave.map((termo, index) => (
              <span
                key={index}
                className="bg-white/5 text-gray-500 px-3 py-1 rounded-full text-xs hover:text-[#c13030] cursor-default"
              >
                {termo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
