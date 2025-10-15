import RecursoItem from './RecursoItem';
import { FaBolt, FaLock, FaTv, FaFilm } from 'react-icons/fa';

export default function RecursosSection() {
  const recursos = [
    {
      icon: <FaBolt />,
      titulo: 'Recarga Imediata',
      descricao: 'Sua assinatura é ativada instantaneamente após a compra.',
    },
    {
      icon: <FaLock />,
      titulo: '100% Seguro',
      descricao: 'Pagamentos criptografados e dados totalmente protegidos.',
    },
    {
      icon: <FaTv />,
      titulo: 'Multi Dispositivos',
      descricao: 'Assista em Smart TV, celular, tablet ou computador.',
    },
    {
      icon: <FaFilm />,
      titulo: 'Catálogo Gigante',
      descricao: 'Milhares de filmes, séries e programas disponíveis.',
    },
  ];

  return (
    <section className="py-24 px-[5%] bg-gradient-to-br from-[#100505] to-[#1a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,48,48,0.15),transparent_70%)]"></div>

      <h2 className="text-4xl font-bold text-center text-white mb-16 relative z-10">
        Por Que Escolher <span className="text-[#c13030]">UniTv?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto relative z-10">
        {recursos.map((recurso, index) => (
          <RecursoItem
            key={index}
            icon={recurso.icon}
            titulo={recurso.titulo}
            descricao={recurso.descricao}
          />
        ))}
      </div>
    </section>
  );
}
