import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/server';

import { Button } from '@/components/ui';

function SignInAlert() {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center gap-y-2 px-[clamp(1rem,4dvw,3rem)] text-center'>
      <h1 className='text-xl font-semibold'>
        Please Sign In to View Your Photo Collections
      </h1>
      <p className='text-sm font-light text-secondary-foreground'>
        You need to be signed in to access your photo collections. Click the
        button below to sign in.
      </p>
      <Button asChild className='mt-4'>
        <LoginLink>Sign In</LoginLink>
        Test
      </Button>
    </div>
  );
}

export default SignInAlert;
