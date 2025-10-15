import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="
        relative bg-[url('/bg-hero-section.svg')] bg-cover bg-center bg-no-repeat
        py-20 px-[5%] grid md:grid-cols-2 grid-cols-1 gap-12 items-center overflow-hidden
      "
      aria-label="Seção principal de destaque da UniTv"
    >
      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d0a0a]/75 to-[#1a0a0a]/75 z-[1]"></div>

      {/* Conteúdo principal */}
      <div className="relative z-[2] md:text-left text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Recarga Imediata UniTv — Assista aos Melhores Canais com Segurança e Rapidez
        </h1>

        <p className="text-lg mb-8 text-gray-300 leading-relaxed max-w-[600px] mx-auto md:mx-0">
          A UniTv oferece planos de TV por assinatura com filmes, séries, esportes e muito mais.
          Faça sua recarga agora e tenha acesso instantâneo, receba seu código de acesso e comece a assistir aos melhores conteúdos do Brasil e do mundo.
        </p>

        <a
          href="#planos"
          title="planos unitv recarga imediata"
          className="
            bg-[#c13030] text-white py-4 px-10 rounded-[30px] text-lg font-bold cursor-pointer
            transition-all duration-300 inline-block hover:bg-[#e63946] hover:scale-105
            hover:shadow-[0_8px_25px_rgba(193,48,48,0.5)]
          "
        >
          Ver Planos e Ofertas
        </a>
      </div>

      {/* Imagem decorativa */}
      <div className="flex justify-center items-center relative z-[2]">
        <Image
          src="/smart_tv.png"
          alt="Ícone de televisão"
          title="Imagem Unitv Recarga Imediata"
          width={420}
          height={420}
          className="opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          priority
        />
      </div>
    </section>
  );
}
