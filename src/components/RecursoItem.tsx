'use client';

import React from 'react';

interface RecursoItemProps {
  icon: React.ReactNode;
  titulo: string;
  descricao: string;
}

export default function RecursoItem({ icon, titulo, descricao }: RecursoItemProps) {
  return (
    <div
      className="
        group
        bg-[#1c0c0c]
        rounded-2xl
        p-8
        text-center
        border border-[#2a0d0d]
        shadow-[0_0_15px_rgba(0,0,0,0.6)]
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-[0_10px_40px_rgba(193,48,48,0.4)]
        hover:border-[#c13030]
        relative overflow-hidden
      "
    >
      {/* Glow de fundo ao hover */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-20
          bg-gradient-to-br from-[#c13030] to-[#e63946]
          transition-opacity duration-500
        "
      ></div>

      {/* Ícone */}
      <div
        className="
          relative z-10
          flex justify-center items-center
          text-6xl mb-5
          text-[#ff4545]
          drop-shadow-[0_0_15px_rgba(193,48,48,0.6)]
          transition-transform duration-500
          group-hover:scale-125
          group-hover:drop-shadow-[0_0_25px_rgba(255,70,70,0.9)]
        "
      >
        {icon}
      </div>

      {/* Título */}
      <h3
        className="
          relative z-10
          text-2xl font-bold mb-3
          text-white
          tracking-wide
          transition-colors duration-300
          group-hover:text-[#ff6b6b]
        "
      >
        {titulo}
      </h3>

      {/* Descrição */}
      <p className="relative z-10 text-gray-300 leading-relaxed text-base">
        {descricao}
      </p>
    </div>
  );
}
