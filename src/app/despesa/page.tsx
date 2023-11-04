import Header from "@/components/ui/header";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,

} from "@/components/ui/table";
import data from '../../../data.json';

export default function Despesa() {
    const expenses = [
        {
          id:'1',
          valor: '450,00',
          veiculo: 'Carro',
          placa: 'FEI-33638',
          reparo: 'Faixa de freios',
        },
        {
          id:'2',
          valor: '1.800,00',
          veiculo: 'Carro',
          placa: 'FEI-33638',
          reparo: 'Farois dianteiros',
        },
        {
          id:'3',
          valor: '380,00',
          veiculo: 'Caminhão',
          placa: 'FEI-33638',
          reparo: 'Pneu',
        },
        {
          id:'4',
          valor: '1.500,00',
          veiculo: 'Van',
          placa: 'FEI-33638',
          reparo: 'Troca de Óleo',
        }
      ]

  return (
    <>
    <Header/>
    <div className='flex h-[460px]'>
      <div className='bg-primary-foreground flex flex-col w-[220px] h-auto'>
                    
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/rotas">Rotas</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/motorista">Motoristas</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/manutencao">Manutenção</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/receita">Receita</a></li>
                    </ul>
                </div>

                <div className='bg-foreground w-full h-auto'>
                    <div className="flex items-center justify-center mt-2 mb-3">
                        <h1 className="text-muted font-bold text-lg">Despesas</h1>
                    </div>
                    <Table>
                    <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.id}>
                        <TableCell className="font-medium items-center flex text-muted">R$ {expense.valor}</TableCell>
                        <TableCell className='text-muted font-bold'>
                            {expense.reparo}
                        </TableCell>
                        <TableCell className='text-muted font-medium'> {expense.veiculo} - {expense.placa}</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                    </Table>
        </div>
              
    </div>
    </>
  )
}