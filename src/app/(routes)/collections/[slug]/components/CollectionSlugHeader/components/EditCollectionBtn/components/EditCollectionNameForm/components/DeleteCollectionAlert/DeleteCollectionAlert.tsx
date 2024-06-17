'use client';

import { Loader2Icon } from 'lucide-react';
import { useTransition } from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/shadcn';
import { Button } from '@/components/ui';

import { deleteCollection } from '@/actions/deleteCollection';

type DeleteCollectionAlertProps = {
  collectionId: string;
};

function DeleteCollectionAlert({ collectionId }: DeleteCollectionAlertProps) {
  const [isPending, startTransition] = useTransition();
  const deleteAction = () => {
    startTransition(async () => await deleteCollection(collectionId));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className='absolute bottom-6 left-6'
          type='submit'
          variant='destructive'
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this photo collection? This action
            cannot be undone and all photos within this collection will be
            permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button disabled={isPending} onClick={deleteAction}>
            {isPending ? (
              <Loader2Icon className='mr-2 animate-spin' strokeWidth={1.5} />
            ) : null}
            Confirm
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteCollectionAlert;
