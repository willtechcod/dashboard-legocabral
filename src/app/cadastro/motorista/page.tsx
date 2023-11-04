import Header from "@/components/ui/header";

export default function Motorista() {
    
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
                        <h1 className="text-muted font-bold text-lg">Cadastro de Motorista</h1>

                        <div className='w-[680px] h-[440px] flex flex-col items-center justify-center'>
                            <form className='flex flex-col w-full'>
                                <label className="text-muted text-md mt-1">Nome</label>
                                <input
                                type='text'
                                className="rounded-md h-10 p-1"
                                placeholder="ex: Jhon Rambo"
                                />

                                <label className="text-muted text-md mt-1">CNH</label>
                                <input
                                type='number'
                                className="rounded-md h-10 p-1"
                                placeholder="ex: 0023123432"
                                />

                                <label className="text-muted text-md mt-1">E-mail</label>
                                <input
                                type='email'
                                className="rounded-md h-10 p-1"
                                placeholder="ex: admin@admin.com"
                                />

                                <label className="text-muted text-md mt-1">Senha</label>
                                <input
                                type='text'
                                className="rounded-md h-10 p-1"
                                placeholder="ex: ******"
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
