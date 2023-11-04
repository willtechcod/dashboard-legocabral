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


export default function Manutencao() {
    const maintenances = [
        {
          id:'1',
          veiculo: ['Carro'],
          placa: 'FEI-6465',
          reparo: 'Troca de oléo',
          date: '25/10/2023'
        },
        {
          id:'2',
          veiculo: ['Van'],
          placa: 'FEI-6465',
          reparo: ['Troca de oléo', ' Pneu traseiro'],
          date: '28/10/2023'

        },
        {
          id:'3',
          veiculo: ['Carro'],
          placa: 'FEI-6465',
          reparo: 'Farol dianteiro',
          date: '25/10/2023'
        },
        {
          id:'4',
          veiculo: ['Caminhão'],
          placa: 'FEI-6465',
          reparo: ['Troca de oléo', ' faixa de freios'],
          date: '25/10/2023'
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
                        <li><a href="/motorista">Motorista</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/despesa">Despesa</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/receita">Receita</a></li>
                    </ul>
                </div>

                <div className='bg-foreground w-full h-auto'>
                    <div className="flex items-center justify-center mt-2 mb-3">
                        <h1 className="text-muted font-bold text-lg">Manutenção</h1>
                    </div>
                    <Table>
                      <TableHeader>
                      <TableRow>
                        <TableHead className='text-muted font-bold'>Veículo</TableHead>
                        <TableHead className='text-muted font-bold'>Reparo</TableHead>
                        <TableHead className='text-muted font-bold'>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    {maintenances.map((maintenance) => (
                      <TableRow key={maintenance.id}>
                        <TableCell className="font-medium items-center flex text-muted">
                            {maintenance.veiculo} - {maintenance.placa}
                        </TableCell>
                        <TableCell className='text-muted font-bold'>
                            {maintenance.reparo}
                        </TableCell>
                        <TableCell className='text-muted font-medium'> 
                            {maintenance.date}
                        </TableCell>
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

