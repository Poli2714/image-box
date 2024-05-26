import { SearchForm } from '@/components/forms';

function SearchHeader() {
  return (
    <header className='flex flex-col items-center'>
      <div
        data-testid='banner-gradient'
        className='h-20 w-full bg-[url("/gradiend-bg.svg")] bg-cover bg-center bg-no-repeat'
      ></div>
      <div className='relative top-[-1.75rem] min-w-[clamp(21rem,70dvw,40rem)]'>
        <SearchForm />
      </div>
    </header>
  );
}

export default SearchHeader;
