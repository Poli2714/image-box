import { cn } from '@/lib/utils';

type MainSectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function MainSectionLayout({ children, className }: MainSectionLayoutProps) {
  return (
    <main
      className={cn('px-[clamp(1rem,4dvw,3rem)] py-8 2xl:container', className)}
    >
      {children}
    </main>
  );
}

export default MainSectionLayout;
