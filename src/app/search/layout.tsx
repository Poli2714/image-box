import { SearchHeader } from './components';

type SearchLayout = {
  children: React.ReactNode;
};

function SearchLayout({ children }: SearchLayout) {
  return (
    <>
      <SearchHeader />
      <main className='px-[clamp(2rem,5dvw,3.5rem)] py-8 2xl:container'>
        {children}
      </main>
    </>
  );
}

export default SearchLayout;
