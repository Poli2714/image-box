import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui';

type DownloadLinkProps = {
  link: string;
};

function DownloadLink({ link }: DownloadLinkProps) {
  return (
    <Button
      asChild
      className='gap-x-2 bg-secondary px-6 font-medium text-foreground hover:bg-secondary/70'
    >
      <Link href={link}>
        <DownloadIcon data-testid='download-icon' size={16} />
        Download
      </Link>
    </Button>
  );
}

export default DownloadLink;
