type CollectionsLayoutProps = {
  children: React.ReactNode;
};

export default function CollectionsLayout({
  children,
}: CollectionsLayoutProps) {
  return (
    <main className='flex flex-1 flex-col gap-y-6 px-[clamp(1rem,4dvw,3rem)] py-8 2xl:container'>
      {children}
    </main>
  );
}
