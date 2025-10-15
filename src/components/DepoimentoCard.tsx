'use client';

interface DepoimentoCardProps {
  texto: string;
  autor: string;
  estrelas: number;
}

export default function DepoimentoCard({ texto, autor, estrelas }: DepoimentoCardProps) {
  return (
    <div className="bg-white/5 p-7 rounded-xl border-l-4 border-[#c13030] transition-all duration-300 hover:translate-x-2.5 hover:bg-white/8">
      <div className="text-yellow-400 text-lg mb-4">
        {Array(estrelas).fill('★').join('')}
      </div>
      <p className="italic mb-5 leading-relaxed">{texto}</p>
      <p className="font-bold text-[#c13030]">— {autor}</p>
    </div>
  );
}