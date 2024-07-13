import { BoxIcon } from 'lucide-react';
import Link from 'next/link';

function BrandLogo() {
  return (
    <Link href='/'>
      <div className='flex items-center space-x-2'>
        <BoxIcon strokeWidth={2.2} />
        <p className='hidden text-lg font-semibold xs:block'>ImageBox</p>
      </div>
    </Link>
  );
}

export default BrandLogo;
