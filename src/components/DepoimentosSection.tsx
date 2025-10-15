import DepoimentoCard from './DepoimentoCard';

export default function DepoimentosSection() {
  const depoimentos = [
    {
      texto: "Melhor serviço de streaming que já usei! A recarga é realmente imediata e o catálogo é incrível.",
      autor: "Maria Silva",
      estrelas: 5
    },
    {
      texto: "Qualidade excelente e preço justo. O suporte é muito atencioso, sempre que preciso sou bem atendido.",
      autor: "João Santos",
      estrelas: 5
    },
    {
      texto: "Uso em vários dispositivos ao mesmo tempo e nunca tive problemas. Recomendo muito!",
      autor: "Ana Costa",
      estrelas: 5
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-gradient-to-r from-[#2d0a0a] to-[#1a0a0a]">
      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-[#c13030] after:mx-auto after:mt-5 after:rounded-sm">
        O Que Nossos Clientes Dizem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {depoimentos.map((depoimento, index) => (
          <DepoimentoCard 
            key={index}
            texto={depoimento.texto}
            autor={depoimento.autor}
            estrelas={depoimento.estrelas}
          />
        ))}
      </div>
    </section>
  );
}