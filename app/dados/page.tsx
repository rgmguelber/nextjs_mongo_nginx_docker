import { PrismaClient } from "@prisma/client";

export default async function Dados() {
  const prisma = new PrismaClient();

  const caixas = await prisma.caixas.findMany();
  prisma.$disconnect();

  // const caixas
  return (
    <section className="w-full flex flex-col justify-center items-center mb-20">
      <h2 className="text-xl text-gray-500 italic mb-48">Dados</h2>;
      <table>
        {caixas.map((caixa) => (
          <tr key={caixa.CaixaID}>
            <td className="w-20 text-center">{caixa.CaixaID}</td>
            <td className="w-72 text-center">{caixa.Caixa}</td>
            <td className="w-20 text-center">{caixa.SaldoAtual.toFixed(2)}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
