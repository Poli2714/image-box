import { cn } from '@/lib/utils';

type SearchPageHeadingProps = {
  className?: string;
  slug: string;
};

function SearchPageHeading({ className, slug }: SearchPageHeadingProps) {
  const heading = `${slug[0].toUpperCase()}${slug.slice(1)}`;

  return <h1 className={cn('mb-4 text-3xl', className)}>{heading}</h1>;
}

export default SearchPageHeading;
