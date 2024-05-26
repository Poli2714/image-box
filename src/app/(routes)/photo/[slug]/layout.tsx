type PhotoSlugLayoutProps = {
  children: React.ReactNode;
};

export default function PhotoSlugLayout({ children }: PhotoSlugLayoutProps) {
  return (
    <main className='px-[clamp(0.5rem,2dvw,2rem)] py-8 2xl:container'>
      {children}
    </main>
  );
}
