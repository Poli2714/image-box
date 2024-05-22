import { BoxIcon } from 'lucide-react';
import Link from 'next/link';

function BrandLogo() {
  return (
    <Link href='/'>
      <div className='flex items-center space-x-2'>
        <BoxIcon data-testid='box-icon' strokeWidth={2.2} />
        <p className='xs:block hidden text-lg font-semibold'>ImageBox</p>
      </div>
    </Link>
  );
}

export default BrandLogo;
