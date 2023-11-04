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
import Receiveds from '../../../data.json';

export default function Receita() {
    const data = Receiveds.receiveds; 

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
                    {data.map((received) => (
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

