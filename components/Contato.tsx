import Link from 'next/link';
import data from '@/data/data.json';

interface ContatoProps {
  contato: string;
  link: string;
  descricao: string;
}

export default function Contact() {
  return (
    <div className='my-12'>
      <h2 className='mb-4'>Contato</h2>
      {data.contatos.map((contato) => (
        <Link
          key={contato.nome}
          href={contato.link}
          target='_blank'
          className='flex justify-between text-sm rounded-lg border-transparent border hover:border-gray-200 hover:bg-opacity-20 hover:bg-gray-50 py-2 px-2 -mx-2'
        >
          {contato.nome}
          <span className='text-gray-400 hover:underline'>
            {contato.descricao}
          </span>
        </Link>
      ))}
    </div>
  );
}
