import { TemaWrapper } from '@/components/Tema/TemaWrapper';
import Cabecalho from '@/components/Cabecalho';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Projetos from '@/components/Projetos';
import Sobre from '@/components/Sobre';

export const metadata = {
  title: 'Foolan D\'tal',
  description: 'Esse é meu espaço na internet.',
  icons: {
    icon: "./ico.png",
  },
}

export default function Home() {
  return (
    <TemaWrapper>
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
    </TemaWrapper>
  )
}
