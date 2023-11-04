import Image from "next/image";
import logo from '../../../public/logo.svg';

export default function Header() {
    return(
        <div className='bg-background flex w-full h-[120px]'>
            <Image
                src={logo}
                alt="logo do site"
            />
            <nav className='flex flex-row justify-end items-center w-full gap-6 mr-20'>
                <ul>
                    <li className='text-secondary hover:text-primary'><a href="/relatorios">Relatórios</a></li>
                </ul>
                <ul>
                <li className='text-secondary hover:text-primary'><a href="/cadastro">Cadastro</a></li>
                </ul>
                <ul>
                <li className='text-secondary hover:text-primary'><a href="/">Sair</a></li>
                </ul>
            </nav>
        </div>
    )
}