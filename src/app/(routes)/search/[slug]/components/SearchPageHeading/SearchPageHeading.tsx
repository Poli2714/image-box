type SearchPageHeadingProps = {
  slug: string;
};

function SearchPageHeading({ slug }: SearchPageHeadingProps) {
  const heading = `${slug[0].toUpperCase()}${slug.slice(1)}`;

  return <h1 className='mb-4 text-3xl'>{heading}</h1>;
}

export default SearchPageHeading;
