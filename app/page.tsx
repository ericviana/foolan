'use client'
import Contato from '@/components/Contato';
import Cabecalho from '@/components/Cabecalho';
import Sobre from '@/components/Sobre';
import Projetos from '@/components/Projetos';
import Footer from '@/components/Footer';
import { BotaoTema, Temas } from '@/components/BotaTema';
import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Foolan D\'tal',
  description: 'Esse é meu espaço na internet.',
  icons: {
    icon: "./ico.png",
  },
}

export default function Home() {
  const [tema, setTema] = useState<Temas>('light');

  useEffect(() => {
    const temaDoNavegador = window?.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    setTema(localStorage?.tema || temaDoNavegador);
  }, [])

  return (
    <div className={tema}>
      <BotaoTema temaHooks={[tema, setTema]} />
      <div className='dark:bg-dark-gray min-h-screen transition-all'>
        <div className='max-w-xl mx-auto pt-16 p-6'>
          <main>
            <Cabecalho />
            <hr className='border-gray-200 dark:border-gray-600' />
            <Sobre />
            <Projetos />
            <Contato />
            <hr className='border-gray-200 dark:border-gray-600' />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
