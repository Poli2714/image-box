import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import {
  AddToCollectionBtn,
  NoCollectionsYet,
  RequestToSignInPopup,
  SearchForCollections,
} from './components';

import { UserCollection } from '@/types/collections';

type AddToCollectionDialogProps = {
  isUserLoggedIn: boolean;
  userCollections: Array<UserCollection>;
};

function AddToCollectionDialog({
  isUserLoggedIn,
  userCollections,
}: AddToCollectionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddToCollectionBtn />
      </DialogTrigger>
      <DialogContent className='space-y-3'>
        {!isUserLoggedIn ? (
          <RequestToSignInPopup />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className='text-xl'>Add to Collections</DialogTitle>
            </DialogHeader>
            {userCollections.length === 0 ? (
              <NoCollectionsYet />
            ) : (
              <SearchForCollections userCollections={userCollections} />
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AddToCollectionDialog;
