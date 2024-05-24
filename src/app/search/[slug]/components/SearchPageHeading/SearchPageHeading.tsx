import { formatSlug } from '@/lib/formatSlug';

type SearchPageHeadingProps = {
  slug: string;
};

function SearchPageHeading({ slug }: SearchPageHeadingProps) {
  const formattedSlug = formatSlug(slug);

  const heading = `${formattedSlug[0].toUpperCase()}${formattedSlug.slice(1)}`;

  return <h1 className='mb-4 text-3xl'>{heading}</h1>;
}

export default SearchPageHeading;
