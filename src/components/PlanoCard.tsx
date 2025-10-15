'use client';

interface PlanoCardProps {
  titulo: string;
  preco: string;
  features: string[];
}

export default function PlanoCard({ titulo, preco, features }: PlanoCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#2d0a0a] to-[#1a0a0a] p-10 rounded-[20px] text-center transition-all duration-300 border-2 border-transparent relative overflow-hidden hover:transform hover:-translate-y-2.5 hover:border-[#c13030] hover:shadow-[0_15px_40px_rgba(193,48,48,0.3)]">
      <h3 className="text-2xl mb-4 text-[#c13030]">{titulo}</h3>
      <div className="text-5xl font-bold my-5">
        {Number(preco).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <ul className="list-none my-8 text-left">
        {features.map((feature, index) => (
          <li key={index} className="py-2.5 border-b border-white/10 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#c13030] before:font-bold before:text-lg">
            {feature}
          </li>
        ))}
      </ul>
      <a href="https://conectfacil.playnetapp.com/" target="_blank" title="assine agora">
        <button className="bg-[#c13030] text-white py-3 px-8 border-none rounded-[25px] font-bold cursor-pointer transition-all duration-300 mt-5 w-full hover:bg-[#e63946] hover:scale-105">
        ASSINAR AGORA
      </button>
      </a>
    </div>
  );
}