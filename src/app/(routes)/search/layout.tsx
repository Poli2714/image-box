import { SearchHeader } from './components';

type SearchLayout = {
  children: React.ReactNode;
};

function SearchLayout({ children }: SearchLayout) {
  return (
    <>
      <SearchHeader />
      <main className='px-[clamp(1rem,4dvw,3rem)] py-8 2xl:container'>
        {children}
      </main>
    </>
  );
}

export default SearchLayout;
