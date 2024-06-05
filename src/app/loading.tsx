import { Loader2Icon } from 'lucide-react';

export default function DefaultLoadingPage() {
  return (
    <div className='mt-20 flex items-center justify-center'>
      <Loader2Icon
        strokeWidth={1.5}
        size={64}
        className='animate-spin text-secondary'
      />
    </div>
  );
}
