import Image from 'next/image';
import capa from '../../../public/capa.png';
import  Header  from '../../components/ui/header';

export default function Home() {
    return(
        <>
        <Header/>
            <div className='bg-background flex flex-col w-full h-full'>
                <div className='w-full h-[550px]'>
                    <Image
                        src={capa}
                        alt='foto dos veículos da empesa'
                    />
                </div>
            </div>
        </>
    )
}