import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  return (
    <div className='w-full flex flex-col h-auto items-center justify-center'>
        <Image
        src={logo}
        alt='logo marca do sistema'
        />
        <h1 className='text-muted text-2xl font-semibold mb-2'>Login</h1>

        <div className='w-[580px] h-[320px] flex flex-col'>
            <Input
            className='mt-4 mb-4 bg-secondary text-sm'
              placeholder='E-mail'
              color='muted-foreground'
              type='email'
            />
            <Input
            className='mb-4 bg-secondary text-sm'
              placeholder='Senha'
              type='password'
            />
            <Button className='bg-bottom text-muted-foreground text-lg'>
              Entar
            </Button>
        </div>

    </div>
  )
}
