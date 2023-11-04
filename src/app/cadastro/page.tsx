'client server'

import Rotas from "../rotas/page";
import Header from "@/components/ui/header";
import  Image  from 'next/image';
import capa from '../../../public/capa.png';

import location from '../../../public/location.svg';
import car from '../../../public/car.svg';
import fill from '../../../public/fill-drip.svg';
import card from '../../../public/card.svg';



 
export default function Relatorios() {
   
  return (
    <>
    <Header/>
      <div className='flex'>
      <div className='bg-primary-foreground flex flex-col w-[220px] h-auto'>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/rotas">Rotas</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/veiculo">Veículo</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/motorista">Motoristas</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/manutencao">Manutenção</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/despesa">Despesas</a></li>
                    </ul>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/receita">Receita</a></li>
                    </ul>
                </div>
                <div className='bg-background flex flex-col w-full h-full'>
                <div className='w-full h-auto'>
                    <Image
                        src={capa}
                        alt='foto dos veículos da empesa'
                    />
                </div>
            </div>
    </div>
    </>
  )
}

