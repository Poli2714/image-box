import { SearchPageHeading } from './components';

import { SearchPageParams } from '@/types/searchPage';

type SearchByQueryPageLayoutProps = {
  params: SearchPageParams;
  children: React.ReactNode;
};

export default function SearchByQueryPageLayout({
  params,
  children,
}: SearchByQueryPageLayoutProps) {
  return (
    <>
      <SearchPageHeading slug={params.slug} />
      {children}
    </>
  );
}
