import { MainSectionLayout } from '@/components/ui';

type CollectionsLayoutProps = {
  children: React.ReactNode;
};

export default function CollectionsLayout({
  children,
}: CollectionsLayoutProps) {
  return (
    <MainSectionLayout className='flex flex-1 flex-col gap-y-6'>
      {children}
    </MainSectionLayout>
  );
}
