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
import Doted from "../relatorios/components/doted";

export default function Rotas() {
    const rotes = [
        {
          id:'1',
          partida: 'Joinville',
          destino:'Jaragua do sul',
          motorista: 'Roberto',
          veiculo: 'Van',
          placa: 'FEI-4676'
        },
        {
          id:'2',
          partida: 'Joinville',
          destino:'São Francisco do sul',
          motorista: 'João',
          veiculo: 'Carro',
          placa: 'HQI-7688'
        },
        {
          id:'3',
          partida: 'Joinville',
          destino:'Itapema',
          motorista: 'Jefferson',
          veiculo: 'Caminhão',
          placa: 'FEI-9492'
        },
        {
          id:'4',
          partida: 'Joinville',
          destino:'Curitiba',
          motorista: 'Mario',
          veiculo: 'Spin',
          placa: 'FEI-4676'
        }
      ]

  return (
    <>
    <Header/>
    <div className='flex h-[460px]'>
      <div className='bg-primary-foreground flex flex-col w-[220px] h-auto'>
                    
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/motorista">Motoristas</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/manutencao">Manutenção</a></li>
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
                        <h1 className="text-muted font-bold text-lg">Rotas</h1>
                    </div>
                    <Table>
                      <TableHeader>
                      <TableRow>
                        <TableHead className='text-muted font-bold'>Partida</TableHead>
                        <TableHead className='text-muted font-bold'>Motorista</TableHead>
                        <TableHead className='text-muted font-bold'>Veículo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    {rotes.map((rote) => (
                      <TableRow key={rote.id}>
                        <TableCell className="font-medium items-center flex text-muted"> {<Doted/> }  {rote.partida} - {rote.destino}</TableCell>
                        <TableCell className='text-muted font-bold'>{rote.motorista}</TableCell>
                        <TableCell className='text-muted font-medium'>{rote.veiculo} - {rote.placa}</TableCell>
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
