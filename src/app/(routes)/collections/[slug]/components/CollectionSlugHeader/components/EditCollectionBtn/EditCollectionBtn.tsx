'use client';

import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/shadcn';
import { EditCollectionNameForm } from './components';

import { useMediaQuery } from '@/hooks/useMediaQuery';

type EditCollectionBtnProps = {
  collectionId: string;
};

function EditCollectionBtn({ collectionId }: EditCollectionBtnProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className='col-start-2 row-span-2 place-self-center'
            variant='outline'
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className='relative'>
          <DialogHeader>
            <DialogTitle>Edit Collection Name</DialogTitle>
            <DialogDescription>
              Provide a new name for your collection.
            </DialogDescription>
          </DialogHeader>
          <EditCollectionNameForm collectionId={collectionId} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className='col-start-2 row-span-2 place-self-center'
          variant='outline'
        >
          Edit
        </Button>
      </DrawerTrigger>
      <DrawerContent className='px-6'>
        <DrawerHeader className='px-0'>
          <DrawerTitle>Edit Collection Name</DrawerTitle>
          <DrawerDescription>
            Provide a new name for your collection.
          </DrawerDescription>
        </DrawerHeader>
        <EditCollectionNameForm collectionId={collectionId} />
      </DrawerContent>
    </Drawer>
  );
}

export default EditCollectionBtn;
