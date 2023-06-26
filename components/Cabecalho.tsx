import Image from 'next/image';
import data from '@/data/data.json';
import image from '../public/image.gif';
import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className='mb-4 flex justify-between items-center text-gray-800'>
      <h1 className='text-xl italic font-serif dark:text-white'>{data.nome}</h1>
      <Link href={'https://github.com/ericviana'} target='_blank'>
        <Image
          src={image}
          alt=''
          height={52}
          className='aspect-square  outline-gray-300 outline-offset-1'
        />
      </Link>
    </header>
  );
}
