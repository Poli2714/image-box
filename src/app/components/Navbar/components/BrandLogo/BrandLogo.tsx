import { BoxIcon } from 'lucide-react';

function BrandLogo() {
  return (
    <div className='flex items-center space-x-2'>
      <BoxIcon data-testid='box-icon' strokeWidth={2.2} />
      <p className='text-lg font-semibold'>ImageBox</p>
    </div>
  );
}

export default BrandLogo;
