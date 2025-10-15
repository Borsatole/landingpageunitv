import PassoItem from './PassoItem';

export default function ComoFuncionaSection() {
  const passos = [
    {
      numero: 1,
      titulo: "Escolha o Plano",
      descricao: "Selecione o plano que melhor se encaixa nas suas necessidades"
    },
    {
      numero: 2,
      titulo: "Faça o Pagamento",
      descricao: "Pague de forma segura com PIX"
    },
    {
      numero: 3,
      titulo: "Comece a Assistir",
      descricao: "Acesso imediato ao catálogo completo em todos os seus dispositivos"
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-[#0f0505]">
      <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:block after:w-[100px] after:h-1 after:bg-[#c13030] after:mx-auto after:mt-5 after:rounded-sm">
        Como Funciona?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {passos.map((passo, index) => (
          <PassoItem 
            key={index}
            numero={passo.numero}
            titulo={passo.titulo}
            descricao={passo.descricao}
          />
        ))}
      </div>
    </section>
  );
}