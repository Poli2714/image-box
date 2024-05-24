import { SearchHeader } from './components';

type SearchLayout = {
  children: React.ReactNode;
};

function SearchLayout({ children }: SearchLayout) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}

export default SearchLayout;
