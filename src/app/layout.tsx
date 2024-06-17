import { Be_Vietnam_Pro } from 'next/font/google';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { PageHeader } from './components';
import { ThemeProvider } from '@/components/ui/shadcn';

import '@/styles/globals.css';

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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <PageHeader />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
