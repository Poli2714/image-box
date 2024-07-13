'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui';

type NavItemProps = {
  href: string;
  label: string;
};

function NavItem({ href, label }: NavItemProps) {
  const path = usePathname();

  return (
    <Button asChild variant='ghost'>
      <Link
        className={`${path === href ? 'bg-accent font-medium text-foreground' : null}`}
        href={href}
      >
        {label}
      </Link>
    </Button>
  );
}

export default NavItem;
