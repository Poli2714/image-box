import { SearchForm } from '@/components/forms';

export default function SearchPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-20 w-full bg-[url("/gradiend-bg.svg")] bg-cover bg-no-repeat'></div>
      <div className='relative top-[-1.75rem] min-w-[40rem]'>
        <SearchForm />
      </div>
    </div>
  );
}
