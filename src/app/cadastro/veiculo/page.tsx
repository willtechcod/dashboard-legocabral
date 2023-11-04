"use client"
import Header from "@/components/ui/header";

import { Input } from "@/components/ui/input";


export default function Veiculo() {
    
  return (
    <>
    <Header/>
            <div className='flex'>
                <div className='bg-primary-foreground flex flex-col w-[220px] h-auto'>
                    <ul className='p-2 hover:text-primary'>
                        <li><a href="/cadastro/rotas">Rotas</a></li>
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
                    <div className="flex flex-col w-full items-center justify-center ">
                        <h1 className="text-muted font-bold text-lg">Cadastro de Veículo</h1>

                        <div className='w-[680px] h-[440px] flex flex-col items-center justify-center'>
                            <form className='flex flex-col w-full'>
                                <label className="text-muted text-md mt-1">Tipo</label>
                                <input
                                className="rounded-md h-10 p-1"
                                placeholder="ex: Carro"
                                />

                                <label className="text-muted text-md mt-1">Placa</label>
                                <input
                                className="rounded-md h-10 p-1"
                                placeholder="ex: AAA-0000"
                                />

                                <label className="text-muted text-md mt-1">Cor</label>
                                <input
                                className="rounded-md h-10 p-1"
                                placeholder="ex: Branco"
                                />

                                <button className="bg-primary rounded-md mt-4 h-10 text-lg">
                                    Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>
                    
            </div>
    </>
  )
}
