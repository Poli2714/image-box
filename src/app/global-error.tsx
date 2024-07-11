'use client';

import { Be_Vietnam_Pro } from 'next/font/google';
import { CircleAlertIcon } from 'lucide-react';

import { ReturnHome } from '@/components/ui';
import { ThemeProvider } from '@/components/ui/shadcn';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '500', '600'],
  subsets: ['latin'],
  fallback: ['system-ui'],
});

export default function GlobalError() {
  return (
    <html lang='en'>
      <body
        className={`${beVietnamPro.className} p flex h-dvh flex-col items-center justify-center px-8`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col items-center space-y-4'>
            <CircleAlertIcon className='mb-4 text-secondary' size={150} />
            <p className='text-center font-light'>
              Unfortunately, there are no photos with the requested keyword
            </p>
            <ReturnHome />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
