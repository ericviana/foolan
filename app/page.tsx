import Contato from '@/components/Contato';
import Cabecalho from '@/components/Cabecalho';
import Sobre from '@/components/Sobre';
import Projetos from '@/components/Projetos';

export const metadata = {
  title: 'Foolan D\'tal',
  description: 'Esse é meu espaço na internet.',
  icons: {
    icon: "./ico.png",
  },
}

export default function Home() {
  return (
    <div className='max-w-xl mx-auto mt-10 p-6'>
      <main className=''>
        <Cabecalho />
        <hr className='border-gray-200' />
        <Sobre />
        <Projetos />
        <Contato />
        <hr className='border-gray-200' />
      </main>
    </div>
  );
}
