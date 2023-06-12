import data from '@/data/data.json';
import Item from './Item';

export default function Projects() {
  return (
    <div className='my-12'>
      <h2 className='mb-4'>Projetos</h2>
      {data.projetos.map((projeto) => (
        <Item
          key={projeto.nome}
          title={projeto.nome}
          description={projeto.descricao}
          link={projeto.link}
        />
      ))}
    </div>
  );
}
