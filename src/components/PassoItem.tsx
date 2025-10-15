interface PassoItemProps {
  numero: number;
  titulo: string;
  descricao: string;
}

export default function PassoItem({ numero, titulo, descricao }: PassoItemProps) {
  return (
    <div className="text-center relative">
      <div className="w-20 h-20 bg-gradient-to-r from-[#c13030] to-[#e63946] rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-5 shadow-[0_10px_30px_rgba(193,48,48,0.4)]">
        {numero}
      </div>
      <h3 className="text-xl mb-4">{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}