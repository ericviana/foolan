'use client'
import Contato from '@/components/Contato';
import Cabecalho from '@/components/Cabecalho';
import Sobre from '@/components/Sobre';
import Projetos from '@/components/Projetos';
import Footer from '@/components/Footer';
import { BotaoTema } from '@/components/BotaTema';
import { useState } from 'react';

export const metadata = {
  title: 'Foolan D\'tal',
  description: 'Esse é meu espaço na internet.',
  icons: {
    icon: "./ico.png",
  },
}

export default function Home() {
  const [tema, setTema] = useState(localStorage.tema || 'light');

  return (
    <div className={tema}>
      <BotaoTema temaHooks={[tema, setTema]} />
      <div className='dark:bg-blue-400 min-h-screen'>
        <div className='max-w-xl mx-auto pt-10 p-6'>
          <main>
            <Cabecalho />
            <hr className='border-gray-200' />
            <Sobre />
            <Projetos />
            <Contato />
            <hr className='border-gray-200' />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
