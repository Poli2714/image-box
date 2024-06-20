import { SearchForm } from '@/components/forms';

function PageHero() {
  return (
    <main className='flex min-h-[calc(100dvh-73px)] gap-x-[clamp(0.5rem,2dvw,3rem)] sm:gap-x-[clamp(1rem,5dvw,3rem)]'>
      <div
        data-testid='hero-img-1'
        className='w-full bg-[url("/hero-left.png")] bg-right bg-no-repeat'
      ></div>
      <div className='flex min-w-[clamp(21.875rem,80dvw,31.25rem)] flex-col justify-center space-y-4 text-center'>
        <h1 className='text-4xl font-semibold'>Search</h1>
        <p className='text-sm font-light'>
          Search high-resolution images from Unsplash
        </p>
        <SearchForm />
      </div>
      <div
        data-testid='hero-img-2'
        className='w-full bg-[url("/hero-right.png")] bg-left bg-no-repeat'
      ></div>
    </main>
  );
}

export default PageHero;
