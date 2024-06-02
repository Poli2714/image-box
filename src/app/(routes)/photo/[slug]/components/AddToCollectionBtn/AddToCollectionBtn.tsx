import {
  LoginLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server';
import { PlusIcon } from 'lucide-react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { SearchCollections } from './components';

import { getUserCollections } from '@/db/handlers';
import { UserCollection } from '@/types/collections';

async function AddToCollectionBtn() {
  let userCollections: Array<UserCollection> = [];

  const { isAuthenticated, getUser } = getKindeServerSession();
  const [isUserLoggedIn, user] = await Promise.all([
    isAuthenticated(),
    getUser(),
  ]);

  if (user) {
    userCollections = await getUserCollections(user.id);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='gap-x-2 bg-secondary px-6 font-medium text-foreground hover:bg-secondary/70'>
          <PlusIcon data-testid='plus-icon' size={16} />
          Add to Collection
        </Button>
      </DialogTrigger>
      <DialogContent className='space-y-3'>
        {!isUserLoggedIn ? (
          <div className='flex w-full flex-1 flex-col items-center justify-center gap-y-2 py-8 text-center'>
            <p className='font-light text-secondary-foreground'>
              Please sign in to add photos to your collections
            </p>

            <Button asChild className='mt-2'>
              <LoginLink>Sign In</LoginLink>
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className='text-xl'>Add to Collections</DialogTitle>
            </DialogHeader>
            <SearchCollections userCollections={userCollections} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AddToCollectionBtn;
