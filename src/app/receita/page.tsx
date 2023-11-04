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


export default function Receita() {
    const receiveds = [
        {
          id:'1',
          valor: '4.500,00',
          cliente: 'Britânia',
          data: '05/10/2023',
        },
        {
          id:'2',
          valor: '10.800,00',
          cliente: 'LPS Company LTDA',
          data: '30/10/2023',
        },
        {
          id:'3',
          valor: '3.800,00',
          cliente: 'Dohler SA',
          data: '15/10/2023',
        },
        {
          id:'4',
          valor: '1.500,00',
          cliente: 'Tupy LTDA',
          data: '25/11/2023',
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
                        <li><a href="/despesa">Despesa</a></li>
                    </ul>
                </div>

                <div className='bg-foreground w-full h-auto'>
                    <div className="flex items-center justify-center mt-2 mb-3">
                        <h1 className="text-muted font-bold text-lg">Receitas</h1>
                    </div>
                    <Table>
                    <TableBody>
                    {receiveds.map((received) => (
                      <TableRow key={received.id}>
                        <TableCell className="font-medium items-center flex text-muted">R$ {received.valor}</TableCell>
                        <TableCell className='text-muted font-bold'>
                            {received.cliente}
                        </TableCell>
                        <TableCell className='text-muted font-medium'> {received.data}</TableCell>
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

