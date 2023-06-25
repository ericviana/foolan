import Link from "next/link";

export default function Footer() {
  return (
    <div className='flex items-center gap-2 mt-4 dark:text-white'>
      <Link href={'https://github.com/ericviana/foolan'} className='text-xs hover:underline'>Deixe uma estrela no Github</Link>
      <div className='relative flex h-3 w-3'>
        <svg
          className='animate-ping absolute inline-flex h-full w-full opacity-75'
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.6338 0.612492C7.79939 0.335537 8.20061 0.335537 8.3662 0.612493L10.5304 4.23216C10.5901 4.33205 10.688 4.40321 10.8015 4.42915L14.9128 5.36885C15.2273 5.44075 15.3513 5.82235 15.1391 6.06542L12.3654 9.2422C12.2888 9.32987 12.2514 9.44501 12.2618 9.56093L12.6385 13.7614C12.6674 14.0828 12.3428 14.3186 12.046 14.1919L8.16757 12.5356C8.06053 12.4899 7.93947 12.4899 7.83243 12.5356L3.954 14.1919C3.65724 14.3186 3.33264 14.0828 3.36147 13.7614L3.73821 9.56093C3.7486 9.44501 3.71119 9.32987 3.63464 9.2422L0.860899 6.06541C0.648669 5.82235 0.772656 5.44075 1.08723 5.36885L5.1985 4.42915C5.31196 4.40321 5.4099 4.33205 5.46963 4.23216L7.6338 0.612492Z'
            fill='#F2C94C'
          />
        </svg>
        <svg
          className='relative inline-flex h-3 w-3'
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.6338 0.612492C7.79939 0.335537 8.20061 0.335537 8.3662 0.612493L10.5304 4.23216C10.5901 4.33205 10.688 4.40321 10.8015 4.42915L14.9128 5.36885C15.2273 5.44075 15.3513 5.82235 15.1391 6.06542L12.3654 9.2422C12.2888 9.32987 12.2514 9.44501 12.2618 9.56093L12.6385 13.7614C12.6674 14.0828 12.3428 14.3186 12.046 14.1919L8.16757 12.5356C8.06053 12.4899 7.93947 12.4899 7.83243 12.5356L3.954 14.1919C3.65724 14.3186 3.33264 14.0828 3.36147 13.7614L3.73821 9.56093C3.7486 9.44501 3.71119 9.32987 3.63464 9.2422L0.860899 6.06541C0.648669 5.82235 0.772656 5.44075 1.08723 5.36885L5.1985 4.42915C5.31196 4.40321 5.4099 4.33205 5.46963 4.23216L7.6338 0.612492Z'
            fill='#F2C94C'
          />
        </svg>
      </div>
    </div>
  );
}