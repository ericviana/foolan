import Link from 'next/link';

interface ItemProps {
  title: string;
  description: string;
  link: string;
}

export default function Item({ title, description, link }: ItemProps) {
  return (
    <div className=''>
      <Link className='text-sm mb-2 hover:underline dark:text-gray-300' href={link} target='_blank'>
        {title}
      </Link>
      <p className='text-sm text-gray-400 mb-4'>{description}</p>
    </div>
  );
}
