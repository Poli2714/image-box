import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import '@/styles/globals.css';
import { PageHeader } from './components';

// import('../mocks').then(({ setupMocks }) => setupMocks());

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '500', '600'],
  subsets: ['latin'],
  fallback: ['system-ui'],
});

export const metadata: Metadata = {
  title: 'ImageBox',
  description: 'Discover and Search Stunning Photos with Ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${beVietnamPro.className} flex min-h-dvh flex-col`}>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
