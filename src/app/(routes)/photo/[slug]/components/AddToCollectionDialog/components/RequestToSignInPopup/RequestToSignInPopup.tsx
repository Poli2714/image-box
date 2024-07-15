import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/server';

import { Button } from '@/components/ui';

function RequestToSignInPopup() {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center gap-y-2 py-8 text-center'>
      <p className='font-light text-secondary-foreground'>
        Please sign in to add photos to your collections.
      </p>

      <Button asChild className='mt-2'>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </div>
  );
}

export default RequestToSignInPopup;
