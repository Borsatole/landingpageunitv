import PlanoCard from './PlanoCard';

export default function PlanosSection() {
  const planos = [
    {
      titulo: "Mensal",
      preco: "20",
      features: [
        "Recarga Na Hora",
        "Envio Imediato Automatico",
        "2 Dispositivo simultâneo",
        "Filmes, series On Demand",
        "Suporte via Whatsapp",
      ]
    },
    {
      titulo: "Trimestral",
      preco: "55",
      features: [
        "Recarga Na Hora",
        "Envio Imediato Automatico",
        "2 Dispositivo simultâneo",
        "Filmes, series On Demand",
        "Suporte via Whatsapp",
      ]
    },
    {
      titulo: "Anual",
      preco: "130",
      features: [
        "Recarga Na Hora",
        "Envio Imediato Automatico",
        "2 Dispositivo simultâneo",
        "Filmes, series On Demand",
        "Suporte via Whatsapp",
      ]
    },
  ];

  return (
    <section id="planos" className="py-20 px-[5%] bg-[#0f0505]">
      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-[#c13030] after:mx-auto after:mt-5 after:rounded-sm">
        Escolha Seu Plano
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {planos.map((plano, index) => (
          <PlanoCard 
            key={index}
            titulo={plano.titulo}
            preco={plano.preco}
            features={plano.features}
          />
        ))}
      </div>
    </section>
  );
}