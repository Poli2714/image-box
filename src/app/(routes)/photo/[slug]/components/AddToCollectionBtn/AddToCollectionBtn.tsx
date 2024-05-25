import { PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui';

function AddToCollectionBtn() {
  return (
    <Button className='gap-x-2 bg-secondary px-6 font-medium text-foreground'>
      <PlusIcon data-testid='plus-icon' size={16} />
      Add to Collection
    </Button>
  );
}

export default AddToCollectionBtn;
