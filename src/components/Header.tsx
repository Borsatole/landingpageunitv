'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#C50003] py-5 px-[5%] flex justify-between items-center sticky top-0 z-[1000] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="text-2xl font-bold text-white flex items-center gap-3">
        <Image
          src="/logotipo.svg"
          title='Logotipo Unitv'
          alt="UniTv Menor Preço"
          width={60}
          height={40}
        />
        RECARGA UNITV
      </div>
      <a href="https://conectfacil.playnetapp.com/" target="_blank" title="assine agora">
      <button
        className="bg-[#c13030] text-white py-3 px-7 border-none rounded-[25px] cursor-pointer font-bold transition-all duration-300 hover:bg-[#e63946] hover:transform hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(193,48,48,0.4)]"
      >
        ÁREA DO CLIENTE
      </button>
      </a>
    </header>
  );
}
