import data from '@/data/data.json';

export default function Sobre() {
  return (
    <div className='my-12'>
      <h2 className='mb-4'>Sobre mim</h2>
      <p className='text-sm text-gray-400'>{data.sobre}</p>
    </div>
  );
}
