'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';

function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost'>
          <SunIcon
            className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            data-testid='sun-icon'
            strokeWidth={1.25}
          />
          <MoonIcon
            className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            data-testid='moon-icon'
            strokeWidth={1.25}
          />
          <span className='sr-only' data-testid='toggle'>
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem data-testid='light' onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='dark' onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          data-testid='system'
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
